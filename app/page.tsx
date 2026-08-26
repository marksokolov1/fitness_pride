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

const programs = [
  {
    number: '01',
    title: 'Инструктор тренажёрного зала. Персональный тренер',
    description:
      'Подготовка к работе в тренажёрном зале: от функциональной анатомии до составления и презентации тренировочных программ.',
    topics: [
      'Анатомия и физиология',
      'Основы рационального питания',
      'Тренировочные программы',
      'Первая доврачебная помощь',
    ],
    note: 'Персональный тренинг',
  },
  {
    number: '02',
    title: 'Инструктор групповых программ',
    description:
      'Обучение работе с группой, музыкальным квадратам, аэробике и современным форматам групповых занятий.',
    topics: [
      'Аэробика и степ-платформа',
      'Stretching и Pilates',
      'Tai-bo и функциональные петли TRX',
      'Анатомия и питание',
    ],
    note: 'Групповой фитнес',
  },
  {
    number: '03',
    title: 'Инструктор-универсал',
    fullTitle:
      'Групповые программы и тренажёрный зал. Персональный тренер',
    description:
      'Самая полная траектория: объединяет два направления и готовит специалиста к индивидуальной и групповой работе.',
    topics: [
      'Два направления в одной программе',
      'Тренажёрный зал и аэробика',
      'Практика презентации упражнений',
      'Скидка 50% на второе направление',
    ],
    note: 'Комплексная подготовка',
    featured: true,
  },
];

const learningStages = [
  {
    number: '01',
    title: 'Выбор программы',
    text: 'Определяем направление подготовки: тренажёрный зал, групповые программы или комплексный формат.',
    label: 'Старт',
  },
  {
    number: '02',
    title: 'Теоретическая база',
    text: 'Последовательно изучаем анатомию, физиологию, рациональное питание и первую доврачебную помощь.',
    label: 'Модули',
  },
  {
    number: '03',
    title: 'Практическая отработка',
    text: 'Учимся демонстрировать и презентовать упражнения, составлять программы и работать с выбранным форматом занятий.',
    label: 'Навыки',
  },
  {
    number: '04',
    title: 'Задания и тестирование',
    text: 'Закрепляем каждый этап домашними заданиями и тестами с постоянной обратной связью от методистов.',
    label: 'Контроль',
  },
  {
    number: '05',
    title: 'Завершение обучения',
    text: 'Получаем сертификат, который входит в стоимость, и сохраняем постоянный доступ ко всем учебным модулям.',
    label: 'Результат',
  },
];

const teachers = [
  {
    number: '01',
    name: 'Игорь Майструк',
    role: 'Основатель и методист школы',
    image: '/teachers/igor-maistruk.jpg',
    alt: 'Игорь Майструк — основатель и методист Fitness Pride',
    position: '50% 34%',
    areas: ['Тренажёрный зал', 'Анатомия', 'Питание', 'Pilates и TRX'],
    featured: true,
  },
  {
    number: '02',
    name: 'Сергей Зуйков',
    role: 'Преподаватель теоретических дисциплин',
    image: '/teachers/sergey-zuykov.jpg',
    alt: 'Сергей Зуйков — преподаватель Fitness Pride',
    position: '50% 35%',
    areas: ['Анатомия', 'Физиология', 'Основы питания'],
  },
  {
    number: '03',
    name: 'Виктория Бербик',
    role: 'Методист · Аквафитнес',
    image: '/teachers/victoria-berbik.jpg',
    alt: 'Виктория Бербик — методист Fitness Pride',
    position: '50% 34%',
    areas: ['Аквафитнес', 'Аквааэробика', 'Групповые программы'],
  },
  {
    number: '04',
    name: 'Ирина Гавриленко',
    role: 'Преподаватель групповых программ',
    image: '/teachers/irina-gavrilenko.jpg',
    alt: 'Ирина Гавриленко — преподаватель Fitness Pride',
    position: '50% 34%',
    areas: ['Групповые программы', 'Практическая подготовка'],
  },
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

      <section className="programs" id="programs" aria-labelledby="programs-title">
        <div className="container">
          <header className="section-heading">
            <div>
              <p className="section-kicker">01 · Направления подготовки</p>
              <p className="section-index" aria-hidden="true">
                FP / EDUCATION
              </p>
            </div>
            <div>
              <h2 id="programs-title">Программы обучения</h2>
              <p>
                Выберите направление для старта в профессии или комплексную
                подготовку для работы в нескольких форматах фитнеса.
              </p>
            </div>
          </header>

          <div className="program-grid">
            {programs.map((program) => (
              <article
                className={`program-card${program.featured ? ' program-card--featured' : ''}`}
                key={program.number}
              >
                <div className="program-card__topline">
                  <span>{program.number}</span>
                  <small>{program.note}</small>
                </div>

                {program.featured && (
                  <p className="program-card__flag">Самая полная программа</p>
                )}

                <h3>{program.title}</h3>
                {program.fullTitle && (
                  <p className="program-card__subtitle">{program.fullTitle}</p>
                )}
                <p className="program-card__description">{program.description}</p>

                <ul>
                  {program.topics.map((topic) => (
                    <li key={topic}>
                      <span aria-hidden="true">+</span>
                      {topic}
                    </li>
                  ))}
                </ul>

                <a href="tel:+79786456072">
                  Узнать о программе
                  <span aria-hidden="true">↗</span>
                </a>
              </article>
            ))}
          </div>

          <div className="program-facts" aria-label="Общие условия обучения">
            <p>Общее для всех программ</p>
            <ul>
              <li>
                <strong>2 месяца</strong>
                <span>период обучения</span>
              </li>
              <li>
                <strong>В любой момент</strong>
                <span>начало обучения</span>
              </li>
              <li>
                <strong>Навсегда</strong>
                <span>доступ к модулям</span>
              </li>
              <li>
                <strong>Обратная связь</strong>
                <span>от методистов школы</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section className="advantages" id="advantages" aria-labelledby="advantages-title">
        <div className="advantages__orb" aria-hidden="true" />
        <div className="container">
          <header className="advantages__heading">
            <div>
              <p className="section-kicker section-kicker--dark">
                02 · Преимущества школы
              </p>
              <p className="section-index section-index--dark" aria-hidden="true">
                FP / APPROACH
              </p>
            </div>
            <div>
              <h2 id="advantages-title">
                Почему
                <br />
                <em>Fitness Pride?</em>
              </h2>
              <p>
                Обучение построено так, чтобы знания не оставались теорией:
                методисты сопровождают движение по программе и помогают
                закреплять материал через задания и тестирование.
              </p>
            </div>
          </header>

          <div className="advantages__grid">
            <article className="advantage-feature">
              <div className="advantage-feature__topline">
                <span>Главное отличие</span>
                <small>01 / 05</small>
              </div>
              <h3>Прямая обратная связь от методистов</h3>
              <p>
                Вопросы по учебному материалу разбирают специалисты школы,
                которые знают программу и сопровождают обучающихся на каждом
                этапе.
              </p>

              <div className="expert-path" aria-label="Прямое взаимодействие с методистом">
                <div>
                  <small>Обучающийся</small>
                  <strong>Вы</strong>
                </div>
                <span aria-hidden="true">
                  <i />
                  <b>напрямую</b>
                  <i />
                </span>
                <div>
                  <small>Эксперт</small>
                  <strong>Методист</strong>
                </div>
              </div>
            </article>

            <div className="advantage-list">
              <article>
                <span>02</span>
                <p className="advantage-list__icon" aria-hidden="true">∞</p>
                <h3>Доступ навсегда</h3>
                <p>
                  Все учебные модули остаются доступными после завершения
                  программы.
                </p>
              </article>
              <article>
                <span>03</span>
                <p className="advantage-list__icon" aria-hidden="true">↗</p>
                <h3>От знаний к навыкам</h3>
                <p>
                  Модульная система, домашние задания и тестирование помогают
                  последовательно закреплять материал.
                </p>
              </article>
              <article>
                <span>04</span>
                <p className="advantage-list__icon" aria-hidden="true">+</p>
                <h3>Питание уже включено</h3>
                <p>
                  Основы рационального питания входят в программы подготовки,
                  а не продаются отдельным курсом.
                </p>
              </article>
              <article>
                <span>05</span>
                <p className="advantage-list__icon" aria-hidden="true">24</p>
                <h3>Старт в любой момент</h3>
                <p>
                  Начните обучение без привязки к фиксированной дате и двигайтесь
                  по программе в удобное время.
                </p>
              </article>
            </div>
          </div>

          <footer className="advantages__footer">
            <p>Профессиональные знания · Последовательная практика · Поддержка специалистов</p>
            <a href="tel:+79786456072">
              Обсудить обучение
              <span aria-hidden="true">↗</span>
            </a>
          </footer>
        </div>
      </section>

      <section className="methodology" id="methodology" aria-labelledby="methodology-title">
        <div className="container methodology__layout">
          <div className="methodology__intro">
            <p className="section-kicker">03 · Учебный процесс</p>
            <h2 id="methodology-title">
              Как проходит
              <br />
              <em>обучение</em>
            </h2>
            <p>
              Программа построена по модульной системе: новый материал
              открывается последовательно и закрепляется практикой, заданиями
              и проверкой знаний.
            </p>

            <div className="methodology__summary">
              <div>
                <strong>2</strong>
                <span>месяца обучения</span>
              </div>
              <div>
                <strong>5</strong>
                <span>понятных этапов</span>
              </div>
            </div>

            <a className="button" href="tel:+79786456072">
              Подобрать программу
              <span aria-hidden="true">↗</span>
            </a>
          </div>

          <ol className="learning-path">
            {learningStages.map((stage, index) => (
              <li key={stage.number}>
                <div className="learning-path__marker" aria-hidden="true">
                  <span>{stage.number}</span>
                  {index < learningStages.length - 1 && <i />}
                </div>
                <article>
                  <small>{stage.label}</small>
                  <h3>{stage.title}</h3>
                  <p>{stage.text}</p>
                </article>
              </li>
            ))}
          </ol>
        </div>

        <div className="methodology__strip" aria-hidden="true">
          <span>Теория</span>
          <i />
          <span>Практика</span>
          <i />
          <span>Обратная связь</span>
          <i />
          <span>Результат</span>
        </div>
      </section>

      <section className="teachers" id="teachers" aria-labelledby="teachers-title">
        <div className="teachers__accent" aria-hidden="true" />
        <div className="container">
          <header className="teachers__heading">
            <div>
              <p className="section-kicker section-kicker--dark">04 · Команда школы</p>
              <p className="section-index section-index--dark" aria-hidden="true">
                FP / EXPERTS
              </p>
            </div>
            <div>
              <h2 id="teachers-title">
                Преподаватели-
                <em>практики</em>
              </h2>
              <p>
                Профильные специалисты, которые соединяют фундаментальные
                знания с реальным опытом работы в фитнесе и лично сопровождают
                обучение.
              </p>
            </div>
          </header>

          <div className="teacher-grid">
            {teachers.map((teacher) => (
              <article
                className={`teacher-card${teacher.featured ? ' teacher-card--featured' : ''}`}
                key={teacher.number}
              >
                <div className="teacher-card__photo">
                  <Image
                    src={teacher.image}
                    alt={teacher.alt}
                    fill
                    sizes="(max-width: 520px) 100vw, (max-width: 1020px) 50vw, 25vw"
                    style={{ objectPosition: teacher.position }}
                  />
                  <div className="teacher-card__shade" aria-hidden="true" />
                  <span className="teacher-card__number" aria-hidden="true">
                    {teacher.number}
                  </span>
                  <p className="teacher-card__role">{teacher.role}</p>
                </div>

                <div className="teacher-card__content">
                  <h3>{teacher.name}</h3>
                  <ul aria-label={`Направления преподавателя: ${teacher.name}`}>
                    {teacher.areas.map((area) => (
                      <li key={area}>{area}</li>
                    ))}
                  </ul>
                </div>
              </article>
            ))}
          </div>

          <footer className="teachers__footer">
            <p>
              Преподаватели остаются на связи и помогают разобраться в
              материале на каждом этапе обучения.
            </p>
            <a href="tel:+79786456072">
              Задать вопрос команде
              <span aria-hidden="true">↗</span>
            </a>
          </footer>
        </div>
      </section>

      <section className="graduates" id="graduates" aria-labelledby="graduates-title">
        <div className="container">
          <header className="graduates__heading">
            <div>
              <p className="section-kicker">05 · Выпускники</p>
              <p className="section-index" aria-hidden="true">
                FP / RESULT
              </p>
            </div>
            <div>
              <h2 id="graduates-title">
                От обучения
                <br />
                <em>к результату</em>
              </h2>
              <p>
                Каждая фотография — реальная группа Fitness Pride. Обучающиеся
                проходят теорию, отрабатывают упражнения на практике и
                завершают программу получением сертификата.
              </p>
            </div>
          </header>

          <div className="graduate-gallery">
            <figure className="graduate-photo graduate-photo--main">
              <Image
                src="/graduates/graduation-group.jpg"
                alt="Выпускники Fitness Pride с сертификатами после завершения обучения"
                fill
                sizes="(max-width: 800px) 100vw, 60vw"
              />
              <div className="graduate-photo__shade" aria-hidden="true" />
              <figcaption>
                <span>01 · Завершение программы</span>
                <strong>Знания закреплены результатом</strong>
              </figcaption>
            </figure>

            <figure className="graduate-photo graduate-photo--practice">
              <Image
                src="/graduates/practical-training.jpg"
                alt="Практическое занятие Fitness Pride в тренажёрном зале"
                fill
                sizes="(max-width: 800px) 100vw, 40vw"
              />
              <div className="graduate-photo__shade" aria-hidden="true" />
              <figcaption>
                <span>02 · Практика</span>
                <strong>Работа с упражнениями в зале</strong>
              </figcaption>
            </figure>

            <figure className="graduate-photo graduate-photo--community">
              <Image
                src="/graduates/pilates-graduates.jpg"
                alt="Группа выпускников направления Pilates с сертификатами"
                fill
                sizes="(max-width: 800px) 100vw, 40vw"
              />
              <div className="graduate-photo__shade" aria-hidden="true" />
              <figcaption>
                <span>03 · Сообщество</span>
                <strong>Люди, объединённые профессией</strong>
              </figcaption>
            </figure>
          </div>

          <div className="graduate-outcomes" aria-label="Результаты обучения">
            <article>
              <span aria-hidden="true">01</span>
              <h3>Системные знания</h3>
              <p>Профессиональная база по выбранному направлению подготовки.</p>
            </article>
            <article>
              <span aria-hidden="true">02</span>
              <h3>Практические навыки</h3>
              <p>Отработка упражнений, программ и презентации материала.</p>
            </article>
            <article>
              <span aria-hidden="true">03</span>
              <h3>Сертификат</h3>
              <p>Документ о завершении программы уже входит в стоимость.</p>
            </article>
          </div>

          <footer className="graduates__footer">
            <p>Настоящая учебная жизнь школы — без постановочных стоковых историй.</p>
            <a className="button" href="tel:+79786456072">
              Стать выпускником
              <span aria-hidden="true">↗</span>
            </a>
          </footer>
        </div>
      </section>

      <section className="about" id="about" aria-labelledby="about-title">
        <div className="about__line" aria-hidden="true" />
        <div className="container">
          <header className="about__heading">
            <div>
              <p className="section-kicker section-kicker--dark">06 · О школе</p>
              <p className="section-index about__index" aria-hidden="true">
                FP / SCHOOL
              </p>
            </div>
            <div>
              <h2 id="about-title">
                Школа, созданная
                <br />
                <em>практиками</em>
              </h2>
              <p>
                Fitness Pride строит обучение вокруг профессиональной базы,
                практической отработки и прямого контакта с теми, кто создаёт
                учебные программы.
              </p>
            </div>
          </header>

          <article className="founder">
            <div className="founder__photo">
              <Image
                src="/teachers/igor-maistruk.jpg"
                alt="Игорь Игоревич Майструк — основатель Fitness Pride"
                fill
                sizes="(max-width: 800px) 100vw, 45vw"
                style={{ objectPosition: '50% 34%' }}
              />
              <div className="founder__photo-shade" aria-hidden="true" />
              <p className="founder__photo-label">
                <span>Основатель</span>
                <strong>Fitness Pride</strong>
              </p>
            </div>

            <div className="founder__content">
              <p className="founder__eyebrow">Основатель и руководитель школы</p>
              <h3>
                Игорь Игоревич
                <br />
                Майструк
              </h3>
              <p className="founder__lead">
                Фитнес-тренер, специалист по рациональному питанию, методист и
                автор образовательных материалов с опытом работы более 15 лет.
              </p>

              <ul className="founder__credentials">
                <li>
                  <span>01</span>
                  Профильное образование в области адаптивной физической культуры
                </li>
                <li>
                  <span>02</span>
                  Спортивное образование и практический тренерский опыт
                </li>
                <li>
                  <span>03</span>
                  Разработка и методическое сопровождение учебных материалов
                </li>
              </ul>

              <blockquote>
                Методисты — создатели программы — лично общаются с
                обучающимися и помогают разбирать материал без промежуточных
                кураторов.
              </blockquote>
            </div>
          </article>

          <div className="about__mission">
            <p>Миссия Fitness Pride</p>
            <h3>
              Помогать людям достигать целей в фитнесе и здоровом образе жизни
              через качественное образование и поддержку.
            </h3>
          </div>

          <div className="about-values" aria-label="Ценности Fitness Pride">
            <article>
              <span>01</span>
              <h3>Профессиональные знания</h3>
            </article>
            <article>
              <span>02</span>
              <h3>Практические навыки</h3>
            </article>
            <article>
              <span>03</span>
              <h3>Личная поддержка</h3>
            </article>
            <article>
              <span>04</span>
              <h3>Постоянное развитие</h3>
            </article>
          </div>

          <footer className="about__footer">
            <p>Знакомство со школой начинается с разговора о вашей цели.</p>
            <a href="tel:+79786456072">
              Обсудить обучение
              <span aria-hidden="true">↗</span>
            </a>
          </footer>
        </div>
      </section>
    </main>
  );
}
