import type { Metadata } from 'next';
import { SiteHeader } from '../components/site-header';

export const metadata: Metadata = {
  title: 'Заявка отправлена | Fitness Pride',
  description: 'Спасибо за заявку на обучение в Fitness Pride.',
};

export default function ThanksPage() {
  return (
    <main className="site-shell thanks-page">
      <SiteHeader />
      <section className="thanks-page__hero" aria-labelledby="thanks-page-title">
        <div className="container thanks-page__content">
          <p className="eyebrow"><span aria-hidden="true" />Заявка принята</p>
          <h1 id="thanks-page-title">Спасибо!<br /><em>Мы свяжемся с вами</em></h1>
          <p>
            Заявка отправлена команде Fitness Pride. Администратор позвонит по
            указанному номеру и поможет с выбором программы и формата обучения.
          </p>
          <div>
            <a className="button" href="/programs">Посмотреть программы <span aria-hidden="true">→</span></a>
            <a className="text-link" href="/">Вернуться на главную</a>
          </div>
        </div>
      </section>
    </main>
  );
}
