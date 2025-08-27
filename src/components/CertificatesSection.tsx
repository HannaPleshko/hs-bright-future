import React from 'react';
import { Card } from '@/components/ui/card';
import { Award, Shield, GraduationCap, FileCheck } from 'lucide-react';

const CertificatesSection = () => {

  const credentials = [
    {
      icon: Award,
      title: "Международный опыт",
      description: "Опыт в крупных IT-компаниях мира, работа на фрилансе, клиенты из Великобритании, США, ЕС и СНГ",
      gradient: "gradient-accent-bg"
    },
    {
      icon: Shield,
      title: "7+ лет в IT",
      description: "Коммерческий опыт разработки веб-сервисов и мобильных приложений",
      gradient: "gradient-blue-bg"
    },
    {
      icon: GraduationCap,
      title: "Образование",
      description: "Выпускница БГУИР - ведущего технического университета Беларуси",
      gradient: "gradient-neon-bg"
    },
    {
      icon: FileCheck,
      title: "Проверенная методика",
      description: "100+ выпускников, 90% трудоустройство в IT-компании",
      gradient: "gradient-accent-bg"
    }
  ];

  return (
    <section className="py-12 relative overflow-hidden">
      <div className="absolute inset-0 gradient-light opacity-30"></div>
      
      <div className="container mx-auto px-6 relative z-10">


        {/* Credentials Grid */}
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold mb-4">
              Профессиональные <span className="gradient-neon-text">достижения</span>
            </h3>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Подтвержденный опыт и экспертиза в области веб-разработки
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {credentials.map((cred, index) => (
              <Card key={index} className="p-6 text-center hover-glow border-0 gradient-light group">
                <div className="space-y-4">
                  <div className={`${cred.gradient} p-4 rounded-2xl mx-auto w-fit group-hover:scale-110 transition-transform`}>
                    {React.createElement(cred.icon, { className: "w-8 h-8 text-white" })}
                  </div>
                  
                  <div className="space-y-2">
                    <h4 className="font-bold">{cred.title}</h4>
                    <p className="text-sm text-muted-foreground">{cred.description}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>


      </div>
    </section>
  );
};

export default CertificatesSection;