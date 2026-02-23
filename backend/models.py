from sqlalchemy import Column, Integer, String, DateTime
from sqlalchemy.sql import func
from database import Base

class ChatMessage(Base):
    __tablename__ = "chat_messages"

    id = Column(Integer, primary_key=True, index=True)
    role = Column(String, index=True)  # 'user' or 'assistant'
    content = Column(String)
    timestamp = Column(DateTime(timezone=True), server_default=func.now())
