import React, { useState, useEffect } from 'react';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Code, Database, Globe, TestTube, Layers, Zap, Clock, Users, BookOpen, Target, ArrowRight, CheckCircle, Bug, Shield, Search } from 'lucide-react';
import basicsImage from '@/assets/assets_task_01k3kcgv63f1mbxw2mmb3zv2hw_1756218719_img_1.webp';
import frontendImage from '@/assets/assets_task_01k3kcrty5em4b45ryn0cd5czb_1756218996_img_0.webp';
import backendImage from '@/assets/assets_task_01k3kddsm8ffssmjpf2neq2vmw_1756219654_img_1.webp';
import testingImage from '@/assets/assets_task_01k3kesegwe84b36hnfh2jerkc_1756221091_img_1.webp';

const CourseProgram = () => {
  const [currentModule, setCurrentModule] = useState(0);
  const [expandedModules, setExpandedModules] = useState<number[]>([]);
  const [expandedTopics, setExpandedTopics] = useState<number[]>([]);

  const toggleModule = (index: number) => {
    setExpandedModules(prev => 
      prev.includes(index) 
        ? prev.filter(i => i !== index)
        : [...prev, index]
    );
  };

  const toggleTopic = (index: number) => {
    setExpandedTopics(prev => 
      prev.includes(index) 
        ? prev.filter(i => i !== index)
        : [...prev, index]
    );
  };

  const modules = [
    {
      title: "Основы программирования",
      duration: "3 месяца",
      icon: Code,
      gradient: "from-blue-500 to-cyan-500",
      color: "blue",
      image: basicsImage,
      topics: [
        {
          title: "HTML, CSS и SCSS - создание UI интерфейсов",
          subtopics: [
            "Основные теги HTML",
            "Стилизация с помощью CSS",
            "Препроцессор SCSS",
            "Адаптивный дизайн"
          ]
        },
        {
          title: "Основы JavaScript и TypeScript",
          subtopics: [
            "Базовые типы данных",
            "Операторы и выражения",
            "Функции и замыкания",
            "Типизация в TypeScript"
          ]
        },
        {
          title: "Работа с DOM и асинхронность",
          subtopics: [
            "Изменение HTML с помощью JavaScript",
            "Асинхронные операции",
            "Event Loop и Call Stack",
            "Promise и async/await"
          ]
        },
        {
          title: "Git и работа с системами контроля версий",
          subtopics: [
            "Основные команды Git",
            "Ветвление и слияние",
            "Конфликты",
            "GitHub и GitLab"
          ]
        }
      ],
      description: "Фундаментальные знания для любого разработчика",
      progress: 100,
      status: "completed"
    },
    {
      title: "Frontend разработка",
      duration: "3 месяца",
      icon: Globe,
      gradient: "from-purple-500 to-pink-500",
      color: "purple",
      image: frontendImage,
      topics: [
        {
          title: "React + Redux - современные веб-приложения",
          subtopics: [
            "Компоненты и JSX",
            "State и props",
            "Хуки (useState, useEffect, useMemo, useCallback, useReducer, useContext, useRef)",
            "React Router"
          ]
        },
        {
          title: "Изучение хуков: useState, useEffect, useMemo, useCallback, useReducer, useContext, useRef",
          subtopics: [
            "useState: состояние компонента",
            "useEffect: эффекты и зависимости",
            "useMemo: оптимизация производительности",
            "useCallback: мемоизация функций"
          ]
        },
        {
          title: "Работа с localStorage - сохранение данных в браузере",
          subtopics: [
            "Хранение данных в браузере",
            "Сессионное хранилище",
            "Web Storage API"
          ]
        },
        {
          title: "Material UI и Mantine - готовые компоненты для быстрой разработки",
          subtopics: [
            "Основные компоненты Material UI",
            "Mantine: современные компоненты",
            "Настройка темы и цветов"
          ]
        }
      ],
      description: "Создание интерактивных пользовательских интерфейсов",
      progress: 100,
      status: "completed"
    },
    {
      title: "Backend разработка",
      duration: "3 месяца",
      icon: Database,
      gradient: "from-green-500 to-emerald-500",
      color: "green",
      image: backendImage,
      topics: [
        {
          title: "Node.js и Express - серверная разработка",
          subtopics: [
            "Основы Node.js",
            "Express.js: маршрутизация и Middleware",
            "HTTP методы и запросы",
            "Аутентификация и авторизация"
          ]
        },
        {
          title: "SQL и работа с базами данных",
          subtopics: [
            "Основы SQL",
            "Работа с PostgreSQL",
            "ORM (Sequelize, Prisma)",
            "Миграции баз данных"
          ]
        },
        {
          title: "Безопасность и аутентификация",
          subtopics: [
            "Хранение паролей",
            "JWT и Cookies",
            "Сессии и токены",
            "Защита от CSRF и XSS"
          ]
        }
      ],
      description: "Серверная логика и управление данными",
      progress: 100,
      status: "completed"
    },
    {
      title: "Тестирование",
      duration: "Дополнительно",
      icon: Bug,
      gradient: "from-orange-500 to-red-500",
      color: "orange",
      image: testingImage,
      topics: [
        {
          title: "Unit-тесты - покрытие кода тестами",
          subtopics: [
            "Jest: базовые тесты",
            "Мокирование зависимостей",
            "Интеграционные тесты"
          ]
        },
        {
          title: "Интеграционные тесты",
          subtopics: [
            "Тестирование API",
            "Тестирование баз данных",
            "Тестирование фронтенда"
          ]
        }
      ],
      description: "Профессиональное тестирование кода",
      progress: 60,
      status: "in-progress"
    }
  ];

  return (
    <section className="py-16 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-purple-500/5 to-pink-500/5"></div>
      <div className="container mx-auto px-6 relative z-10">
        {/* Header Section */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-2 text-blue-600 font-semibold mb-6">
            <Layers className="w-6 h-6" />
            <span className="text-lg">Программа обучения</span>
          </div>
          <h2 className="text-4xl lg:text-6xl font-bold mb-8 leading-tight">
            <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
              JavaScript FullStack
            </span>
            <br />
            <span className="text-gray-800">Developer</span>
          </h2>
          <p className="text-xl lg:text-2xl text-gray-600 max-w-4xl mx-auto mb-12 leading-relaxed">
            9 месяцев структурированного обучения + год бесплатного сопровождения до трудоустройства
          </p>
          {/* Course Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto mb-16">
            <div className="flex items-center gap-4 p-4 bg-white/80 backdrop-blur-sm rounded-2xl border border-blue-200/50 shadow-lg">
              <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center">
                <Clock className="w-6 h-6 text-white" />
              </div>
              <div className="text-left">
                <div className="font-bold text-gray-800">3 занятия в неделю</div>
                <div className="text-sm text-gray-600">Регулярный график</div>
              </div>
            </div>
            <div className="flex items-center gap-4 p-4 bg-white/80 backdrop-blur-sm rounded-2xl border border-purple-200/50 shadow-lg">
              <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl flex items-center justify-center">
                <Clock className="w-6 h-6 text-white" />
              </div>
              <div className="text-left">
                <div className="font-bold text-gray-800">2-2.5 часа занятие</div>
                <div className="text-sm text-gray-600">Оптимальная длительность</div>
              </div>
            </div>
            <div className="flex items-center gap-4 p-4 bg-white/80 backdrop-blur-sm rounded-2xl border border-green-200/50 shadow-lg">
              <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-500 rounded-xl flex items-center justify-center">
                <Users className="w-6 h-6 text-white" />
              </div>
              <div className="text-left">
                <div className="font-bold text-gray-800">До 7 человек в группе</div>
                <div className="text-sm text-gray-600">Персональный подход</div>
              </div>
            </div>
          </div>
        </div>
        {/* Interactive Module Display */}
        <div className="max-w-7xl mx-auto">
          {/* Module Navigation */}
          <div className="flex justify-center mb-12">
            <div className="flex gap-2 p-2 bg-white/80 backdrop-blur-sm rounded-2xl border border-gray-200/50 shadow-lg">
              {modules.map((module, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentModule(index)}
                  className={`px-6 py-3 rounded-xl font-semibold transition-all duration-300 ${
                    index === currentModule
                      ? `bg-gradient-to-r ${module.gradient} text-white shadow-lg scale-105`
                      : 'text-gray-600 hover:text-gray-800 hover:bg-gray-100'
                  }`}
                >
                  <div className="flex items-center gap-2">
                    <module.icon className="w-5 h-5" />
                    <span className="hidden sm:inline">{module.title}</span>
                    <span className="sm:hidden">{index + 1}</span>
                  </div>
                </button>
              ))}
            </div>
          </div>
          {/* Current Module Display */}
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left - Topics List */}
            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-gray-800 mb-6">
                {modules[currentModule].title}
              </h3>
              <div className="space-y-3">
                {modules[currentModule].topics.map((topic, index) => (
                  <div key={index} className="bg-white/60 rounded-xl border border-gray-200/50 overflow-hidden">
                    {/* Topic Header - Clickable */}
                    <button
                      onClick={() => toggleTopic(index)}
                      className="w-full p-3 text-left hover:bg-gray-50/50 transition-colors duration-200 flex items-center justify-between"
                    >
                      <div className="flex items-start gap-3">
                        <div className={`w-2 h-2 bg-gradient-to-r ${modules[currentModule].gradient} rounded-full mt-2 flex-shrink-0`}></div>
                        <span className="text-gray-700 leading-relaxed font-medium">{topic.title}</span>
                      </div>
                      {/* Expand/Collapse Icon */}
                      <div className={`w-4 h-4 transition-transform duration-300 ${
                        expandedTopics.includes(index) ? 'rotate-180' : ''
                      }`}>
                        <svg className="w-4 h-4 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                      </div>
                    </button>
                    
                    {/* Expandable Subtopic Content */}
                    <div className={`overflow-hidden transition-all duration-300 ${
                      expandedTopics.includes(index) ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0'
                    }`}>
                      <div className="px-6 pb-3 space-y-2">
                        <ul className="space-y-1 list-disc text-gray-600 text-sm pl-4">
                          {topic.subtopics.map((subtopic, subIndex) => (
                            <li key={subIndex} className="text-gray-600">{subtopic}</li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            {/* Right - Module Image */}
            <div className="relative">
              <div className="relative overflow-hidden rounded-3xl shadow-lg">
                <img 
                  src={modules[currentModule].image} 
                  alt={modules[currentModule].title}
                  className="w-full h-96 object-cover transition-transform duration-700 hover:scale-110"
                />

                {/* Module Badge Overlay */}
                <div className="absolute top-6 right-6">
                  <div className={`px-4 py-2 bg-gradient-to-r ${modules[currentModule].gradient} text-white rounded-full font-semibold shadow-lg`}>
                    Модуль {currentModule + 1} из {modules.length}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CourseProgram;