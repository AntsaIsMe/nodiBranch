import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'ghost';
  as?: 'a' | 'button';
  href?: string;
}

const Button = ({ variant = 'primary', className = '', as: Component = 'button', href, ...props }: ButtonProps) => {
  const variants = {
    primary: 'bg-primary text-white hover:bg-primary/90',
    secondary: 'border border-gray-200 text-gray-600 hover:bg-gray-50',
    ghost: 'text-gray-600 hover:bg-gray-100',
  };

  return (
    <Component
      className={`px-6 py-3 font-medium rounded-md transition-colors ${variants[variant]} ${className}`}
      href={href}
      {...props}
    />
  );
};

export default Button;
