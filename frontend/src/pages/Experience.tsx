import { motion } from 'framer-motion';
import { Briefcase, Code, Award } from 'lucide-react';

const Experience = () => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            style={{
                minHeight: '80vh',
                padding: '2rem 1rem',
                maxWidth: '800px',
                margin: '0 auto',
            }}
        >
            <h2 style={{
                textAlign: 'center',
                fontSize: '3rem',
                fontWeight: 800,
                background: 'linear-gradient(45deg, #fff, #a78bfa)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                marginBottom: '3rem'
            }}>
                My Experience & Skills
            </h2>

            {/* Experience Section */}
            <div style={{ marginBottom: '4rem' }}>
                <h3 style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1.5rem', fontSize: '1.5rem', color: '#fff' }}>
                    <Briefcase size={24} color="#8b5cf6" />
                    Work Experience
                </h3>

                <div style={{
                    background: 'rgba(255,255,255,0.03)',
                    border: '1px solid rgba(255,255,255,0.05)',
                    borderRadius: '16px',
                    padding: '2rem',
                    marginBottom: '1.5rem',
                    backdropFilter: 'blur(10px)'
                }}>
                    <h4 style={{ color: '#fff', fontSize: '1.25rem', marginBottom: '0.5rem' }}>Tech Lead Intern</h4>
                    <p style={{ color: '#8b5cf6', fontWeight: 600, marginBottom: '1rem' }}>Swecha Viswam AI | May 2025 - July 2025</p>
                    <ul style={{ color: 'rgba(255,255,255,0.7)', paddingLeft: '1.5rem', margin: 0 }}>
                        <li>Led LLM-based AI projects utilizing Hugging Face, PyTorch, and LangChain frameworks.</li>
                        <li>Mentored a team of 10+ interns, guiding technical implementation and project architecture.</li>
                    </ul>
                </div>

                <div style={{
                    background: 'rgba(255,255,255,0.03)',
                    border: '1px solid rgba(255,255,255,0.05)',
                    borderRadius: '16px',
                    padding: '2rem',
                    backdropFilter: 'blur(10px)'
                }}>
                    <h4 style={{ color: '#fff', fontSize: '1.25rem', marginBottom: '0.5rem' }}>Web & App Development Intern</h4>
                    <p style={{ color: '#8b5cf6', fontWeight: 600, marginBottom: '1rem' }}>Yar Tech Services | Sep 2024 - Feb 2025</p>
                    <ul style={{ color: 'rgba(255,255,255,0.7)', paddingLeft: '1.5rem', margin: 0 }}>
                        <li>Developed and maintained responsive web applications and mobile experiences.</li>
                        <li>Collaborated with cross-functional teams to deliver high-quality software solutions.</li>
                    </ul>
                </div>
            </div>

            {/* Skills Section */}
            <div style={{ marginBottom: '4rem' }}>
                <h3 style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1.5rem', fontSize: '1.5rem', color: '#fff' }}>
                    <Code size={24} color="#3b82f6" />
                    Technical Skills
                </h3>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                    {['HTML/CSS', 'JavaScript/React', 'Python (Django/FastAPI)', 'App Development', 'Game Development', 'Blockchain (Solidity)', 'SQL/NoSQL', 'Kubernetes & DevOps'].map(skill => (
                        <span key={skill} style={{
                            background: 'rgba(59, 130, 246, 0.1)',
                            border: '1px solid rgba(59, 130, 246, 0.2)',
                            color: '#93c5fd',
                            padding: '0.5rem 1rem',
                            borderRadius: '99px',
                            fontSize: '0.9rem'
                        }}>
                            {skill}
                        </span>
                    ))}
                </div>
            </div>

            {/* Awards Section */}
            <div>
                <h3 style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1.5rem', fontSize: '1.5rem', color: '#fff' }}>
                    <Award size={24} color="#f59e0b" />
                    Awards & Achievements
                </h3>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                    <div style={{ background: 'rgba(255,255,255,0.02)', padding: '1rem 1.5rem', borderRadius: '12px', borderLeft: '4px solid #f59e0b' }}>
                        <p style={{ color: '#fff', margin: 0 }}><strong>Guinness World Record</strong> - Agentathon Hackathon (Dec 21, 2025)</p>
                    </div>
                    <div style={{ background: 'rgba(255,255,255,0.02)', padding: '1rem 1.5rem', borderRadius: '12px', borderLeft: '4px solid #f59e0b' }}>
                        <p style={{ color: '#fff', margin: 0 }}><strong>Winner</strong> - IIT Hyderabad AISEC Hackathon</p>
                    </div>
                    <div style={{ background: 'rgba(255,255,255,0.02)', padding: '1rem 1.5rem', borderRadius: '12px', borderLeft: '4px solid #f59e0b' }}>
                        <p style={{ color: '#fff', margin: 0 }}><strong>Runner Up</strong> - Microsoft Hack-n-Win Hackathon (Project: CareerSpark)</p>
                    </div>
                </div>
            </div>

        </motion.div>
    );
};

export default Experience;
