import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, Code, Sparkles, Play } from 'lucide-react';
import heroImage from '@/assets/hero-education.jpg';

const HeroSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    setIsVisible(true);
    
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const scrollToForm = () => {
    document.getElementById('pre-registration')?.scrollIntoView({ behavior: 'smooth' });
  };

  const highlights = [
    { text: "9 месяцев до первой работы", color: "from-blue-500 to-purple-600" },
    { text: "90% трудоустройство", color: "from-purple-600 to-pink-500" },
    { text: "Современные технологии", color: "from-pink-500 to-orange-500" }
  ];

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-purple-500/5 to-pink-500/5"></div>
      
      {/* Interactive Mouse Follow Effect - Hidden on mobile */}
      <div 
        className="absolute w-96 h-96 bg-gradient-to-r from-blue-400/20 to-pink-400/20 rounded-full blur-3xl pointer-events-none transition-all duration-300 ease-out hidden md:block"
        style={{
          left: mousePosition.x - 192,
          top: mousePosition.y - 192,
          transform: 'translate(-50%, -50%)'
        }}
      ></div>

      {/* Floating Code Element - Only </> */}
      <div className="absolute top-1/4 right-1/4 text-6xl text-blue-500/20 animate-float select-none">{"</>"}</div>

      <div className="container mx-auto px-6 py-16 z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className={`space-y-8 text-left transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="space-y-6">
              <div className="flex items-center gap-3 text-pink-500 font-semibold group">
                <div className="relative">
                  <Sparkles className="w-6 h-6 group-hover:scale-110 transition-transform duration-300" />
                  <div className="absolute inset-0 bg-pink-500/20 rounded-full blur-lg animate-pulse"></div>
                </div>
                <span className="text-gradient-animate">Топовая IT-школа</span>
              </div>
              
              <h1 className="text-5xl lg:text-7xl font-bold leading-tight">
                <span className="text-gradient-neon hover:text-gradient-animate transition-all duration-500 cursor-default">
                  HSCHOOL
                </span>
                <br />
                <span className="text-foreground hover:text-gradient-animate transition-all duration-500 cursor-default">
                  FullStack
                </span>
                <br />
                <span className="text-foreground hover:text-gradient-animate transition-all duration-500 cursor-default">
                  Developer
                </span>
              </h1>
              
              <p className="text-xl text-muted-foreground max-w-xl leading-relaxed">
                Станьте востребованным JavaScript разработчиком за 9 месяцев! 
                Обучение от практикующего FullStack-разработчика с 7+ годами опыта.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg" 
                className="btn-modern text-white font-semibold px-8 py-6 text-lg relative overflow-hidden group"
                onClick={scrollToForm}
              >
                <span className="relative z-10 flex items-center">
                  Записаться на курс
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                </span>
              </Button>
              
              <Button 
                variant="outline" 
                size="lg" 
                className="interactive-border hover:bg-gradient-to-r hover:from-blue-50 hover:to-pink-50 px-8 py-6 text-lg group transition-all duration-300"
                onClick={() => document.getElementById('program')?.scrollIntoView({ behavior: 'smooth' })}
              >
                <Code className="mr-2 w-5 h-5 group-hover:rotate-12 transition-transform duration-300" />
                Узнать программу
              </Button>
            </div>

            {/* Redesigned Highlights */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-8">
              {highlights.map((highlight, index) => (
                <div 
                  key={index}
                  className="group cursor-pointer transition-all duration-500 stagger-1"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="relative p-4 rounded-2xl bg-gradient-to-r from-white/5 to-white/10 backdrop-blur-sm border border-white/10 hover:border-white/20 transition-all duration-300 hover:shadow-xl hover:shadow-pink-500/10">
                    <div className={`text-lg font-semibold bg-gradient-to-r ${highlight.color} bg-clip-text text-transparent group-hover:scale-105 transition-transform duration-300 text-center`}>
                      {highlight.text}
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl"></div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Image with Enhanced Effects */}
          <div className={`relative transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="relative z-10 group">
              <div className="relative overflow-hidden rounded-3xl shadow-2xl">
                <img 
                  src={heroImage} 
                  alt="Современное образование в IT" 
                  className="w-full transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                {/* Play Button Overlay */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500">
                  <div className="bg-white/90 backdrop-blur-sm rounded-full p-4 shadow-2xl hover:scale-110 transition-transform duration-300 cursor-pointer">
                    <Play className="w-8 h-8 text-pink-500 ml-1" />
                  </div>
                </div>
              </div>
              
              {/* Enhanced Decorative Elements */}
              <div className="absolute -top-6 -left-6 w-24 h-24 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full blur-xl opacity-60 animate-pulse"></div>
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-gradient-to-r from-pink-500 to-orange-500 rounded-full blur-xl opacity-60 animate-pulse"></div>
              
              {/* Floating Badge */}
              <div className="absolute -top-4 -right-4 bg-white/90 backdrop-blur-sm rounded-2xl p-3 shadow-xl border border-white/20 animate-float">
                <div className="text-center">
                  <div className="text-2xl font-bold text-gradient-neon">9</div>
                  <div className="text-xs text-muted-foreground">месяцев</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-pink-500 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-pink-500 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;