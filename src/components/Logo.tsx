
import React from 'react';

interface LogoProps {
  isScrolled?: boolean;
}

const Logo: React.FC<LogoProps> = ({ isScrolled = false }) => {
  return (
    <div className="flex items-center">
      <h1 className="text-2xl font-bold">
        <span className={`${isScrolled ? 'text-youxin-blue' : 'text-youxin-blue md:text-white'}`}>youxin</span>
        <span className="text-youxin-purple">.website</span>
      </h1>
    </div>
  );
};

export default Logo;
