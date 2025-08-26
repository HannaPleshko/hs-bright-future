import React, { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ChevronLeft, ChevronRight, Code, Database, Globe, TestTube, Layers, Zap } from 'lucide-react';
import frontendImage from '@/assets/course-frontend.jpg';
import backendImage from '@/assets/course-backend.jpg';

const CourseProgram = () => {
  const [currentModule, setCurrentModule] = useState(0);

  const modules = [
    {
      title: "Основы программирования",
      duration: "3 месяца",
      icon: Code,
      gradient: "gradient-blue-bg",
      image: frontendImage,
      topics: [
        "HTML и CSS - создание красивых интерфейсов",
        "JavaScript + DOM - оживление страниц",
        "Основы алгоритмов и структур данных",
        "Git и работа с системами контроля версий"
      ],
      description: "Фундаментальные знания для любого разработчика"
    },
    {
      title: "Frontend разработка",
      duration: "3 месяца",
      icon: Globe,
      gradient: "gradient-accent-bg",
      image: frontendImage,
      topics: [
        "TypeScript - код, который сам себя проверяет",
        "React + Redux - современные веб-приложения",
        "Responsive дизайн и адаптивность",
        "Работа с API и асинхронными запросами"
      ],
      description: "Создание интерактивных пользовательских интерфейсов"
    },
    {
      title: "Backend разработка",
      duration: "3 месяца",
      icon: Database,
      gradient: "gradient-neon-bg",
      image: backendImage,
      topics: [
        "Node.js - серверная разработка",
        "SQL и работа с базами данных",
        "RESTful API и микросервисы",
        "Безопасность и аутентификация"
      ],
      description: "Серверная логика и управление данными"
    },
    {
      title: "Тестирование и DevOps",
      duration: "В процессе",
      icon: TestTube,
      gradient: "gradient-blue-bg",
      image: backendImage,
      topics: [
        "Unit-тесты - покрытие кода тестами",
        "CI/CD и автоматизация развертывания",
        "Docker и контейнеризация",
        "Мониторинг и логирование"
      ],
      description: "Профессиональные инструменты разработки"
    }
  ];

  const nextModule = () => {
    setCurrentModule((prev) => (prev + 1) % modules.length);
  };

  const prevModule = () => {
    setCurrentModule((prev) => (prev - 1 + modules.length) % modules.length);
  };

  return (
    <section className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 gradient-dark opacity-5"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-2 text-neon-orange font-semibold mb-4">
            <Layers className="w-5 h-5" />
            <span>Программа обучения</span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            <span className="gradient-neon-text">JavaScript FullStack</span> Developer
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            9 месяцев структурированного обучения + год бесплатного сопровождения до трудоустройства
          </p>
          
          {/* Course Features */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            <Badge className="px-4 py-2 gradient-blue-bg text-white">
              <Zap className="w-4 h-4 mr-2" />
              3 занятия в неделю
            </Badge>
            <Badge className="px-4 py-2 gradient-accent-bg text-white">
              2-2.5 часа занятие
            </Badge>
            <Badge className="px-4 py-2 gradient-neon-bg text-white">
              До 7 человек в группе
            </Badge>
          </div>
        </div>

        {/* Interactive Module Showcase */}
        <div className="max-w-6xl mx-auto">
          <div className="relative">
            {/* Navigation */}
            <div className="flex justify-between items-center mb-8">
              <Button 
                variant="outline" 
                size="icon" 
                onClick={prevModule}
                className="neon-border hover:bg-neon-blue/5"
              >
                <ChevronLeft className="w-5 h-5" />
              </Button>
              
              <div className="flex space-x-2">
                {modules.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentModule(index)}
                    className={`w-3 h-3 rounded-full transition-all ${
                      index === currentModule 
                        ? 'bg-neon-pink w-8' 
                        : 'bg-muted-foreground/30 hover:bg-neon-blue/50'
                    }`}
                  />
                ))}
              </div>
              
              <Button 
                variant="outline" 
                size="icon" 
                onClick={nextModule}
                className="neon-border hover:bg-neon-blue/5"
              >
                <ChevronRight className="w-5 h-5" />
              </Button>
            </div>

            {/* Current Module Display */}
            <Card className="overflow-hidden hover-glow border-0 gradient-light">
              <div className="grid lg:grid-cols-2 gap-0">
                {/* Left - Image */}
                <div className="relative h-80 lg:h-auto">
                  <img 
                    src={modules[currentModule].image} 
                    alt={modules[currentModule].title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-black/20 to-transparent"></div>
                  <div className={`absolute top-6 left-6 ${modules[currentModule].gradient} p-4 rounded-xl shadow-lg`}>
                    {React.createElement(modules[currentModule].icon, { className: "w-8 h-8 text-white" })}
                  </div>
                </div>

                {/* Right - Content */}
                <div className="p-8 lg:p-12 space-y-6">
                  <div className="space-y-4">
                    <Badge className={`${modules[currentModule].gradient} text-white px-3 py-1`}>
                      {modules[currentModule].duration}
                    </Badge>
                    <h3 className="text-3xl font-bold">{modules[currentModule].title}</h3>
                    <p className="text-muted-foreground">{modules[currentModule].description}</p>
                  </div>

                  <div className="space-y-4">
                    <h4 className="text-lg font-semibold">Что изучаем:</h4>
                    <ul className="space-y-3">
                      {modules[currentModule].topics.map((topic, topicIndex) => (
                        <li key={topicIndex} className="flex items-start gap-3">
                          <div className="w-2 h-2 bg-neon-pink rounded-full mt-2 flex-shrink-0"></div>
                          <span className="text-muted-foreground">{topic}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </Card>
          </div>

          {/* Timeline Overview */}
          <div className="mt-16 grid grid-cols-1 md:grid-cols-4 gap-4">
            {modules.map((module, index) => (
              <Card 
                key={index}
                className={`p-6 cursor-pointer transition-all hover-glow border-0 ${
                  index === currentModule 
                    ? 'gradient-light ring-2 ring-neon-pink/50' 
                    : 'bg-card hover:bg-accent/50'
                }`}
                onClick={() => setCurrentModule(index)}
              >
                <div className="text-center space-y-3">
                  <div className={`${module.gradient} p-3 rounded-xl mx-auto w-fit`}>
                    {React.createElement(module.icon, { className: "w-6 h-6 text-white" })}
                  </div>
                  <h4 className="font-semibold text-sm">{module.title}</h4>
                  <p className="text-xs text-muted-foreground">{module.duration}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CourseProgram;