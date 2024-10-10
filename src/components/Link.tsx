import React from 'react';

type LinkProps = {
  href: string;
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'dark' | 'link';
  outline?: boolean;
};

const Link = ({ href, children, variant = 'primary', outline = false }: LinkProps) => {
  let baseClass = 'font-bebas text-xl p-4 px-10 mr-2 hover:bg-secondary transition-colors duration-300 text-white';

  const getVariantClasses = () => {
    switch (variant) {
      case 'secondary':
        return outline ? ' p-0 border border-secondary  text-secondary hover:bg-secondary hover:text-primary text-primary' : 'bg-secondary';
      case 'dark':
        return outline ? 'border border-dark bg-transparent text-dark' : 'bg-dark';
        case 'link':
        return outline ? ' bg-red-400' : 'text-primary bg-transparent text-2xl p-0';
      default:
        return outline ? 'border border-primary bg-transparent text-primary hover:bg-primary hover:text-secondary ' : 'bg-primary';
    }
  };

  return (
    <a
      href={href}
      className={`${baseClass} ${getVariantClasses()}`}
    >
      {children}
    </a>
  );
};

export default Link;
