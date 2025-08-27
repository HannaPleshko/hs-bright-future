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
import { Send, Sparkles, Users, User, Calendar, MessageCircle, Zap, Crown, CheckCircle, ArrowRight, Star } from 'lucide-react';

const PreRegistrationForm = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    experience: '',
    courseType: 'group',
    motivation: '',
    hasExperience: false,
    agreeToTerms: false
  });
  const [isVisible, setIsVisible] = useState(false);
  const [focusedField, setFocusedField] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.agreeToTerms) {
      toast({
        title: "Ошибка",
        description: "Необходимо согласиться с условиями обработки данных",
        variant: "destructive"
      });
      return;
    }

    setIsSubmitting(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    // Here you would normally send the data to your backend
    console.log('Form submitted:', formData);
    
    toast({
      title: "Заявка отправлена! 🎉",
      description: "Мы свяжемся с вами в ближайшее время для обсуждения деталей",
    });

    // Reset form
    setFormData({
      name: '',
      email: '',
      phone: '',
      experience: '',
      courseType: 'group',
      motivation: '',
      hasExperience: false,
      agreeToTerms: false
    });
    
    setIsSubmitting(false);
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
                      <Card className={`p-10 bg-white/80 backdrop-blur-sm border border-white/20 rounded-2xl shadow-xl transition-all duration-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`} style={{ transitionDelay: '400ms' }}>
              <form onSubmit={handleSubmit} className="space-y-8">
                <div className="space-y-8">
                  <div className="grid grid-cols-1 gap-4">
                    <div className="group">
                      <Label htmlFor="name" className="text-sm font-medium text-muted-foreground group-focus-within:text-foreground transition-colors duration-300">
                        Ваше имя *
                      </Label>
                      <Input
                        id="name"
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
                      <Label htmlFor="phone" className="text-sm font-medium text-muted-foreground group-focus-within:text-foreground transition-colors duration-300">
                        Телефон
                      </Label>
                      <Input
                        id="phone"
                        value={formData.phone}
                        onChange={(e) => handleInputChange('phone', e.target.value)}
                        onFocus={() => setFocusedField('phone')}
                        onBlur={() => setFocusedField(null)}
                        placeholder="+375 XX XXX XX XX"
                        className={`mt-2 transition-all duration-300 ${
                          focusedField === 'phone' ? 'ring-2 ring-blue-500/50 shadow-lg' : ''
                        }`}
                      />
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
                  disabled={!formData.name || !formData.email || !formData.agreeToTerms || isSubmitting}
                  className="w-full btn-modern text-white font-semibold py-6 text-lg relative overflow-hidden group disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <span className="flex items-center gap-2">
                      <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                      Отправляем заявку...
                    </span>
                  ) : (
                    <span className="relative z-10 flex items-center gap-2">
                      <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                      Записаться на курс
                    </span>
                  )}
                </Button>
              </form>
            </Card>
        </div>
      </div>
    </section>
  );
};

export default PreRegistrationForm;