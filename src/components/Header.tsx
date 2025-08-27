import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Code, Menu, Sparkles } from 'lucide-react';
import { useScroll, useScrollToSection } from '@/hooks/use-scroll';

const Header = () => {
  const { isScrolled, scrollProgress } = useScroll();
  const scrollToSection = useScrollToSection();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    // Update active section based on scroll position
    const sections = ['about', 'program', 'teacher', 'benefits', 'testimonials', 'pricing', 'gift'];
    const handleScroll = () => {
      const currentSection = sections.find(sectionId => {
        const element = document.getElementById(sectionId);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      setActiveSection(currentSection || '');
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleScrollToSection = (sectionId: string) => {
    scrollToSection(sectionId, 80); // Offset for header height
    setIsMobileMenuOpen(false);
  };

  const scrollToForm = () => {
    document.getElementById('pre-registration')?.scrollIntoView({ behavior: 'smooth' });
    setIsMobileMenuOpen(false);
  };

  const navItems = [
    { label: 'О школе', id: 'about' },
    { label: 'Программа', id: 'program' },
    { label: 'Преподаватель', id: 'teacher' },
    { label: 'Преимущества', id: 'benefits' },
    { label: 'Отзывы', id: 'testimonials' },
    { label: 'Цены', id: 'pricing' },
    { label: 'Подарки', id: 'gift' }
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-xl shadow-lg border-b border-white/20">
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-20">
          {/* Enhanced Logo */}
          <div 
            className="flex items-center gap-3 cursor-pointer group" 
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          >
            <div className="relative">
              <div className="bg-gradient-to-r from-blue-500 to-pink-500 p-3 rounded-xl group-hover:scale-110 transition-transform duration-300">
                <Code className="w-6 h-6 text-white" />
              </div>
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-pink-500 rounded-xl blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-2xl font-bold text-gradient-neon group-hover:text-gradient-animate transition-all duration-500">
                HSCHOOL
              </span>
              <Sparkles className="w-4 h-4 text-pink-500 opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:animate-pulse" />
            </div>
          </div>

          {/* Enhanced Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleScrollToSection(item.id)}
                className={`relative group text-sm font-medium transition-all duration-300 ${
                  activeSection === item.id 
                    ? 'text-foreground' 
                    : 'text-muted-foreground hover:text-foreground'
                }`}
              >
                <span className="relative z-10">{item.label}</span>
                
                {/* Animated Underline */}
                <span className={`absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-500 to-pink-500 transition-all duration-300 group-hover:w-full ${
                  activeSection === item.id ? 'w-full' : ''
                }`}></span>
                
                {/* Hover Background */}
                <span className="absolute inset-0 bg-gradient-to-r from-blue-50 to-pink-50 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"></span>
                
                {/* Active Indicator */}
                {activeSection === item.id && (
                  <span className="absolute -bottom-1 left-1/2 w-1 h-1 bg-gradient-to-r from-blue-500 to-pink-500 rounded-full transform -translate-x-1/2 animate-pulse"></span>
                )}
              </button>
            ))}
          </nav>

          {/* Enhanced CTA Button */}
          <div className="hidden lg:block">
            <Button 
              onClick={scrollToForm}
              className="btn-modern text-white font-semibold px-8 py-3 relative overflow-hidden group"
            >
              <span className="relative z-10 flex items-center gap-2">
                <span>Записаться</span>
                <Sparkles className="w-4 h-4 group-hover:rotate-12 transition-transform duration-300" />
              </span>
            </Button>
          </div>

          {/* Enhanced Mobile Menu */}
          <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
            <SheetTrigger asChild className="lg:hidden">
              <Button variant="ghost" size="icon" className="relative group">
                <Menu className="w-6 h-6 transition-transform duration-300 group-hover:scale-110" />
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-pink-500/20 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-80 bg-white/95 backdrop-blur-xl border-l border-white/20">
              <div className="flex items-center justify-between mb-8">
                <div className="flex items-center gap-3">
                  <div className="bg-gradient-to-r from-blue-500 to-pink-500 p-3 rounded-xl">
                    <Code className="w-6 h-6 text-white" />
                  </div>
                  <span className="text-2xl font-bold text-gradient-neon">HSCHOOL</span>
                </div>
              </div>

              <nav className="space-y-2">
                {navItems.map((item, index) => (
                  <button
                    key={item.id}
                    onClick={() => handleScrollToSection(item.id)}
                    className={`block w-full text-left py-4 px-4 rounded-xl transition-all duration-300 group ${
                      activeSection === item.id 
                        ? 'bg-gradient-to-r from-blue-500/50 to-pink-500/50 text-foreground shadow-lg' 
                        : 'text-foreground hover:bg-gradient-to-r hover:from-blue-500/50 hover:to-pink-500/50'
                    }`}
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <div className="flex items-center justify-between">
                      <span className="font-medium">{item.label}</span>
                      {activeSection === item.id && (
                        <div className="w-2 h-2 bg-gradient-to-r from-blue-500 to-pink-500 rounded-full animate-pulse"></div>
                      )}
                    </div>
                  </button>
                ))}
                
                <div className="pt-6">
                  <Button 
                    onClick={scrollToForm}
                    className="w-full btn-modern text-white font-semibold py-4"
                  >
                    <span className="flex items-center gap-2">
                      <Sparkles className="w-4 h-4" />
                      Записаться на курс
                    </span>
                  </Button>
                </div>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>

      {/* Enhanced Progress Bar */}
      <div className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-blue-500 via-pink-500 to-orange-500 transition-all duration-500"
           style={{ width: `${scrollProgress}%` }}>
      </div>
    </header>
  );
};

export default Header;