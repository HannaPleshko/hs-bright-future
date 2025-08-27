import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { Loader2 } from 'lucide-react';

interface ModernButtonProps {
  children: React.ReactNode;
  variant?: 'default' | 'gradient' | 'neon' | 'glass' | 'outline';
  size?: 'sm' | 'md' | 'lg' | 'xl';
  loading?: boolean;
  disabled?: boolean;
  icon?: React.ComponentType<{ className?: string }>;
  iconPosition?: 'left' | 'right';
  onClick?: () => void;
  className?: string;
  fullWidth?: boolean;
}

const ModernButton: React.FC<ModernButtonProps> = ({
  children,
  variant = 'default',
  size = 'md',
  loading = false,
  disabled = false,
  icon: Icon,
  iconPosition = 'left',
  onClick,
  className = '',
  fullWidth = false
}) => {
  const [isPressed, setIsPressed] = useState(false);

  const getVariantClasses = () => {
    switch (variant) {
      case 'gradient':
        return 'bg-gradient-to-r from-blue-500 to-pink-500 hover:from-blue-600 hover:to-pink-600 text-white shadow-lg hover:shadow-xl';
      case 'neon':
        return 'bg-white/10 backdrop-blur-sm border border-white/20 text-white hover:bg-white/20 hover:shadow-[0_0_20px_rgba(59,130,246,0.5)]';
      case 'glass':
        return 'bg-white/20 backdrop-blur-md border border-white/30 text-white hover:bg-white/30 hover:shadow-lg';
      case 'outline':
        return 'border-2 border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white hover:shadow-lg';
      default:
        return 'bg-blue-500 hover:bg-blue-600 text-white shadow-md hover:shadow-lg';
    }
  };

  const getSizeClasses = () => {
    switch (size) {
      case 'sm':
        return 'px-4 py-2 text-sm';
      case 'md':
        return 'px-6 py-3 text-base';
      case 'lg':
        return 'px-8 py-4 text-lg';
      case 'xl':
        return 'px-10 py-5 text-xl';
      default:
        return 'px-6 py-3 text-base';
    }
  };

  const handleClick = () => {
    if (!disabled && !loading && onClick) {
      onClick();
    }
  };

  const handleMouseDown = () => setIsPressed(true);
  const handleMouseUp = () => setIsPressed(false);
  const handleMouseLeave = () => setIsPressed(false);

  return (
    <Button
      className={cn(
        'relative overflow-hidden font-semibold transition-all duration-300 ease-out transform',
        'hover:scale-105 active:scale-95',
        getVariantClasses(),
        getSizeClasses(),
        fullWidth && 'w-full',
        disabled && 'opacity-50 cursor-not-allowed',
        loading && 'cursor-wait',
        isPressed && 'scale-95',
        className
      )}
      onClick={handleClick}
      onMouseDown={handleMouseDown}
      onMouseUp={handleMouseUp}
      onMouseLeave={handleMouseLeave}
      disabled={disabled || loading}
    >
      {/* Shimmer effect */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 transform -skew-x-12 -translate-x-full hover:translate-x-full" />
      
      {/* Content */}
      <div className="relative z-10 flex items-center justify-center gap-2">
        {loading ? (
          <>
            <Loader2 className="w-4 h-4 animate-spin" />
            <span>Загрузка...</span>
          </>
        ) : (
          <>
            {Icon && iconPosition === 'left' && (
              <Icon className="w-4 h-4 transition-transform duration-300 group-hover:scale-110" />
            )}
            <span>{children}</span>
            {Icon && iconPosition === 'right' && (
              <Icon className="w-4 h-4 transition-transform duration-300 group-hover:scale-110" />
            )}
          </>
        )}
      </div>
      
      {/* Ripple effect */}
      {isPressed && (
        <div className="absolute inset-0 bg-white/20 rounded-full scale-0 animate-ping" />
      )}
    </Button>
  );
};

export default ModernButton;
