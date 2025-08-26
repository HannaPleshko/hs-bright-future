import React from 'react';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Award, Shield, GraduationCap, FileCheck } from 'lucide-react';
import certificate1 from '@/assets/certificate-mockup-1.jpg';
import certificate2 from '@/assets/certificate-mockup-2.jpg';

const CertificatesSection = () => {
  const certificates = [
    {
      title: "Сертификат FullStack разработчика",
      description: "Подтверждает успешное завершение полного курса JavaScript FullStack разработки",
      image: certificate1,
      type: "Профессиональный сертификат",
      gradient: "gradient-blue-bg"
    },
    {
      title: "Диплом о высшем образовании",
      description: "BSUIR - один из престижнейших технических вузов Беларуси",
      image: certificate2,
      type: "Высшее образование",
      gradient: "gradient-neon-bg"
    }
  ];

  const credentials = [
    {
      icon: Award,
      title: "Международный опыт",
      description: "20+ клиентов из Великобритании, США, ЕС и СНГ",
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
      title: "Престижное образование",
      description: "Выпускница BSUIR - ведущего технического университета",
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
        <div className="text-center mb-12">
          <Badge className="gradient-neon-bg text-white px-4 py-2 mb-6">
            <Shield className="w-4 h-4 mr-2" />
            Документы и сертификаты
          </Badge>
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">
            <span className="gradient-neon-text">Официальные</span> документы
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Вы можете ознакомиться с официальными сертификатами, дипломами преподавателя и основателя школы
          </p>
        </div>

        {/* Certificates Gallery */}
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto mb-16">
          {certificates.map((cert, index) => (
            <Card key={index} className="overflow-hidden hover-glow border-0 gradient-light group">
              <div className="relative">
                <img 
                  src={cert.image} 
                  alt={cert.title}
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                <div className="absolute bottom-4 left-4">
                  <Badge className={`${cert.gradient} text-white px-3 py-1`}>
                    {cert.type}
                  </Badge>
                </div>
              </div>
              
              <div className="p-6 space-y-4">
                <h3 className="text-xl font-bold">{cert.title}</h3>
                <p className="text-muted-foreground text-sm">{cert.description}</p>
                
                <div className="flex items-center gap-2 text-sm text-neon-blue">
                  <FileCheck className="w-4 h-4" />
                  <span>Документ доступен для ознакомления</span>
                </div>
              </div>
            </Card>
          ))}
        </div>

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

        {/* Trust Section */}
        <div className="mt-16 text-center">
          <Card className="p-8 max-w-3xl mx-auto gradient-neon-bg text-white border-0">
            <div className="space-y-6">
              <div className="flex justify-center">
                <div className="bg-white/20 p-4 rounded-full">
                  <Shield className="w-12 h-12" />
                </div>
              </div>
              
              <div className="space-y-4">
                <h3 className="text-2xl font-bold">Доверие и прозрачность</h3>
                <p className="text-white/90 max-w-2xl mx-auto">
                  Для нас важно, чтобы студенты обучались у специалистов с подтвержденной экспертизой. 
                  Все документы доступны для ознакомления, потому что мы ценим ваше доверие.
                </p>
              </div>

              <div className="grid grid-cols-3 gap-6 pt-6 border-t border-white/20">
                <div className="text-center">
                  <div className="text-2xl font-bold">7+</div>
                  <div className="text-sm text-white/80">Лет опыта</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold">20+</div>
                  <div className="text-sm text-white/80">Международных клиентов</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold">100%</div>
                  <div className="text-sm text-white/80">Прозрачность</div>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default CertificatesSection;