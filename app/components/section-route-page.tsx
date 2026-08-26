import { SiteHeader } from './site-header';

type RouteItem = {
  label: string;
  title: string;
  text: string;
};

type SectionRoutePageProps = {
  active: string;
  kicker: string;
  title: string;
  accent: string;
  lead: string;
  items: RouteItem[];
};

export function SectionRoutePage({
  active,
  kicker,
  title,
  accent,
  lead,
  items,
}: SectionRoutePageProps) {
  return (
    <main className="site-shell route-page">
      <SiteHeader active={active} />
      <section className="route-page__hero" aria-labelledby={`${active}-page-title`}>
        <div className="container">
          <p className="page-breadcrumb">
            <a href="/">Главная</a>
            <span>/</span>
            {title} {accent}
          </p>
          <p className="eyebrow">
            <span aria-hidden="true" />
            {kicker}
          </p>
          <h1 id={`${active}-page-title`}>
            {title}
            <br />
            <em>{accent}</em>
          </h1>
          <p className="route-page__lead">{lead}</p>
        </div>
      </section>

      <section className="route-page__overview" aria-label="Краткий обзор страницы">
        <div className="container route-page__grid">
          {items.map((item, index) => (
            <article key={item.title}>
              <div>
                <span>{String(index + 1).padStart(2, '0')}</span>
                <small>{item.label}</small>
              </div>
              <h2>{item.title}</h2>
              <p>{item.text}</p>
            </article>
          ))}
        </div>
        <div className="container route-page__footer">
          <p>Подробности направления, формата и условий можно уточнить на консультации.</p>
          <a className="button" href="tel:+79786456072">
            Получить консультацию
            <span aria-hidden="true">↗</span>
          </a>
        </div>
      </section>
    </main>
  );
}
