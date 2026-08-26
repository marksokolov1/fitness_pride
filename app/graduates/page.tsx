import type { Metadata } from 'next';
import { SectionRoutePage } from '../components/section-route-page';

export const metadata: Metadata = {
  title: 'Выпускники | Fitness Pride',
  description: 'Истории и результаты выпускников школы Fitness Pride.',
};

export default function GraduatesPage() {
  return (
    <SectionRoutePage
      active="graduates"
      kicker="Результаты обучения"
      title="Наши"
      accent="выпускники"
      lead="Реальные истории людей, которые углубили профессиональные знания, освоили практические навыки и продолжили развитие в фитнесе."
      items={[
        { label: 'Профессиональная база', title: 'Системные знания', text: 'Анатомия, физиология, питание и методика тренировочного процесса.' },
        { label: 'Рабочие навыки', title: 'Практическая подготовка', text: 'Умение показывать, объяснять и собирать занятия под конкретные задачи.' },
        { label: 'Продолжение пути', title: 'Развитие в профессии', text: 'Поддержка методистов и постоянный доступ к учебным материалам.' },
      ]}
    />
  );
}

