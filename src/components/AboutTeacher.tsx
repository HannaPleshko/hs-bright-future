import React from 'react';
import { Badge } from '@/components/ui/badge';
import { Card } from '@/components/ui/card';
import { Code2 } from 'lucide-react';
import annaPortrait from '@/assets/IMG_4340.JPG';

const AboutTeacher = () => {
  const technologies = [
    "React.js", "Node.js", "TypeScript", "Vue.js", "Next.js", "Redux",
    "TailwindCSS", "Express", "NestJS", "PostgreSQL", "MongoDB", "Docker"
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
              <div className="w-96 h-96 mx-auto relative">
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
            <div className="space-y-4">
              <h4 className="text-xl font-semibold gradient-neon-text">Моя история</h4>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  Еще будучи студенткой BSUIR, я поняла, что программирование преподается слишком сжато и теоретично. 
                  Многие концепции объяснялись поверхностно, а практических навыков катастрофически не хватало.
                </p>
                <p>
                  Получив коммерческий опыт в крупных IT-компаниях, я начала помогать друзьям и знакомым входить в IT. 
                  Оказалось, у меня есть природный талант объяснять сложные вещи простыми словами и разбивать сложные темы на понятные части.
                </p>
                <p>
                  Видя, как мои ученики успешно находят работу и развиваются в IT, я поняла, что могу помочь гораздо большему количеству людей. 
                  Так родилась HSCHOOL — школа, где каждый, независимо от возраста и бэкграунда, может стать востребованным программистом.
                </p>
                <p>
                  Сегодня HSCHOOL — это не просто курсы, а сообщество единомышленников, где мы вместе строим будущее IT-образования.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutTeacher;