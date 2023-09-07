// Button.tsx
import React, { ReactNode } from 'react';

interface ButtonProps {
  children: ReactNode;
  onClick?: () => void;
  disabled?: boolean;
  className?: string;
  iconLeft?: ReactNode;
  iconRight?: ReactNode;
}

const Button: React.FC<ButtonProps> = ({
  children,
  onClick,
  disabled = false,
  className = '',
  iconLeft,
  iconRight,

}) => {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`px-10 py-2 rounded-lg ${
        disabled
          ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
          : 'hover:bg-yellow-500 bg-yellow-400 text-white'
      } ${className}`}
    >
      {iconLeft && <span className="mr-2">{iconLeft}</span>}
      {children}
      {iconRight && <span className="ml-2">{iconRight}</span>}
    </button>
  );
};

export default Button;
