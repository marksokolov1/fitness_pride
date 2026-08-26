import type { Metadata } from 'next';
import { SiInstagram, SiTelegram, SiVk } from 'react-icons/si';
import { SiteHeader } from '../components/site-header';

export const metadata: Metadata = {
  title: 'Контакты | Fitness Pride',
  description:
    'Связаться со школой Fitness Pride: телефон, адрес в Донецке и консультация по программам обучения.',
};

const questions = [
  {
    question: 'Можно ли начать обучение сейчас?',
    answer: 'Да. Обучение можно начать в удобный момент без привязки к единой дате старта потока.',
  },
  {
    question: 'Можно ли учиться дистанционно?',
    answer: 'Да. Теоретические материалы и задания доступны онлайн. Формат практической части лучше уточнить на консультации для выбранной программы.',
  },
  {
    question: 'Есть ли рассрочка?',
    answer: 'Да. Стоимость можно разделить на два равных платежа: первый перед началом обучения, второй — через 30 дней после старта.',
  },
  {
    question: 'Что входит в стоимость?',
    answer: 'Учебные модули, задания и тестирование, обратная связь методистов, постоянный доступ к материалам и сертификат после выполнения условий программы.',
  },
  {
    question: 'Нужно ли специальное образование для поступления?',
    answer: 'Для начала обучения специальное медицинское или спортивное образование не требуется. Требования к оформлению отдельных итоговых документов уточняются индивидуально.',
  },
];

export default function ContactsPage() {
  return (
    <main className="site-shell contact-page">
      <SiteHeader active="contacts" />

      <section className="contact-page__hero" aria-labelledby="contact-page-title">
        <div className="container contact-page__hero-grid">
          <div>
            <p className="page-breadcrumb"><a href="/">Главная</a><span>/</span>Контакты</p>
            <p className="eyebrow"><span aria-hidden="true" />Связаться со школой</p>
            <h1 id="contact-page-title">Начните с<br /><em>разговора</em></h1>
            <p className="contact-page__lead">
              Расскажите, в каком направлении хотите развиваться. Команда
              Fitness Pride поможет выбрать программу и подходящий формат.
            </p>
          </div>

          <aside className="contact-page__hero-card" aria-label="Основной контакт">
            <p>Телефон школы</p>
            <a href="tel:+79786456072">+7 (978)<br />645-60-72</a>
            <span>Консультация по программам и условиям обучения</span>
            <a className="button" href="tel:+79786456072">Позвонить <span aria-hidden="true">↗</span></a>
          </aside>
        </div>
      </section>

      <section className="application-form" id="application-form" aria-labelledby="application-form-title">
        <div className="container application-form__grid">
          <div className="application-form__intro">
            <p className="section-kicker section-kicker--dark">Заявка на обучение</p>
            <h2 id="application-form-title">Начните обучение с нами</h2>
            <p>
              Заполните короткую форму — администратор Fitness Pride свяжется
              с вами, ответит на вопросы и поможет выбрать программу.
            </p>
            <div className="application-form__contact">
              <span>Или позвоните напрямую</span>
              <a href="tel:+79786456072">+7 (978) 645-60-72</a>
            </div>
          </div>

          <form
            className="application-form__fields"
            action="https://formsubmit.co/fitness_pride_donetsk@mail.ru"
            method="POST"
          >
            <input type="hidden" name="_subject" value="Новая заявка с сайта Fitness Pride" />
            <input type="hidden" name="_template" value="table" />
            <input type="hidden" name="_captcha" value="false" />
            <input type="hidden" name="_next" value="https://fitness-pride-school.mark-sokolov007.chatgpt.site/thanks" />
            <input type="hidden" name="_url" value="https://fitness-pride-school.mark-sokolov007.chatgpt.site/contacts" />
            <label className="application-form__honey" aria-hidden="true">
              Не заполняйте это поле
              <input type="text" name="_honey" tabIndex={-1} autoComplete="off" />
            </label>

            <label>
              <span>ФИО</span>
              <input
                type="text"
                name="ФИО"
                autoComplete="name"
                minLength={5}
                placeholder="Иванов Иван Иванович"
                required
              />
            </label>

            <label>
              <span>Номер телефона</span>
              <input
                type="tel"
                name="Телефон"
                autoComplete="tel"
                inputMode="tel"
                pattern="[0-9+()\-\s]{10,}"
                placeholder="+7 (___) ___-__-__"
                required
              />
            </label>

            <label>
              <span>Интересующее направление</span>
              <select name="Направление" defaultValue="" required>
                <option value="" disabled>Выберите программу</option>
                <option>Инструктор тренажёрного зала. Персональный тренер</option>
                <option>Инструктор групповых программ</option>
                <option>Инструктор-универсал</option>
                <option>Нужна помощь с выбором</option>
              </select>
            </label>

            <label>
              <span>Формат обучения</span>
              <select name="Формат обучения" defaultValue="" required>
                <option value="" disabled>Выберите формат</option>
                <option>Онлайн</option>
                <option>Очно в Донецке</option>
                <option>Хочу обсудить оба формата</option>
              </select>
            </label>

            <label className="application-form__consent">
              <input type="checkbox" name="Согласие на обработку данных" value="Да" required />
              <span>
                Соглашаюсь на обработку указанных данных для связи по вопросу
                обучения.
              </span>
            </label>

            <button className="button application-form__submit" type="submit">
              Отправить заявку <span aria-hidden="true">↗</span>
            </button>
            <p className="application-form__note">
              Обычно мы отвечаем в течение рабочего дня.
            </p>
          </form>
        </div>
      </section>

      <section className="contact-essentials" aria-labelledby="contact-essentials-title">
        <div className="container">
          <header className="contact-detail-heading">
            <div>
              <p className="section-kicker">01 · Основная информация</p>
              <p className="section-index" aria-hidden="true">FP / CONTACT</p>
            </div>
            <div>
              <h2 id="contact-essentials-title">Как связаться и где мы находимся</h2>
              <p>Перед очным визитом рекомендуем позвонить и согласовать удобное время консультации.</p>
            </div>
          </header>

          <div className="contact-essentials__grid">
            <article>
              <span>01</span><small>Телефон</small>
              <h3><a href="tel:+79786456072">+7 (978) 645-60-72</a></h3>
              <p>Позвоните, чтобы обсудить программу, формат и условия оплаты.</p>
              <a className="text-link" href="tel:+79786456072">Позвонить сейчас <span aria-hidden="true">→</span></a>
            </article>
            <article>
              <span>02</span><small>Адрес</small>
              <h3>Донецк,<br />ул. Артёма, 198</h3>
              <p>Место проведения очных консультаций и практической части обучения.</p>
              <a className="text-link" href="https://yandex.ru/maps/?text=%D0%94%D0%BE%D0%BD%D0%B5%D1%86%D0%BA%2C%20%D1%83%D0%BB%D0%B8%D1%86%D0%B0%20%D0%90%D1%80%D1%82%D1%91%D0%BC%D0%B0%2C%20198" target="_blank" rel="noreferrer">Открыть на карте <span aria-hidden="true">↗</span></a>
            </article>
            <article>
              <span>03</span><small>Формат</small>
              <h3>Онлайн<br />и очно</h3>
              <p>Теория доступна дистанционно; практический формат зависит от выбранной программы.</p>
              <a className="text-link" href="/methodology">Как проходит обучение <span aria-hidden="true">→</span></a>
            </article>
          </div>
        </div>
      </section>

      <section className="contact-socials" aria-labelledby="contact-socials-title">
        <div className="container contact-socials__grid">
          <div>
            <p className="section-kicker">Социальные сети</p>
            <h2 id="contact-socials-title">Следите за жизнью школы</h2>
          </div>
          <div>
            <a href="https://t.me/igor_maistruk" target="_blank" rel="noreferrer"><SiTelegram aria-hidden="true" focusable="false" /><strong>Telegram</strong><b aria-hidden="true">↗</b></a>
            <a href="https://vk.ru/fitness_pride_donetsk" target="_blank" rel="noreferrer"><SiVk aria-hidden="true" focusable="false" /><strong>ВКонтакте</strong><b aria-hidden="true">↗</b></a>
            <a href="https://www.instagram.com/fitness_pride_donetsk/" target="_blank" rel="noreferrer"><SiInstagram aria-hidden="true" focusable="false" /><strong>Instagram</strong><b aria-hidden="true">↗</b></a>
          </div>
        </div>
      </section>

      <section className="contact-consultation" aria-labelledby="contact-consultation-title">
        <div className="container">
          <header className="contact-detail-heading contact-detail-heading--dark">
            <div>
              <p className="section-kicker section-kicker--dark">02 · Консультация</p>
              <p className="section-index section-index--dark" aria-hidden="true">FP / START</p>
            </div>
            <div>
              <h2 id="contact-consultation-title">Что обсудим перед стартом</h2>
              <p>Короткий разговор помогает сразу подобрать подходящую траекторию и понять все организационные условия.</p>
            </div>
          </header>

          <ol className="contact-consultation__steps">
            <li><span>01</span><div><h3>Ваша цель</h3><p>Какое направление интересно и где вы планируете применять знания.</p></div></li>
            <li><span>02</span><div><h3>Программа</h3><p>Персональный тренинг, групповой фитнес или комплексная подготовка.</p></div></li>
            <li><span>03</span><div><h3>Формат</h3><p>Как соединить онлайн-теорию и практическую часть с вашим графиком.</p></div></li>
            <li><span>04</span><div><h3>Условия</h3><p>Стоимость, рассрочка, документы и порядок начала обучения.</p></div></li>
          </ol>

          <div className="contact-consultation__action">
            <p>Консультация ни к чему не обязывает — её задача помочь сделать понятный выбор.</p>
            <a className="button" href="#application-form">Обсудить обучение <span aria-hidden="true">↗</span></a>
          </div>
        </div>
      </section>

      <section className="contact-direction" aria-labelledby="contact-direction-title">
        <div className="container contact-direction__grid">
          <div>
            <p className="section-kicker">03 · Перед звонком</p>
            <h2 id="contact-direction-title">Можно сначала изучить программы</h2>
            <p>Сравните три направления и отметьте вопросы, которые хотите задать команде школы.</p>
          </div>
          <div className="contact-direction__links">
            <a href="/programs#gym"><span>01</span><div><small>Персональный тренинг</small><strong>Инструктор тренажёрного зала</strong></div><b aria-hidden="true">↗</b></a>
            <a href="/programs#group"><span>02</span><div><small>Групповой фитнес</small><strong>Инструктор групповых программ</strong></div><b aria-hidden="true">↗</b></a>
            <a href="/programs#universal"><span>03</span><div><small>Два направления</small><strong>Инструктор-универсал</strong></div><b aria-hidden="true">↗</b></a>
          </div>
        </div>
      </section>

      <section className="contact-faq" aria-labelledby="contact-faq-title">
        <div className="container contact-faq__grid">
          <div>
            <p className="section-kicker section-kicker--dark">04 · Частые вопросы</p>
            <h2 id="contact-faq-title">Коротко о главном</h2>
          </div>
          <div className="contact-faq__list">
            {questions.map((item, index) => (
              <details key={item.question} open={index === 0}>
                <summary><span>{String(index + 1).padStart(2, '0')}</span>{item.question}<b aria-hidden="true">+</b></summary>
                <p>{item.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="contact-final">
        <div className="container contact-final__grid">
          <div><p>Fitness Pride · Донецк</p><h2>Готовы выбрать программу?</h2></div>
          <div><a href="tel:+79786456072">+7 (978) 645-60-72</a><p>Позвоните — и мы вместе определим следующий шаг.</p></div>
        </div>
      </section>
    </main>
  );
}
