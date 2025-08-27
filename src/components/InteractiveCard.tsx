import React, { useState } from 'react';
import { Card } from '@/components/ui/card';
import { cn } from '@/lib/utils';

interface InteractiveCardProps {
  children: React.ReactNode;
  className?: string;
  variant?: 'default' | 'glass' | 'gradient' | 'neon';
  hoverEffect?: 'lift' | 'scale' | 'glow' | 'border';
  onClick?: () => void;
  disabled?: boolean;
}

const InteractiveCard: React.FC<InteractiveCardProps> = ({
  children,
  className = '',
  variant = 'default',
  hoverEffect = 'lift',
  onClick,
  disabled = false
}) => {
  const [isHovered, setIsHovered] = useState(false);

  const getVariantClasses = () => {
    switch (variant) {
      case 'glass':
        return 'bg-white/10 backdrop-blur-md border border-white/20';
      case 'gradient':
        return 'bg-gradient-to-br from-blue-50 to-pink-50 border border-blue-100/50';
      case 'neon':
        return 'bg-white/80 backdrop-blur-sm border border-white/20 shadow-xl';
      default:
        return 'bg-white border border-gray-200';
    }
  };

  const getHoverEffectClasses = () => {
    if (disabled) return '';
    
    switch (hoverEffect) {
      case 'lift':
        return 'hover:translate-y-[-8px] hover:shadow-2xl';
      case 'scale':
        return 'hover:scale-105 hover:shadow-xl';
      case 'glow':
        return 'hover:shadow-[0_0_30px_rgba(59,130,246,0.3)]';
      case 'border':
        return 'hover:border-blue-500/50 hover:shadow-lg';
      default:
        return 'hover:translate-y-[-4px] hover:shadow-xl';
    }
  };

  const getTransitionClasses = () => {
    return 'transition-all duration-300 ease-out';
  };

  return (
    <Card
      className={cn(
        'relative overflow-hidden cursor-pointer',
        getVariantClasses(),
        getHoverEffectClasses(),
        getTransitionClasses(),
        disabled && 'opacity-50 cursor-not-allowed',
        className
      )}
      onMouseEnter={() => !disabled && setIsHovered(true)}
      onMouseLeave={() => !disabled && setIsHovered(false)}
      onClick={onClick}
    >
      {/* Hover Background Effect */}
      {variant === 'neon' && (
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300" />
      )}
      
      {/* Interactive Border Effect */}
      {hoverEffect === 'border' && (
        <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 opacity-0 hover:opacity-20 transition-opacity duration-300" />
      )}
      
      {/* Content */}
      <div className="relative z-10">
        {children}
      </div>
      
      {/* Hover Glow Effect */}
      {hoverEffect === 'glow' && isHovered && (
        <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-lg blur-xl opacity-0 animate-pulse" />
      )}
    </Card>
  );
};

export default InteractiveCard;
