import React from 'react';
import classNames from 'classnames';

interface CardProps {
  className?: string;
  children: React.ReactNode;
  variant?: 'default' | 'highlight' | 'outline';
  onClick?: () => void;
}

const Card: React.FC<CardProps> = ({
  className,
  children,
  variant = 'default',
  onClick
}) => {
  const variantClasses = {
    default: 'card',
    highlight: 'card card-highlight',
    outline: 'card border-2 border-highlight'
  };
  
  return (
    <div 
      className={classNames(
        variantClasses[variant],
        onClick && 'cursor-pointer hover:shadow-lg transform transition-transform hover:-translate-y-1',
        className
      )}
      onClick={onClick}
    >
      {children}
    </div>
  );
};

export default Card;