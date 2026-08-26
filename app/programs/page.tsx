import type { Metadata } from 'next';
import { SectionRoutePage } from '../components/section-route-page';

export const metadata: Metadata = {
  title: 'Программы обучения | Fitness Pride',
  description: 'Программы подготовки фитнес-тренеров в школе Fitness Pride.',
};

export default function ProgramsPage() {
  return (
    <SectionRoutePage
      active="programs"
      kicker="Профессиональная подготовка"
      title="Программы"
      accent="обучения"
      lead="Три образовательные траектории для работы в тренажёрном зале, групповых программах или сразу в двух направлениях."
      items={[
        { label: 'Персональный тренинг', title: 'Инструктор тренажёрного зала', text: 'Анатомия, питание, техника упражнений и построение персональных тренировочных программ.' },
        { label: 'Групповой фитнес', title: 'Инструктор групповых программ', text: 'Музыкальная структура, аэробика, step, stretching, Pilates, Tai-bo и TRX.' },
        { label: 'Комплексная подготовка', title: 'Инструктор-универсал', text: 'Оба профессиональных направления в одной образовательной траектории.' },
      ]}
    />
  );
}

