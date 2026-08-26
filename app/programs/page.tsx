import type { Metadata } from 'next';
import { SiteHeader } from '../components/site-header';

export const metadata: Metadata = {
  title: 'Программы обучения | Fitness Pride',
  description: 'Подробные программы подготовки персональных тренеров, инструкторов групповых программ и инструкторов-универсалов.',
};

const foundations = [
  {
    number: '01',
    title: 'Анатомия и физиология',
    topics: ['Типы тканей, суставы и мышцы', 'Механизм долгосрочной адаптации', 'Функциональная анатомия скелетных мышц', 'Анатомия пищеварительной системы', 'Гормональная регуляция'],
  },
  {
    number: '02',
    title: 'Основы рационального питания',
    topics: ['Обзор белков, жиров, углеводов и витаминов', 'Расчёт суточной нормы по формуле', 'Меню для набора, удержания и снижения массы тела', 'Автоматизированный расчёт КБЖУ'],
  },
];

const gymPractice = ['Базовые и изолированные упражнения', 'Тренировочные программы SPLIT и FULL BODY', 'Демонстрация упражнений в тренажёрном зале', 'Презентация и объяснение техники', 'Составление программ для разных целей и задач'];
const groupPractice = ['Музыкальные квадраты, счёт и подача команд', 'Базовые шаги аэробики на полу', 'Шаги и модификации на степ-платформе', 'Силовые упражнения на все группы мышц под музыку', 'Миофасциальный релиз', 'Stretching', 'Pilates с учётом типов осанки', 'Tai-bo', 'Функциональные петли TRX'];

type ModuleProps = { number: string; title: string; topics: string[]; accent?: string };

function Module({ number, title, topics, accent }: ModuleProps) {
  return (
    <article className="course-module">
      <div><span>{number}</span>{accent && <small>{accent}</small>}</div>
      <h3>{title}</h3>
      <ul>{topics.map((topic) => <li key={topic}>{topic}</li>)}</ul>
    </article>
  );
}

function SharedModules() {
  return <>{foundations.map((module) => <Module key={module.number} {...module} />)}</>;
}

export default function ProgramsPage() {
  return (
    <main className="site-shell programs-page">
      <SiteHeader active="programs" />
      <section className="programs-page__hero" aria-labelledby="programs-page-title">
        <div className="container">
          <p className="page-breadcrumb"><a href="/">Главная</a><span>/</span>Программы обучения</p>
          <p className="eyebrow"><span aria-hidden="true" />Профессиональная подготовка</p>
          <h1 id="programs-page-title">Выберите свою<br /><em>программу</em></h1>
          <p className="programs-page__lead">Три траектории с общей фундаментальной базой и практикой по выбранному направлению.</p>
          <div className="programs-page__facts">
            <div><strong>2 месяца</strong><span>период обучения</span></div>
            <div><strong>Гибкий старт</strong><span>начните в любой момент</span></div>
            <div><strong>Навсегда</strong><span>доступ к модулям</span></div>
            <div><strong>Рассрочка</strong><span>два равных платежа</span></div>
          </div>
        </div>
      </section>

      <nav className="programs-page__nav" aria-label="Программы обучения">
        <div className="container"><a href="#gym">Тренажёрный зал</a><a href="#group">Групповые программы</a><a href="#universal">Инструктор-универсал</a></div>
      </nav>

      <section className="course" id="gym" aria-labelledby="gym-title">
        <div className="container">
          <header className="course__header">
            <div><span>Программа 01</span><small>Персональный тренинг</small></div>
            <div><h2 id="gym-title">Инструктор тренажёрного зала.<br /><em>Персональный тренер</em></h2><p>Подготовка к индивидуальной работе с клиентом: от понимания тела до уверенной демонстрации упражнений и составления программы.</p></div>
          </header>
          <div className="course__modules">
            <SharedModules />
            <Module number="03" title="Тренировочные программы в тренажёрном зале" topics={gymPractice} accent="Профильная практика" />
            <Module number="04" title="Первая доврачебная помощь" topics={['Лекция по оказанию первой доврачебной медицинской помощи']} />
          </div>
          <footer className="course__result"><p><strong>Что входит:</strong> обратная связь методистов, домашние задания и тестирование, постоянный доступ к материалам и сертификат после выполнения условий программы.</p><a href="tel:+79786456072">Узнать стоимость <span aria-hidden="true">↗</span></a></footer>
        </div>
      </section>

      <section className="course course--light" id="group" aria-labelledby="group-title">
        <div className="container">
          <header className="course__header">
            <div><span>Программа 02</span><small>Групповой фитнес</small></div>
            <div><h2 id="group-title">Инструктор<br /><em>групповых программ</em></h2><p>Учимся слышать музыку, работать с группой и проводить современные форматы тренировок в зале аэробики.</p></div>
          </header>
          <div className="course__modules">
            <SharedModules />
            <Module number="03" title="Тренировочные программы в зале аэробики" topics={groupPractice} accent="Профильная практика" />
            <Module number="04" title="Первая доврачебная помощь" topics={['Лекция по оказанию первой доврачебной медицинской помощи']} />
          </div>
          <footer className="course__result"><p><strong>Формат:</strong> начните в удобный момент, двигайтесь по модулям через задания и тесты и задавайте вопросы методистам на всём пути.</p><a href="tel:+79786456072">Получить консультацию <span aria-hidden="true">↗</span></a></footer>
        </div>
      </section>

      <section className="course course--featured" id="universal" aria-labelledby="universal-title">
        <div className="container">
          <header className="course__header">
            <div><span>Программа 03</span><small>Самая полная траектория</small></div>
            <div><h2 id="universal-title">Инструктор-<em>универсал</em></h2><p>Сразу два направления: «Инструктор тренажёрного зала. Персональный тренер» и «Инструктор групповых программ». На второе направление действует скидка 50%.</p></div>
          </header>
          <div className="course__modules course__modules--universal">
            <SharedModules />
            <Module number="03A" title="Практика групповых программ" topics={groupPractice} accent="Зал аэробики" />
            <Module number="03B" title="Практика персонального тренера" topics={gymPractice} accent="Тренажёрный зал" />
            <Module number="04" title="Первая доврачебная помощь" topics={['Лекция по оказанию первой доврачебной медицинской помощи']} />
          </div>
          <footer className="course__result"><p><strong>В результате:</strong> одна комплексная траектория для работы и с персональными клиентами, и с группами. Сертификат входит в стоимость.</p><a className="button" href="tel:+79786456072">Выбрать программу <span aria-hidden="true">↗</span></a></footer>
        </div>
      </section>

      <section className="programs-note">
        <div className="container">
          <div><p>Документы об обучении</p><h2>Сертификат входит в стоимость программы</h2></div>
          <p>Диплом установленного образца доступен за дополнительную оплату. Требования к документам об образовании и порядок оформления уточняются на консультации.</p>
        </div>
      </section>
    </main>
  );
}
