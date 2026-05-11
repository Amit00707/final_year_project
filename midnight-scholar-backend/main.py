"""
Midnight Scholar — FastAPI Entry Point
======================================
Boots the API server, registers all route modules, and enables CORS.
"""

from fastapi import FastAPI

from app.core.config import settings

# Route Imports
from app.api.routes_auth import router as auth_router
from app.api.routes_ai import router as ai_router
from app.api.routes_books import router as books_router
from app.api.routes_reader import router as reader_router
from app.api.routes_social import router as social_router
from app.api.routes_gamification import router as gamification_router
from app.api.routes_admin import router as admin_router
from app.api.routes_teacher import router as teacher_router
from app.api.routes_notifications import router as notifications_router
from app.api.routes_subscription import router as subscription_router


from contextlib import asynccontextmanager
import logging

logger = logging.getLogger(__name__)


def run_migrations():
    """Run alembic migrations automatically on startup — no shell needed."""
    try:
        from alembic.config import Config
        from alembic import command
        alembic_cfg = Config("alembic.ini")
        command.upgrade(alembic_cfg, "head")
        logger.info("✅ Database migrations applied successfully.")
    except Exception as e:
        logger.warning(f"⚠️ Migration warning (non-fatal): {e}")


@asynccontextmanager
async def lifespan(app: FastAPI):
    """Startup: run DB migrations. Shutdown: cleanup."""
    run_migrations()
    yield


app = FastAPI(
    title=settings.APP_NAME,
    description="AI-Powered E-Book Library Backend",
    version="1.0.0",
    lifespan=lifespan,
)

# CORS — Custom middleware to handle wildcard Vercel origins
from starlette.middleware.base import BaseHTTPMiddleware
from starlette.requests import Request as StarletteRequest
from starlette.responses import Response as StarletteResponse
import re

class CORSMiddleware(BaseHTTPMiddleware):
    """Handle CORS with support for Vercel wildcard subdomains."""
    
    def __init__(self, app):
        super().__init__(app)
        # Define allowed origin patterns
        self.allowed_patterns = [
            r"^http://localhost:\d+$",  # localhost:* 
            r"^http://127\.0\.0\.1:\d+$",  # 127.0.0.1:*
            r"^https://[a-zA-Z0-9\-]+\.vercel\.app$",  # *.vercel.app
        ]
        # Exact allowed origins from env
        self.exact_origins = [o.strip() for o in settings.CORS_ORIGINS.split(",") if o.strip()]
    
    def is_origin_allowed(self, origin: str) -> bool:
        """Check if origin matches allowed patterns or exact list."""
        if not origin:
            return False
        
        # Check exact matches first
        if origin in self.exact_origins:
            return True
        
        # Check pattern matches
        for pattern in self.allowed_patterns:
            if re.match(pattern, origin):
                return True
        
        return False
    
    async def dispatch(self, request: StarletteRequest, call_next):
        origin = request.headers.get("origin", "")
        is_allowed = self.is_origin_allowed(origin)
        
        # Handle preflight requests
        if request.method == "OPTIONS":
            response = StarletteResponse(status_code=200)
            if is_allowed:
                response.headers["Access-Control-Allow-Origin"] = origin
                response.headers["Access-Control-Allow-Credentials"] = "true"
                response.headers["Access-Control-Allow-Methods"] = "GET, POST, PUT, DELETE, OPTIONS, PATCH"
                response.headers["Access-Control-Allow-Headers"] = "Content-Type, Authorization, X-Requested-With, Accept"
                response.headers["Access-Control-Max-Age"] = "86400"
            return response
        
        # Handle actual requests
        response = await call_next(request)
        if is_allowed:
            response.headers["Access-Control-Allow-Origin"] = origin
            response.headers["Access-Control-Allow-Credentials"] = "true"
            response.headers["Access-Control-Expose-Headers"] = "*"
        
        return response

app.add_middleware(CORSMiddleware)

# Register all route modules
app.include_router(auth_router, prefix="/api", tags=["Auth"])
app.include_router(ai_router, prefix="/api", tags=["AI Engine"])
app.include_router(books_router, prefix="/api", tags=["Books"])
app.include_router(reader_router, prefix="/api", tags=["Reader"])
app.include_router(social_router, prefix="/api", tags=["Social"])
app.include_router(gamification_router, prefix="/api", tags=["Gamification"])
app.include_router(admin_router, prefix="/api", tags=["Admin"])
app.include_router(teacher_router, prefix="/api", tags=["Teacher"])
app.include_router(notifications_router, prefix="/api", tags=["Notifications"])
app.include_router(subscription_router, prefix="/api", tags=["Subscription"])


@app.get("/")
async def root():
    return {"status": "online", "service": "Midnight Scholar API", "version": "1.0.0"}
