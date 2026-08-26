import type { Metadata } from 'next';
import { SectionRoutePage } from '../components/section-route-page';

export const metadata: Metadata = {
  title: 'Контакты | Fitness Pride',
  description: 'Контактная информация школы Fitness Pride в Донецке.',
};

export default function ContactsPage() {
  return (
    <SectionRoutePage
      active="contacts"
      kicker="Связаться со школой"
      title="Контакты"
      accent="Fitness Pride"
      lead="Получите консультацию по программам, формату обучения и выбору профессионального направления."
      items={[
        { label: 'Телефон', title: '+7 (978) 645-60-72', text: 'Позвоните, чтобы обсудить программу и условия обучения.' },
        { label: 'Адрес', title: 'Донецк, ул. Артёма, 198', text: 'Место проведения очного обучения и консультаций.' },
        { label: 'Формат', title: 'Онлайн и очно', text: 'Подберём подходящий формат с учётом вашей цели и местоположения.' },
      ]}
    />
  );
}

