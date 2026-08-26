import type { Metadata } from 'next';
import { SectionRoutePage } from '../components/section-route-page';

export const metadata: Metadata = {
  title: 'О школе | Fitness Pride',
  description: 'Миссия, подход и основатель школы обучения фитнесу Fitness Pride.',
};

export default function AboutPage() {
  return (
    <SectionRoutePage
      active="about"
      kicker="Школа обучения фитнесу"
      title="О Fitness"
      accent="Pride"
      lead="Школа, созданная практиками: профессиональная база, личное участие методистов и поддержка на всём пути обучения."
      items={[
        { label: 'Основатель', title: 'Игорь Майструк', text: 'Руководитель, тренер и методист с опытом работы более 15 лет.' },
        { label: 'Миссия', title: 'Качественное образование', text: 'Помогать людям достигать целей в фитнесе и здоровом образе жизни через знания и поддержку.' },
        { label: 'Подход', title: 'Личное участие', text: 'Создатели программы напрямую взаимодействуют с обучающимися.' },
        { label: 'Ценности', title: 'Знания и развитие', text: 'Профессиональная основа, практические навыки и постоянное развитие.' },
      ]}
    />
  );
}

