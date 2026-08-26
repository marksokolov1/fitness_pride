import type { Metadata } from 'next';
import { SiteHeader } from '../components/site-header';

export const metadata: Metadata = {
  title: 'Сведения об образовательной организации | Fitness Pride',
  description:
    'Подтверждённые сведения о школе Fitness Pride, программах, преподавателях и условиях обучения.',
};

const sections = [
  { id: 'general', number: '01', title: 'Основные сведения' },
  { id: 'education', number: '02', title: 'Образование' },
  { id: 'team', number: '03', title: 'Руководство и педсостав' },
  { id: 'services', number: '04', title: 'Платные услуги' },
  { id: 'environment', number: '05', title: 'Условия обучения' },
  { id: 'documents', number: '06', title: 'Документы' },
];

export default function EducationInfoPage() {
  return (
    <main className="site-shell education-page">
      <SiteHeader active="education" />

      <section className="education-page__hero" aria-labelledby="education-page-title">
        <div className="container">
          <p className="page-breadcrumb"><a href="/">Главная</a><span>/</span>Сведения</p>
          <p className="eyebrow"><span aria-hidden="true" />Открытая информация</p>
          <h1 id="education-page-title">Сведения об<br /><em>образовательной организации</em></h1>
          <p className="education-page__lead">
            В разделе собраны подтверждённые сведения о школе, программах,
            преподавателях и условиях обучения. Юридические документы
            публикуются только после проверки оригиналов и реквизитов.
          </p>
          <p className="education-page__updated">Информация актуализирована: 26 августа 2026 года</p>
        </div>
      </section>

      <nav className="education-page__nav" aria-label="Содержание раздела">
        <div className="container">
          {sections.map((section) => <a href={`#${section.id}`} key={section.id}><span>{section.number}</span>{section.title}</a>)}
        </div>
      </nav>

      <section className="education-info-section" id="general" aria-labelledby="general-title">
        <div className="container education-info-section__grid">
          <header><span>01</span><p>Основные сведения</p><h2 id="general-title">О школе</h2></header>
          <dl className="education-data">
            <div><dt>Наименование</dt><dd>Fitness Pride — школа обучения фитнесу</dd></div>
            <div><dt>Руководитель</dt><dd>Майструк Игорь Игоревич</dd></div>
            <div><dt>Место осуществления деятельности</dt><dd>г. Донецк, ул. Артёма, 198</dd></div>
            <div><dt>Форматы обучения</dt><dd>Онлайн-обучение и очная практическая подготовка</dd></div>
            <div><dt>Телефон</dt><dd><a href="tel:+79786456072">+7 (978) 645-60-72</a></dd></div>
            <div><dt>Официальные страницы</dt><dd><a href="https://t.me/igor_maistruk" target="_blank" rel="noreferrer">Telegram</a><a href="https://vk.ru/fitness_pride_donetsk" target="_blank" rel="noreferrer">ВКонтакте</a><a href="https://www.instagram.com/fitness_pride_donetsk/" target="_blank" rel="noreferrer">Instagram</a></dd></div>
          </dl>
        </div>
      </section>

      <section className="education-info-section education-info-section--dark" id="education" aria-labelledby="education-title">
        <div className="container education-info-section__grid">
          <header><span>02</span><p>Образование</p><h2 id="education-title">Программы подготовки</h2></header>
          <div className="education-program-list">
            <a href="/programs#gym"><span>01</span><div><h3>Инструктор тренажёрного зала. Персональный тренер</h3><p>Анатомия, питание, тренировочные программы и первая доврачебная помощь.</p></div><b aria-hidden="true">↗</b></a>
            <a href="/programs#group"><span>02</span><div><h3>Инструктор групповых программ</h3><p>Аэробика, step, силовые форматы, stretching, Pilates, Tai-bo и TRX.</p></div><b aria-hidden="true">↗</b></a>
            <a href="/programs#universal"><span>03</span><div><h3>Инструктор-универсал</h3><p>Комплексная программа, объединяющая персональный и групповой тренинг.</p></div><b aria-hidden="true">↗</b></a>
            <div className="education-program-facts"><p><strong>2 месяца</strong><span>продолжительность</span></p><p><strong>В любой момент</strong><span>начало обучения</span></p><p><strong>Навсегда</strong><span>доступ к материалам</span></p></div>
          </div>
        </div>
      </section>

      <section className="education-info-section" id="team" aria-labelledby="team-info-title">
        <div className="container education-info-section__grid">
          <header><span>03</span><p>Руководство и педагогический состав</p><h2 id="team-info-title">Команда школы</h2></header>
          <div className="education-team-list">
            <article><span>Руководитель</span><h3>Игорь Игоревич Майструк</h3><p>Основатель, руководитель и методист; фитнес-тренер и нутрициолог с опытом более 15 лет.</p></article>
            <article><span>Преподаватель</span><h3>Сергей Александрович Зуйков</h3><p>Кандидат биологических наук, доцент; анатомия, физиология и рациональное питание.</p></article>
            <article><span>Преподаватель</span><h3>Виктория Александровна Бербик</h3><p>Сертифицированный тренер по аквааэробике и аквастепу.</p></article>
            <article><span>Преподаватель</span><h3>Ирина Гавриленко</h3><p>Тренер-преподаватель по спортивной аэробике и методист спортивной школы.</p></article>
            <a className="button" href="/teachers">Образование и опыт преподавателей <span aria-hidden="true">↗</span></a>
          </div>
        </div>
      </section>

      <section className="education-info-section education-info-section--light" id="services" aria-labelledby="services-title">
        <div className="container education-info-section__grid">
          <header><span>04</span><p>Платные образовательные услуги</p><h2 id="services-title">Условия оплаты</h2></header>
          <div className="education-service-cards">
            <article><span>01</span><h3>Стоимость</h3><p>Актуальная стоимость зависит от выбранной программы и уточняется на консультации до начала обучения.</p></article>
            <article><span>02</span><h3>Рассрочка</h3><p>Оплата делится на две равные части: первая перед стартом, вторая — через 30 дней после начала.</p></article>
            <article><span>03</span><h3>Сертификат</h3><p>Сертификат входит в стоимость и выдаётся после выполнения условий учебной программы.</p></article>
            <article><span>04</span><h3>Дополнительный документ</h3><p>Возможность и условия оформления диплома установленного образца уточняются индивидуально с учётом документов об образовании.</p></article>
          </div>
        </div>
      </section>

      <section className="education-info-section education-info-section--dark" id="environment" aria-labelledby="environment-title">
        <div className="container education-info-section__grid">
          <header><span>05</span><p>Условия обучения</p><h2 id="environment-title">Образовательная среда</h2></header>
          <div className="education-environment">
            <div><strong>Онлайн-материалы</strong><p>Теоретические модули, задания и тестирование доступны дистанционно.</p></div>
            <div><strong>Практические занятия</strong><p>Профильные навыки отрабатываются в оборудованных спортивных залах.</p></div>
            <div><strong>Обратная связь</strong><p>Преподаватели и методисты помогают разбирать учебный материал.</p></div>
            <div><strong>Доступ после курса</strong><p>Обучающийся сохраняет постоянный доступ к открытым учебным модулям.</p></div>
          </div>
        </div>
      </section>

      <section className="education-info-section education-documents" id="documents" aria-labelledby="documents-title">
        <div className="container education-info-section__grid">
          <header><span>06</span><p>Документы</p><h2 id="documents-title">Официальные материалы</h2></header>
          <div className="education-documents__content">
            <p className="education-documents__lead">Скан-копии юридических и локальных документов размещаются в публичном разделе после проверки оригиналов и реквизитов.</p>
            <div>
              <p><span>01</span>Юридические реквизиты организации</p>
              <p><span>02</span>Документы, подтверждающие основание образовательной деятельности</p>
              <p><span>03</span>Локальные акты и правила обучения</p>
              <p><span>04</span>Форма договора и порядок оказания платных услуг</p>
              <p><span>05</span>Политика обработки персональных данных</p>
            </div>
            <aside><strong>До публикации полного комплекта</strong><p>Запросить подтверждающие документы и уточнить условия оформления итоговых документов можно напрямую у администрации школы.</p><a className="button" href="tel:+79786456072">Запросить документы <span aria-hidden="true">↗</span></a></aside>
          </div>
        </div>
      </section>
    </main>
  );
}
