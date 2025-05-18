import React from 'react';
import classNames from 'classnames';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'link';
  size?: 'sm' | 'md' | 'lg';
  fullWidth?: boolean;
  icon?: React.ReactNode;
  iconPosition?: 'left' | 'right';
  className?: string;
  children: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  size = 'md',
  fullWidth = false,
  icon,
  iconPosition = 'left',
  className,
  children,
  ...props
}) => {
  const baseClasses = 'inline-flex items-center justify-center font-semibold transition-all duration-300 rounded';
  
  const variantClasses = {
    primary: 'bg-primary text-white hover:bg-primary/90 active:bg-primary/80 shadow-md hover:shadow-lg',
    secondary: 'bg-secondary text-white hover:bg-secondary/90 active:bg-secondary/80 shadow-md hover:shadow-lg',
    outline: 'bg-transparent border-2 border-highlight text-highlight hover:bg-highlight/10 active:bg-highlight/20',
    link: 'bg-transparent hover:text-highlight underline p-0'
  };
  
  const sizeClasses = {
    sm: variant === 'link' ? 'text-sm' : 'text-sm px-3 py-1',
    md: variant === 'link' ? 'text-base' : 'text-base px-4 py-2',
    lg: variant === 'link' ? 'text-lg' : 'text-lg px-6 py-3'
  };

  const classes = classNames(
    baseClasses,
    variantClasses[variant],
    sizeClasses[size],
    fullWidth ? 'w-full' : '',
    variant === 'primary' || variant === 'secondary' ? 'retro-shadow' : '',
    className
  );

  return (
    <button className={classes} {...props}>
      {icon && iconPosition === 'left' && <span className="mr-2">{icon}</span>}
      {children}
      {icon && iconPosition === 'right' && <span className="ml-2">{icon}</span>}
    </button>
  );
};

export default Button;