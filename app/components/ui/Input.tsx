import React from 'react';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
  helperText?: string;
  variant?: 'default' | 'filled' | 'outlined';
}

const Input: React.FC<InputProps> = ({
  label,
  error,
  helperText,
  variant = 'default',
  className = '',
  id,
  ...props
}) => {
  const inputId = id || `input-${Math.random().toString(36).substr(2, 9)}`;
  
  const baseClasses = 'w-full px-3 py-2 text-sm transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed';
  
  const variants = {
    default: 'bg-background border border-input text-foreground placeholder:text-muted-foreground focus:border-ring focus:ring-ring/20',
    filled: 'bg-muted border border-transparent text-foreground placeholder:text-muted-foreground focus:bg-background focus:border-ring focus:ring-ring/20',
    outlined: 'bg-transparent border-2 border-input text-foreground placeholder:text-muted-foreground focus:border-ring focus:ring-ring/20',
  };
  
  const inputClasses = `${baseClasses} ${variants[variant]} ${error ? 'border-error focus:border-error focus:ring-error/20' : ''} ${className}`;
  
  return (
    <div className="space-y-2">
      {label && (
        <label htmlFor={inputId} className="block text-sm font-medium text-foreground">
          {label}
        </label>
      )}
      <input
        id={inputId}
        className={inputClasses}
        {...props}
      />
      {error && (
        <p className="text-sm text-error">{error}</p>
      )}
      {helperText && !error && (
        <p className="text-sm text-muted-foreground">{helperText}</p>
      )}
    </div>
  );
};

export default Input;
