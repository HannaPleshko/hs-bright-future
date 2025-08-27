import React, { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { 
  Shield, 
  Briefcase, 
  Clock, 
  Users, 
  Target, 
  Rocket, 
  Zap,
  ArrowRight,
  CheckCircle,
  Star
} from 'lucide-react';

const BenefitsSection = () => {
  const [hoveredBenefit, setHoveredBenefit] = useState<number | null>(null);

  const benefits = [
    {
      id: 1,
      icon: Shield,
      title: "Гарантия возврата",
      subtitle: "100% возврат в первый месяц",
      description: "Полная гарантия возврата средств, если обучение не подходит",
      color: "from-green-500 to-emerald-600",
      accent: "bg-green-500/10 border-green-500/20"
    },
    {
      id: 2,
      icon: Briefcase,
      title: "Бесплатное обучение",
      subtitle: "При трудоустройстве",
      description: "Учитесь бесплатно, если нашли работу до окончания курса",
      color: "from-blue-500 to-purple-600",
      accent: "bg-blue-500/10 border-blue-500/20"
    },
    {
      id: 3,
      icon: Clock,
      title: "Год сопровождения",
      subtitle: "2 раза в неделю по 1-1.5ч",
      description: "Занятия 2 раза в неделю по 1ч - 1ч 30мин. Именно благодаря этому пункту мы имеем большой процент трудоустройств",
      color: "from-purple-500 to-pink-600",
      accent: "bg-purple-500/10 border-purple-500/20"
    },
    {
      id: 4,
      icon: Users,
      title: "Индивидуальные занятия",
      subtitle: "Включены в стоимость",
      description: "В случае если вам трудно дается материал",
      color: "from-pink-500 to-orange-600",
      accent: "bg-pink-500/10 border-pink-500/20"
    },
    {
      id: 5,
      icon: Target,
      title: "Подготовка к собеседованиям",
      subtitle: "Реалистичные симуляции",
      description: "Создаем имитацию того, как они проходят в реальной жизни",
      color: "from-orange-500 to-red-600",
      accent: "bg-orange-500/10 border-orange-500/20"
    },
    {
      id: 6,
      icon: Rocket,
      title: "Выход на фриланс",
      subtitle: "Платформа кворк и другие",
      description: "По запросу мы помогаем с выходом на фриланс-сервисы",
      color: "from-red-500 to-pink-600",
      accent: "bg-red-500/10 border-red-500/20"
    },
    {
      id: 7,
      icon: Zap,
      title: "Портфолио и резюме",
      subtitle: "Подготовка к поиску работы",
      description: "Также помогаем с созданием портфолио, резюме и тд. Подготовка к поиску работы и продвижению себя на рынке",
      color: "from-indigo-500 to-blue-600",
      accent: "bg-indigo-500/10 border-indigo-500/20"
    }
  ];

  return (
    <section className="py-20 relative overflow-hidden" id="benefits">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-r from-pink-500/10 to-orange-500/10 rounded-full blur-3xl animate-float-delayed"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <Badge className="bg-gradient-to-r from-indigo-500 to-purple-600 text-white px-6 py-3 mb-6 hover:scale-105 transition-transform duration-300 cursor-pointer">
            <Star className="w-4 h-4 mr-2" />
            Наши преимущества
          </Badge>
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Почему выбирают <span className="gradient-neon-text">HSCHOOL</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            7 ключевых преимуществ, которые делают нашу школу уникальной
          </p>
        </div>

        {/* Top CTA */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-green-500 to-emerald-600 text-white px-8 py-4 rounded-full font-semibold shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 cursor-pointer">
            <Zap className="w-5 h-5" />
            Все преимущества включены в стоимость
          </div>
        </div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto justify-items-center">
          {benefits.map((benefit, index) => (
            <Card
              key={benefit.id}
              className={`group p-4 bg-white/80 backdrop-blur-sm border border-white/20 hover:bg-white/90 transition-all duration-500 cursor-pointer transform hover:scale-105 hover:shadow-2xl ${
                hoveredBenefit === index ? 'ring-2 ring-offset-2 ring-blue-500' : ''
              } ${index === 6 ? 'lg:col-start-2' : ''}`}
              onMouseEnter={() => setHoveredBenefit(index)}
              onMouseLeave={() => setHoveredBenefit(null)}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="space-y-4">
                {/* Icon and Badge */}
                <div className="flex items-start justify-between">
                  <div className={`p-2.5 rounded-lg bg-gradient-to-r ${benefit.color} group-hover:scale-110 transition-transform duration-300`}>
                    <benefit.icon className="w-5 h-5 text-white" />
                  </div>
                  <Badge className={`${benefit.accent} text-xs font-medium px-2 py-0.5`}>
                    {benefit.id}
                  </Badge>
                </div>

                {/* Content */}
                <div className="space-y-2">
                  <h3 className="text-lg font-bold text-gray-800 group-hover:text-gray-900 transition-colors duration-300">
                    {benefit.title}
                  </h3>
                  <p className="text-sm font-semibold text-blue-600 group-hover:text-blue-700 transition-colors duration-300">
                    {benefit.subtitle}
                  </p>
                  <p className="text-sm text-gray-600 leading-relaxed group-hover:text-gray-700 transition-colors duration-300">
                    {benefit.description}
                  </p>
                </div>

                {/* Hover Effect */}
                <div className="flex items-center text-blue-600 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-x-0 group-hover:translate-x-2">
                  <CheckCircle className="w-4 h-4 mr-2" />
                  <span className="text-xs font-medium">Включено</span>
                </div>
              </div>
            </Card>
          ))}
        </div>

      </div>
    </section>
  );
};

export default BenefitsSection;
