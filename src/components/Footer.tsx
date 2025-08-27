import React from 'react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { Code, Mail, MessageCircle, Globe, Heart, ArrowUp, Github, Linkedin, Twitter, Sparkles, Zap, Users, Award, Instagram } from 'lucide-react';

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
    { label: "Подарки", href: "#gift" }
  ];

  const technologies = [
    "JavaScript", "TypeScript", "React", "Node.js", "PostgreSQL", "MongoDB", "Next.js", "Tailwind"
  ];

  const contacts = [
    { icon: MessageCircle, label: "Telegram основателя", value: "@hannapazdzeyeva", href: "https://t.me/hannapazdzeyeva" },
    { icon: Mail, label: "Email", value: "info@hschool.dev", href: "mailto:info@hschool.dev" },
    { icon: Globe, label: "Website", value: "hschool.dev", href: "https://hschool.dev" }
  ];

  const socialLinks = [
    { icon: MessageCircle, href: "https://www.instagram.com/yesenyasha/", label: "Instagram основателя" },
    { icon: MessageCircle, href: "https://www.instagram.com/hschool.official/", label: "Instagram школы" },
    { icon: Linkedin, href: "https://www.linkedin.com/in/hanna-p-06853a203/", label: "LinkedIn основателя" }
  ];

  const achievements = [
    { icon: Users, value: "100+", label: "Выпускников", color: "from-blue-500 to-purple-600" },
    { icon: Award, value: "90%", label: "Трудоустройство", color: "from-purple-600 to-pink-500" },
    { icon: Zap, value: "7+", label: "Лет опыта", color: "from-pink-500 to-orange-500" }
  ];

  return (
    <footer className="relative w-full bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 overflow-hidden">
      {/* Enhanced Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-pink-500/10 rounded-full blur-3xl animate-float-delayed"></div>
        <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl animate-float-slow"></div>
      </div>

      <div className="relative z-10 text-white">
        {/* Main Footer Content */}
        <div className="container mx-auto px-6 py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Brand Column */}
            <div className="space-y-6">
              <div className="space-y-4">
                <div className="flex items-center gap-3 group">
                  <div className="relative">
                    <div className="bg-gradient-to-r from-blue-500 to-pink-500 p-3 rounded-xl group-hover:scale-110 transition-transform duration-300">
                      <Code className="w-6 h-6 text-white" />
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-pink-500 rounded-xl blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                  <span className="text-2xl font-bold text-gradient-neon group-hover:text-gradient-animate transition-all duration-500">
                    HSCHOOL
                  </span>
                </div>
                <p className="text-white/80 text-sm leading-relaxed max-w-xs">
                  Образовательная IT-школа, где каждый может стать востребованным FullStack разработчиком
                </p>
              </div>

              {/* Achievements */}
              <div className="space-y-3">
                {achievements.map((achievement, index) => (
                  <div 
                    key={index}
                    className="flex items-center gap-3 p-3 bg-white/5 rounded-xl hover:bg-white/10 transition-all duration-300 cursor-pointer group"
                  >
                    <div className={`w-8 h-8 bg-gradient-to-r ${achievement.color} rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                      <achievement.icon className="w-4 h-4 text-white" />
                    </div>
                    <div>
                      <div className="text-lg font-bold text-white">{achievement.value}</div>
                      <div className="text-xs text-white/70">{achievement.label}</div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Social Links */}
              <div className="flex items-center gap-3 pt-2">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    className="group p-2 bg-white/10 rounded-lg hover:bg-white/20 transition-all duration-300 hover:scale-110"
                    aria-label={social.label}
                  >
                    <social.icon className="w-4 h-4 text-white/70 group-hover:text-white transition-colors duration-300" />
                  </a>
                ))}
              </div>
            </div>

            {/* Quick Links */}
            <div className="space-y-6">
              <h4 className="text-lg font-semibold text-gradient-animate">Быстрые ссылки</h4>
              <ul className="space-y-3">
                {quickLinks.map((link, index) => (
                  <li key={index}>
                    <a 
                      href={link.href}
                      className="group flex items-center gap-2 text-white/70 hover:text-white transition-all duration-300 text-sm"
                    >
                      <span className="w-0 h-0.5 bg-gradient-to-r from-blue-500 to-pink-500 group-hover:w-4 transition-all duration-300"></span>
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Technologies */}
            <div className="space-y-6">
              <h4 className="text-lg font-semibold text-gradient-animate">Технологии</h4>
              <div className="flex flex-wrap gap-2">
                {technologies.map((tech, index) => (
                  <Badge 
                    key={index} 
                    variant="secondary" 
                    className="bg-white/10 text-white/80 hover:bg-white/20 hover:scale-105 transition-all duration-300 cursor-pointer border border-white/20"
                  >
                    {tech}
                  </Badge>
                ))}
              </div>
              <div className="text-sm text-white/70 leading-relaxed">
                И многие другие современные инструменты разработки
              </div>
            </div>

            {/* Contact Info */}
            <div className="space-y-6">
              <h4 className="text-lg font-semibold text-gradient-animate">Контакты</h4>
              <div className="space-y-4">
                {contacts.map((contact, index) => (
                  <a
                    key={index}
                    href={contact.href}
                    className="group flex items-center gap-3 text-white/70 hover:text-white transition-all duration-300"
                  >
                    <div className="bg-white/10 p-2 rounded-lg group-hover:bg-white/20 group-hover:scale-110 transition-all duration-300">
                      {React.createElement(contact.icon, { className: "w-4 h-4" })}
                    </div>
                    <div>
                      <div className="text-xs text-white/50">{contact.label}</div>
                      <div className="text-sm font-medium">{contact.value}</div>
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
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="flex flex-col md:flex-row items-center gap-4 text-sm text-white/60">
              <div className="flex items-center gap-2">
                © {currentYear} HSCHOOL. Сделано с 
                <Heart className="w-4 h-4 text-pink-500 animate-pulse" />
                для будущих разработчиков
              </div>
              <div className="hidden md:block text-white/30">•</div>
              <div>Все права защищены</div>
            </div>

            <div className="flex items-center gap-4">
              <div className="text-sm text-white/60 text-center md:text-right">
                Основатель: Анна, FullStack Developer
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Enhanced Decorative Bottom Border */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 via-purple-600 to-pink-500"></div>
    </footer>
  );
};

export default Footer;