import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageSquare, X, Send, Bot, Loader2 } from 'lucide-react';
import axios from 'axios';

interface Message {
    id: string;
    role: 'user' | 'assistant';
    content: string;
}

const Chatbot = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [messages, setMessages] = useState<Message[]>([
        { id: '1', role: 'assistant', content: "Hi! I'm Bhuvan's AI Assistant. Ask me anything about his experience, skills, or projects!" }
    ]);
    const [input, setInput] = useState('');
    const [isTyping, setIsTyping] = useState(false);
    const messagesEndRef = useRef<HTMLDivElement>(null);

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    }

    useEffect(() => {
        scrollToBottom();
    }, [messages, isTyping]);

    const handleSend = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!input.trim() || isTyping) return;

        const userMsg = input;
        setInput('');
        setMessages(prev => [...prev, { id: Date.now().toString(), role: 'user', content: userMsg }]);
        setIsTyping(true);

        try {
            // In production/local deployment, this will hit our FastAPI backend
            const res = await axios.post('http://localhost:8000/api/chat', { message: userMsg });

            setMessages(prev => [...prev, {
                id: (Date.now() + 1).toString(),
                role: 'assistant',
                content: res.data.response
            }]);
        } catch (error) {
            console.error(error);
            setMessages(prev => [...prev, {
                id: (Date.now() + 1).toString(),
                role: 'assistant',
                content: "I'm sorry, I'm having trouble connecting to my brain (the backend server). Please try again later!"
            }]);
        } finally {
            setIsTyping(false);
        }
    };

    return (
        <>
            <motion.button
                className="glass-panel"
                style={{
                    position: 'fixed', bottom: '2rem', right: '2rem', zIndex: 50,
                    width: '60px', height: '60px', borderRadius: '50%',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    cursor: 'pointer', border: '1px solid var(--accent-primary)',
                    color: 'var(--accent-primary)', background: 'var(--bg-secondary)'
                }}
                whileHover={{ scale: 1.1, boxShadow: '0 0 20px rgba(102, 252, 241, 0.4)' }}
                whileTap={{ scale: 0.9 }}
                onClick={() => setIsOpen(true)}
            >
                <MessageSquare size={24} />
            </motion.button>

            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: 50, scale: 0.9 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 50, scale: 0.9 }}
                        style={{
                            position: 'fixed', bottom: '6rem', right: '2rem', zIndex: 100,
                            width: '350px', height: '500px', display: 'flex', flexDirection: 'column',
                            overflow: 'hidden', padding: 0
                        }}
                        className="glass-panel"
                    >
                        {/* Header */}
                        <div style={{
                            padding: '1rem', borderBottom: '1px solid var(--glass-border)',
                            display: 'flex', justifyContent: 'space-between', alignItems: 'center',
                            background: 'rgba(31, 40, 51, 0.8)'
                        }}>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                                <Bot size={20} color="var(--accent-primary)" />
                                <h3 style={{ fontSize: '1rem', margin: 0 }}>AI Assistant</h3>
                            </div>
                            <button
                                onClick={() => setIsOpen(false)}
                                style={{ background: 'transparent', border: 'none', color: 'var(--text-secondary)', cursor: 'pointer' }}
                            >
                                <X size={20} />
                            </button>
                        </div>

                        {/* Chat Area */}
                        <div style={{ flex: 1, overflowY: 'auto', padding: '1rem', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                            {messages.map((m) => (
                                <div key={m.id} style={{
                                    display: 'flex', gap: '0.5rem',
                                    alignSelf: m.role === 'user' ? 'flex-end' : 'flex-start',
                                    maxWidth: '85%'
                                }}>
                                    {m.role === 'assistant' && (
                                        <div style={{ width: '28px', height: '28px', borderRadius: '50%', background: 'var(--bg-secondary)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                                            <Bot size={16} color="var(--accent-primary)" />
                                        </div>
                                    )}
                                    <div style={{
                                        padding: '0.75rem 1rem', borderRadius: '12px',
                                        background: m.role === 'user' ? 'var(--accent-primary)' : 'rgba(255, 255, 255, 0.05)',
                                        color: m.role === 'user' ? 'var(--bg-color)' : 'var(--text-primary)',
                                        fontSize: '0.9rem', borderTopRightRadius: m.role === 'user' ? 0 : '12px',
                                        borderTopLeftRadius: m.role === 'assistant' ? 0 : '12px'
                                    }}>
                                        {m.content}
                                    </div>
                                </div>
                            ))}

                            {isTyping && (
                                <div style={{ display: 'flex', gap: '0.5rem', alignSelf: 'flex-start' }}>
                                    <div style={{ width: '28px', height: '28px', borderRadius: '50%', background: 'var(--bg-secondary)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                        <Bot size={16} color="var(--accent-primary)" />
                                    </div>
                                    <div style={{ padding: '0.75rem 1rem', borderRadius: '12px', background: 'rgba(255, 255, 255, 0.05)', display: 'flex', alignItems: 'center' }}>
                                        <Loader2 size={16} className="lucide-spin" style={{ animation: 'spin 2s linear infinite' }} />
                                    </div>
                                </div>
                            )}
                            <div ref={messagesEndRef} />
                        </div>

                        {/* Input Area */}
                        <form onSubmit={handleSend} style={{
                            padding: '1rem', borderTop: '1px solid var(--glass-border)',
                            display: 'flex', gap: '0.5rem', background: 'rgba(31, 40, 51, 0.8)'
                        }}>
                            <input
                                type="text"
                                value={input}
                                onChange={(e) => setInput(e.target.value)}
                                placeholder="Ask a question..."
                                style={{
                                    flex: 1, padding: '0.5rem 1rem', borderRadius: '20px',
                                    background: 'rgba(255,255,255,0.05)', border: '1px solid var(--glass-border)',
                                    color: 'white', outline: 'none'
                                }}
                            />
                            <button type="submit" disabled={isTyping} style={{
                                background: 'var(--accent-primary)', border: 'none', borderRadius: '50%',
                                width: '36px', height: '36px', display: 'flex', alignItems: 'center', justifyContent: 'center',
                                cursor: 'pointer', color: 'var(--bg-color)'
                            }}>
                                <Send size={16} />
                            </button>
                        </form>

                        <style>{`
              @keyframes spin { 100% { transform: rotate(360deg); } }
            `}</style>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
};

export default Chatbot;
