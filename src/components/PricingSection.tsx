import React from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Check, Star, Users, User, Gift, Briefcase, GraduationCap, HeadphonesIcon } from 'lucide-react';

const PricingSection = () => {
  const scrollToForm = () => {
    document.getElementById('pre-registration')?.scrollIntoView({ behavior: 'smooth' });
  };

  const features = [
    "9 месяцев обучения + год поддержки",
    "3 занятия в неделю по 2-2.5 часа",
    "Доступ к платформе обучения 24/7",
    "Индивидуальные занятия при необходимости",
    "Подготовка к собеседованиям",
    "Помощь с портфолио и резюме",
    "Поддержка при выходе на фриланс"
  ];

  const guarantees = [
    { icon: Gift, text: "Возврат средств в течение первого месяца" },
    { icon: Briefcase, text: "Бесплатное обучение при трудоустройстве во время курса" },
    { icon: GraduationCap, text: "Год бесплатного сопровождения после окончания" },
    { icon: HeadphonesIcon, text: "Индивидуальная помощь при сложностях с материалом" }
  ];

  return (
    <section className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 gradient-dark opacity-5"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <Badge className="gradient-blue-bg text-white px-4 py-2 mb-6">
            Тарифы и условия
          </Badge>
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Выберите <span className="gradient-neon-text">формат обучения</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Прозрачные цены без скрытых платежей. Все включено в стоимость курса
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto mb-16">
          {/* Group Learning */}
          <Card className="relative p-8 hover-glow border-0 gradient-light group">
            <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
              <Badge className="gradient-blue-bg text-white px-4 py-2">
                <Users className="w-4 h-4 mr-2" />
                Популярный выбор
              </Badge>
            </div>
            
            <div className="text-center space-y-6 pt-4">
              <div className="space-y-2">
                <h3 className="text-2xl font-bold">Групповые занятия</h3>
                <p className="text-muted-foreground">До 7 человек в группе</p>
              </div>

              <div className="space-y-2">
                <div className="text-5xl font-bold gradient-neon-text">$150</div>
                <div className="text-muted-foreground">в месяц</div>
                <div className="text-sm text-neon-blue font-semibold">3 занятия в неделю</div>
              </div>

              <ul className="space-y-3 text-left">
                {features.map((feature, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-neon-blue mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-muted-foreground">{feature}</span>
                  </li>
                ))}
              </ul>

              <Button 
                className="w-full gradient-blue-bg hover:opacity-90 text-white font-semibold py-6 hover-glow"
                onClick={scrollToForm}
              >
                Записаться в группу
              </Button>
            </div>
          </Card>

          {/* Individual Learning */}
          <Card className="relative p-8 hover-glow border-0 gradient-light group">
            <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
              <Badge className="gradient-accent-bg text-white px-4 py-2">
                <Star className="w-4 h-4 mr-2" />
                Максимальный результат
              </Badge>
            </div>
            
            <div className="text-center space-y-6 pt-4">
              <div className="space-y-2">
                <h3 className="text-2xl font-bold">Индивидуальные занятия</h3>
                <p className="text-muted-foreground">Персональное обучение 1-на-1</p>
              </div>

              <div className="space-y-2">
                <div className="text-5xl font-bold gradient-neon-text">$200</div>
                <div className="text-muted-foreground">в месяц</div>
                <div className="text-sm text-neon-pink font-semibold">3 занятия в неделю + доп. по запросу</div>
              </div>

              <ul className="space-y-3 text-left">
                {features.map((feature, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-neon-pink mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-muted-foreground">{feature}</span>
                  </li>
                ))}
                <li className="flex items-start gap-3">
                  <Star className="w-5 h-5 text-neon-orange mt-0.5 flex-shrink-0" />
                  <span className="text-sm text-muted-foreground font-semibold">Дополнительные занятия по запросу</span>
                </li>
              </ul>

              <Button 
                className="w-full gradient-accent-bg hover:opacity-90 text-white font-semibold py-6 hover-glow"
                onClick={scrollToForm}
              >
                Записаться индивидуально
              </Button>
            </div>
          </Card>
        </div>

        {/* Guarantees Section */}
        <div className="max-w-4xl mx-auto">
          <Card className="p-8 gradient-neon-bg text-white border-0">
            <div className="text-center mb-8">
              <h3 className="text-3xl font-bold mb-4">Наши гарантии</h3>
              <p className="text-white/90">
                Мы уверены в качестве нашего обучения и предоставляем следующие гарантии
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {guarantees.map((guarantee, index) => (
                <div key={index} className="flex items-start gap-4 p-4 bg-white/10 rounded-xl">
                  <div className="bg-white/20 p-2 rounded-lg flex-shrink-0">
                    {React.createElement(guarantee.icon, { className: "w-5 h-5" })}
                  </div>
                  <p className="text-sm text-white/90">{guarantee.text}</p>
                </div>
              ))}
            </div>
          </Card>
        </div>

        {/* Next Course Start */}
        <div className="text-center mt-16">
          <Card className="p-8 max-w-2xl mx-auto border-0 gradient-light">
            <div className="space-y-4">
              <Badge className="gradient-neon-bg text-white px-4 py-2">
                Ближайший старт
              </Badge>
              <h3 className="text-2xl font-bold">Курс стартует в начале сентября</h3>
              <p className="text-muted-foreground">
                Для подготовки к курсу мы предоставим вам материалы для изучения 
                и добавим в общий чат с будущими сокурсниками
              </p>
              <Button 
                className="gradient-accent-bg hover:opacity-90 text-white font-semibold px-8 py-3 hover-glow"
                onClick={scrollToForm}
              >
                Забронировать место
              </Button>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;