import type { Metadata } from 'next';
import Image from 'next/image';
import { SiteHeader } from '../components/site-header';

export const metadata: Metadata = {
  title: 'Преподаватели | Fitness Pride',
  description: 'Преподаватели и методисты школы обучения фитнесу Fitness Pride: образование, опыт и направления работы.',
};

const teachers = [
  {
    number: '01',
    name: 'Игорь Игоревич Майструк',
    role: 'Основатель и руководитель Fitness Pride',
    image: '/teachers/igor-maistruk.jpg',
    position: '50% 34%',
    lead: 'Фитнес-тренер, нутрициолог и методист с опытом работы в сфере фитнеса более 15 лет.',
    subjects: ['Инструктор тренажёрного зала', 'Анатомия и биомеханика', 'Рациональное питание', 'Pilates', 'Функциональные петли'],
    credentials: [
      'Высшее образование по адаптивной физической культуре',
      'Высшее образование по организации физического воспитания и спорта',
      'Президент Федерации массового спорта в ДНР',
      'Участник научных конференций в сфере физической культуры и спорта',
      'Автор учебно-методических пособий по физической реабилитации и фитнес-тренировкам',
    ],
  },
  {
    number: '02',
    name: 'Сергей Александрович Зуйков',
    role: 'Преподаватель анатомии, физиологии и питания',
    image: '/teachers/sergey-zuykov.jpg',
    position: '50% 35%',
    lead: 'Кандидат биологических наук, доцент по специальности «Биохимия» и автор научных и учебно-методических работ.',
    subjects: ['Анатомия', 'Физиология', 'Основы рационального питания', 'Биохимия спорта'],
    credentials: [
      'Высшее образование по биохимии и биохимии спорта',
      'Высшее образование по организации физического воспитания и спорта',
      'Кандидат биологических наук, доцент',
      'Мастер спорта по спортивной акробатике, кандидат в мастера спорта по дзюдо',
      'Автор 105 научных и учебно-методических работ',
    ],
  },
  {
    number: '03',
    name: 'Виктория Александровна Бербик',
    role: 'Преподаватель аквафитнеса и аквааэробики',
    image: '/teachers/victoria-berbik.jpg',
    position: '50% 34%',
    lead: 'Сертифицированный тренер по аквааэробике и аквастепу с опытом работы в бассейне более 8 лет.',
    subjects: ['Аквафитнес', 'Аквааэробика', 'Аквастеп', 'Практика групповых занятий'],
    credentials: [
      'Высшее образование по адаптивной физической культуре',
      'Сертификация по аквааэробике и аквастепу в Москве',
      'Участник международных конвенций AFT и MAFT',
      'Более 8 лет профессиональной работы в бассейне',
    ],
  },
  {
    number: '04',
    name: 'Ирина Гавриленко',
    role: 'Преподаватель групповых программ',
    image: '/teachers/irina-gavrilenko.jpg',
    position: '50% 34%',
    lead: 'Тренер-преподаватель по спортивной аэробике и методист спортивной школы со стажем работы с 2000 года.',
    subjects: ['Групповые программы', 'Спортивная аэробика', 'Методика занятия', 'Практика инструктора'],
    credentials: [
      'Высшее образование по специальности «Тренер-преподаватель по спортивной аэробике»',
      'Методист комплексной детско-юношеской спортивной школы',
      'Презентер и участник международных конвенций',
      'Опыт работы в спортивной сфере с 2000 года',
    ],
  },
];

export default function TeachersPage() {
  return (
    <main className="site-shell teachers-page">
      <SiteHeader active="teachers" />
      <section className="teachers-page__hero" aria-labelledby="teachers-page-title">
        <div className="container">
          <p className="page-breadcrumb"><a href="/">Главная</a><span>/</span>Преподаватели</p>
          <p className="eyebrow"><span aria-hidden="true" />Команда Fitness Pride</p>
          <h1 id="teachers-page-title">Преподаватели-<br /><em>практики</em></h1>
          <p className="teachers-page__lead">
            Профильные специалисты с высшим образованием, научной экспертизой
            и многолетней практикой лично ведут дисциплины и сопровождают обучение.
          </p>
        </div>
      </section>

      <nav className="teachers-page__nav" aria-label="Преподаватели">
        <div className="container">
          {teachers.map((teacher) => <a href={`#teacher-${teacher.number}`} key={teacher.number}>{teacher.number} · {teacher.name.split(' ')[0]}</a>)}
        </div>
      </nav>

      <section className="teacher-profiles" aria-label="Профили преподавателей">
        <div className="container">
          {teachers.map((teacher) => (
            <article className="teacher-profile" id={`teacher-${teacher.number}`} key={teacher.number}>
              <figure className="teacher-profile__photo">
                <Image src={teacher.image} alt={`${teacher.name} — ${teacher.role}`} fill sizes="(max-width: 800px) 100vw, 38vw" style={{ objectPosition: teacher.position }} />
                <figcaption><span>{teacher.number}</span>{teacher.role}</figcaption>
              </figure>
              <div className="teacher-profile__content">
                <p className="teacher-profile__role">{teacher.role}</p>
                <h2>{teacher.name}</h2>
                <p className="teacher-profile__lead">{teacher.lead}</p>
                <div className="teacher-profile__subjects">
                  <h3>Преподаёт</h3>
                  <ul>{teacher.subjects.map((subject) => <li key={subject}>{subject}</li>)}</ul>
                </div>
                <div className="teacher-profile__credentials">
                  <h3>Образование и опыт</h3>
                  <ul>{teacher.credentials.map((item) => <li key={item}>{item}</li>)}</ul>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="teachers-page__cta">
        <div className="container">
          <div><p>Есть вопрос преподавателю?</p><h2>Обсудите программу с командой школы</h2></div>
          <a className="button" href="/contacts#application-form">Получить консультацию <span aria-hidden="true">↗</span></a>
        </div>
      </section>
    </main>
  );
}
