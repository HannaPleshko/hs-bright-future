import React from 'react';
import { Badge } from '@/components/ui/badge';
import { Card } from '@/components/ui/card';
import { Users, Globe, Award, Code2 } from 'lucide-react';
import annaPortrait from '@/assets/anna-portrait.jpg';

const AboutTeacher = () => {
  const technologies = [
    "React.js", "Node.js", "TypeScript", "Vue.js", "Next.js", "Redux",
    "TailwindCSS", "Express", "NestJS", "PostgreSQL", "MongoDB", "Docker"
  ];

  const achievements = [
    { icon: Globe, label: "20+ клиентов из UK, USA, EU", value: "Международный опыт" },
    { icon: Code2, label: "7+ лет коммерческого опыта", value: "Практикующий разработчик" },
    { icon: Award, label: "Престижный вуз BSUIR", value: "Качественное образование" },
    { icon: Users, label: "100+ выпускников", value: "Проверенная методика" }
  ];

  return (
    <section className="py-12 relative overflow-hidden">
      <div className="absolute inset-0 gradient-light opacity-50"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">
            Познакомьтесь с <span className="gradient-neon-text">преподавателем</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Анна — опытный FullStack-разработчик, который поможет вам стать востребованным IT-специалистом
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left - Photo and basic info */}
          <div className="space-y-8">
            <div className="relative">
              <div className="w-80 h-80 mx-auto relative">
                <img 
                  src={annaPortrait} 
                  alt="Анна - преподаватель HSCHOOL" 
                  className="w-full h-full object-cover rounded-3xl shadow-2xl hover-glow"
                />
                <div className="absolute -bottom-4 -right-4 gradient-accent-bg p-4 rounded-2xl shadow-lg animate-pulse-neon">
                  <Code2 className="w-8 h-8 text-white" />
                </div>
              </div>
            </div>
            
            <div className="text-center space-y-4">
              <h3 className="text-3xl font-bold">Анна</h3>
              <p className="text-lg text-neon-blue font-semibold">FullStack Developer & Основатель HSCHOOL</p>
              <p className="text-muted-foreground max-w-md mx-auto">
                "Моя цель — объяснить сложные вещи простыми словами и помочь каждому студенту достичь успеха в IT"
              </p>
            </div>
          </div>

          {/* Right - Detailed info */}
          <div className="space-y-8">
            {/* Achievements Grid */}
            <div className="grid grid-cols-2 gap-4">
              {achievements.map((achievement, index) => (
                <Card key={index} className="p-6 hover-glow border-0 gradient-light">
                  <div className="flex flex-col items-center text-center space-y-3">
                    <div className="gradient-blue-bg p-3 rounded-xl">
                      <achievement.icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <p className="font-semibold text-sm">{achievement.value}</p>
                      <p className="text-xs text-muted-foreground mt-1">{achievement.label}</p>
                    </div>
                  </div>
                </Card>
              ))}
            </div>

            {/* Technologies */}
            <div className="space-y-4">
              <h4 className="text-xl font-semibold">Технологический стек:</h4>
              <div className="flex flex-wrap gap-2">
                {technologies.map((tech, index) => (
                  <Badge 
                    key={index} 
                    variant="secondary" 
                    className="px-3 py-1 hover:bg-neon-blue/10 hover:text-neon-blue transition-colors"
                  >
                    {tech}
                  </Badge>
                ))}
              </div>
            </div>

            {/* Story */}
            <Card className="p-6 gradient-light hover-glow border-0">
              <div className="space-y-4">
                <h4 className="text-lg font-semibold gradient-neon-text">Моя история</h4>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Еще будучи студенткой BSUIR, я поняла, что программирование преподается слишком сжато. 
                  Получив коммерческий опыт, я начала помогать друзьям входить в IT. 
                  Оказалось, у меня есть талант объяснять сложные вещи простыми словами. 
                  Так родилась HSCHOOL — школа, где каждый может стать программистом.
                </p>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutTeacher;