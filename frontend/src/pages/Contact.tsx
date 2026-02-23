import { motion } from 'framer-motion';
import { Mail, MapPin, Phone, Github, Linkedin, Twitter } from 'lucide-react';

const Contact = () => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            style={{
                minHeight: '80vh',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                padding: '2rem 1rem'
            }}
        >
            <div style={{
                background: 'rgba(255, 255, 255, 0.03)',
                border: '1px solid rgba(255, 255, 255, 0.05)',
                backdropFilter: 'blur(20px)',
                borderRadius: '24px',
                padding: '3rem',
                maxWidth: '600px',
                width: '100%',
                boxShadow: '0 8px 32px rgba(0, 0, 0, 0.2)'
            }}>
                <h2 style={{
                    textAlign: 'center',
                    fontSize: '2.5rem',
                    fontWeight: 800,
                    background: 'linear-gradient(45deg, #fff, #3b82f6)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    marginBottom: '1rem'
                }}>
                    Get in Touch
                </h2>

                <p style={{ textAlign: 'center', color: 'rgba(255,255,255,0.7)', marginBottom: '3rem' }}>
                    I'm always open to new opportunities, collaborations, or just a friendly chat!
                </p>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', marginBottom: '3rem' }}>
                    {/* Email */}
                    <a href="mailto:bhuvanamd17@gmail.com" style={{ textDecoration: 'none' }}>
                        <div style={{
                            display: 'flex',
                            alignItems: 'center',
                            gap: '1rem',
                            padding: '1rem',
                            background: 'rgba(255,255,255,0.02)',
                            borderRadius: '12px',
                            border: '1px solid rgba(255,255,255,0.05)',
                            transition: 'transform 0.2s ease, background 0.2s ease',
                            cursor: 'pointer'
                        }}
                            onMouseOver={(e) => {
                                e.currentTarget.style.transform = 'translateY(-2px)';
                                e.currentTarget.style.background = 'rgba(255,255,255,0.05)';
                            }}
                            onMouseOut={(e) => {
                                e.currentTarget.style.transform = 'none';
                                e.currentTarget.style.background = 'rgba(255,255,255,0.02)';
                            }}>
                            <div style={{ background: 'rgba(59, 130, 246, 0.1)', padding: '0.75rem', borderRadius: '50%' }}>
                                <Mail size={24} color="#3b82f6" />
                            </div>
                            <div>
                                <p style={{ margin: 0, color: 'rgba(255,255,255,0.5)', fontSize: '0.9rem' }}>Email Me</p>
                                <p style={{ margin: 0, color: '#fff', fontWeight: 500 }}>bhuvanamd17@gmail.com</p>
                            </div>
                        </div>
                    </a>

                    {/* Phone */}
                    <a href="tel:8309289388" style={{ textDecoration: 'none' }}>
                        <div style={{
                            display: 'flex',
                            alignItems: 'center',
                            gap: '1rem',
                            padding: '1rem',
                            background: 'rgba(255,255,255,0.02)',
                            borderRadius: '12px',
                            border: '1px solid rgba(255,255,255,0.05)',
                            transition: 'transform 0.2s ease, background 0.2s ease',
                            cursor: 'pointer'
                        }}
                            onMouseOver={(e) => {
                                e.currentTarget.style.transform = 'translateY(-2px)';
                                e.currentTarget.style.background = 'rgba(255,255,255,0.05)';
                            }}
                            onMouseOut={(e) => {
                                e.currentTarget.style.transform = 'none';
                                e.currentTarget.style.background = 'rgba(255,255,255,0.02)';
                            }}>
                            <div style={{ background: 'rgba(167, 139, 250, 0.1)', padding: '0.75rem', borderRadius: '50%' }}>
                                <Phone size={24} color="#a78bfa" />
                            </div>
                            <div>
                                <p style={{ margin: 0, color: 'rgba(255,255,255,0.5)', fontSize: '0.9rem' }}>Call Me</p>
                                <p style={{ margin: 0, color: '#fff', fontWeight: 500 }}>+91 8309289388</p>
                            </div>
                        </div>
                    </a>

                    {/* Location */}
                    <div style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '1rem',
                        padding: '1rem',
                        background: 'rgba(255,255,255,0.02)',
                        borderRadius: '12px',
                        border: '1px solid rgba(255,255,255,0.05)'
                    }}>
                        <div style={{ background: 'rgba(244, 114, 182, 0.1)', padding: '0.75rem', borderRadius: '50%' }}>
                            <MapPin size={24} color="#f472b6" />
                        </div>
                        <div>
                            <p style={{ margin: 0, color: 'rgba(255,255,255,0.5)', fontSize: '0.9rem' }}>Location</p>
                            <p style={{ margin: 0, color: '#fff', fontWeight: 500 }}>Hyderabad, Telangana</p>
                        </div>
                    </div>
                </div>

                {/* Social Links */}
                <div style={{ display: 'flex', justifyContent: 'center', gap: '1.5rem' }}>
                    <a href="https://github.com/bhuvan1705" target="_blank" rel="noopener noreferrer" style={{
                        background: 'rgba(255,255,255,0.05)',
                        padding: '0.75rem',
                        borderRadius: '50%',
                        color: '#fff',
                        transition: 'background 0.2s ease'
                    }}
                        onMouseOver={(e) => e.currentTarget.style.background = 'rgba(255,255,255,0.1)'}
                        onMouseOut={(e) => e.currentTarget.style.background = 'rgba(255,255,255,0.05)'}>
                        <Github size={24} />
                    </a>
                    <a href="https://linkedin.com/in/bhuvan1705" target="_blank" rel="noopener noreferrer" style={{
                        background: 'rgba(255,255,255,0.05)',
                        padding: '0.75rem',
                        borderRadius: '50%',
                        color: '#fff',
                        transition: 'background 0.2s ease'
                    }}
                        onMouseOver={(e) => e.currentTarget.style.background = 'rgba(255,255,255,0.1)'}
                        onMouseOut={(e) => e.currentTarget.style.background = 'rgba(255,255,255,0.05)'}>
                        <Linkedin size={24} color="#3b82f6" />
                    </a>
                    <a href="#" target="_blank" rel="noopener noreferrer" style={{
                        background: 'rgba(255,255,255,0.05)',
                        padding: '0.75rem',
                        borderRadius: '50%',
                        color: '#fff',
                        transition: 'background 0.2s ease'
                    }}
                        onMouseOver={(e) => e.currentTarget.style.background = 'rgba(255,255,255,0.1)'}
                        onMouseOut={(e) => e.currentTarget.style.background = 'rgba(255,255,255,0.05)'}>
                        <Twitter size={24} color="#38bdf8" />
                    </a>
                </div>

            </div>
        </motion.div>
    );
};

export default Contact;
