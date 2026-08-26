import Image from 'next/image';
import { SiteHeader } from './components/site-header';

const programs = [
  {
    number: '01',
    label: 'Персональный тренинг',
    title: 'Инструктор тренажёрного зала',
    text: 'Техника упражнений, построение программ и работа с клиентом.',
    href: '/programs#gym',
  },
  {
    number: '02',
    label: 'Групповой фитнес',
    title: 'Инструктор групповых программ',
    text: 'Аэробика, step, stretching, Pilates, Tai-bo и TRX.',
    href: '/programs#group',
  },
  {
    number: '03',
    label: 'Два направления',
    title: 'Инструктор-универсал',
    text: 'Комплексная подготовка для персональной и групповой работы.',
    href: '/programs#universal',
  },
];

const teachers = [
  { name: 'Игорь Майструк', image: '/teachers/igor-maistruk.jpg' },
  { name: 'Сергей Зуйков', image: '/teachers/sergey-zuykov.jpg' },
  { name: 'Виктория Бербик', image: '/teachers/victoria-berbik.jpg' },
  { name: 'Ирина Гавриленко', image: '/teachers/irina-gavrilenko.jpg' },
];

export default function Home() {
  return (
    <main id="top" className="site-shell home-page">
      <SiteHeader active="home" />

      <section className="hero" aria-labelledby="hero-title">
        <div className="hero__glow" aria-hidden="true" />
        <div className="container hero__inner">
          <div className="hero__content">
            <p className="eyebrow"><span aria-hidden="true" />Донецк · Онлайн и очно</p>
            <h1 id="hero-title">Школа обучения<br /><em>фитнесу</em></h1>
            <p className="hero__lead">
              Подготовка фитнес-тренеров через профессиональные знания,
              практические навыки и личную поддержку методистов.
            </p>
            <div className="hero__actions">
              <a className="button" href="tel:+79786456072">Записаться на обучение <span aria-hidden="true">↗</span></a>
              <a className="text-link" href="/programs">Выбрать программу <span aria-hidden="true">→</span></a>
            </div>
            <ul className="hero__principles" aria-label="Принципы обучения">
              <li><span>01</span>Теория</li>
              <li><span>02</span>Практика</li>
              <li><span>03</span>Поддержка</li>
            </ul>
          </div>

          <div className="hero__visual">
            <div className="hero__photo-frame">
              <Image className="hero__photo" src="/brand/fitness-pride-class.jpg" alt="Выпускники Fitness Pride с сертификатами" fill priority sizes="(max-width: 900px) 100vw, 50vw" />
              <div className="hero__photo-shade" aria-hidden="true" />
              <p className="hero__photo-label"><span>Живое обучение</span><strong>Знания, которые становятся профессией</strong></p>
            </div>
            <p className="hero__side-note" aria-hidden="true">FITNESS PRIDE · SCHOOL</p>
          </div>
        </div>
      </section>

      <section className="home-programs" aria-labelledby="home-programs-title">
        <div className="container">
          <header className="home-section-heading">
            <div>
              <p className="section-kicker">01 · Выберите направление</p>
              <h2 id="home-programs-title">Три пути в профессию</h2>
            </div>
            <p>Подробные модули, форматы и условия собраны на отдельной странице программ.</p>
          </header>

          <div className="home-program-grid">
            {programs.map((program) => (
              <a href={program.href} key={program.number}>
                <span>{program.number}</span>
                <small>{program.label}</small>
                <h3>{program.title}</h3>
                <p>{program.text}</p>
                <b aria-hidden="true">↗</b>
              </a>
            ))}
          </div>
        </div>
      </section>

      <section className="home-proof" aria-labelledby="home-proof-title">
        <div className="container home-proof__grid">
          <div>
            <p className="section-kicker section-kicker--dark">02 · Почему Fitness Pride</p>
            <h2 id="home-proof-title">Учитесь у тех, кто работает в профессии</h2>
            <p>
              Программа соединяет фундаментальные знания, практическую
              отработку и прямую обратную связь преподавателей.
            </p>
            <a className="text-link" href="/methodology">Как устроено обучение <span aria-hidden="true">→</span></a>
          </div>
          <dl>
            <div><dt>2 месяца</dt><dd>продолжительность программ</dd></div>
            <div><dt>В любой момент</dt><dd>начало без привязки к потоку</dd></div>
            <div><dt>Навсегда</dt><dd>доступ к учебным модулям</dd></div>
            <div><dt>Лично</dt><dd>обратная связь методистов</dd></div>
          </dl>
        </div>
      </section>

      <section className="home-team" aria-labelledby="home-team-title">
        <div className="container home-team__grid">
          <div className="home-team__content">
            <p className="section-kicker">03 · Команда школы</p>
            <h2 id="home-team-title">Преподаватели с профильной экспертизой</h2>
            <p>
              Анатомия и биохимия, персональный тренинг, групповой фитнес и
              аквааэробика — каждое направление ведёт профильный специалист.
            </p>
            <a className="button" href="/teachers">Познакомиться с командой <span aria-hidden="true">↗</span></a>
          </div>
          <div className="home-team__portraits">
            {teachers.map((teacher) => (
              <figure key={teacher.name}>
                <Image src={teacher.image} alt={teacher.name} fill sizes="(max-width: 700px) 50vw, 18vw" />
                <figcaption>{teacher.name}</figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      <section className="home-result">
        <div className="container home-result__grid">
          <figure>
            <Image src="/graduates/graduation-group.jpg" alt="Выпускники Fitness Pride после завершения программы" fill sizes="(max-width: 800px) 100vw, 48vw" />
          </figure>
          <div>
            <p className="section-kicker section-kicker--dark">04 · Результат обучения</p>
            <h2>Системные знания. Практические навыки. Сертификат.</h2>
            <p>На сайте — реальные занятия и выпускники школы, а не постановочные истории.</p>
            <div className="home-result__actions">
              <a className="button" href="tel:+79786456072">Получить консультацию <span aria-hidden="true">↗</span></a>
              <a className="text-link" href="/graduates">Посмотреть выпускников <span aria-hidden="true">→</span></a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
