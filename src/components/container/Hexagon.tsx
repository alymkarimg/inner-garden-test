import React from 'react';

import '@/styles/shapes.css';

interface HexagonProps {
  className?: string;
  children?: React.ReactNode;
  image?: string;
}

const Hexagon: React.FC<HexagonProps> = ({
  className = '',
  children,
  image,
}) => {
  return (
    <div
      style={{
        backgroundImage: `url(${image})`,
      }}
      className={`hexagon ${className}`}
    >
      {children}
    </div>
  );
};

export default Hexagon;
