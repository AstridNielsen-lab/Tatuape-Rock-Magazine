import React from 'react';
import { Headphones, Radio, Music } from 'lucide-react';
import classNames from 'classnames';

interface LogoProps {
  variant?: 'full' | 'icon' | 'text';
  size?: 'sm' | 'md' | 'lg';
  showTagline?: boolean;
  className?: string;
}

const Logo: React.FC<LogoProps> = ({ 
  variant = 'full',
  size = 'md',
  showTagline = false,
  className
}) => {
  const sizeClasses = {
    sm: {
      container: 'text-xl',
      icon: 'w-5 h-5',
      logo: 'text-xl',
      tagline: 'text-xs'
    },
    md: {
      container: 'text-2xl',
      icon: 'w-6 h-6',
      logo: 'text-2xl',
      tagline: 'text-sm'
    },
    lg: {
      container: 'text-4xl',
      icon: 'w-8 h-8',
      logo: 'text-4xl',
      tagline: 'text-base'
    }
  };

  const renderIcon = () => (
    <div className="relative">
      <Radio className={classNames('text-primary', sizeClasses[size].icon)} />
      <span className="absolute -top-1 -right-1">
        <Music className={classNames('text-highlight', 'w-3 h-3', {
          'w-3 h-3': size === 'sm',
          'w-4 h-4': size === 'md',
          'w-5 h-5': size === 'lg'
        })} />
      </span>
    </div>
  );

  const renderText = () => (
    <div className="flex flex-col">
      <span className={classNames('font-heading leading-none', sizeClasses[size].logo)}>
        <span className="text-primary">Tatuapé</span>
        <span className="text-highlight">FM</span>
      </span>
      {showTagline && (
        <span className={classNames('font-subheading text-accent', sizeClasses[size].tagline)}>
          Rock Magazine
        </span>
      )}
    </div>
  );

  if (variant === 'icon') return renderIcon();
  if (variant === 'text') return renderText();

  return (
    <div className={classNames('flex items-center gap-2', sizeClasses[size].container, className)}>
      {renderIcon()}
      {renderText()}
    </div>
  );
};

export default Logo;