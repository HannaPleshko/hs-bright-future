import React, { useState, useEffect } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ChevronLeft, ChevronRight, Star, Quote, MapPin, Briefcase } from 'lucide-react';

const TestimonialsSection = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const testimonials = [
    {
      name: "Михаил К.",
      role: "Frontend Developer",
      company: "IT-Компания в Минске",
      location: "Беларусь",
      rating: 5,
      text: "Анна объясняет сложные концепции простыми словами. За 9 месяцев я прошел путь от новичка до Junior Frontend разработчика. Сейчас работаю в крутой IT-компании и очень доволен результатом!",
      salary: "$800/месяц",
      beforeAfter: "С нуля до Junior за 9 месяцев"
    },
    {
      name: "Елена М.",
      role: "FullStack Developer",
      company: "IT-компания",
      location: "Удаленно",
      rating: 5,
      text: "HSCHOOL - это не просто курсы, это полноценная подготовка к реальной работе. Год поддержки после окончания помог мне найти отличную удаленную работу.",
      salary: "",
      beforeAfter: ""
    },
    {
      name: "Дмитрий В.",
      role: "Backend Developer",
      company: "Европейская IT-компания",
      location: "Польша",
      rating: 5,
      text: "Программа курса очень структурированная. Особенно понравилось, что можно было выбрать направление - я сосредоточился на Backend и Node.js. Через 3 месяца после выпуска переехал работать в Польшу.",
      salary: "€2000/месяц",
      beforeAfter: "Переквалификация из другой сферы"
    },
    {
      name: "Анастасия Л.",
      role: "Frontend Developer",
      company: "Стартап в Лондоне",
      location: "Великобритания",
      rating: 5,
      text: "Индивидуальные занятия позволили изучить материал в удобном темпе. Анна всегда была готова объяснить сложные моменты. Сейчас работаю в лондонском стартапе и получаю опыт международной разработки!",
      salary: "£2500/месяц",
      beforeAfter: "Смена профессии в 28 лет"
    },
    {
      name: "Игорь С.",
      role: "FullStack Developer",
      company: "Собственные проекты на фрилансе",
      location: "Украина",
      rating: 5,
      text: "Помимо технических навыков, Анна научила как работать с клиентами и выходить на фриланс. Сейчас у меня стабильный доход от собственных проектов, и я планирую открыть свою студию разработки.",
      salary: "$1500/месяц",
      beforeAfter: "От студента до фрилансера"
    }
  ];

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  // Auto-advance testimonials
  useEffect(() => {
    const interval = setInterval(nextTestimonial, 6000);
    return () => clearInterval(interval);
  }, []);

  const current = testimonials[currentTestimonial];

  return (
    <section className="py-12 relative overflow-hidden">
      <div className="absolute inset-0 gradient-dark opacity-5"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-12">
          <Badge className="gradient-accent-bg text-white px-4 py-2 mb-6">
            <Star className="w-4 h-4 mr-2" />
            Отзывы выпускников
          </Badge>
        </div>

        {/* Main Testimonial Display */}
        <div className="max-w-4xl mx-auto mb-12">
          <Card className="overflow-hidden hover-glow border-0 gradient-light">
            <div className="relative p-8 lg:p-12">
              {/* Quote Icon */}
              <div className="absolute top-6 right-6 opacity-10">
                <Quote className="w-24 h-24 text-neon-blue" />
              </div>

              <div className="relative z-10 space-y-8">
                {/* Rating */}
                <div className="flex justify-center gap-1">
                  {[...Array(current.rating)].map((_, i) => (
                    <Star key={i} className="w-6 h-6 fill-neon-orange text-neon-orange" />
                  ))}
                </div>

                {/* Testimonial Text */}
                <blockquote className="text-xl lg:text-2xl text-center leading-relaxed text-foreground">
                  "{current.text}"
                </blockquote>

                {/* Author Info */}
                <div className="text-center space-y-4">
                  <div className="space-y-2">
                    <h4 className="text-2xl font-bold">{current.name}</h4>
                    <div className="flex flex-wrap justify-center gap-4 text-sm text-muted-foreground">
                      <div className="flex items-center gap-1">
                        <Briefcase className="w-4 h-4" />
                        {current.role}
                      </div>
                      <div className="flex items-center gap-1">
                        <MapPin className="w-4 h-4" />
                        {current.location}
                      </div>
                    </div>
                  </div>




                </div>
              </div>
            </div>
          </Card>
        </div>

        {/* Navigation Dots */}
        <div className="flex justify-center items-center gap-8 mb-12">
          <div className="flex space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentTestimonial(index)}
                className={`w-3 h-3 rounded-full transition-all ${
                  index === currentTestimonial 
                    ? 'bg-neon-pink w-8' 
                    : 'bg-muted-foreground/30 hover:bg-neon-blue/50'
                }`}
              />
            ))}
          </div>
        </div>


      </div>
    </section>
  );
};

export default TestimonialsSection;