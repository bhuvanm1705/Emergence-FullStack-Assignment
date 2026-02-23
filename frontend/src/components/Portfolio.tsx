import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';

const projects = [
    {
        title: 'CareerSpark',
        description: 'AI-Career Guidance platform helping students find their path.',
        link: 'https://careerspark2k25-2.vercel.app/',
        tags: ['React', 'AI', 'Tailwind']
    },
    {
        title: 'Annadhanam',
        description: 'Food donation platform connecting donors with those in need.',
        link: 'https://mellow-figolla-2052d2.netlify.app/',
        tags: ['Web', 'Platform', 'Social']
    },
    {
        title: 'Foru.ms',
        description: 'A Next.js & Firebase community platform that redefines the forum.',
        link: 'https://un-forum-vercel-devpost-hackathon.vercel.app/',
        tags: ['Next.js', 'Firebase', 'Community']
    }
];

const Portfolio = () => {
    return (
        <section id="portfolio" className="section" style={{ minHeight: '100vh' }}>
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
            >
                <h2 className="section-title">Featured <span className="text-gradient">Projects</span></h2>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
                    {projects.map((project, idx) => (
                        <motion.div
                            key={idx}
                            className="glass-panel"
                            style={{ padding: '2rem', display: 'flex', flexDirection: 'column', height: '100%' }}
                            whileHover={{ y: -10, boxShadow: '0 15px 30px rgba(102, 252, 241, 0.2)' }}
                            transition={{ type: 'spring', stiffness: 300 }}
                        >
                            <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem', color: 'var(--text-primary)' }}>
                                {project.title}
                            </h3>
                            <p style={{ color: 'var(--text-secondary)', flex: 1, marginBottom: '1.5rem' }}>
                                {project.description}
                            </p>

                            <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap', marginBottom: '1.5rem' }}>
                                {project.tags.map(tag => (
                                    <span key={tag} style={{
                                        fontSize: '0.8rem', padding: '0.2rem 0.8rem', borderRadius: '15px',
                                        background: 'rgba(102, 252, 241, 0.1)', color: 'var(--accent-primary)'
                                    }}>
                                        {tag}
                                    </span>
                                ))}
                            </div>

                            <div style={{ display: 'flex', gap: '1rem', marginTop: 'auto' }}>
                                <a href={project.link} target="_blank" rel="noreferrer" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.9rem' }}>
                                    <ExternalLink size={16} /> Live Demo
                                </a>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </motion.div>
        </section>
    );
};

export default Portfolio;
