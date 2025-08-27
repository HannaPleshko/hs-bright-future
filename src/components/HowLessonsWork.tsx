import React from 'react';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Play, Video, MessageCircle, BookOpen, Target } from 'lucide-react';

const HowLessonsWork = () => {
  // Add floating animation styles
  React.useEffect(() => {
    const style = document.createElement('style');
    style.textContent = `
      @keyframes float {
        0%, 100% { transform: translateY(0px) rotate(0deg); }
        25% { transform: translateY(-6px) rotate(1deg); }
        50% { transform: translateY(-10px) rotate(0deg); }
        75% { transform: translateY(-6px) rotate(-1deg); }
      }
    `;
    document.head.appendChild(style);
    
    // Add hover functionality for info icons
    const infoIcons = document.querySelectorAll('.group\\/info');
    const noteBlocks = document.querySelectorAll('[id^="note-"]');
    
    infoIcons.forEach((icon, index) => {
      const noteBlock = noteBlocks[index];
      if (!noteBlock) return;
      
      icon.addEventListener('mouseenter', () => {
        const rect = icon.getBoundingClientRect();
        noteBlock.style.left = `${rect.left + rect.width / 2}px`;
        noteBlock.style.top = `${rect.top - 20}px`;
        noteBlock.style.transform = 'translate(-50%, -100%) scale(1)';
        noteBlock.style.opacity = '1';
        noteBlock.style.pointerEvents = 'auto';
      });
      
      icon.addEventListener('mouseleave', () => {
        noteBlock.style.opacity = '0';
        noteBlock.style.transform = 'translate(-50%, -100%) scale(0.95)';
        noteBlock.style.pointerEvents = 'none';
      });
    });
    
    return () => {
      document.head.removeChild(style);
      // Clean up event listeners
      infoIcons.forEach((icon) => {
        icon.removeEventListener('mouseenter', () => {});
        icon.removeEventListener('mouseleave', () => {});
      });
    };
  }, []);
  const lessonFeatures = [
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
            <div className="flex gap-4 justify-center">
              {lessonFeatures.map((feature, index) => (
                <Card key={index} className="p-3 hover-glow border-0 gradient-light text-center relative group min-w-[200px]">
                  <div className="space-y-2">
                    <div className="gradient-blue-bg p-2 rounded-lg mx-auto w-fit">
                      {React.createElement(feature.icon, { className: "w-4 h-4 text-white" })}
                    </div>
                    <div>
                      <h4 className="font-semibold text-sm mb-1">{feature.title}</h4>
                      <p className="text-xs text-muted-foreground leading-tight">{feature.description}</p>
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
        
        {/* Floating Note - Positioned at root level for proper z-index */}
        {lessonFeatures.map((feature, index) => 
          feature.note && (
            <div 
              key={`note-${index}`}
              className="fixed w-56 p-4 bg-gradient-to-br from-blue-50 to-indigo-100 backdrop-blur-md rounded-2xl shadow-2xl border border-blue-300/50 overflow-hidden opacity-0 pointer-events-none transition-all duration-300 transform scale-95"
              style={{
                zIndex: 999999,
                left: '50%',
                top: '50%',
                transform: 'translate(-50%, -50%) scale(0.95)'
              }}
              id={`note-${index}`}
            >
              <p className="text-sm text-blue-900 leading-relaxed text-center">
                {feature.note}
              </p>
            </div>
          )
        )}
      </div>
    </section>
  );
};

export default HowLessonsWork;