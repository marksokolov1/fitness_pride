import type { Metadata } from 'next';
import Image from 'next/image';
import { SiteHeader } from '../components/site-header';

export const metadata: Metadata = {
  title: 'Выпускники | Fitness Pride',
  description:
    'Реальные занятия, учебные группы и результаты выпускников школы Fitness Pride.',
};

const outcomes = [
  {
    number: '01',
    title: 'Системные знания',
    text: 'Понимание анатомии, физиологии, питания и логики тренировочного процесса.',
  },
  {
    number: '02',
    title: 'Практические навыки',
    text: 'Умение показывать и объяснять упражнения, работать с человеком или группой.',
  },
  {
    number: '03',
    title: 'Готовая база для развития',
    text: 'Учебные материалы остаются доступными, а к методистам можно обратиться после курса.',
  },
];

const journey = [
  {
    number: '01',
    label: 'Учебный зал',
    title: 'Знания переходят в действие',
    text: 'На практических занятиях обучающиеся наблюдают разбор техники, пробуют упражнения и учатся видеть детали движения.',
    image: '/graduates/practical-training.jpg',
    alt: 'Практическое занятие Fitness Pride в тренажёрном зале',
  },
  {
    number: '02',
    label: 'Разные направления',
    title: 'Каждая программа имеет свою практику',
    text: 'Персональный тренинг, групповые форматы и Pilates требуют разных навыков — практика строится вокруг выбранного направления.',
    image: '/graduates/pilates-graduates.jpg',
    alt: 'Выпускники программы Pilates Fitness Pride с сертификатами',
  },
  {
    number: '03',
    label: 'Завершение',
    title: 'Результат подтверждён прохождением программы',
    text: 'После выполнения учебных условий выпускники получают сертификат, который входит в стоимость обучения.',
    image: '/graduates/certificate-group.jpg',
    alt: 'Учебная группа Fitness Pride после завершения программы',
  },
];

export default function GraduatesPage() {
  return (
    <main className="site-shell graduates-page">
      <SiteHeader active="graduates" />

      <section className="graduates-page__hero" aria-labelledby="graduates-page-title">
        <div className="container graduates-page__hero-grid">
          <div className="graduates-page__hero-content">
            <p className="page-breadcrumb">
              <a href="/">Главная</a><span>/</span>Выпускники
            </p>
            <p className="eyebrow"><span aria-hidden="true" />Результаты обучения</p>
            <h1 id="graduates-page-title">Люди, которые<br /><em>выбрали профессию</em></h1>
            <p className="graduates-page__lead">
              На этой странице — реальные учебные группы Fitness Pride:
              практика, совместная работа и момент завершения программы.
            </p>
            <a className="button" href="/programs">
              Выбрать программу <span aria-hidden="true">↗</span>
            </a>
          </div>

          <figure className="graduates-page__hero-photo">
            <Image
              src="/graduates/graduation-group.jpg"
              alt="Большая группа выпускников Fitness Pride с сертификатами"
              fill
              priority
              sizes="(max-width: 900px) 100vw, 50vw"
            />
            <div aria-hidden="true" />
            <figcaption>
              <span>Fitness Pride · Выпуск</span>
              <strong>Реальные люди. Реальное обучение.</strong>
            </figcaption>
          </figure>
        </div>
      </section>

      <section className="graduate-outcome" aria-labelledby="graduate-outcome-title">
        <div className="container">
          <header className="graduate-detail-heading">
            <div>
              <p className="section-kicker">01 · Результат программы</p>
              <p className="section-index" aria-hidden="true">FP / OUTCOME</p>
            </div>
            <div>
              <h2 id="graduate-outcome-title">Что остаётся после обучения</h2>
              <p>
                Ценность курса — не только в документе о завершении, но и в
                профессиональной базе, которую можно применять и развивать дальше.
              </p>
            </div>
          </header>

          <div className="graduate-outcome__grid">
            {outcomes.map((outcome) => (
              <article key={outcome.number}>
                <span>{outcome.number}</span>
                <h3>{outcome.title}</h3>
                <p>{outcome.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="graduate-journey" aria-labelledby="graduate-journey-title">
        <div className="container">
          <header className="graduate-detail-heading graduate-detail-heading--dark">
            <div>
              <p className="section-kicker section-kicker--dark">02 · Учебная жизнь</p>
              <p className="section-index section-index--dark" aria-hidden="true">FP / PRACTICE</p>
            </div>
            <div>
              <h2 id="graduate-journey-title">Путь от изучения к результату</h2>
              <p>Фотографии показывают три важных части обучения: практику, профильную подготовку и завершение программы.</p>
            </div>
          </header>

          <div className="graduate-journey__list">
            {journey.map((item) => (
              <article key={item.number}>
                <figure>
                  <Image src={item.image} alt={item.alt} fill sizes="(max-width: 800px) 100vw, 48vw" />
                  <span aria-hidden="true">{item.number}</span>
                </figure>
                <div>
                  <p>{item.label}</p>
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="graduate-proof" aria-labelledby="graduate-proof-title">
        <div className="container graduate-proof__grid">
          <div>
            <p className="section-kicker">03 · Без постановочных историй</p>
            <h2 id="graduate-proof-title">Мы показываем школу такой, какая она есть</h2>
          </div>
          <div className="graduate-proof__statement">
            <p>
              В кадре — занятия, преподаватели и учебные группы Fitness Pride.
              Это честное подтверждение того, что теория соединяется с живой практикой.
            </p>
            <dl>
              <div><dt>Теория</dt><dd>профессиональная база</dd></div>
              <div><dt>Практика</dt><dd>отработка навыков</dd></div>
              <div><dt>Поддержка</dt><dd>контакт с методистами</dd></div>
              <div><dt>Сертификат</dt><dd>входит в стоимость</dd></div>
            </dl>
          </div>
        </div>
      </section>

      <section className="graduate-next-step">
        <div className="container graduate-next-step__grid">
          <div>
            <p>Следующий выпуск начинается с выбора программы</p>
            <h2>Сделайте первый шаг в профессию</h2>
          </div>
          <div>
            <p>Расскажите о своей цели — команда школы поможет выбрать подходящее направление и формат обучения.</p>
            <div>
              <a className="button" href="/contacts#application-form">Получить консультацию <span aria-hidden="true">↗</span></a>
              <a className="text-link" href="/programs">Смотреть программы <span aria-hidden="true">→</span></a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
