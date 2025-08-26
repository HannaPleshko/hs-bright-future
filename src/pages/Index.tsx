import React from 'react';
import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import AboutTeacher from '@/components/AboutTeacher';
import CertificatesSection from '@/components/CertificatesSection';
import HowLessonsWork from '@/components/HowLessonsWork';
import CourseProgram from '@/components/CourseProgram';
import WhyHSchool from '@/components/WhyHSchool';
import TestimonialsSection from '@/components/TestimonialsSection';
import FAQ from '@/components/FAQ';
import PricingSection from '@/components/PricingSection';
import PreRegistrationForm from '@/components/PreRegistrationForm';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-background via-secondary/20 to-background">
      <Header />
      <main className="pt-16">
        <HeroSection />
        <section id="teacher">
          <AboutTeacher />
          <CertificatesSection />
        </section>
        <HowLessonsWork />
        <section id="program">
          <CourseProgram />
        </section>
        <section id="about">
          <WhyHSchool />
        </section>
        <section id="testimonials">
          <TestimonialsSection />
        </section>
        <FAQ />
        <section id="pricing">
          <PricingSection />
        </section>
        <PreRegistrationForm />
      </main>
      <Footer />
    </div>
  );
};

export default Index;