import React from 'react';
import {
    ArrowRight,
    CheckCircle2,
    Landmark,
    ReceiptText,
    ShieldCheck,
    Target,
    TrendingUp
} from 'lucide-react';
import { GOAL_GALLERY_ITEMS } from '../utils/GoalImages';

interface LandingPageProps {
    onStart: () => void;
    onLogin: () => void;
}

const BENEFITS = [
    {
        title: 'Контроль и ясность',
        description: 'Видно, куда уходят деньги, где потери и какие действия реально приближают к вашим целям.',
        icon: CheckCircle2
    },
    {
        title: 'Рост капитала',
        description: 'Деньги начинают работать как система: стратегия, риск-профиль, горизонт и регулярная корректировка.',
        icon: TrendingUp
    },
    {
        title: 'Защита от ошибок',
        description: 'Сценарный анализ заранее показывает, как пережить кризисы и не слить результат на эмоциях.',
        icon: ShieldCheck
    }
];

const INCOME_GROWTH_FACTORS = [
    {
        title: 'Налоговое планирование',
        description: 'Используем легальные льготы, вычеты и корректные налоговые режимы без серых схем.',
        icon: ReceiptText
    },
    {
        title: 'Софинансирование и программы',
        description: 'Подключаем доступные механики допвзносов и поддержки, чтобы усилить вашу доходность.',
        icon: Landmark
    },
    {
        title: 'Цели + дисциплина',
        description: 'Фиксируем цели, сроки и чекпоинты, чтобы стратегия работала не месяц, а годы.',
        icon: Target
    }
];

const LANDING_GOALS = GOAL_GALLERY_ITEMS.slice(0, 8);

const LandingPage: React.FC<LandingPageProps> = ({ onStart, onLogin }) => {
    const scrollToSection = (sectionId: string) => {
        const section = document.getElementById(sectionId);
        section?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    };

    return (
        <div className="landing-page-wrap">
            {/* Existing header / navigation with brand logo */}
            <header className="landing-header">
                <div className="landing-header__inner">
                    <div className="landing-logo">
                        <img
                            src="/assets/Logo.png"
                            alt="CONOMY Terminal"
                            className="landing-logo__image"
                        />
                    </div>

                    <nav className="landing-nav">
                        <button type="button" onClick={() => scrollToSection('why-fin-plan')}>Почему важно</button>
                        <button type="button" onClick={() => scrollToSection('income-growth')}>Рост доходности</button>
                        <button type="button" onClick={() => scrollToSection('goals-showcase')}>Цели</button>
                    </nav>

                    <div className="landing-header__actions">
                        <button type="button" className="landing-btn landing-btn--secondary" onClick={onLogin}>
                            Войти
                        </button>
                        <button type="button" className="landing-btn landing-btn--primary" onClick={onStart}>
                            Начать
                        </button>
                    </div>
                </div>
            </header>

            {/* Brand hero for CONOMY Terminal */}
            <main className="landing-main">
                <section className="landing-brand-hero">
                    <div className="landing-brand-hero__card">
                        <h1 className="landing-brand-hero__title">CONOMY Terminal</h1>
                        <p className="landing-brand-hero__description">
                            Инвестиционный инструмент для формирования инвестиционных решений
                        </p>
                        <button
                            type="button"
                            className="landing-btn landing-btn--primary landing-btn--large landing-brand-hero__button"
                            onClick={onStart}
                        >
                            Начать
                        </button>
                    </div>
                </section>

                {/* Expert block: Максим Ставицкий */}
                <section className="landing-expert">
                    <div className="landing-expert__inner">
                        <div className="landing-expert__photo">
                            <img src="/assets/M_S.jpg" alt="Максим Ставицкий" />
                        </div>
                        <div className="landing-expert__content">
                            <h2 className="landing-expert__title ui-heading-h2">Максим Ставицкий</h2>
                            <p className="landing-expert__subtitle ui-text-t2">
                                Инвестиционный консультант
                                <br />
                                и создатель CONOMY Terminal
                            </p>
                            <ul className="landing-expert__list ui-text-t3">
                                <li>Опыт работы на финансовых рынках и в управлении капиталом.</li>
                                <li>Фокус на практических, измеримых результатах для частных инвесторов.</li>
                                <li>Подход «терминала»: прозрачные сценарии, метрики и понятная логика решений.</li>
                            </ul>
                        </div>
                    </div>
                </section>

                {/* Education / certifications block */}
                <section className="landing-section">
                    <div className="landing-section__head">
                        <h2 className="ui-heading-h2">
                            Дополнительное профессиональное
                            <br />
                            образование
                        </h2>
                    </div>
                    <div className="landing-education-grid">
                        <article className="landing-education-card">
                            <div className="landing-education-card__logo">
                                <img src="/assets/edu-wharton.png" alt="Wharton Business School" />
                            </div>
                            <p className="landing-education-card__text ui-text-t3">
                                Asset Management, Wharton Business School (University of Pennsylvania)
                            </p>
                        </article>
                        <article className="landing-education-card">
                            <div className="landing-education-card__logo">
                                <img src="/assets/edu-mdrt.png" alt="Million Dollar Round Table" />
                            </div>
                            <p className="landing-education-card__text ui-text-t3">
                                Top of the Table, Million Dollar Round Table (MDRT)
                            </p>
                        </article>
                        <article className="landing-education-card">
                            <div className="landing-education-card__logo">
                                <img src="/assets/edu-naufor.png" alt="НАУФОР" />
                            </div>
                            <p className="landing-education-card__text ui-text-t3">
                                Financial Modeling &amp; Valuation Analyst Certification, Corporate Finance Institute
                            </p>
                        </article>
                        <article className="landing-education-card">
                            <div className="landing-education-card__logo">
                                <img src="/assets/edu-fsfr.png" alt="ФСФР России" />
                            </div>
                            <p className="landing-education-card__text ui-text-t3">
                                Аттестат ФСФР, серия 1
                            </p>
                        </article>
                    </div>
                </section>

                {/* Исходный лендинг B2C */}
                <section className="landing-hero">
                    <div className="landing-hero__left">
                        <p className="landing-kicker">Финансовый консалтинг для&nbsp;людей и&nbsp;семей</p>
                        <h2 className="landing-hero__title ui-heading-h2">
                            Финансовое планирование — это система, которая помогает
                            <span> увеличивать доходность&nbsp;и достигать цели&nbsp;без хаоса.</span>
                        </h2>
                        <p className="landing-hero__text ui-text-t3">
                            Мы строим личный маршрут: от&nbsp;текущего состояния до&nbsp;нужного уровня капитала,
                            с&nbsp;понятными шагами, сроками и&nbsp;метриками контроля.
                        </p>
                        <div className="landing-hero__actions">
                            <button type="button" className="landing-btn landing-btn--primary landing-btn--large" onClick={onStart}>
                                Начать финансовое планирование
                            </button>
                            <button type="button" className="landing-btn landing-btn--secondary landing-btn--large" onClick={() => scrollToSection('why-fin-plan')}>
                                Что это даёт
                            </button>
                        </div>
                    </div>

                    <div className="landing-hero__right">
                        <div className="landing-glass-card">
                            <div className="landing-glass-card__label ui-text-t3">Потенциал дополнительной доходности</div>
                            <div className="landing-glass-card__main ui-heading-h1">до 113% годовых</div>
                            <p className="landing-glass-card__subtext ui-text-t3">
                                В&nbsp;отдельных сценариях за&nbsp;счёт налогового планирования и&nbsp;софинансирования.
                                По&nbsp;более консервативным сценариям в&nbsp;среднем ориентир — около 17% годовых.
                            </p>
                            <div className="landing-glass-card__meta ui-text-t4">
                                Важно: результат зависит от&nbsp;ваших параметров, горизонта и&nbsp;выбранных инструментов.
                                Это не&nbsp;гарантия доходности.
                            </div>
                        </div>
                    </div>
                </section>

                <section id="why-fin-plan" className="landing-section">
                    <div className="landing-section__head">
                        <h2 className="ui-heading-h2">
                            Почему финансовое
                            <br />
                            планирование важно
                        </h2>
                        <p className="ui-text-t3">
                            Без&nbsp;плана деньги рассеиваются. С&nbsp;планом — превращаются в&nbsp;управляемую систему, которая
                            работает на&nbsp;ваши приоритеты: безопасность, доход, капитал и&nbsp;цели семьи.
                        </p>
                    </div>

                    <div className="landing-feature-grid">
                        {BENEFITS.map((item) => {
                            const Icon = item.icon;
                            return (
                                <article key={item.title} className="landing-feature-card">
                                    <div className="landing-feature-card__icon">
                                        <Icon size={20} />
                                    </div>
                                    <h4 className="ui-heading-h3">{item.title}</h4>
                                    <p className="ui-text-t4">{item.description}</p>
                                </article>
                            );
                        })}
                    </div>
                </section>

                <section id="income-growth" className="landing-section">
                    <div className="landing-section__head">
                        <h2 className="ui-heading-h2">
                            За счёт чего
                            <br />
                            растёт доходность
                        </h2>
                        <p className="ui-text-t3">
                            Доходность — это не&nbsp;“удача”, а&nbsp;комбинация инструментов, налоговой эффективности и
                            дисциплины исполнения плана.
                        </p>
                    </div>

                    <div className="landing-growth-grid">
                        {INCOME_GROWTH_FACTORS.map((factor) => {
                            const Icon = factor.icon;
                            return (
                                <article key={factor.title} className="landing-growth-card">
                                    <div className="landing-growth-card__top">
                                        <Icon size={20} />
                                        <h4 className="ui-heading-h3">{factor.title}</h4>
                                    </div>
                                    <p className="ui-text-t4">{factor.description}</p>
                                </article>
                            );
                        })}
                    </div>
                </section>

                <section id="goals-showcase" className="landing-section">
                    <div className="landing-section__head">
                        <h2 className="ui-heading-h2">
                            Цели, которые можно
                            <br />
                            закрывать системно
                        </h2>
                        <p className="ui-text-t3">
                            От&nbsp;финансовой подушки и&nbsp;ренты до&nbsp;жилья, бизнеса и&nbsp;пассивного дохода.
                            <br />
                            План адаптируется под&nbsp;ваши сроки и&nbsp;риск-профиль.
                        </p>
                    </div>

                    <div className="landing-goals-grid">
                        {LANDING_GOALS.map((goal) => (
                            <article key={goal.id} className="landing-goal-card">
                                <img src={goal.image} alt={goal.title} />
                                <div className="landing-goal-card__overlay">
                                    <div>{goal.title}</div>
                                    <span>{goal.description}</span>
                                </div>
                            </article>
                        ))}
                    </div>
                </section>

                <section className="landing-cta">
                    <h2 className="ui-heading-h2">Готовы перейти от хаоса к системе?</h2>
                    <p>Запустите планирование и&nbsp;получите понятную карту действий под&nbsp;ваши цели.</p>
                    <button type="button" className="landing-btn landing-btn--secondary landing-btn--large" onClick={onStart}>
                        Начать сейчас <ArrowRight size={18} />
                    </button>
                </section>
            </main>

            <footer className="landing-footer">
                <div className="landing-footer__inner">
                    <div className="landing-footer__left">
                        <div className="landing-footer__logo">
                            <img src="/assets/Logo.png" alt="CONOMY Terminal" />
                        </div>
                        <div className="landing-footer__links">
                            <span>© {new Date().getFullYear()} CONOMY Terminal</span>
                            <span>·</span>
                            <a href="#" style={{ color: '#4b5563', textDecoration: 'underline', textDecorationThickness: '1px' }}>
                                Политика конфиденциальности
                            </a>
                        </div>
                    </div>
                    <div className="landing-footer__right">
                        <a href="https://bankfuture.ru" target="_blank" rel="noopener noreferrer" style={{ color: 'inherit', textDecoration: 'none' }}>Разработка BankFuture</a>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default LandingPage;
