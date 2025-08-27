import React from 'react';
import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import AboutTeacher from '@/components/AboutTeacher';
import CertificatesSection from '@/components/CertificatesSection';
import HowLessonsWork from '@/components/HowLessonsWork';
import CourseProgram from '@/components/CourseProgram';
import WhyHSchool from '@/components/WhyHSchool';
import BenefitsSection from '@/components/BenefitsSection';
import TestimonialsSection from '@/components/TestimonialsSection';
import FAQ from '@/components/FAQ';
import PricingSection from '@/components/PricingSection';
import PreRegistrationForm from '@/components/PreRegistrationForm';
import Footer from '@/components/Footer';
import GiftSection from '@/components/GiftSection';
import ScrollAnimation from '@/components/ScrollAnimation';
import { useScroll } from '@/hooks/use-scroll';

const Index = () => {
  const { scrollProgress } = useScroll();

  return (
    <div className="min-h-screen bg-gradient-to-b from-background via-secondary/20 to-background relative overflow-hidden">
      {/* Global Background Elements */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-500/5 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-pink-500/5 rounded-full blur-3xl animate-float-delayed"></div>
        <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl animate-float-slow"></div>
      </div>

      <Header />
      
      <main className="pt-20 relative z-10">
        <ScrollAnimation animation="fadeIn" duration={1000}>
          <HeroSection />
        </ScrollAnimation>

        <section id="teacher">
          <ScrollAnimation animation="fadeInUp" delay={200}>
            <AboutTeacher />
          </ScrollAnimation>
          <ScrollAnimation animation="fadeInUp" delay={400}>
            <CertificatesSection />
          </ScrollAnimation>
        </section>

        <ScrollAnimation animation="fadeInUp" delay={200}>
          <HowLessonsWork />
        </ScrollAnimation>

        <section id="program">
          <ScrollAnimation animation="fadeInUp" delay={200}>
            <CourseProgram />
          </ScrollAnimation>
        </section>

        <section id="benefits">
          <ScrollAnimation animation="fadeInUp" delay={200}>
            <BenefitsSection />
          </ScrollAnimation>
        </section>

        <section id="testimonials">
          <ScrollAnimation animation="fadeInUp" delay={200}>
            <TestimonialsSection />
          </ScrollAnimation>
        </section>

        <ScrollAnimation animation="fadeInUp" delay={200}>
          <FAQ />
        </ScrollAnimation>

        <section id="pricing">
          <ScrollAnimation animation="fadeInUp" delay={200}>
            <PricingSection />
          </ScrollAnimation>
        </section>

        {/* New Gift Section */}
        <ScrollAnimation animation="fadeInUp" delay={200}>
          <GiftSection />
        </ScrollAnimation>

        <ScrollAnimation animation="fadeInUp" delay={200}>
          <PreRegistrationForm />
        </ScrollAnimation>
      </main>

      <ScrollAnimation animation="fadeInUp" delay={200}>
        <Footer />
      </ScrollAnimation>
    </div>
  );
};

export default Index;