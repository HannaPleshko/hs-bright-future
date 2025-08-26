import React from 'react';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Play, Clock, Users, Video, MessageCircle, BookOpen, Target } from 'lucide-react';

const HowLessonsWork = () => {
  const lessonFeatures = [
    {
      icon: Clock,
      title: "2-2.5 часа",
      description: "Оптимальная продолжительность для эффективного обучения"
    },
    {
      icon: Users,
      title: "До 7 человек",
      description: "Персональный подход к каждому студенту"
    },
    {
      icon: Video,
      title: "Живое общение",
      description: "Интерактивные занятия с обратной связью"
    },
    {
      icon: MessageCircle,
      title: "Вопросы в реальном времени",
      description: "Разбираем непонятные моменты сразу"
    }
  ];

  const lessonStructure = [
    { step: "1", title: "Теория", description: "Объяснение новых концепций" },
    { step: "2", title: "Практика", description: "Живое кодирование вместе" },
    { step: "3", title: "Вопросы", description: "Разбор сложных моментов" },
    { step: "4", title: "Домашнее задание", description: "Закрепление материала" }
  ];

  return (
    <section className="py-16 relative overflow-hidden">
      <div className="absolute inset-0 gradient-light opacity-30"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-12">
          <Badge className="gradient-blue-bg text-white px-4 py-2 mb-4">
            <BookOpen className="w-4 h-4 mr-2" />
            Как проходят занятия
          </Badge>
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">
            <span className="gradient-neon-text">Живые</span> интерактивные уроки
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Узнайте, как организован процесс обучения в HSCHOOL
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          {/* Left - Video Placeholder */}
          <div className="relative">
            <Card className="relative overflow-hidden hover-glow border-0 aspect-video bg-gradient-to-br from-gray-900 to-gray-800">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center space-y-4">
                  <div className="gradient-accent-bg p-6 rounded-full mx-auto w-fit animate-pulse-neon">
                    <Play className="w-12 h-12 text-white fill-white" />
                  </div>
                  <div className="text-white space-y-2">
                    <h3 className="text-xl font-semibold">Демо урока</h3>
                    <p className="text-white/80 text-sm">Как Анна объясняет JavaScript</p>
                  </div>
                </div>
              </div>
              
              {/* Video placeholder overlay */}
              <div className="absolute top-4 left-4">
                <Badge className="bg-red-500 text-white">
                  ● LIVE
                </Badge>
              </div>
              
              <div className="absolute bottom-4 right-4">
                <Badge className="bg-black/50 text-white">
                  12:34
                </Badge>
              </div>
            </Card>
            
            <div className="text-center mt-4">
              <Button variant="outline" className="neon-border hover:bg-neon-blue/5">
                <Video className="w-4 h-4 mr-2" />
                Смотреть полный урок
              </Button>
            </div>
          </div>

          {/* Right - Features */}
          <div className="space-y-8">
            {/* Lesson Features */}
            <div className="grid grid-cols-2 gap-4">
              {lessonFeatures.map((feature, index) => (
                <Card key={index} className="p-4 hover-glow border-0 gradient-light text-center">
                  <div className="space-y-3">
                    <div className="gradient-blue-bg p-3 rounded-xl mx-auto w-fit">
                      {React.createElement(feature.icon, { className: "w-5 h-5 text-white" })}
                    </div>
                    <div>
                      <h4 className="font-semibold text-sm">{feature.title}</h4>
                      <p className="text-xs text-muted-foreground mt-1">{feature.description}</p>
                    </div>
                  </div>
                </Card>
              ))}
            </div>

            {/* Lesson Structure */}
            <div className="space-y-4">
              <h3 className="text-xl font-bold text-center">Структура занятия</h3>
              <div className="space-y-3">
                {lessonStructure.map((item, index) => (
                  <div key={index} className="flex items-center gap-4 p-3 rounded-lg bg-accent/30">
                    <div className="gradient-neon-bg w-8 h-8 rounded-full flex items-center justify-center text-white font-bold text-sm">
                      {item.step}
                    </div>
                    <div>
                      <h4 className="font-semibold text-sm">{item.title}</h4>
                      <p className="text-xs text-muted-foreground">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Info */}
        <div className="mt-12 text-center">
          <Card className="p-6 max-w-2xl mx-auto gradient-neon-bg text-white border-0">
            <div className="space-y-4">
              <Target className="w-8 h-8 mx-auto" />
              <h3 className="text-xl font-bold">Гибкий подход к обучению</h3>
              <p className="text-white/90 text-sm">
                Если какая-то тема требует больше времени — занятие может длиться дольше. 
                Главное, чтобы материал был понятен каждому студенту.
              </p>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default HowLessonsWork;