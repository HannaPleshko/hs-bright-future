import React from 'react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Badge } from '@/components/ui/badge';
import { HelpCircle } from 'lucide-react';

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
      {/* Simple Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-50 to-blue-50/30"></div>
      
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
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="bg-white border border-gray-200 rounded-xl px-6 py-4 shadow-md hover:shadow-lg transition-shadow duration-300"
              >
                <AccordionTrigger className="text-left hover:no-underline py-2">
                  <span className="font-semibold text-base lg:text-lg pr-4 text-gray-800">{faq.question}</span>
                </AccordionTrigger>
                <AccordionContent className="pb-2 pt-3">
                  <p className="text-gray-600 text-sm lg:text-base leading-relaxed">
                    {faq.answer}
                  </p>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>


      </div>
    </section>
  );
};

export default FAQ;