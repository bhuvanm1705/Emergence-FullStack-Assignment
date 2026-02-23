import { motion } from 'framer-motion';

const Hero = () => {
    return (
        <section className="section" style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', position: 'relative' }}>

            {/* Background glow effects */}
            <div style={{
                position: 'absolute', top: '20%', left: '10%', width: '300px', height: '300px',
                background: 'radial-gradient(circle, var(--accent-primary) 0%, transparent 70%)',
                opacity: 0.15, filter: 'blur(60px)', zIndex: 0
            }} />
            <div style={{
                position: 'absolute', bottom: '10%', right: '10%', width: '400px', height: '400px',
                background: 'radial-gradient(circle, var(--accent-secondary) 0%, transparent 70%)',
                opacity: 0.1, filter: 'blur(80px)', zIndex: 0
            }} />

            <div style={{ zIndex: 1, textAlign: 'center', maxWidth: '800px' }}>
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    style={{ fontSize: '1.2rem', marginBottom: '1rem', color: 'var(--text-secondary)', letterSpacing: '2px', textTransform: 'uppercase' }}
                >
                    Welcome to my universe
                </motion.h2>

                <motion.h1
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1, delay: 0.2 }}
                    style={{ fontSize: 'clamp(3rem, 8vw, 6rem)', lineHeight: 1.1, marginBottom: '1.5rem' }}
                >
                    I'm <span className="text-gradient">Mandala Bhuvan</span>
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1, delay: 0.6 }}
                    style={{ fontSize: '1.2rem', color: 'var(--text-secondary)', marginBottom: '2.5rem', maxWidth: '600px', marginInline: 'auto' }}
                >
                    Multi-Disciplinary Developer & Tech Enthusiast specializing in App, Web, Blockchain, Game, and AI Development.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 1 }}
                    style={{ display: 'flex', gap: '1rem', justifyContent: 'center' }}
                >
                    <a href="#portfolio" className="btn btn-primary">View My Work</a>
                    <a href="#contact" className="btn btn-outline">Contact Me</a>
                </motion.div>
            </div>

        </section>
    );
};

export default Hero;
