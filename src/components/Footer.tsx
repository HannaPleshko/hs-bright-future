import React from 'react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { Code, Mail, MessageCircle, Globe, Heart, ArrowUp } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { label: "О школе", href: "#about" },
    { label: "Программа курса", href: "#program" },
    { label: "Цены", href: "#pricing" },
    { label: "Отзывы", href: "#testimonials" },
    { label: "Запись на курс", href: "#pre-registration" }
  ];

  const technologies = [
    "JavaScript", "TypeScript", "React", "Node.js", "PostgreSQL", "MongoDB"
  ];

  const contacts = [
    { icon: MessageCircle, label: "Telegram", value: "@hschool_anna", href: "https://t.me/hschool_anna" },
    { icon: Mail, label: "Email", value: "info@hschool.dev", href: "mailto:info@hschool.dev" },
    { icon: Globe, label: "Website", value: "hschool.dev", href: "https://hschool.dev" }
  ];

  return (
    <footer className="relative mt-20 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 gradient-dark opacity-95"></div>
      
      <div className="relative z-10 text-white">
        {/* Main Footer Content */}
        <div className="container mx-auto px-6 py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Brand Column */}
            <div className="space-y-6">
              <div className="space-y-4">
                <div className="flex items-center gap-2">
                  <div className="gradient-accent-bg p-2 rounded-lg">
                    <Code className="w-6 h-6 text-white" />
                  </div>
                  <span className="text-2xl font-bold gradient-neon-text">HSCHOOL</span>
                </div>
                <p className="text-white/80 text-sm">
                  Образовательная IT-школа, где каждый может стать востребованным FullStack разработчиком
                </p>
              </div>

              <div className="space-y-2">
                <Badge className="gradient-blue-bg text-white">
                  100+ выпускников
                </Badge>
                <Badge className="gradient-neon-bg text-white">
                  90% трудоустройство
                </Badge>
              </div>
            </div>

            {/* Quick Links */}
            <div className="space-y-6">
              <h4 className="text-lg font-semibold">Быстрые ссылки</h4>
              <ul className="space-y-3">
                {quickLinks.map((link, index) => (
                  <li key={index}>
                    <a 
                      href={link.href}
                      className="text-white/70 hover:text-white transition-colors text-sm hover:gradient-neon-text"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Technologies */}
            <div className="space-y-6">
              <h4 className="text-lg font-semibold">Технологии</h4>
              <div className="flex flex-wrap gap-2">
                {technologies.map((tech, index) => (
                  <Badge 
                    key={index} 
                    variant="secondary" 
                    className="bg-white/10 text-white/80 hover:bg-white/20 transition-colors"
                  >
                    {tech}
                  </Badge>
                ))}
              </div>
              <div className="text-sm text-white/70">
                И многие другие современные инструменты разработки
              </div>
            </div>

            {/* Contact Info */}
            <div className="space-y-6">
              <h4 className="text-lg font-semibold">Контакты</h4>
              <div className="space-y-4">
                {contacts.map((contact, index) => (
                  <a
                    key={index}
                    href={contact.href}
                    className="flex items-center gap-3 text-white/70 hover:text-white transition-colors group"
                  >
                    <div className="bg-white/10 p-2 rounded-lg group-hover:bg-white/20 transition-colors">
                      {React.createElement(contact.icon, { className: "w-4 h-4" })}
                    </div>
                    <div>
                      <div className="text-xs text-white/50">{contact.label}</div>
                      <div className="text-sm">{contact.value}</div>
                    </div>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        <Separator className="bg-white/20" />

        {/* Bottom Footer */}
        <div className="container mx-auto px-6 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex flex-col md:flex-row items-center gap-4 text-sm text-white/60">
              <div className="flex items-center gap-1">
                © {currentYear} HSCHOOL. Сделано с 
                <Heart className="w-4 h-4 text-neon-pink mx-1" />
                для будущих разработчиков
              </div>
              <div className="hidden md:block">•</div>
              <div>Все права protection</div>
            </div>

            <div className="flex items-center gap-4">
              <div className="text-sm text-white/60">
                Основатель: Анна, FullStack Developer
              </div>
              <Button
                variant="outline"
                size="sm"
                onClick={scrollToTop}
                className="border-white/20 text-white/70 hover:bg-white/10 hover:text-white"
              >
                <ArrowUp className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </div>

        {/* Decorative Elements */}
        <div className="absolute bottom-0 left-0 w-32 h-32 gradient-blue-bg opacity-10 rounded-full blur-3xl"></div>
        <div className="absolute top-0 right-0 w-40 h-40 gradient-accent-bg opacity-10 rounded-full blur-3xl"></div>
      </div>
    </footer>
  );
};

export default Footer;