import React from 'react';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { 
  Code, 
  Users, 
  Award, 
  Clock, 
  Target, 
  Zap, 
  Shield, 
  TrendingUp,
  CheckCircle,
  Star,
  Rocket,
  Heart
} from 'lucide-react';

const WhyHSchool = () => {
  const reasons = [
    {
      id: 'refund',
      number: '1',
      title: 'В течение первого месяца можно вернуть оплату',
      description: 'Полная гарантия возврата средств, если обучение не подходит',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      id: 'free-continue',
      number: '2',
      title: 'В случае трудоустройства во время обучения вы можете продолжить учиться в нашей школе на бесплатной основе',
      description: 'Учитесь бесплатно, если нашли работу до окончания курса',
      color: 'from-green-500 to-emerald-500'
    },
    {
      id: 'support-year',
      number: '3',
      title: 'После обучения наша школа предоставляет год бесплатного сопровождения',
      description: 'Занятия 2 раза в неделю по 1ч - 1ч 30мин. Именно благодаря этому пункту мы имеем большой процент трудоустройств',
      color: 'from-purple-600 to-pink-500'
    },
    {
      id: 'individual',
      number: '4',
      title: 'В стоимость обучения входят индивидуальные занятия',
      description: 'В случае если вам трудно дается материал',
      color: 'from-pink-500 to-orange-500'
    },
    {
      id: 'interviews',
      number: '5',
      title: 'Также мы готовим к собеседованиям',
      description: 'Создаем имитацию того, как они проходят в реальной жизни',
      color: 'from-orange-500 to-red-500'
    },
    {
      id: 'freelance',
      number: '6',
      title: 'По запросу мы помогаем с выходом на фриланс',
      description: 'Платформа кворк и другие фриланс-сервисы',
      color: 'from-red-500 to-pink-600'
    },
    {
      id: 'portfolio',
      number: '7',
      title: 'Также помогаем с созданием портфолио, резюме и тд',
      description: 'Подготовка к поиску работы и продвижению себя на рынке',
      color: 'from-indigo-500 to-purple-600'
    }
  ];

  return (
    <section className="py-16 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-purple-500/5 to-pink-500/5"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-2 text-purple-600 font-semibold mb-6">
            <Star className="w-6 h-6" />
            <span className="text-lg">Почему выбирают нас</span>
          </div>
          <h2 className="text-4xl lg:text-6xl font-bold mb-8 leading-tight">
            <span className="bg-gradient-to-r from-purple-600 via-pink-600 to-orange-600 bg-clip-text text-transparent">
              7 причин
            </span>
            <br />
            <span className="text-gray-800">выбрать HSCHOOL</span>
          </h2>
          <p className="text-xl lg:text-2xl text-gray-600 max-w-4xl mx-auto mb-12 leading-relaxed">
            Мы создали уникальную образовательную экосистему, которая гарантирует ваш успех в IT
          </p>
        </div>

        {/* Main Reasons Grid */}
        <div className="max-w-6xl mx-auto space-y-6">
          {reasons.map((reason, index) => (
            <Card 
              key={reason.id}
              className="p-8 bg-white/80 backdrop-blur-sm rounded-2xl border border-gray-200/50 shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="flex items-start gap-6">
                {/* Number Badge */}
                <div className={`flex-shrink-0 w-16 h-16 bg-gradient-to-r ${reason.color} rounded-2xl flex items-center justify-center shadow-lg`}>
                  <span className="text-2xl font-bold text-white">{reason.number}</span>
                </div>
                
                {/* Content */}
                <div className="flex-1">
                  <h4 className="text-xl font-bold mb-3 text-gray-800 leading-tight">
                    {reason.title}
                  </h4>
                  
                  <p className="text-gray-600 leading-relaxed">
                    {reason.description}
                  </p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyHSchool;