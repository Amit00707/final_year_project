# Midnight Scholar — Open Library API Integration Guide
# Complete flow: Frontend → FastAPI → Open Library → Back

## FILES YOU GET (copy to correct paths)

### Backend (FastAPI)
open_library_service.py  →  midnight-scholar-backend/app/services/open_library_service.py
routes_books.py          →  midnight-scholar-backend/app/api/routes_books.py
schemas_book.py          →  midnight-scholar-backend/app/schemas/book.py

### Frontend (Next.js)
books_api_client.ts      →  src/lib/api/books.ts
useBooks_hooks.ts        →  src/lib/hooks/useBooks.ts

---

## INSTALL THESE PACKAGES

### Backend (add to requirements.txt)
httpx==0.27.0            # Async HTTP client to call Open Library

### Frontend (run in Next.js folder)
npm install @tanstack/react-query

---

## REGISTER ROUTES IN main.py

```python
# midnight-scholar-backend/main.py
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from app.api import routes_books  # ADD THIS

app = FastAPI(title="Midnight Scholar API")

# CORS — allow Next.js frontend to call the API
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Register all routers
app.include_router(routes_books.router)  # ADD THIS
```

---

## SET UP REACT QUERY IN NEXT.JS

```tsx
// src/app/layout.tsx
"use client"
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import { useState } from "react"

export default function RootLayout({ children }) {
  const [queryClient] = useState(() => new QueryClient())
  return (
    <html>
      <body>
        <QueryClientProvider client={queryClient}>
          {children}
        </QueryClientProvider>
      </body>
    </html>
  )
}
```

---

## HOW TO USE IN EACH PAGE

### Dashboard — Popular Books Row
```tsx
// src/components/dashboard/PopularBooksRow.tsx
import { useTrendingBooks } from "@/lib/hooks/useBooks"
import BookCard from "@/components/books/BookCard"

export default function PopularBooksRow() {
  const { data, isLoading, isError } = useTrendingBooks(12)

  if (isLoading) return <BookCardSkeleton count={6} />
  if (isError)   return <EmptyState message="Could not load books" />

  return (
    <div className="flex gap-4 overflow-x-auto">
      {data?.results.map(book => (
        <BookCard key={book.id} book={book} />
      ))}
    </div>
  )
}
```

### Dashboard — AI Recommended Row
```tsx
// src/components/dashboard/AIRecommendedRow.tsx
import { useRecommendations } from "@/lib/hooks/useBooks"

export default function AIRecommendedRow() {
  // Get user interests from Zustand store (set during onboarding)
  const interests = useAuthStore(s => s.user?.interests) ?? ["fiction"]
  const { data, isLoading } = useRecommendations(interests)

  if (isLoading) return <BookCardSkeleton count={4} />

  return (
    <div className="flex gap-4 overflow-x-auto">
      {data?.results.map(book => (
        <BookCard key={book.id} book={book} badge="AI Pick" />
      ))}
    </div>
  )
}
```

### Book Listing Page with Filters
```tsx
// src/app/(main)/books/page.tsx
"use client"
import { useState } from "react"
import { useCategoryBooks, useBookSearch } from "@/lib/hooks/useBooks"

export default function BookListingPage() {
  const [search,   setSearch]   = useState("")
  const [category, setCategory] = useState("fiction")

  const searchResult   = useBookSearch(search, 20, 1, search.length > 0)
  const categoryResult = useCategoryBooks(category, 20, search.length === 0)

  const books = search.length > 0
    ? searchResult.data?.results
    : categoryResult.data?.results

  return (
    <div>
      <input
        value={search}
        onChange={e => setSearch(e.target.value)}
        placeholder="Search books..."
      />
      {/* Category pills */}
      {["fiction","science","technology","history"].map(cat => (
        <button key={cat} onClick={() => setCategory(cat)}>
          {cat}
        </button>
      ))}
      {/* Book grid */}
      <div className="grid grid-cols-4 gap-6">
        {books?.map(book => <BookCard key={book.id} book={book} />)}
      </div>
    </div>
  )
}
```

### Book Details Page
```tsx
// src/app/(main)/books/[id]/page.tsx
import { useBookDetail } from "@/lib/hooks/useBooks"

export default function BookDetailPage({ params }: { params: { id: string }}) {
  const { data: book, isLoading } = useBookDetail(params.id)

  if (isLoading) return <BookDetailSkeleton />

  return (
    <div className="grid grid-cols-2 gap-12">
      {/* Left: Cover */}
      <img src={book?.cover_url} alt={book?.title} className="rounded-xl" />

      {/* Right: Details */}
      <div>
        <h1>{book?.title}</h1>
        <p>{book?.author}</p>
        <p>{book?.difficulty} · {book?.reading_hours}h read</p>
        <p>{book?.description}</p>
        <button>Read Now</button>
      </div>
    </div>
  )
}
```

### Smart Search Page
```tsx
// src/app/(main)/search/page.tsx
"use client"
import { useState } from "react"
import { useBookSearch }  from "@/lib/hooks/useBooks"

export default function SearchPage() {
  const [query, setQuery] = useState("")
  const { data, isLoading } = useBookSearch(query)

  return (
    <div>
      <input
        value={query}
        onChange={e => setQuery(e.target.value)}
        placeholder="Search books, authors..."
        autoFocus
      />
      {isLoading && <p>Searching...</p>}
      {data?.results.map(book => (
        <div key={book.id}>
          <img src={book.cover_url} width={60} />
          <div>
            <strong>{book.title}</strong>
            <p>{book.author}</p>
            <span>{book.category}</span>
          </div>
        </div>
      ))}
    </div>
  )
}
```

### Onboarding Step 3 — First Book
```tsx
// src/app/(onboarding)/onboarding/first-book/page.tsx
import { useRecommendations } from "@/lib/hooks/useBooks"

export default function FirstBookStep() {
  // Interests selected in Step 1 (saved in Zustand)
  const interests = useOnboardingStore(s => s.selectedInterests)
  const { data, isLoading } = useRecommendations(interests, true)

  return (
    <div>
      <h1>Start With Your First Book</h1>
      <p>Personalized based on your interests</p>

      {isLoading && <BookCardSkeleton count={6} />}

      <div className="grid grid-cols-3 gap-6">
        {data?.results.map(book => (
          <BookCard
            key={book.id}
            book={book}
            showBadge={book.recommended_because}
          />
        ))}
      </div>
    </div>
  )
}
```

---

## API ENDPOINTS SUMMARY

| Endpoint | Method | Used By |
|---|---|---|
| /api/books/search?q=... | GET | Search page, Navbar |
| /api/books/category/{cat} | GET | Dashboard rows, Book listing |
| /api/books/trending | GET | Dashboard Popular, Landing |
| /api/books/by-author?name=... | GET | Author profile |
| /api/books/recommendations | POST | Onboarding Step 3, AI row |
| /api/books/{ol_id} | GET | Book Details page |

---

## TEST YOUR API (after starting FastAPI with uvicorn main:app --reload)

Open browser and paste these URLs:

Search:    http://localhost:8000/api/books/search?q=harry+potter
Category:  http://localhost:8000/api/books/category/science
Trending:  http://localhost:8000/api/books/trending
Detail:    http://localhost:8000/api/books/OL82563W
Docs:      http://localhost:8000/docs   ← Full Swagger UI auto-generated

---

## COMPLETE DATA FLOW

User types "atomic habits" in Navbar search
  ↓
Navbar.tsx calls useBookSearch("atomic habits")
  ↓
useBookSearch calls searchBooks() from src/lib/api/books.ts
  ↓
books.ts sends GET http://localhost:8000/api/books/search?q=atomic+habits
  ↓
FastAPI routes_books.py receives the request
  ↓
Calls open_library_service.search_books()
  ↓
Service calls https://openlibrary.org/search.json?q=atomic+habits
  ↓
Open Library returns raw JSON (free, no key needed)
  ↓
parse_books() cleans and formats the data
  ↓
FastAPI returns clean JSON to Next.js
  ↓
React Query caches the result for 5 minutes
  ↓
BookCard components render with real covers + data
  ↓
User sees real book results instantly
