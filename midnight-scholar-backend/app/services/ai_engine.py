"""
AI Engine Service — LangChain + OpenAI Integration
=====================================================
Handles LLM calls for summary, quiz, and flashcard generation.
"""

from langchain_openai import ChatOpenAI
from langchain.prompts import ChatPromptTemplate
from typing import List, Dict

from app.core.config import settings

llm = ChatOpenAI(model="gpt-4o-mini", api_key=settings.OPENAI_API_KEY, temperature=0.3)


async def generate_summary(page_text: str) -> Dict:
    """Generate a concise summary of a page's content."""
    prompt = ChatPromptTemplate.from_messages([
        ("system", "You are an expert academic tutor. Summarize the following text into a clear, concise paragraph and extract 3-5 key points."),
        ("human", "{text}"),
    ])
    chain = prompt | llm
    response = await chain.ainvoke({"text": page_text})
    return {"summary": response.content, "key_points": []}


async def generate_quiz(page_text: str, num_questions: int = 3) -> List[Dict]:
    """Generate multiple-choice quiz questions from page content."""
    prompt = ChatPromptTemplate.from_messages([
        ("system", f"Generate {num_questions} multiple-choice quiz questions from this text. Return JSON array with 'question', 'options' (4 choices), and 'correct_answer' (0-indexed)."),
        ("human", "{text}"),
    ])
    chain = prompt | llm
    response = await chain.ainvoke({"text": page_text})
    return []  # TODO: Parse LLM JSON response


async def generate_flashcards(page_text: str) -> List[Dict]:
    """Generate spaced-repetition flashcards from page content."""
    prompt = ChatPromptTemplate.from_messages([
        ("system", "Extract key concepts from this text and create flashcards. Return JSON array with 'front' (question) and 'back' (answer)."),
        ("human", "{text}"),
    ])
    chain = prompt | llm
    response = await chain.ainvoke({"text": page_text})
    return []  # TODO: Parse LLM JSON response
