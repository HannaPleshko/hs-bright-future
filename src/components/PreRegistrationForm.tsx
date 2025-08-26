import React, { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Badge } from '@/components/ui/badge';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Checkbox } from '@/components/ui/checkbox';
import { useToast } from '@/hooks/use-toast';
import { Send, Sparkles, Users, User, Calendar, MessageCircle } from 'lucide-react';

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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.agreeToTerms) {
      toast({
        title: "Ошибка",
        description: "Необходимо согласиться с условиями обработки данных",
        variant: "destructive"
      });
      return;
    }

    // Here you would normally send the data to your backend
    console.log('Form submitted:', formData);
    
    toast({
      title: "Заявка отправлена!",
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
  };

  const handleInputChange = (field: string, value: string | boolean) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <section id="pre-registration" className="py-12 relative overflow-hidden">
      <div className="absolute inset-0 gradient-neon-bg opacity-10"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-12">
          <Badge className="gradient-accent-bg text-white px-4 py-2 mb-6">
            <Calendar className="w-4 h-4 mr-2" />
            Запись на курс
          </Badge>
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">
            <span className="gradient-neon-text">Забронируйте</span> место в группе
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Ближайший курс стартует в начале сентября. Заполните форму, и мы подготовим для вас 
            материалы для изучения и добавим в общий чат
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Left - Form Benefits */}
            <div className="space-y-8">
              <Card className="p-6 gradient-light border-0 hover-glow">
                <div className="space-y-6">
                  <div className="flex items-center gap-3">
                    <div className="gradient-blue-bg p-2 rounded-lg">
                      <Sparkles className="w-5 h-5 text-white" />
                    </div>
                    <h3 className="text-xl font-bold">Что получите после записи:</h3>
                  </div>

                  <ul className="space-y-3 text-sm">
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-neon-blue rounded-full mt-2 flex-shrink-0"></div>
                      <span>Материалы для подготовки к курсу</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-neon-pink rounded-full mt-2 flex-shrink-0"></div>
                      <span>Доступ к общему чату с будущими сокурсниками</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-neon-orange rounded-full mt-2 flex-shrink-0"></div>
                      <span>Персональную консультацию по программе обучения</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-neon-purple rounded-full mt-2 flex-shrink-0"></div>
                      <span>Приоритетное место в группе</span>
                    </li>
                  </ul>
                </div>
              </Card>

              {/* Course Options */}
              <div className="grid grid-cols-2 gap-4">
                <Card className="p-4 text-center gradient-blue-bg text-white border-0">
                  <Users className="w-8 h-8 mx-auto mb-2" />
                  <div className="text-lg font-bold">Группа</div>
                  <div className="text-sm opacity-90">$150/месяц</div>
                  <div className="text-xs opacity-75">до 7 человек</div>
                </Card>
                <Card className="p-4 text-center gradient-accent-bg text-white border-0">
                  <User className="w-8 h-8 mx-auto mb-2" />
                  <div className="text-lg font-bold">1-на-1</div>
                  <div className="text-sm opacity-90">$200/месяц</div>
                  <div className="text-xs opacity-75">индивидуально</div>
                </Card>
              </div>

              {/* Contact Info */}
              <Card className="p-6 gradient-neon-bg text-white border-0">
                <div className="flex items-center gap-3 mb-4">
                  <MessageCircle className="w-5 h-5" />
                  <h4 className="font-semibold">Есть вопросы?</h4>
                </div>
                <p className="text-sm text-white/90 mb-4">
                  Свяжитесь с нами напрямую для получения дополнительной информации
                </p>
                <div className="space-y-2 text-sm">
                  <p>📧 Telegram: @hschool_anna</p>
                  <p>💬 Email: info@hschool.dev</p>
                </div>
              </Card>
            </div>

            {/* Right - Registration Form */}
            <Card className="p-8 gradient-light border-0 hover-glow">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-4">
                  <div className="grid grid-cols-1 gap-4">
                    <div>
                      <Label htmlFor="name">Ваше имя *</Label>
                      <Input
                        id="name"
                        value={formData.name}
                        onChange={(e) => handleInputChange('name', e.target.value)}
                        placeholder="Как к вам обращаться?"
                        required
                        className="mt-1"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="email">Email *</Label>
                      <Input
                        id="email"
                        type="email"
                        value={formData.email}
                        onChange={(e) => handleInputChange('email', e.target.value)}
                        placeholder="your@email.com"
                        required
                        className="mt-1"
                      />
                    </div>
                    <div>
                      <Label htmlFor="phone">Телефон</Label>
                      <Input
                        id="phone"
                        value={formData.phone}
                        onChange={(e) => handleInputChange('phone', e.target.value)}
                        placeholder="+375 XX XXX XX XX"
                        className="mt-1"
                      />
                    </div>
                  </div>

                  <div>
                    <Label>Формат обучения *</Label>
                    <RadioGroup
                      value={formData.courseType}
                      onValueChange={(value) => handleInputChange('courseType', value)}
                      className="mt-2"
                    >
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="group" id="group" />
                        <Label htmlFor="group">Групповые занятия ($150/мес)</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="individual" id="individual" />
                        <Label htmlFor="individual">Индивидуальные занятия ($200/мес)</Label>
                      </div>
                    </RadioGroup>
                  </div>

                  <div>
                    <Label htmlFor="experience">Опыт в программировании</Label>
                    <Input
                      id="experience"
                      value={formData.experience}
                      onChange={(e) => handleInputChange('experience', e.target.value)}
                      placeholder="Например: 'Полный новичок' или 'Изучал HTML/CSS'"
                      className="mt-1"
                    />
                  </div>

                  <div>
                    <Label htmlFor="motivation">Что мотивирует изучать программирование?</Label>
                    <Textarea
                      id="motivation"
                      value={formData.motivation}
                      onChange={(e) => handleInputChange('motivation', e.target.value)}
                      placeholder="Расскажите о ваших целях и мотивации..."
                      className="mt-1 min-h-[100px]"
                    />
                  </div>

                  <div className="flex items-center space-x-2">
                    <Checkbox
                      id="agreeToTerms"
                      checked={formData.agreeToTerms}
                      onCheckedChange={(checked) => handleInputChange('agreeToTerms', checked)}
                    />
                    <Label htmlFor="agreeToTerms" className="text-sm">
                      Согласен(а) на обработку персональных данных и получение информации о курсах *
                    </Label>
                  </div>
                </div>

                <Button 
                  type="submit" 
                  className="w-full gradient-accent-bg hover:opacity-90 text-white font-semibold py-6 text-lg hover-glow"
                  disabled={!formData.name || !formData.email || !formData.agreeToTerms}
                >
                  <Send className="mr-2 w-5 h-5" />
                  Записаться на курс
                </Button>
              </form>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PreRegistrationForm;