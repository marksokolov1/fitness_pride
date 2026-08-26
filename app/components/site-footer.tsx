import Image from 'next/image';

const socials = [
  { label: 'Telegram', href: 'https://t.me/igor_maistruk' },
  { label: 'VK', href: 'https://vk.ru/fitness_pride_donetsk' },
  { label: 'Instagram', href: 'https://www.instagram.com/fitness_pride_donetsk/' },
];

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="container site-footer__top">
        <div className="site-footer__brand">
          <a href="/" aria-label="Fitness Pride — на главную">
            <Image src="/brand/fitness-pride-logo-512.jpg" alt="" width={48} height={48} />
            <span>FITNESS PR<em>ID</em>E</span>
          </a>
          <p>Школа подготовки фитнес-тренеров.<br />Онлайн и очно в Донецке.</p>
        </div>

        <nav className="site-footer__nav" aria-label="Разделы сайта">
          <p>Разделы</p>
          <a href="/programs">Программы</a>
          <a href="/methodology">Методика</a>
          <a href="/teachers">Преподаватели</a>
          <a href="/graduates">Выпускники</a>
          <a href="/about">О школе</a>
        </nav>

        <div className="site-footer__contacts">
          <p>Связаться</p>
          <a className="site-footer__phone" href="tel:+79786456072">+7 (978) 645-60-72</a>
          <span>Донецк, ул. Артёма, 198</span>
          <div>
            {socials.map((social) => (
              <a href={social.href} key={social.label} target="_blank" rel="noreferrer">{social.label}<span aria-hidden="true">↗</span></a>
            ))}
          </div>
        </div>
      </div>

      <div className="container site-footer__bottom">
        <p>© {new Date().getFullYear()} Fitness Pride</p>
        <a href="/education-info">Сведения об образовательной организации</a>
      </div>
    </footer>
  );
}
