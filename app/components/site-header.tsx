import Image from 'next/image';

const navigation = [
  { id: 'home', label: 'Главная', href: '/' },
  { id: 'programs', label: 'Обучение', href: '/programs' },
  { id: 'methodology', label: 'Методика', href: '/methodology' },
  { id: 'teachers', label: 'Преподаватели', href: '/teachers' },
  { id: 'graduates', label: 'Выпускники', href: '/graduates' },
  { id: 'about', label: 'О школе', href: '/about' },
  { id: 'education', label: 'Сведения', href: '/education-info' },
  { id: 'contacts', label: 'Контакты', href: '/contacts' },
];

type SiteHeaderProps = {
  active?: string;
};

function BrandMark() {
  return (
    <a className="brand" href="/" aria-label="Fitness Pride — на главную">
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

export function SiteHeader({ active }: SiteHeaderProps) {
  return (
    <header className="site-header">
      <div className="container site-header__inner">
        <BrandMark />

        <nav className="desktop-nav" aria-label="Основная навигация">
          {navigation.map((item) => (
            <a
              className={item.id === active ? 'is-active' : undefined}
              href={item.href}
              key={item.id}
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
              <a
                className={item.id === active ? 'is-active' : undefined}
                href={item.href}
                key={item.id}
              >
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
  );
}
