import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, Code, Sparkles } from 'lucide-react';
import heroImage from '@/assets/hero-education.jpg';

const HeroSection = () => {
  const scrollToForm = () => {
    document.getElementById('pre-registration')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 gradient-neon-bg opacity-5"></div>
      <div className="absolute top-20 left-10 w-32 h-32 bg-neon-blue/10 rounded-full blur-xl animate-float"></div>
      <div className="absolute bottom-20 right-10 w-40 h-40 bg-neon-pink/10 rounded-full blur-xl animate-float" style={{animationDelay: '2s'}}></div>
      <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-neon-orange/10 rounded-full blur-xl animate-float" style={{animationDelay: '4s'}}></div>

      <div className="container mx-auto px-6 py-16 z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8 text-left">
            <div className="space-y-4">
              <div className="flex items-center gap-2 text-neon-pink font-semibold">
                <Sparkles className="w-5 h-5" />
                <span>Топовая IT-школа</span>
              </div>
              <h1 className="text-5xl lg:text-7xl font-bold leading-tight">
                <span className="gradient-neon-text">HSCHOOL</span>
                <br />
                <span className="text-foreground">FullStack</span>
                <br />
                <span className="text-foreground">Developer</span>
              </h1>
              <p className="text-xl text-muted-foreground max-w-xl">
                Станьте востребованным JavaScript разработчиком за 9 месяцев! 
                Обучение от практикующего FullStack-разработчика с 7+ годами опыта.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg" 
                className="gradient-accent-bg hover:opacity-90 text-white font-semibold px-8 py-6 text-lg hover-glow"
                onClick={scrollToForm}
              >
                Записаться на курс
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                className="neon-border hover:bg-neon-blue/5 px-8 py-6 text-lg"
                onClick={() => document.getElementById('program')?.scrollIntoView({ behavior: 'smooth' })}
              >
                <Code className="mr-2 w-5 h-5" />
                Узнать программу
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 pt-8">
              <div className="text-center">
                <div className="text-3xl font-bold gradient-neon-text">100+</div>
                <div className="text-sm text-muted-foreground">Выпускников</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold gradient-neon-text">90%</div>
                <div className="text-sm text-muted-foreground">Трудоустройство</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold gradient-neon-text">7+</div>
                <div className="text-sm text-muted-foreground">Лет опыта</div>
              </div>
            </div>
          </div>

          {/* Right Image */}
          <div className="relative">
            <div className="relative z-10">
              <img 
                src={heroImage} 
                alt="Современное образование в IT" 
                className="w-full rounded-2xl shadow-2xl hover-glow animate-float"
              />
            </div>
            {/* Decorative elements */}
            <div className="absolute -top-6 -left-6 w-24 h-24 gradient-blue-bg rounded-full blur-xl opacity-60"></div>
            <div className="absolute -bottom-6 -right-6 w-32 h-32 gradient-accent-bg rounded-full blur-xl opacity-60"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;