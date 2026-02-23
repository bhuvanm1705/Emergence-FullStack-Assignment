import Portfolio from '../components/Portfolio';
import { motion } from 'framer-motion';

const Projects = () => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            style={{ minHeight: '80vh' }}
        >
            <div style={{ padding: '2rem 1rem' }}>
                <h2 style={{
                    textAlign: 'center',
                    fontSize: '3rem',
                    fontWeight: 800,
                    background: 'linear-gradient(45deg, #fff, #a78bfa)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    marginBottom: '1rem'
                }}>
                    My Projects
                </h2>
                <p style={{ textAlign: 'center', color: 'rgba(255,255,255,0.7)', marginBottom: '3rem' }}>
                    Here are some of the things I've built.
                </p>
            </div>
            <Portfolio />
        </motion.div>
    );
};

export default Projects;
