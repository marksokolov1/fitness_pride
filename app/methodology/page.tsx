import type { Metadata } from 'next';
import Image from 'next/image';
import { SiteHeader } from '../components/site-header';

export const metadata: Metadata = {
  title: 'Методика обучения | Fitness Pride',
  description:
    'Подробная методика Fitness Pride: модульное обучение, теория, практическая подготовка, домашние задания, тестирование и обратная связь методистов.',
};

const principles = [
  {
    number: '01',
    title: 'Последовательные модули',
    text: 'Материал изучается поэтапно: от базовой анатомии и физиологии к профильной методике и практическим задачам.',
  },
  {
    number: '02',
    title: 'Теория через применение',
    text: 'Каждый теоретический блок связан с тем, что специалист будет объяснять, показывать и использовать в реальной работе.',
  },
  {
    number: '03',
    title: 'Закрепление знаний',
    text: 'Домашние задания и тестирование помогают проверить понимание материала до перехода к следующему уровню.',
  },
  {
    number: '04',
    title: 'Контакт с методистом',
    text: 'Вопросы разбираются напрямую с создателями программы — без отдельного слоя кураторов.',
  },
];

const foundationModules = [
  {
    number: '01',
    title: 'Анатомия и физиология',
    description:
      'База для понимания движения, адаптации организма и безопасного построения тренировочного процесса.',
    topics: [
      'Типы тканей, суставы и мышцы',
      'Механизм долгосрочной адаптации',
      'Функциональная анатомия скелетных мышц',
      'Анатомия пищеварительной системы',
      'Гормональная регуляция',
    ],
  },
  {
    number: '02',
    title: 'Основы рационального питания',
    description:
      'Прикладные основы питания для корректной работы с целями набора, удержания и снижения массы тела.',
    topics: [
      'Белки, жиры и углеводы',
      'Расчёт суточной нормы',
      'Составление меню под разные цели',
      'Работа с расчётом калорийности и КБЖУ',
    ],
  },
  {
    number: '04',
    title: 'Первая доврачебная помощь',
    description:
      'Отдельный учебный блок о базовых действиях специалиста до прибытия медицинской помощи.',
    topics: ['Лекция по оказанию первой доврачебной помощи'],
  },
];

const gymTopics = [
  'Базовые и изолированные упражнения',
  'Программы SPLIT и FULL BODY',
  'Демонстрация упражнений в тренажёрном зале',
  'Презентация техники и объяснение клиенту',
  'Составление программ для разных целей и задач',
];

const groupTopics = [
  'Музыкальные квадраты, счёт и команды',
  'Базовые шаги аэробики и их модификации',
  'Работа со степ-платформой',
  'Силовые упражнения в групповом формате',
  'Миофасциальный релиз и stretching',
  'Pilates с учётом типов осанки',
  'Tai-bo и функциональные петли TRX',
];

const learningFlow = [
  ['01', 'Выбор направления', 'Определяем программу и формат обучения под профессиональную цель.'],
  ['02', 'Доступ к материалам', 'Обучающийся начинает с фундаментального модуля и движется последовательно.'],
  ['03', 'Изучение теории', 'Лекции и учебные материалы формируют профессиональную базу.'],
  ['04', 'Задания и тесты', 'Каждый этап закрепляется самостоятельной работой и проверкой знаний.'],
  ['05', 'Практическая отработка', 'Навыки демонстрации, объяснения и построения занятий переводят теорию в действие.'],
  ['06', 'Завершение программы', 'После прохождения программы обучающийся получает сертификат и сохраняет доступ к модулям.'],
];

export default function MethodologyPage() {
  return (
    <main className="site-shell method-page">
      <SiteHeader active="methodology" />

      <section className="method-page__hero" aria-labelledby="method-page-title">
        <div className="container method-page__hero-grid">
          <div className="method-page__hero-content">
            <p className="page-breadcrumb">
              <a href="/">Главная</a>
              <span>/</span>
              Методика обучения
            </p>
            <p className="eyebrow">
              <span aria-hidden="true" />
              Подробно об учебном процессе
            </p>
            <h1 id="method-page-title">
              Методика
              <br />
              <em>обучения</em>
            </h1>
            <p className="method-page__hero-lead">
              Модульная система Fitness Pride ведёт обучающегося от
              фундаментальных знаний к практической работе — последовательно,
              с заданиями, тестированием и обратной связью методистов.
            </p>

            <div className="method-page__facts" aria-label="Основные условия обучения">
              <div>
                <strong>2</strong>
                <span>месяца обучения</span>
              </div>
              <div>
                <strong>4</strong>
                <span>основных модуля</span>
              </div>
              <div>
                <strong>∞</strong>
                <span>доступ к материалам</span>
              </div>
            </div>
          </div>

          <figure className="method-page__hero-photo">
            <Image
              src="/graduates/practical-training.jpg"
              alt="Практическое занятие Fitness Pride в тренажёрном зале"
              fill
              priority
              sizes="(max-width: 900px) 100vw, 44vw"
            />
            <div aria-hidden="true" />
            <figcaption>
              <span>Теория + практика</span>
              <strong>Учимся понимать, показывать и объяснять</strong>
            </figcaption>
          </figure>
        </div>
      </section>

      <nav className="method-page__contents" aria-label="Содержание страницы">
        <div className="container">
          <a href="#principles">Принципы</a>
          <a href="#modules">Учебные модули</a>
          <a href="#practice">Профильная практика</a>
          <a href="#learning-flow">Путь обучающегося</a>
          <a href="#result">Результат</a>
        </div>
      </nav>

      <section className="method-principles" id="principles" aria-labelledby="principles-title">
        <div className="container">
          <header className="method-detail-heading">
            <div>
              <p className="section-kicker">01 · Основа подхода</p>
              <p className="section-index" aria-hidden="true">FP / METHOD</p>
            </div>
            <div>
              <h2 id="principles-title">Как устроено обучение</h2>
              <p>
                Главная задача методики — не просто дать информацию, а помочь
                последовательно превратить её в рабочие знания специалиста.
              </p>
            </div>
          </header>

          <div className="method-principles__grid">
            {principles.map((item) => (
              <article key={item.number}>
                <span>{item.number}</span>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="method-modules" id="modules" aria-labelledby="modules-title">
        <div className="container">
          <header className="method-detail-heading method-detail-heading--dark">
            <div>
              <p className="section-kicker section-kicker--dark">02 · Учебная программа</p>
              <p className="section-index section-index--dark" aria-hidden="true">FP / MODULES</p>
            </div>
            <div>
              <h2 id="modules-title">Фундаментальные модули</h2>
              <p>
                Эти блоки формируют общую профессиональную основу независимо от
                выбранного направления подготовки.
              </p>
            </div>
          </header>

          <div className="method-modules__list">
            {foundationModules.map((module) => (
              <article key={module.number}>
                <div className="method-module__number">{module.number}</div>
                <div className="method-module__intro">
                  <h3>{module.title}</h3>
                  <p>{module.description}</p>
                </div>
                <ul>
                  {module.topics.map((topic) => (
                    <li key={topic}>{topic}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="method-practice" id="practice" aria-labelledby="practice-title">
        <div className="container">
          <header className="method-detail-heading">
            <div>
              <p className="section-kicker">03 · Профильная практика</p>
              <p className="section-index" aria-hidden="true">FP / SKILLS</p>
            </div>
            <div>
              <h2 id="practice-title">Практика зависит от направления</h2>
              <p>
                Третий модуль меняется в зависимости от выбранной профессии.
                Программа «Инструктор-универсал» объединяет оба практических
                направления.
              </p>
            </div>
          </header>

          <div className="practice-tracks">
            <article>
              <div className="practice-track__topline">
                <span>Направление 01</span>
                <small>Тренажёрный зал</small>
              </div>
              <h3>Персональный тренер</h3>
              <p>
                Учимся анализировать упражнения, объяснять технику и собирать
                тренировочную программу под конкретную цель.
              </p>
              <ul>
                {gymTopics.map((topic) => <li key={topic}>{topic}</li>)}
              </ul>
            </article>

            <article className="practice-track--accent">
              <div className="practice-track__topline">
                <span>Направление 02</span>
                <small>Групповой фитнес</small>
              </div>
              <h3>Групповые программы</h3>
              <p>
                Осваиваем музыкальную структуру, команды, базовые движения и
                современные форматы групповых занятий.
              </p>
              <ul>
                {groupTopics.map((topic) => <li key={topic}>{topic}</li>)}
              </ul>
            </article>
          </div>
        </div>
      </section>

      <section className="method-flow" id="learning-flow" aria-labelledby="flow-title">
        <div className="container method-flow__layout">
          <div className="method-flow__intro">
            <p className="section-kicker section-kicker--dark">04 · Путь обучающегося</p>
            <h2 id="flow-title">От выбора программы до сертификата</h2>
            <p>
              Обучение рассчитано на два месяца. Темп остаётся гибким, но
              движение по программе сохраняет понятную последовательность.
            </p>
            <a className="button" href="tel:+79786456072">
              Обсудить формат
              <span aria-hidden="true">↗</span>
            </a>
          </div>

          <ol className="method-flow__steps">
            {learningFlow.map(([number, title, text]) => (
              <li key={number}>
                <span>{number}</span>
                <div>
                  <h3>{title}</h3>
                  <p>{text}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="method-result" id="result" aria-labelledby="result-title">
        <div className="container method-result__grid">
          <div>
            <p className="section-kicker">05 · После обучения</p>
            <h2 id="result-title">Материалы остаются с вами</h2>
          </div>
          <div className="method-result__content">
            <p>
              Доступ ко всем учебным модулям сохраняется после завершения
              программы. Выпускник может возвращаться к теории, а методисты
              остаются на связи по вопросам учебного материала.
            </p>
            <div className="method-result__cards">
              <article>
                <strong>Навсегда</strong>
                <span>доступ к учебным модулям</span>
              </article>
              <article>
                <strong>Включён</strong>
                <span>сертификат о завершении программы</span>
              </article>
              <article>
                <strong>Напрямую</strong>
                <span>обратная связь от методистов</span>
              </article>
            </div>
            <a className="button" href="/programs">
              Выбрать программу
              <span aria-hidden="true">↗</span>
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}

