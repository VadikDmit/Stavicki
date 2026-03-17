import React, { useState } from 'react';
import { LogIn, Mail, Lock } from 'lucide-react';
import { motion } from 'framer-motion';
import { clientApi } from '../api/clientApi';
import { GOAL_GALLERY_ITEMS } from '../utils/GoalImages';

interface LoginPageProps {
    onLoginSuccess: () => void;
    onSwitchToRegister: () => void;
    onBack?: () => void;
}

const LOGIN_BACKGROUND_GOALS = [
    ...GOAL_GALLERY_ITEMS,
    ...GOAL_GALLERY_ITEMS.slice(0, 6)
];

const LoginPage: React.FC<LoginPageProps> = ({ onLoginSuccess, onSwitchToRegister, onBack }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false);
    const [privacyAccepted, setPrivacyAccepted] = useState(false);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        try {
            const response = await clientApi.login(email, password);

            if (response && response.token) {
                localStorage.setItem('token', response.token);
                if (response.user) {
                    localStorage.setItem('user', JSON.stringify(response.user));
                }
                onLoginSuccess();
            } else {
                alert('Ошибка: Токен не получен от сервера');
            }
        } catch (error) {
            console.error('Login error:', error);
            alert('Неверный email или пароль');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="login-page">
            <div className="login-page__goals-bg" aria-hidden="true">
                {LOGIN_BACKGROUND_GOALS.map((goal, index) => (
                    <div className="login-page__goal-tile" key={`${goal.id}-${index}`}>
                        <img
                            src={goal.image}
                            alt=""
                            className="login-page__goal-image"
                            loading="lazy"
                        />
                    </div>
                ))}
            </div>
            <div className="login-page__overlay" aria-hidden="true" />
            <div style={{ width: '100%', maxWidth: '400px', display: 'flex', flexDirection: 'column', alignItems: 'stretch' }}>
                {onBack && (
                    <div style={{ marginBottom: '16px', textAlign: 'left' }}>
                        <button
                            type="button"
                            className="landing-btn landing-btn--secondary"
                            onClick={onBack}
                        >
                            Назад
                        </button>
                    </div>
                )}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="premium-card login-page__card"
                    style={{ width: '100%' }}
                >
                    <div style={{ textAlign: 'center', marginBottom: '32px' }}>
                        <div
                            style={{
                                background: 'var(--theme-primary)',
                                width: '64px',
                                height: '64px',
                                borderRadius: '16px',
                                display: 'inline-flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                marginBottom: '16px',
                                boxShadow: '0 0 20px rgba(0, 0, 0, 0.12)'
                            }}
                        >
                            <LogIn size={32} color="#000" />
                        </div>
                        <h1 style={{ fontSize: '24px', fontWeight: '700', marginBottom: '8px' }}>Добро пожаловать</h1>
                        <p style={{ color: 'var(--text-muted)', fontSize: '14px' }}>Войдите в личный кабинет</p>
                    </div>

                <form onSubmit={handleSubmit}>
                    <div className="input-group">
                        <label className="label">Электронная почта</label>
                        <div style={{ position: 'relative' }}>
                            <Mail
                                style={{
                                    position: 'absolute',
                                    left: '12px',
                                    top: '50%',
                                    transform: 'translateY(-50%)',
                                    color: 'var(--input-border)',
                                    zIndex: 2,
                                    pointerEvents: 'none'
                                }}
                                size={18}
                            />
                            <input
                                type="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                style={{ paddingLeft: '40px' }}
                                placeholder="email@example.com"
                                required
                            />
                        </div>
                    </div>

                    <div className="input-group">
                        <label className="label">Пароль</label>
                        <div style={{ position: 'relative' }}>
                            <Lock
                                style={{
                                    position: 'absolute',
                                    left: '12px',
                                    top: '50%',
                                    transform: 'translateY(-50%)',
                                    color: 'var(--input-border)',
                                    zIndex: 2,
                                    pointerEvents: 'none'
                                }}
                                size={18}
                            />
                            <input
                                type="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                style={{ paddingLeft: '40px' }}
                                placeholder="••••••••"
                                required
                            />
                        </div>
                    </div>

                    <label
                        style={{
                            margin: '12px 0 0',
                            display: 'flex',
                            alignItems: 'flex-start',
                            gap: '10px',
                            cursor: 'pointer',
                            userSelect: 'none'
                        }}
                    >
                        <input
                            type="checkbox"
                            checked={privacyAccepted}
                            onChange={(e) => setPrivacyAccepted(e.target.checked)}
                            style={{
                                marginTop: '1px',
                                width: '24px',
                                height: '24px',
                                accentColor: '#C1E56B'
                            }}
                        />
                        <span style={{ color: 'var(--text-muted)', fontSize: '12px', lineHeight: '1.4' }}>
                            Нажимая на&nbsp;кнопку вы&nbsp;даёте согласие на&nbsp;
                            <a
                                href="#"
                                style={{ color: 'inherit', textDecoration: 'underline', textDecorationThickness: '1px' }}
                            >
                                политику конфиденциальности
                            </a>
                        </span>
                    </label>
                    <button
                        type="submit"
                        className="btn-primary"
                        style={{ marginTop: '10px' }}
                        disabled={loading || !privacyAccepted}
                    >
                        {loading ? 'Вход...' : 'Войти в кабинет'}
                    </button>
                </form>

                <div style={{ marginTop: '24px', textAlign: 'center' }}>
                    <p style={{ color: 'var(--text-muted)', fontSize: '13px' }}>
                        Нет аккаунта?{' '}
                        <span
                            style={{ color: 'var(--theme-primary)', cursor: 'pointer', fontWeight: '600' }}
                            onClick={onSwitchToRegister}
                        >
                            Зарегистрироваться
                        </span>
                    </p>
                </div>
                </motion.div>
            </div>
        </div>
    );
};

export default LoginPage;
