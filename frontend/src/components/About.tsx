import { motion } from 'framer-motion';

const About = () => {
    return (
        <section id="about" className="section">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
            >
                <h2 className="section-title">About <span className="text-gradient">Me</span></h2>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '4rem', alignItems: 'center' }}>

                    <div className="glass-panel" style={{ padding: '2rem', position: 'relative', overflow: 'hidden' }}>
                        {/* Decorative accent */}
                        <div style={{ position: 'absolute', top: 0, left: 0, width: '4px', height: '100%', background: 'linear-gradient(to bottom, var(--accent-primary), var(--accent-secondary))' }} />

                        <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>My Journey</h3>
                        <p style={{ color: 'var(--text-secondary)', marginBottom: '1rem' }}>
                            I am a versatile B.Tech CSE student with a strong foundation in modern tech stacks. My expertise stretches from managing Kubernetes clusters to developing LLM-based AI applications.
                        </p>
                        <p style={{ color: 'var(--text-secondary)' }}>
                            I frequently participate in hackathons to challenge myself. Outside of code, I am passionate about singing, story writing, and exploring the frontiers of new technologies.
                        </p>
                    </div>

                    <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                        {['Tech Lead Intern @ Swecha Viswam AI', 'Web & App Intern @ Yar Tech Services', 'Guinness World Record @ Agentathon'].map((item, index) => (
                            <motion.div
                                key={index}
                                className="glass-panel"
                                style={{ padding: '1.5rem', display: 'flex', alignItems: 'center', gap: '1rem' }}
                                whileHover={{ scale: 1.02, borderColor: 'var(--accent-primary)' }}
                                transition={{ type: 'spring', stiffness: 300 }}
                            >
                                <div style={{ width: '40px', height: '40px', borderRadius: '50%', background: 'rgba(102, 252, 241, 0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--accent-primary)' }}>
                                    {index + 1}
                                </div>
                                <div style={{ fontWeight: 500 }}>{item}</div>
                            </motion.div>
                        ))}
                    </div>

                </div>
            </motion.div>
        </section>
    );
};

export default About;
