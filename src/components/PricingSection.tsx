import React, { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Check, Star, Users, User, Gift, Briefcase, GraduationCap, HeadphonesIcon, Sparkles, Zap, Crown } from 'lucide-react';

const PricingSection = () => {
  const [hoveredCard, setHoveredCard] = useState<string | null>(null);
  const [selectedPlan, setSelectedPlan] = useState<string | null>(null);

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
    { icon: Gift, text: "Возврат средств в течение первого месяца", color: "from-green-500 to-emerald-600" },
    { icon: Briefcase, text: "Бесплатное обучение при трудоустройстве во время курса", color: "from-blue-500 to-purple-600" },
    { icon: GraduationCap, text: "Год бесплатного сопровождения после окончания", color: "from-purple-500 to-pink-600" },
    { icon: HeadphonesIcon, text: "Индивидуальная помощь при сложностях с материалом", color: "from-orange-500 to-red-600" }
  ];

  const plans = [
    {
      id: 'group',
      title: 'Групповые занятия',
      subtitle: 'До 7 человек в группе',
      price: '$150',
      period: 'в месяц',
      badge: { text: 'Популярный выбор', icon: Users, color: 'from-blue-500 to-purple-600' },
      features: features,
      buttonText: 'Записаться в группу',
      gradient: 'from-blue-500 to-purple-600',
      icon: Users,
      popular: true
    },
    {
      id: 'individual',
      title: 'Индивидуальные занятия',
      subtitle: 'Персональное обучение 1-на-1',
      price: '$200',
      period: 'в месяц',
      badge: { text: 'Максимальный результат', icon: Crown, color: 'from-pink-500 to-orange-600' },
      features: [...features, 'Дополнительные занятия по запросу'],
      buttonText: 'Записаться индивидуально',
      gradient: 'from-pink-500 to-orange-600',
      icon: Crown,
      premium: true
    }
  ];

  return (
    <section className="py-20 relative overflow-hidden" id="pricing">
      {/* Enhanced Background */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-pink-500/5 rounded-full blur-3xl animate-float-delayed"></div>
        <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-purple-500/5 rounded-full blur-3xl animate-float-slow"></div>
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <Badge className="gradient-blue-bg text-white px-6 py-3 mb-6 hover:scale-105 transition-transform duration-300 cursor-pointer">
            <Sparkles className="w-4 h-4 mr-2" />
            Тарифы и условия
          </Badge>
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Выберите <span className="gradient-neon-text hover:text-gradient-animate transition-all duration-500 cursor-default">формат обучения</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Прозрачные цены без скрытых платежей. Все включено в стоимость курса
          </p>
        </div>

                {/* Enhanced Pricing Cards */}
        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto mb-20">
          {plans.map((plan, index) => (
            <Card 
              key={plan.id}
              className={`relative p-8 border-0 transition-all duration-500 cursor-pointer group ${
                hoveredCard === plan.id ? 'scale-105' : 'scale-100'
              } ${selectedPlan === plan.id ? 'ring-4 ring-blue-500/30' : ''}`}
              onMouseEnter={() => setHoveredCard(plan.id)}
              onMouseLeave={() => setHoveredCard(null)}
              onClick={() => setSelectedPlan(plan.id)}
            >
              {/* Animated Background */}
              <div className={`absolute inset-0 bg-gradient-to-br ${plan.gradient} opacity-5 group-hover:opacity-10 transition-opacity duration-500 rounded-2xl`}></div>
              
              {/* Enhanced Badge */}
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-10">
                <Badge className={`bg-gradient-to-r ${plan.badge.color} text-white px-6 py-3 shadow-lg hover:scale-110 transition-transform duration-300`}>
                  <plan.badge.icon className="w-4 h-4 mr-2" />
                  {plan.badge.text}
                </Badge>
              </div>

              {/* Popular/Premium Indicator */}
              {plan.popular && (
                <div className="absolute -top-2 -right-2 w-8 h-8 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full flex items-center justify-center shadow-lg animate-pulse">
                  <Star className="w-4 h-4 text-white" />
                </div>
              )}
              
              <div className="text-center space-y-8 pt-6 relative z-10">
                <div className="space-y-3">
                  <h3 className="text-3xl font-bold group-hover:text-gradient-animate transition-all duration-500">
                    {plan.title}
                  </h3>
                  <p className="text-muted-foreground text-lg">{plan.subtitle}</p>
                </div>

                <div className="space-y-3">
                  <div className="relative">
                    <div className="text-6xl font-bold gradient-neon-text group-hover:text-gradient-animate transition-all duration-500">
                      {plan.price}
                    </div>
                    <div className="text-muted-foreground text-lg">{plan.period}</div>
                    <div className={`text-sm font-semibold bg-gradient-to-r ${plan.gradient} bg-clip-text text-transparent`}>
                      3 занятия в неделю
                    </div>
                  </div>
                </div>

                <ul className="space-y-4 text-left">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start gap-4 group/item">
                      <div className={`p-1.5 rounded-full bg-gradient-to-r ${plan.gradient} group-hover/item:scale-110 transition-transform duration-300`}>
                        <Check className="w-4 h-4 text-white" />
                      </div>
                      <span className="text-sm text-muted-foreground group-hover/item:text-foreground transition-colors duration-300">
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Hover Effects */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl"></div>
            </Card>
          ))}
        </div>

        {/* Action Buttons */}
        <div className="text-center mb-20">
          <div className="flex flex-col md:flex-row gap-6 justify-center items-center">
            <Button 
              className="bg-gradient-to-r from-blue-500 to-purple-600 hover:opacity-90 text-white font-semibold px-12 py-6 text-lg shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 group/btn"
              onClick={scrollToForm}
            >
              <span className="flex items-center gap-2">
                Записаться в группу
                <Zap className="w-5 h-5 group-hover/btn:rotate-12 transition-transform duration-300" />
              </span>
            </Button>
            
            <Button 
              className="bg-gradient-to-r from-pink-500 to-orange-600 hover:opacity-90 text-white font-semibold px-12 py-6 text-lg shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 group/btn"
              onClick={scrollToForm}
            >
              <span className="flex items-center gap-2">
                Записаться индивидуально
                <Zap className="w-5 h-5 group-hover/btn:rotate-12 transition-transform duration-300" />
              </span>
            </Button>
          </div>
        </div>



        {/* Enhanced Next Course Start */}
        <div className="text-center">
          <Card className="p-10 max-w-3xl mx-auto border-0 shadow-2xl relative overflow-hidden group">
            {/* Animated Background */}
            <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-pink-50 group-hover:from-blue-100 group-hover:via-white group-hover:to-pink-100 transition-all duration-500"></div>
            <div className="absolute top-0 left-0 w-32 h-32 bg-blue-500/10 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-500"></div>
            <div className="absolute bottom-0 right-0 w-32 h-32 bg-pink-500/10 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-500"></div>
            
            <div className="relative z-10 space-y-6">
              <Badge className="gradient-neon-bg text-white px-6 py-3 text-lg hover:scale-105 transition-transform duration-300 cursor-pointer">
                <Sparkles className="w-4 h-4 mr-2" />
                Ближайший старт
              </Badge>
              <h3 className="text-3xl font-bold group-hover:text-gradient-animate transition-all duration-500">
                Курс стартует в начале сентября
              </h3>
              <p className="text-muted-foreground text-lg leading-relaxed">
                Для подготовки к курсу мы предоставим вам материалы для изучения 
                и добавим в общий чат с будущими сокурсниками
              </p>
              <Button 
                className="btn-modern text-white font-semibold px-10 py-4 text-lg hover:scale-105 transition-transform duration-300"
                onClick={scrollToForm}
              >
                <span className="flex items-center gap-2">
                  Забронировать место
                  <Crown className="w-5 h-5" />
                </span>
              </Button>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;