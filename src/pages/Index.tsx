import React from 'react';
import HeroSection from '@/components/HeroSection';
import AboutTeacher from '@/components/AboutTeacher';
import CourseProgram from '@/components/CourseProgram';
import WhyHSchool from '@/components/WhyHSchool';
import PricingSection from '@/components/PricingSection';
import CertificatesSection from '@/components/CertificatesSection';
import TestimonialsSection from '@/components/TestimonialsSection';
import PreRegistrationForm from '@/components/PreRegistrationForm';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-background via-secondary/20 to-background">
      <HeroSection />
      <AboutTeacher />
      <CourseProgram />
      <WhyHSchool />
      <PricingSection />
      <CertificatesSection />
      <TestimonialsSection />
      <PreRegistrationForm />
      <Footer />
    </div>
  );
};

export default Index;