import React, { useEffect, useRef, useState } from 'react';

interface ScrollAnimationProps {
  children: React.ReactNode;
  className?: string;
  animation?: 'fadeIn' | 'fadeInUp' | 'fadeInLeft' | 'fadeInRight' | 'scaleIn' | 'slideIn';
  delay?: number;
  duration?: number;
  threshold?: number;
  triggerOnce?: boolean;
}

const ScrollAnimation: React.FC<ScrollAnimationProps> = ({
  children,
  className = '',
  animation = 'fadeInUp',
  delay = 0,
  duration = 800,
  threshold = 0.1,
  triggerOnce = true
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const [hasTriggered, setHasTriggered] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          if (!hasTriggered || !triggerOnce) {
            setIsVisible(true);
            setHasTriggered(true);
          }
        } else if (!triggerOnce) {
          setIsVisible(false);
        }
      },
      {
        threshold,
        rootMargin: '0px 0px -50px 0px'
      }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [threshold, triggerOnce, hasTriggered]);

  const getAnimationClasses = () => {
    const baseClasses = 'transition-all duration-700 ease-out';
    
    if (!isVisible) {
      switch (animation) {
        case 'fadeIn':
          return `${baseClasses} opacity-0`;
        case 'fadeInUp':
          return `${baseClasses} opacity-0 translate-y-10`;
        case 'fadeInLeft':
          return `${baseClasses} opacity-0 -translate-x-10`;
        case 'fadeInRight':
          return `${baseClasses} opacity-0 translate-x-10`;
        case 'scaleIn':
          return `${baseClasses} opacity-0 scale-95`;
        case 'slideIn':
          return `${baseClasses} opacity-0 translate-y-20`;
        default:
          return `${baseClasses} opacity-0 translate-y-10`;
      }
    }

    return `${baseClasses} opacity-100`;
  };

  const getTransformClasses = () => {
    if (!isVisible) return '';
    
    switch (animation) {
      case 'fadeIn':
        return 'translate-y-0';
      case 'fadeInUp':
        return 'translate-y-0';
      case 'fadeInLeft':
        return 'translate-x-0';
      case 'fadeInRight':
        return 'translate-x-0';
      case 'scaleIn':
        return 'scale-100';
      case 'slideIn':
        return 'translate-y-0';
      default:
        return 'translate-y-0';
    }
  };

  return (
    <div
      ref={ref}
      className={`${className} ${getAnimationClasses()}`}
      style={{
        transitionDelay: `${delay}ms`,
        transform: isVisible ? getTransformClasses() : undefined
      }}
    >
      {children}
    </div>
  );
};

export default ScrollAnimation;
