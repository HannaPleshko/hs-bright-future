import React from 'react';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Users, BookOpen, Award, MessageCircle, Clock, Target, Shield } from 'lucide-react';

const WhyHSchool = () => {
  const reasons = [
    {
      icon: BookOpen,
      title: "Большой стэк технологий",
      description: "После окончания курса у каждого студента будет выбор: frontend, backend или fullstack",
      gradient: "gradient-blue-bg",
      highlight: "Универсальность"
    },
    {
      icon: Users,
      title: "Мини-группы до 7 человек",
      description: "Лучше всего материал усваивается в небольших группах с индивидуальным подходом",
      gradient: "gradient-accent-bg",
      highlight: "Персональный подход"
    },
    {
      icon: Award,
      title: "Опытные менторы",
      description: "Преподаватели с 5+ годами практического опыта в IT сфере делятся реальными кейсами",
      gradient: "gradient-neon-bg",
      highlight: "Практический опыт"
    },
    {
      icon: Target,
      title: "Индивидуальное портфолио",
      description: "По окончании обучения у каждого студента будет портфолио из собственных проектов",
      gradient: "gradient-blue-bg",
      highlight: "Готовые проекты"
    },
    {
      icon: MessageCircle,
      title: "Постоянная обратная связь",
      description: "Telegram чат с преподавателями и сокурсниками для решения всех вопросов 24/7",
      gradient: "gradient-accent-bg",
      highlight: "Поддержка 24/7"
    },
    {
      icon: Clock,
      title: "Гибкая поддержка",
      description: "Доступ к платформе обучения 24/7, помощь с наверстыванием пропущенного материала",
      gradient: "gradient-neon-bg",
      highlight: "Гибкость обучения"
    },
    {
      icon: Shield,
      title: "Гарантия трудоустройства",
      description: "Подготовка к собеседованиям и бесплатное сопровождение до полного трудоустройства",
      gradient: "gradient-blue-bg",
      highlight: "Результат гарантирован"
    }
  ];

  return (
    <section className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 gradient-light opacity-30"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <Badge className="gradient-accent-bg text-white px-4 py-2 mb-6">
            Почему выбирают нас
          </Badge>
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            <span className="gradient-neon-text">7 причин</span> выбрать HSCHOOL
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Мы создали уникальную методику обучения, которая помогла 100+ студентам войти в IT
          </p>
        </div>

        {/* Reasons Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {reasons.map((reason, index) => (
            <Card 
              key={index} 
              className="group p-8 hover-glow border-0 gradient-light transition-all duration-300 hover:scale-105"
            >
              <div className="space-y-6">
                {/* Icon with gradient background */}
                <div className="relative">
                  <div className={`${reason.gradient} p-4 rounded-2xl w-fit shadow-lg group-hover:shadow-xl transition-shadow`}>
                    {React.createElement(reason.icon, { className: "w-8 h-8 text-white" })}
                  </div>
                  <div className="absolute -top-2 -right-2">
                    <Badge className="gradient-neon-bg text-white text-xs px-2 py-1">
                      {index + 1}
                    </Badge>
                  </div>
                </div>

                {/* Content */}
                <div className="space-y-4">
                  <div>
                    <h3 className="text-xl font-bold mb-2">{reason.title}</h3>
                    <Badge variant="secondary" className="text-xs mb-3 text-neon-blue">
                      {reason.highlight}
                    </Badge>
                  </div>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {reason.description}
                  </p>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <Card className="p-8 max-w-2xl mx-auto gradient-neon-bg text-white border-0">
            <div className="space-y-4">
              <h3 className="text-2xl font-bold">Готовы начать свой путь в IT?</h3>
              <p className="text-white/90">
                Более 90% наших выпускников успешно трудоустроились в IT-компании
              </p>
              <div className="flex justify-center items-center gap-8 pt-4">
                <div className="text-center">
                  <div className="text-3xl font-bold">100+</div>
                  <div className="text-sm text-white/80">Выпускников</div>
                </div>
                <div className="w-px h-12 bg-white/20"></div>
                <div className="text-center">
                  <div className="text-3xl font-bold">90%</div>
                  <div className="text-sm text-white/80">Трудоустройство</div>
                </div>
                <div className="w-px h-12 bg-white/20"></div>
                <div className="text-center">
                  <div className="text-3xl font-bold">7+</div>
                  <div className="text-sm text-white/80">Лет опыта</div>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default WhyHSchool;