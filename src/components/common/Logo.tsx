import React from 'react';
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
      logo: 'w-8 h-8',
      text: 'text-xl',
      tagline: 'text-xs'
    },
    md: {
      container: 'text-2xl',
      logo: 'w-10 h-10',
      text: 'text-2xl',
      tagline: 'text-sm'
    },
    lg: {
      container: 'text-4xl',
      logo: 'w-12 h-12',
      text: 'text-4xl',
      tagline: 'text-base'
    }
  };

  const renderIcon = () => (
    <div className="relative">
      <img 
        src="https://static.wixstatic.com/media/a6112a_24a2b1347f0941bb83414e427d5d5ac0f000.jpg/v1/fill/w_294,h_288,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/a6112a_24a2b1347f0941bb83414e427d5d5ac0f000.jpg"
        alt="Tatuapé FM Logo"
        className={classNames('rounded-full', sizeClasses[size].logo)}
      />
    </div>
  );

  const renderText = () => (
    <div className="flex flex-col">
      <span className={classNames('font-heading leading-none', sizeClasses[size].text)}>
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