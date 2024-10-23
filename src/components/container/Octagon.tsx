import React from 'react';

import '@/styles/shapes.css';

interface OctagonProps {
  className?: string;
  children?: React.ReactNode;
}

const Octagon: React.FC<OctagonProps> = ({ className = '', children }) => {
  return <div className={`octagon ${className}`}>{children}</div>;
};

export default Octagon;
