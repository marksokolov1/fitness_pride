import Image from 'next/image';

const navigation = [
  { label: 'Главная', href: '#top' },
  { label: 'Обучение', href: '#programs' },
  { label: 'Методика', href: '#methodology' },
  { label: 'Преподаватели', href: '#teachers' },
  { label: 'Выпускники', href: '#graduates' },
  { label: 'О школе', href: '#about' },
  { label: 'Контакты', href: '#contacts' },
];

function BrandMark() {
  return (
    <a className="brand" href="#top" aria-label="Fitness Pride — на главную">
      <Image
        className="brand__image"
        src="/brand/fitness-pride-logo-512.jpg"
        alt=""
        width={48}
        height={48}
        priority
      />
      <span className="brand__name" aria-hidden="true">
        FITNESS PR<span>ID</span>E
      </span>
    </a>
  );
}

export default function Home() {
  return (
    <main id="top" className="site-shell">
      <header className="site-header">
        <div className="container site-header__inner">
          <BrandMark />

          <nav className="desktop-nav" aria-label="Основная навигация">
            {navigation.map((item) => (
              <a
                className={item.href === '#top' ? 'is-active' : undefined}
                href={item.href}
                key={item.href}
              >
                {item.label}
              </a>
            ))}
          </nav>

          <a className="button button--compact header-cta" href="tel:+79786456072">
            Записаться
          </a>

          <details className="mobile-menu">
            <summary aria-label="Открыть меню">
              <span />
              <span />
            </summary>
            <nav aria-label="Мобильная навигация">
              {navigation.map((item) => (
                <a href={item.href} key={item.href}>
                  {item.label}
                </a>
              ))}
              <a className="button button--compact" href="tel:+79786456072">
                Записаться
              </a>
            </nav>
          </details>
        </div>
      </header>

      <section className="hero" aria-labelledby="hero-title">
        <div className="hero__glow" aria-hidden="true" />
        <div className="container hero__inner">
          <div className="hero__content">
            <p className="eyebrow">
              <span aria-hidden="true" />
              Донецк · Онлайн и очно
            </p>

            <h1 id="hero-title">
              Школа обучения
              <br />
              <em>фитнесу</em>
            </h1>

            <p className="hero__lead">
              Подготовка фитнес-тренеров и специалистов в сфере фитнеса через
              профессиональные знания и практические навыки.
            </p>

            <div className="hero__actions">
              <a className="button" href="tel:+79786456072">
                Записаться на обучение
                <span aria-hidden="true">↗</span>
              </a>
              <a className="text-link" href="tel:+79786456072">
                Получить консультацию
                <span aria-hidden="true">→</span>
              </a>
            </div>

            <ul className="hero__principles" aria-label="Принципы обучения">
              <li>
                <span>01</span>
                Теория
              </li>
              <li>
                <span>02</span>
                Практика
              </li>
              <li>
                <span>03</span>
                Поддержка
              </li>
            </ul>
          </div>

          <div className="hero__visual">
            <div className="hero__photo-frame">
              <Image
                className="hero__photo"
                src="/brand/fitness-pride-class.jpg"
                alt="Выпускники Fitness Pride с сертификатами после обучения"
                fill
                priority
                sizes="(max-width: 900px) 100vw, 50vw"
              />
              <div className="hero__photo-shade" aria-hidden="true" />
              <p className="hero__photo-label">
                <span>Живое обучение</span>
                <strong>Знания, которые становятся профессией</strong>
              </p>
            </div>
            <p className="hero__side-note" aria-hidden="true">
              FITNESS PRIDE · SCHOOL
            </p>
          </div>
        </div>

        <div className="hero__rail" aria-hidden="true">
          <span>Профессиональное образование</span>
          <i />
          <span>Практические навыки</span>
          <i />
          <span>Фитнес-индустрия</span>
        </div>
      </section>
    </main>
  );
}
