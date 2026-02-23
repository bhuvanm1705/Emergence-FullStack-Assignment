# Portfolio with AI Chat Assistant

This project was built to meet the following full-stack requirements:
- **Frontend**: React with TypeScript (powered by Vite, Framer Motion, and vanilla CSS glassmorphism)
- **Backend**: Python (powered by FastAPI)
- **Database**: SQLite (managed by SQLAlchemy)
- **Chat Engine**: Groq API (serving Meta's Llama-3 model)

## Setup Instructions

### 1. Backend Setup
1. Open a terminal and navigate to the `backend` directory.
2. Activate the virtual environment (if not already activated):
   - Windows: `.\venv\Scripts\activate`
   - Linux/Mac: `source venv/bin/activate`
3. Add your Groq API Key to `backend/.env`:
   ```env
   GROQ_API_KEY=your_actual_api_key_here
   ```
4. Run the FastAPI server:
   ```bash
   uvicorn main:app --reload
   ```
   *The backend will now be running on http://localhost:8000*

### 2. Frontend Setup
1. Open a second terminal and navigate to the `frontend` directory.
2. Run the development server:
   ```bash
   npm run dev
   ```
   *The frontend will now be running on http://localhost:5173*

## AI Chat Functionality
The AI Chat widget is available in the bottom right corner of the application. It uses FastAPI to maintain conversation context (last 6 messages) stored in a local SQLite database, and injects your resume context directly as a system prompt to the intelligent Groq API (Llama 3).

### Example Questions You Can Ask
The AI is trained on Bhuvan's resume. Try asking it questions like:
- **Experience:** "What did you do during your Tech Lead Internship?" or "Tell me about your role at Yar Tech Services."
- **Skills:** "What programming languages do you know?" or "Do you have experience with DevOps?"
- **Education:** "Where are you studying?" or "What is your current CGPA?"
- **Achievements:** "Have you won any hackathons?" or "What is your Guinness World Record for?"
- **Projects:** "Tell me about CareerSpark" or "What is Foru.ms?"
- **Contact:** "How can I get in touch with you?" or "Where are you based?"
