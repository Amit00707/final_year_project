"""
AI Routes — /summary /quiz /flashcards /ask
==============================================
"""

from fastapi import APIRouter, Depends

from app.core.dependencies import get_current_user
from app.database.models.user import User
from app.schemas.ai import AskRequest, SummaryRequest, SummaryResponse, QuizResponse, FlashcardResponse, DoubtResponse

router = APIRouter()


@router.post("/summary", response_model=SummaryResponse)
async def generate_summary(payload: SummaryRequest, user: User = Depends(get_current_user)):
    """Generate an AI summary of the current page."""
    # TODO: Call ai_engine.py service for real LLM generation
    return SummaryResponse(
        summary="This page discusses the fundamental reforms that transformed Roman military structure.",
        key_points=["Marian Reforms", "Landless citizen enrollment", "Shift in military loyalty"],
        page_number=payload.page_number,
    )


@router.post("/quiz", response_model=QuizResponse)
async def generate_quiz(payload: SummaryRequest, user: User = Depends(get_current_user)):
    """Generate AI-powered quiz questions from a page."""
    # TODO: Call ai_engine.py service
    return QuizResponse(book_id=payload.book_id, questions=[])


@router.post("/flashcards", response_model=FlashcardResponse)
async def generate_flashcards(payload: SummaryRequest, user: User = Depends(get_current_user)):
    """Generate spaced-repetition flashcards from a page."""
    # TODO: Call ai_engine.py service
    return FlashcardResponse(book_id=payload.book_id, flashcards=[])


@router.post("/ask", response_model=DoubtResponse)
async def ask_doubt(payload: AskRequest, user: User = Depends(get_current_user)):
    """Context-aware question answering via the Doubt Solver."""
    # TODO: Call vector_store.py for RAG-based answer retrieval
    return DoubtResponse(
        answer="The Marian Reforms allowed landless citizens to join the army, fundamentally shifting loyalty from the Senate to individual generals.",
        source_page=payload.page_number,
        confidence=0.92,
    )
