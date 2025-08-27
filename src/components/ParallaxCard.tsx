import React, { useState, useEffect, useRef } from 'react';
import { Card } from '@/components/ui/card';
import { cn } from '@/lib/utils';

interface ParallaxCardProps {
  children: React.ReactNode;
  className?: string;
  speed?: number;
  direction?: 'up' | 'down' | 'left' | 'right';
  intensity?: number;
}

const ParallaxCard: React.FC<ParallaxCardProps> = ({
  children,
  className = '',
  speed = 0.5,
  direction = 'up',
  intensity = 20
}) => {
  const [transform, setTransform] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!cardRef.current || !isHovered) return;

      const rect = cardRef.current.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;
      
      const mouseX = e.clientX - centerX;
      const mouseY = e.clientY - centerY;
      
      let newX = 0;
      let newY = 0;
      
      switch (direction) {
        case 'up':
          newY = -mouseY * speed * 0.01;
          break;
        case 'down':
          newY = mouseY * speed * 0.01;
          break;
        case 'left':
          newX = -mouseX * speed * 0.01;
          break;
        case 'right':
          newX = mouseX * speed * 0.01;
          break;
        default:
          newX = mouseX * speed * 0.01;
          newY = mouseY * speed * 0.01;
      }
      
      // Limit the movement
      newX = Math.max(-intensity, Math.min(intensity, newX));
      newY = Math.max(-intensity, Math.min(intensity, newY));
      
      setTransform({ x: newX, y: newY });
    };

    if (isHovered) {
      window.addEventListener('mousemove', handleMouseMove);
    }

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, [isHovered, speed, direction, intensity]);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    setTransform({ x: 0, y: 0 });
  };

  return (
    <Card
      ref={cardRef}
      className={cn(
        'relative overflow-hidden transition-all duration-500 ease-out cursor-pointer',
        className
      )}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={{
        transform: `perspective(1000px) rotateX(${transform.y}deg) rotateY(${transform.x}deg) translateZ(0)`,
        transformStyle: 'preserve-3d'
      }}
    >
      {/* Content with 3D effect */}
      <div 
        className="relative z-10 transition-transform duration-500"
        style={{
          transform: `translateZ(20px)`
        }}
      >
        {children}
      </div>
      
      {/* Subtle shadow effect */}
      <div 
        className="absolute inset-0 bg-gradient-to-br from-black/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        style={{
          transform: `translateZ(10px)`
        }}
      />
    </Card>
  );
};

export default ParallaxCard;
