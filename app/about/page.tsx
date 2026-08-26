import type { Metadata } from 'next';
import Image from 'next/image';
import { SiteHeader } from '../components/site-header';

export const metadata: Metadata = {
  title: 'О школе | Fitness Pride',
  description:
    'Fitness Pride — школа подготовки фитнес-тренеров в Донецке. Миссия, основатель, команда и принципы обучения.',
};

const principles = [
  {
    number: '01',
    title: 'Профессиональная база',
    text: 'Анатомия, физиология, биомеханика и рациональное питание формируют основу осознанной работы тренера.',
  },
  {
    number: '02',
    title: 'Практика в профессии',
    text: 'Обучающиеся отрабатывают технику, объяснение упражнений и построение занятий по выбранному направлению.',
  },
  {
    number: '03',
    title: 'Прямой контакт',
    text: 'Вопросы по программе разбирают преподаватели и методисты, которые лично участвуют в обучении.',
  },
  {
    number: '04',
    title: 'Развитие после курса',
    text: 'Доступ к учебным модулям сохраняется, поэтому к материалам можно возвращаться в дальнейшей работе.',
  },
];

const reasons = [
  ['01', 'Опытные преподаватели', 'Профильные специалисты соединяют академические знания с многолетней практикой в фитнесе и спорте.'],
  ['02', 'Гибкий формат', 'Теория доступна онлайн, практика проходит очно, а начать обучение можно без привязки к общему потоку.'],
  ['03', 'Поэтапная система', 'Модули, задания и тестирование помогают двигаться последовательно и проверять понимание материала.'],
  ['04', 'Поддержка выпускников', 'После программы сохраняется доступ к материалам и возможность обратиться к наставникам за консультацией.'],
  ['05', 'Доступная оплата', 'Стоимость обучения можно разделить на два равных платежа без увеличения итоговой суммы.'],
  ['06', 'Связь с индустрией', 'Школа сотрудничает с фитнес-клубами и помогает сильным выпускникам с поиском возможностей без гарантии трудоустройства.'],
];

export default function AboutPage() {
  return (
    <main className="site-shell about-page">
      <SiteHeader active="about" />

      <section className="about-page__hero" aria-labelledby="about-page-title">
        <div className="container about-page__hero-grid">
          <div className="about-page__hero-content">
            <p className="page-breadcrumb"><a href="/">Главная</a><span>/</span>О школе</p>
            <p className="eyebrow"><span aria-hidden="true" />Школа обучения фитнесу</p>
            <h1 id="about-page-title">Создана теми,<br />кто знает <em>профессию</em></h1>
            <p className="about-page__lead">
              Fitness Pride объединяет профессиональные знания, живую практику
              и личное участие преподавателей в подготовке будущих специалистов.
            </p>
            <div className="about-page__hero-actions">
              <a className="button" href="/programs">Выбрать программу <span aria-hidden="true">↗</span></a>
              <a className="text-link" href="/teachers">Команда школы <span aria-hidden="true">→</span></a>
            </div>
          </div>

          <figure className="about-page__hero-photo">
            <Image
              src="/teachers/igor-maistruk.jpg"
              alt="Игорь Игоревич Майструк — основатель Fitness Pride"
              fill
              priority
              sizes="(max-width: 900px) 100vw, 46vw"
              style={{ objectPosition: '50% 34%' }}
            />
            <div aria-hidden="true" />
            <figcaption><span>Основатель и руководитель</span><strong>Игорь Игоревич Майструк</strong></figcaption>
          </figure>
        </div>
      </section>

      <section className="about-mission" aria-labelledby="about-mission-title">
        <div className="container about-mission__grid">
          <div>
            <p className="section-kicker">01 · Наша миссия</p>
            <h2 id="about-mission-title">Образование, которое помогает людям двигаться вперёд</h2>
          </div>
          <blockquote>
            Помогать людям достигать целей в фитнесе и здоровом образе жизни
            через качественное образование и поддержку — и готовить тренеров,
            способных вдохновлять своих клиентов.
          </blockquote>
        </div>
      </section>

      <section className="about-founder" aria-labelledby="about-founder-title">
        <div className="container about-founder__grid">
          <figure>
            <Image src="/graduates/practical-training.jpg" alt="Практическое занятие Fitness Pride в тренажёрном зале" fill sizes="(max-width: 800px) 100vw, 46vw" />
            <figcaption><span>Практика</span><strong>Преподаватель показывает, обучающийся понимает и повторяет</strong></figcaption>
          </figure>
          <div className="about-founder__content">
            <p className="section-kicker section-kicker--dark">02 · Основатель школы</p>
            <h2 id="about-founder-title">Игорь Игоревич Майструк</h2>
            <p className="about-founder__lead">
              Основатель и руководитель Fitness Pride, фитнес-тренер,
              нутрициолог и методист с опытом работы в сфере фитнеса более 15 лет.
            </p>
            <ul>
              <li><span>01</span>Два высших образования: адаптивная физическая культура и организация физического воспитания и спорта</li>
              <li><span>02</span>Президент Федерации массового спорта в ДНР</li>
              <li><span>03</span>Участник научных конференций в сфере физической культуры и спорта</li>
              <li><span>04</span>Автор учебно-методических пособий по физической реабилитации и фитнес-тренировкам</li>
            </ul>
            <a className="text-link" href="/teachers#teacher-01">Полный профиль преподавателя <span aria-hidden="true">→</span></a>
          </div>
        </div>
      </section>

      <section className="about-principles" aria-labelledby="about-principles-title">
        <div className="container">
          <header className="about-detail-heading">
            <div>
              <p className="section-kicker">03 · Принципы школы</p>
              <p className="section-index" aria-hidden="true">FP / VALUES</p>
            </div>
            <div>
              <h2 id="about-principles-title">На чём построено обучение</h2>
              <p>Каждый элемент программы должен помогать будущему специалисту понимать, объяснять и уверенно применять знания.</p>
            </div>
          </header>
          <div className="about-principles__grid">
            {principles.map((principle) => (
              <article key={principle.number}>
                <span>{principle.number}</span>
                <h3>{principle.title}</h3>
                <p>{principle.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="about-reasons" aria-labelledby="about-reasons-title">
        <div className="container">
          <header className="about-detail-heading about-detail-heading--dark">
            <div>
              <p className="section-kicker section-kicker--dark">04 · Почему выбирают нас</p>
              <p className="section-index section-index--dark" aria-hidden="true">FP / SCHOOL</p>
            </div>
            <div>
              <h2 id="about-reasons-title">Школа рядом на всём пути</h2>
              <p>Условия обучения помогают встроить программу в жизнь, получить обратную связь и сохранить опору после завершения курса.</p>
            </div>
          </header>
          <div className="about-reasons__grid">
            {reasons.map(([number, title, text]) => (
              <article key={number}>
                <span>{number}</span>
                <div><h3>{title}</h3><p>{text}</p></div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="about-community" aria-labelledby="about-community-title">
        <div className="container about-community__grid">
          <figure>
            <Image src="/graduates/graduation-group.jpg" alt="Выпускники Fitness Pride с сертификатами" fill sizes="(max-width: 800px) 100vw, 52vw" />
          </figure>
          <div>
            <p className="section-kicker">05 · Сообщество</p>
            <h2 id="about-community-title">Школа — это преподаватели и люди, которые учатся вместе</h2>
            <p>Мы показываем реальные занятия и выпуски, потому что доверие строится на живом образовательном опыте.</p>
            <a className="button" href="/graduates">Посмотреть выпускников <span aria-hidden="true">↗</span></a>
          </div>
        </div>
      </section>

      <section className="about-next-step">
        <div className="container">
          <div><p>Знакомство со школой начинается с вашей цели</p><h2>Обсудите обучение с командой Fitness Pride</h2></div>
          <a className="button" href="tel:+79786456072">Получить консультацию <span aria-hidden="true">↗</span></a>
        </div>
      </section>
    </main>
  );
}
