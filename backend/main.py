from fastapi import FastAPI, HTTPException, Depends
from fastapi.middleware.cors import CORSMiddleware
from sqlalchemy.orm import Session
from pydantic import BaseModel
import httpx
import os
import models, database
from groq import Groq
from dotenv import load_dotenv

load_dotenv()
models.Base.metadata.create_all(bind=database.engine)

groq_client = Groq(api_key=os.environ.get("GROQ_API_KEY", "replace-with-api-key"))

resume_context = """
You are Bhuvan's personal AI Assistant. Your job is to answer questions about his portfolio, skills, and experience enthusiastically and concisely.

Bhuvan's Resume Information:
- Education: B.Tech (Pursuing) in Computer Science & Engineering (2023 - 2027) from Malla Reddy College Of Engineering, Secunderabad. CGPA: 8.0/10.
- Experience 1: Tech Lead Intern at Swecha Viswam AI (May 2025 - July 2025). Led LLM-based AI projects using Hugging Face, PyTorch, and LangChain. Mentored 10+ interns.
- Experience 2: Web & App Development Intern at Yar Tech Services (Sep 2024 - Feb 2025).
- Skills: HTML/CSS, JavaScript/React, Python (Django/FastAPI), App Development, Game Development, Blockchain (Solidity), Database (SQL/NoSQL), Kubernetes & DevOps.
- Awards: Guinness World Record for Agentathon Hackathon (Dec 21, 2025). Winner of IIT Hyderabad AISEC Hackathon. Runner Up at Microsoft Hack-n-Win Hackathon (Project: CareerSpark).
- Projects: CareerSpark (AI-Career Guidance platform), Annadhanam (Food donation), Foru.ms (Next.js community platform).
- Contact: Phone: 8309289388 | Email: bhuvanamd17@gmail.com | Location: Hyderabad, Telangana.

Rules for responding:
1. Be polite, professional, and enthusiastic.
2. Only use the provided resume information. Do not hallucinate capabilities or experiences.
3. Keep responses relatively concise.
"""

app = FastAPI(title="Portfolio AI Chat API")

# Configure CORS for the frontend
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"], # In production, restrict this
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


class ChatRequest(BaseModel):
    message: str


@app.get("/")
def read_root():
    return {"status": "ok", "message": "Portfolio AI Chat API is running"}


@app.post("/api/chat")
async def chat_endpoint(request: ChatRequest, db: Session = Depends(database.get_db)):
    # Placeholder for actual Groq API implementation.
    # Record the incoming message
    user_msg = models.ChatMessage(role="user", content=request.message)
    db.add(user_msg)
    db.commit()
    
    # Retrieve recent chat history to provide conversation context
    recent_messages = db.query(models.ChatMessage).order_by(models.ChatMessage.timestamp.desc()).limit(6).all()
    # Reverse to chronological order
    recent_messages.reverse()
    
    messages = [{"role": "system", "content": resume_context}]
    for msg in recent_messages:
        messages.append({"role": msg.role, "content": msg.content})

    try:
        completion = groq_client.chat.completions.create(
            model="llama-3.1-8b-instant",
            messages=messages,
            temperature=0.7,
            max_tokens=300,
        )
        ai_response = completion.choices[0].message.content
    except Exception as e:
        print("Groq Error:", e)
        ai_response = "I am currently unable to reach my AI engine to respond."
    
    # Record the AI response
    bot_msg = models.ChatMessage(role="assistant", content=ai_response)
    db.add(bot_msg)
    db.commit()
    
    return {"response": ai_response}
