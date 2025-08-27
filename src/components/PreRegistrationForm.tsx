import React, { useState, useEffect } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Badge } from '@/components/ui/badge';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Checkbox } from '@/components/ui/checkbox';
import { useToast } from '@/hooks/use-toast';
import { Send, Sparkles, Users, User, Calendar, MessageCircle, Zap, Crown, CheckCircle, ArrowRight, Star, Phone, MessageCircle as Telegram, Instagram } from 'lucide-react';

const PreRegistrationForm = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    contactMethod: 'phone',
    contactValue: '',
    experience: '',
    courseType: 'group',
    motivation: '',
    hasExperience: false,
    agreeToTerms: false
  });
  const [isVisible, setIsVisible] = useState(false);
  const [focusedField, setFocusedField] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  // Закрытие модального окна по Escape
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isSubmitted) {
        setIsSubmitted(false);
      }
    };

    if (isSubmitted) {
      document.addEventListener('keydown', handleEscape);
      document.body.style.overflow = 'hidden'; // Блокируем скролл
      
      // Принудительно скрываем все элементы футера
      const footerElements = document.querySelectorAll('footer, .footer, [class*="footer"], [class*="Footer"]');
      footerElements.forEach(el => {
        if (el instanceof HTMLElement) {
          el.style.zIndex = '1';
          el.style.position = 'relative';
        }
      });
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = 'unset'; // Возвращаем скролл
      
      // Восстанавливаем z-index футера
      const footerElements = document.querySelectorAll('footer, .footer, [class*="footer"], [class*="Footer"]');
      footerElements.forEach(el => {
        if (el instanceof HTMLElement) {
          el.style.zIndex = '';
          el.style.position = '';
        }
      });
    };
  }, [isSubmitted]);

  const handleSubmit = (e: React.FormEvent) => {
    if (!formData.agreeToTerms) {
      e.preventDefault();
      toast({
        title: "Ошибка",
        description: "Необходимо согласиться с условиями обработки данных",
        variant: "destructive"
      });
      return;
    }
    
    // Показываем страницу успеха
    setIsSubmitted(true);
    
    // Сбрасываем форму
    setFormData({
      name: '',
      email: '',
      contactMethod: 'phone',
      contactValue: '',
      experience: '',
      courseType: 'group',
      motivation: '',
      hasExperience: false,
      agreeToTerms: false
    });
  };

  const handleInputChange = (field: string, value: string | boolean) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };



  const courseOptions = [
    {
      id: 'group',
      title: 'Группа',
      subtitle: '$150/месяц',
      description: 'до 7 человек',
      icon: Users,
      gradient: 'from-blue-500 to-purple-600',
      popular: true
    },
    {
      id: 'individual',
      title: '1-на-1',
      subtitle: '$200/месяц',
      description: 'индивидуально',
      icon: Crown,
      gradient: 'from-pink-500 to-orange-600',
      premium: true
    }
  ];

  return (
    <section id="pre-registration" className="py-20 relative overflow-hidden">
      {/* Enhanced Background */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-pink-500/5 rounded-full blur-3xl animate-float-delayed"></div>
        <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-purple-500/5 rounded-full blur-3xl animate-float-slow"></div>
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <Badge className="gradient-accent-bg text-white px-6 py-3 mb-6 hover:scale-105 transition-transform duration-300 cursor-pointer">
            <Calendar className="w-4 h-4 mr-2" />
            Запись на курс
          </Badge>
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            <span className="gradient-neon-text hover:text-gradient-animate transition-all duration-500 cursor-default">Забронируйте</span> место в группе
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Ближайший курс стартует в начале сентября. Заполните форму, и мы подготовим для вас 
            материалы для изучения и добавим в общий чат
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* Enhanced Registration Form */}
          {!isSubmitted && (
            <Card className={`p-10 bg-white/80 backdrop-blur-sm border border-white/20 rounded-2xl shadow-xl transition-all duration-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`} style={{ transitionDelay: '400ms' }}>
              <form 
                action="https://formspree.io/f/mjkekvor" 
                method="POST" 
                onSubmit={handleSubmit} 
                className="space-y-8"
              >
                {/* Скрытые поля для Formspree */}
                <input type="hidden" name="subject" value="Новая заявка на курс HSCHOOL" />
                <input type="hidden" name="course_type" value={formData.courseType === 'group' ? 'Группа ($150/месяц)' : 'Индивидуально ($200/месяц)'} />
                <input type="hidden" name="experience" value={formData.experience} />
                <input type="hidden" name="motivation" value={formData.motivation} />
                <input type="hidden" name="contact_method" value={formData.contactMethod} />
                <input type="hidden" name="contact_value" value={formData.contactValue} />
                <div className="space-y-8">
                  <div className="grid grid-cols-1 gap-4">
                    <div className="group">
                      <Label htmlFor="name" className="text-sm font-medium text-muted-foreground group-focus-within:text-foreground transition-colors duration-300">
                        Ваше имя *
                      </Label>
                      <Input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={(e) => handleInputChange('name', e.target.value)}
                        onFocus={() => setFocusedField('name')}
                        onBlur={() => setFocusedField(null)}
                        placeholder="Как к вам обращаться?"
                        required
                        className={`mt-2 transition-all duration-300 ${
                          focusedField === 'name' ? 'ring-2 ring-blue-500/50 shadow-lg' : ''
                        }`}
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="group">
                      <Label htmlFor="email" className="text-sm font-medium text-muted-foreground group-focus-within:text-foreground transition-colors duration-300">
                        Email *
                      </Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={(e) => handleInputChange('email', e.target.value)}
                        onFocus={() => setFocusedField('email')}
                        onBlur={() => setFocusedField(null)}
                        placeholder="your@email.com"
                        required
                        className={`mt-2 transition-all duration-300 ${
                          focusedField === 'email' ? 'ring-2 ring-blue-500/50 shadow-lg' : ''
                        }`}
                      />
                    </div>
                    <div className="group">
                      <Label className="text-sm font-medium text-muted-foreground group-focus-within:text-foreground transition-colors duration-300">
                        Способ связи
                      </Label>
                      <div className="mt-2 space-y-3">
                        <RadioGroup
                          value={formData.contactMethod}
                          onValueChange={(value) => handleInputChange('contactMethod', value)}
                          className="flex flex-wrap gap-3"
                        >
                          <div className="flex items-center space-x-2">
                            <RadioGroupItem value="phone" id="contact-phone" className="text-blue-500" />
                            <Label htmlFor="contact-phone" className="cursor-pointer text-sm flex items-center gap-2">
                              <Phone className="w-4 h-4" />
                              Телефон
                            </Label>
                          </div>
                          <div className="flex items-center space-x-2">
                            <RadioGroupItem value="telegram" id="contact-telegram" className="text-blue-500" />
                            <Label htmlFor="contact-telegram" className="cursor-pointer text-sm flex items-center gap-2">
                              <Telegram className="w-4 h-4" />
                              Telegram
                            </Label>
                          </div>
                          <div className="flex items-center space-x-2">
                            <RadioGroupItem value="instagram" id="contact-instagram" className="text-blue-500" />
                            <Label htmlFor="contact-instagram" className="cursor-pointer text-sm flex items-center gap-2">
                              <Instagram className="w-4 h-4" />
                              Instagram
                            </Label>
                          </div>
                        </RadioGroup>
                        
                        <Input
                          name="contact_value"
                          value={formData.contactValue}
                          onChange={(e) => handleInputChange('contactValue', e.target.value)}
                          onFocus={() => setFocusedField('contact')}
                          onBlur={() => setFocusedField(null)}
                          placeholder={
                            formData.contactMethod === 'phone' ? '+375 XX XXX XX XX' :
                            formData.contactMethod === 'telegram' ? '@username или +375 XX XXX XX XX' :
                            '@username'
                          }
                          className={`transition-all duration-300 ${
                            focusedField === 'contact' ? 'ring-2 ring-blue-500/50 shadow-lg' : ''
                          }`}
                        />
                      </div>
                    </div>
                  </div>

                  <div className="group">
                    <Label className="text-sm font-medium text-muted-foreground group-focus-within:text-foreground transition-colors duration-300">
                      Формат обучения *
                    </Label>
                    <RadioGroup
                      value={formData.courseType}
                      onValueChange={(value) => handleInputChange('courseType', value)}
                      className="mt-3 space-y-3"
                    >
                      {courseOptions.map((option) => (
                        <div key={option.id} className="flex items-center space-x-3 p-3 rounded-lg hover:bg-gradient-to-r hover:from-blue-50 hover:to-pink-50 transition-all duration-300">
                          <RadioGroupItem value={option.id} id={option.id} className="text-blue-500" />
                          <Label htmlFor={option.id} className="cursor-pointer hover:text-foreground transition-colors duration-300">
                            {option.title} ({option.subtitle})
                          </Label>
                        </div>
                      ))}
                    </RadioGroup>
                  </div>

                  <div className="group">
                    <Label htmlFor="experience" className="text-sm font-medium text-muted-foreground group-focus-within:text-foreground transition-colors duration-300">
                      Опыт в программировании
                    </Label>
                                            <Input
                          id="experience"
                          name="experience"
                          value={formData.experience}
                          onChange={(e) => handleInputChange('experience', e.target.value)}
                          onFocus={() => setFocusedField('experience')}
                          onBlur={() => setFocusedField(null)}
                          placeholder="Например: 'Полный новичок' или 'Изучал HTML/CSS'"
                          className={`mt-2 transition-all duration-300 ${
                            focusedField === 'experience' ? 'ring-2 ring-blue-500/50 shadow-lg' : ''
                          }`}
                        />
                  </div>

                  <div className="group">
                    <Label htmlFor="motivation" className="text-sm font-medium text-muted-foreground group-focus-within:text-foreground transition-colors duration-300">
                      Что мотивирует изучать программирование?
                    </Label>
                                          <Textarea
                        id="motivation"
                        name="motivation"
                        value={formData.motivation}
                        onChange={(e) => handleInputChange('motivation', e.target.value)}
                        onFocus={() => setFocusedField('motivation')}
                        onBlur={() => setFocusedField(null)}
                        placeholder="Расскажите о ваших целях и мотивации..."
                        className={`mt-2 min-h-[120px] transition-all duration-300 ${
                          focusedField === 'motivation' ? 'ring-2 ring-blue-500/50 shadow-lg' : ''
                        }`}
                      />
                  </div>

                  <div className="flex items-start space-x-3 p-4 bg-gradient-to-r from-blue-50 to-pink-50 rounded-xl border border-blue-100">
                    <Checkbox
                      id="agreeToTerms"
                      checked={formData.agreeToTerms}
                      onCheckedChange={(checked) => handleInputChange('agreeToTerms', checked)}
                      className="mt-1"
                    />
                    <Label htmlFor="agreeToTerms" className="text-sm text-muted-foreground leading-relaxed cursor-pointer">
                      Согласен(а) на обработку персональных данных и получение информации о курсах *
                    </Label>
                  </div>
                </div>

                <Button 
                  type="submit" 
                  disabled={!formData.name || !formData.email || !formData.contactValue || !formData.agreeToTerms}
                  className="w-full btn-modern text-white font-semibold py-6 text-lg relative overflow-hidden group disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <span className="relative z-10 flex items-center gap-2">
                    <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                    Записаться на курс
                  </span>
                </Button>
              </form>
            </Card>
          )}
            
            {/* Модальное окно успешной отправки */}
            {isSubmitted && (
              <div 
                className="fixed inset-0 bg-black/50 backdrop-blur-sm z-[9999999999] flex items-center justify-center p-4 transition-all duration-300"
                onClick={() => setIsSubmitted(false)}
                style={{ 
                  zIndex: 9999999999,
                  position: 'fixed',
                  top: 0,
                  left: 0,
                  right: 0,
                  bottom: 0
                }}
              >
                <Card 
                  className="p-10 bg-gradient-to-br from-green-50 to-blue-50 border-2 border-green-200 rounded-2xl shadow-2xl text-center max-w-2xl w-full max-h-[90vh] overflow-y-auto relative transform transition-all duration-300 scale-100"
                  onClick={(e) => e.stopPropagation()}
                  style={{ 
                    zIndex: 9999999999,
                    position: 'relative'
                  }}
                >
                  <div className="space-y-6">
                    {/* Кнопка закрытия */}
                    <button
                      onClick={() => setIsSubmitted(false)}
                      className="absolute top-4 right-4 w-8 h-8 bg-white/80 hover:bg-white rounded-full flex items-center justify-center transition-colors duration-200 hover:scale-110"
                    >
                      <span className="text-gray-600 text-xl font-bold">×</span>
                    </button>
                    
                    <div className="w-20 h-20 bg-gradient-to-r from-green-500 to-blue-500 rounded-full flex items-center justify-center mx-auto">
                      <CheckCircle className="w-12 h-12 text-white" />
                    </div>
                    
                    <div className="space-y-4">
                      <h3 className="text-3xl font-bold text-gray-800">
                        Спасибо за заявку! 🎉
                      </h3>
                      <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
                        Мы получили вашу заявку на курс. В ближайшее время свяжемся с вами для обсуждения деталей и ответим на все вопросы.
                      </p>
                    </div>
                    
                  
                    <Button 
                      onClick={() => setIsSubmitted(false)}
                      className="btn-modern text-white font-semibold px-8 py-3"
                    >
                      Закрыть
                    </Button>
                  </div>
                </Card>
              </div>
            )}
        </div>
      </div>
    </section>
  );
};

export default PreRegistrationForm;