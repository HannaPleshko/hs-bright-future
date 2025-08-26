import React from 'react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { HelpCircle, MessageCircle } from 'lucide-react';

const FAQ = () => {
  const scrollToForm = () => {
    document.getElementById('pre-registration')?.scrollIntoView({ behavior: 'smooth' });
  };

  const faqs = [
    {
      question: "Подходит ли курс для новичков без опыта программирования?",
      answer: "Да, курс специально разработан для людей без опыта. Мы начинаем с основ HTML и CSS, постепенно переходя к более сложным технологиям. Главное — желание учиться!"
    },
    {
      question: "Сколько времени нужно уделять самостоятельному изучению?",
      answer: "Рекомендуем дополнительно 1-2 часа в день для выполнения домашних заданий и практики. Это поможет закрепить материал и быстрее прогрессировать."
    },
    {
      question: "Что если я пропущу занятие?",
      answer: "Все занятия записываются и доступны на платформе 24/7. Также мы поможем наверстать пропущенный материал через индивидуальные консультации."
    },
    {
      question: "Гарантируете ли вы трудоустройство?",
      answer: "Мы предоставляем все необходимые инструменты для трудоустройства: портфолио, подготовку к собеседованиям, год бесплатного сопровождения. 90% наших выпускников находят работу в IT."
    },
    {
      question: "Можно ли совмещать обучение с работой?",
      answer: "Да, многие студенты успешно совмещают. Занятия проходят вечером, есть записи всех уроков. При трудоустройстве во время обучения — переводим на бесплатную основу."
    },
    {
      question: "Какое оборудование нужно для обучения?",
      answer: "Достаточно компьютера или ноутбука с доступом в интернет. Все необходимое программное обеспечение бесплатное. Подробные инструкции по настройке предоставим."
    },
    {
      question: "Есть ли возможность возврата денег?",
      answer: "Да, в течение первого месяца обучения вы можете вернуть полную стоимость, если курс вам не подошел."
    },
    {
      question: "Чем ваш курс отличается от других?",
      answer: "Мини-группы до 7 человек, практикующий преподаватель с 7+ годами опыта, год поддержки после окончания, высокий процент трудоустройства и персональный подход к каждому студенту."
    }
  ];

  return (
    <section id="faq" className="py-16 relative overflow-hidden">
      <div className="absolute inset-0 gradient-dark opacity-5"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-12">
          <Badge className="gradient-neon-bg text-white px-4 py-2 mb-4">
            <HelpCircle className="w-4 h-4 mr-2" />
            Частые вопросы
          </Badge>
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">
            <span className="gradient-neon-text">Ответы</span> на ваши вопросы
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Собрали самые популярные вопросы от будущих студентов
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Card className="p-6 lg:p-8 gradient-light border-0 hover-glow">
            <Accordion type="single" collapsible className="space-y-4">
              {faqs.map((faq, index) => (
                <AccordionItem 
                  key={index} 
                  value={`item-${index}`}
                  className="border border-border/50 rounded-lg px-4 bg-background/50"
                >
                  <AccordionTrigger className="text-left hover:no-underline py-4">
                    <span className="font-semibold text-sm lg:text-base pr-4">{faq.question}</span>
                  </AccordionTrigger>
                  <AccordionContent className="pb-4 pt-2">
                    <p className="text-muted-foreground text-sm lg:text-base leading-relaxed">
                      {faq.answer}
                    </p>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </Card>
        </div>

        {/* Contact CTA */}
        <div className="text-center mt-12">
          <Card className="p-6 max-w-2xl mx-auto gradient-blue-bg text-white border-0">
            <div className="space-y-4">
              <MessageCircle className="w-8 h-8 mx-auto" />
              <h3 className="text-xl font-bold">Не нашли ответ на свой вопрос?</h3>
              <p className="text-white/90 text-sm">
                Свяжитесь с нами напрямую, и мы ответим на все ваши вопросы
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  variant="outline" 
                  className="border-white/20 text-white hover:bg-white/10"
                  onClick={() => window.open('https://t.me/hschool_anna', '_blank')}
                >
                  Написать в Telegram
                </Button>
                <Button 
                  variant="outline"
                  className="border-white/20 text-white hover:bg-white/10"
                  onClick={scrollToForm}
                >
                  Задать вопрос в форме
                </Button>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default FAQ;