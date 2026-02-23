import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';

const Navbar = () => {
    const location = useLocation();

    const links = [
        { name: 'Home', path: '/' },
        { name: 'Experience', path: '/experience' },
        { name: 'Projects', path: '/projects' },
        { name: 'Contact', path: '/contact' },
    ];

    return (
        <nav style={{
            position: 'sticky',
            top: 0,
            zIndex: 50,
            display: 'flex',
            justifyContent: 'center',
            padding: '1rem',
            background: 'rgba(10, 10, 10, 0.4)',
            backdropFilter: 'blur(12px)',
            borderBottom: '1px solid rgba(255,255,255,0.05)',
            marginBottom: '2rem'
        }}>
            <div style={{ display: 'flex', gap: '2rem' }}>
                {links.map((link) => {
                    const isActive = location.pathname === link.path;
                    return (
                        <Link
                            key={link.name}
                            to={link.path}
                            style={{
                                color: isActive ? '#fff' : 'rgba(255,255,255,0.6)',
                                textDecoration: 'none',
                                fontWeight: isActive ? 600 : 400,
                                position: 'relative',
                                padding: '0.5rem 1rem',
                                fontSize: '0.95rem',
                                transition: 'color 0.2s ease'
                            }}
                        >
                            {link.name}
                            {isActive && (
                                <motion.div
                                    layoutId="navbar-indicator"
                                    style={{
                                        position: 'absolute',
                                        bottom: 0,
                                        left: 0,
                                        right: 0,
                                        height: '2px',
                                        background: 'linear-gradient(90deg, #3b82f6, #8b5cf6)',
                                        borderRadius: '2px'
                                    }}
                                    transition={{ type: 'spring', bounce: 0.2, duration: 0.6 }}
                                />
                            )}
                        </Link>
                    );
                })}
            </div>
        </nav>
    );
};

export default Navbar;
