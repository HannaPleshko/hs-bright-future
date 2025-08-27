import React, { useState, useEffect, useRef } from 'react';
import { useInView } from 'react-intersection-observer';

interface AnimatedStatsProps {
  stats: Array<{
    value: number;
    label: string;
    suffix?: string;
    prefix?: string;
    icon?: React.ComponentType<{ className?: string }>;
    color?: string;
  }>;
  className?: string;
  duration?: number;
}

const AnimatedStats: React.FC<AnimatedStatsProps> = ({
  stats,
  className = '',
  duration = 2000
}) => {
  const [counts, setCounts] = useState<number[]>(new Array(stats.length).fill(0));
  const [hasAnimated, setHasAnimated] = useState(false);
  const { ref, inView } = useInView({
    threshold: 0.3,
    triggerOnce: true
  });

  useEffect(() => {
    if (inView && !hasAnimated) {
      setHasAnimated(true);
      
      const startTime = Date.now();
      const endTime = startTime + duration;
      
      const animate = () => {
        const now = Date.now();
        const progress = Math.min((now - startTime) / duration, 1);
        
        const newCounts = stats.map((stat, index) => {
          const targetValue = stat.value;
          const currentValue = Math.floor(targetValue * progress);
          return currentValue;
        });
        
        setCounts(newCounts);
        
        if (progress < 1) {
          requestAnimationFrame(animate);
        }
      };
      
      requestAnimationFrame(animate);
    }
  }, [inView, hasAnimated, stats, duration]);

  return (
    <div ref={ref} className={`grid grid-cols-1 md:grid-cols-3 gap-8 ${className}`}>
      {stats.map((stat, index) => (
        <div
          key={index}
          className="text-center group cursor-pointer transition-all duration-500 hover:scale-105"
          style={{ animationDelay: `${index * 0.1}s` }}
        >
          <div className="relative">
            {stat.icon && (
              <div className="flex justify-center mb-4">
                <div className={`p-3 rounded-xl bg-gradient-to-r ${stat.color || 'from-blue-500 to-purple-600'} group-hover:scale-110 transition-transform duration-300`}>
                  <stat.icon className="w-6 h-6 text-white" />
                </div>
              </div>
            )}
            
            <div className="relative">
              <div className={`text-4xl lg:text-5xl font-bold bg-gradient-to-r ${stat.color || 'from-blue-500 to-purple-600'} bg-clip-text text-transparent group-hover:text-gradient-animate transition-all duration-500`}>
                {stat.prefix || ''}{counts[index]}{stat.suffix || ''}
              </div>
              
              {/* Animated glow effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-sm"></div>
            </div>
            
            <div className="text-sm text-muted-foreground group-hover:text-foreground transition-colors duration-300 mt-2">
              {stat.label}
            </div>
            
            {/* Hover indicator */}
            <div className="mt-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <div className="w-8 h-1 bg-gradient-to-r from-blue-500 to-pink-500 rounded-full mx-auto"></div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default AnimatedStats;
