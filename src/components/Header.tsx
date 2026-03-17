import React from 'react';
import { LogOut } from 'lucide-react';

interface HeaderProps {
    activePage?: 'past' | 'present' | 'future';
    onNavigate?: (page: 'past' | 'present' | 'future') => void;
    onLogout?: () => void;
}

const Header: React.FC<HeaderProps> = ({ activePage = 'present', onNavigate, onLogout }) => {
    const handleNavClick = (page: 'past' | 'present' | 'future', e: React.MouseEvent) => {
        e.preventDefault();
        if (onNavigate) onNavigate(page);
    };

    const handleLogout = () => {
        localStorage.removeItem('token');
        localStorage.removeItem('user');
        if (onLogout) onLogout();
    };

    return (
        <header style={{
            minHeight: '56px',
            background: '#fff',
            borderBottom: '1px solid #eee',
            position: 'sticky',
            top: 0,
            zIndex: 100,
            paddingTop: '6px',
        }}>
            <div style={{
                maxWidth: '1200px',
                margin: '0 auto',
                padding: '0 16px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                gap: '8px',
            }}>
                {/* Logo */}
                <div style={{
                    flexShrink: 0,
                    display: 'flex',
                    alignItems: 'center',
                }}>
                    <img
                        src="/assets/Logo.png"
                        alt="CONOMY Terminal"
                        style={{ height: 28, width: 'auto', display: 'block' }}
                    />
                </div>

                {/* Navigation */}
                <nav style={{
                    display: 'flex',
                    gap: '4px',
                    flex: 1,
                    justifyContent: 'center',
                }}>
                {(['past', 'present', 'future'] as const).map((page) => {
                    const labels = { past: 'Прошлое', present: 'Настоящее', future: 'Будущее' };
                    const isActive = activePage === page;
                    return (
                        <a
                            key={page}
                            href="#"
                            onClick={(e) => handleNavClick(page, e)}
                            style={{
                                color: isActive ? '#000' : '#666',
                                fontWeight: isActive ? '700' : '500',
                                textDecoration: 'none',
                                fontSize: '16px',
                                lineHeight: '1.6',
                                cursor: 'pointer',
                                padding: '6px 10px',
                                borderRadius: '20px',
                                background: isActive ? 'var(--theme-primary)' : 'transparent',
                                transition: 'all 0.2s ease',
                                whiteSpace: 'nowrap',
                            }}
                        >
                            {labels[page]}
                        </a>
                    );
                })}
                </nav>

                {/* Logout */}
                <button
                    onClick={handleLogout}
                    style={{
                        background: 'none',
                        border: 'none',
                        color: '#bbb',
                        cursor: 'pointer',
                        display: 'flex',
                        alignItems: 'center',
                        padding: '6px',
                        borderRadius: '8px',
                        flexShrink: 0,
                    }}
                    title="Выйти"
                >
                    <LogOut size={18} />
                </button>
            </div>
        </header>
    );
};

export default Header;
