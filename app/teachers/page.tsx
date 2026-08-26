import type { Metadata } from 'next';
import { SectionRoutePage } from '../components/section-route-page';

export const metadata: Metadata = {
  title: 'Преподаватели | Fitness Pride',
  description: 'Преподаватели и методисты школы обучения фитнесу Fitness Pride.',
};

export default function TeachersPage() {
  return (
    <SectionRoutePage
      active="teachers"
      kicker="Команда школы"
      title="Преподаватели-"
      accent="практики"
      lead="Профильные специалисты, которые соединяют фундаментальные знания с практическим опытом и лично сопровождают обучение."
      items={[
        { label: 'Основатель и методист', title: 'Игорь Майструк', text: 'Тренажёрный зал, анатомия, рациональное питание, Pilates и TRX.' },
        { label: 'Теоретические дисциплины', title: 'Сергей Зуйков', text: 'Анатомия, физиология и основы рационального питания.' },
        { label: 'Аквафитнес', title: 'Виктория Бербик', text: 'Аквааэробика, аквафитнес и групповые программы.' },
        { label: 'Групповые программы', title: 'Ирина Гавриленко', text: 'Практическая подготовка инструкторов группового фитнеса.' },
      ]}
    />
  );
}

