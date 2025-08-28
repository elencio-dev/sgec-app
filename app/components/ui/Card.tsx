import React from 'react';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  variant?: 'default' | 'elevated' | 'outlined';
}

const Card: React.FC<CardProps> = ({
  children,
  className = '',
  variant = 'default'
}) => {
  const baseClasses = 'bg-card text-card-foreground rounded-lg border';
  
  const variants = {
    default: 'border-border shadow-sm',
    elevated: 'border-transparent shadow-lg',
    outlined: 'border-border shadow-none',
  };
  
  const classes = `${baseClasses} ${variants[variant]} ${className}`;
  
  return (
    <div className={classes}>
      {children}
    </div>
  );
};

interface CardHeaderProps {
  children: React.ReactNode;
  className?: string;
}

export const CardHeader: React.FC<CardHeaderProps> = ({
  children,
  className = ''
}) => (
  <div className={`flex flex-col space-y-1.5 p-6 ${className}`}>
    {children}
  </div>
);

interface CardTitleProps {
  children: React.ReactNode;
  className?: string;
}

export const CardTitle: React.FC<CardTitleProps> = ({
  children,
  className = ''
}) => (
  <h3 className={`text-2xl font-semibold leading-none tracking-tight ${className}`}>
    {children}
  </h3>
);

interface CardDescriptionProps {
  children: React.ReactNode;
  className?: string;
}

export const CardDescription: React.FC<CardDescriptionProps> = ({
  children,
  className = ''
}) => (
  <p className={`text-sm text-muted-foreground ${className}`}>
    {children}
  </p>
);

interface CardContentProps {
  children: React.ReactNode;
  className?: string;
}

export const CardContent: React.FC<CardContentProps> = ({
  children,
  className = ''
}) => (
  <div className={`p-6 pt-0 ${className}`}>
    {children}
  </div>
);

interface CardFooterProps {
  children: React.ReactNode;
  className?: string;
}

export const CardFooter: React.FC<CardFooterProps> = ({
  children,
  className = ''
}) => (
  <div className={`flex items-center p-6 pt-0 ${className}`}>
    {children}
  </div>
);

export default Card;
