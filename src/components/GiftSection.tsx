import React, { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Gift, Zap, Code, BookOpen, Target, Rocket, Sparkles, ArrowRight, Download, ExternalLink } from 'lucide-react';

const GiftSection = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [selectedGift, setSelectedGift] = useState<string | null>(null);

  const gifts = [
    {
      id: 'interview',
      title: 'Вопросы для интервью',
      description: '100+ вопросов с ответами для подготовки к собеседованию',
      icon: Target,
      color: 'from-blue-500 to-purple-600',
      action: 'Получить доступ',
      link: '#interview-questions'
    },
    {
      id: 'roadmap',
      title: 'Карта развития',
      description: 'Пошаговый план становления FullStack разработчиком',
      icon: Rocket,
      color: 'from-purple-600 to-pink-500',
      action: 'Скачать PDF',
      link: '#roadmap'
    },
    {
      id: 'resources',
      title: 'Полезные ресурсы',
      description: 'Подборка лучших материалов для изучения',
      icon: BookOpen,
      color: 'from-pink-500 to-orange-500',
      action: 'Открыть список',
      link: '#resources'
    }
  ];

  return (
    <section className="py-20 relative overflow-hidden" id="gift">
      {/* Enhanced Background */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-pink-500/10 rounded-full blur-3xl animate-float-delayed"></div>
        <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl animate-float-slow"></div>
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <Badge className="bg-gradient-to-r from-green-500 to-teal-500 text-white px-6 py-3 mb-6 hover:scale-105 transition-transform duration-300 cursor-pointer">
            <Gift className="w-4 h-4 mr-2" />
            Бесплатный подарок
          </Badge>
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Получите <span className="gradient-neon-text hover:text-gradient-animate transition-all duration-500 cursor-default">подарок</span> от HSCHOOL
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Мы подготовили для вас ценные материалы, которые помогут в обучении и трудоустройстве
          </p>
        </div>

  

        {/* Additional Gifts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-16">
          {gifts.map((gift, index) => (
            <Card 
              key={gift.id}
              className="relative p-8 bg-white border border-gray-200 hover:bg-gray-50 transition-all duration-500 cursor-pointer group transform hover:scale-105 hover:shadow-2xl rounded-2xl overflow-hidden"
              onMouseEnter={() => setIsHovered(gift.id)}
              onMouseLeave={() => setIsHovered(null)}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="space-y-6">
                <div className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r ${gift.color} rounded-2xl group-hover:scale-110 transition-transform duration-300`}>
                  <gift.icon className="w-8 h-8 text-white" />
                </div>
                
                <div className="space-y-3">
                  <h4 className="text-xl font-bold text-gray-800 group-hover:text-gray-900 transition-colors duration-300">
                    {gift.title}
                  </h4>
                  
                  <p className="text-gray-600 leading-relaxed group-hover:text-gray-700 transition-colors duration-300">
                    {gift.description}
                  </p>
                </div>

                <Button 
                  variant="outline"
                  className="w-full border-gray-300 text-gray-700 hover:bg-gray-100 hover:border-gray-400 hover:text-gray-900 px-6 py-3 transition-all duration-300 group-hover:scale-105"
                  onClick={() => window.open(gift.link, '_blank')}
                >
                  <span className="flex items-center gap-2">
                    {gift.action}
                    <ExternalLink className="w-4 h-4 group-hover:rotate-12 transition-transform duration-300" />
                  </span>
                </Button>
              </div>

            </Card>
          ))}
        </div>

    
      </div>
    </section>
  );
};

export default GiftSection;
