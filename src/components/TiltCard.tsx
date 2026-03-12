import { useRef, useState } from 'react';
import { motion } from 'framer-motion';

interface TiltCardProps {
  children: React.ReactNode;
  className?: string;
}

export default function TiltCard({ children, className = '' }: TiltCardProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);
  
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;
    
    const rect = ref.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    
    const mouseX = e.clientX - centerX;
    const mouseY = e.clientY - centerY;
    
    const rotateXValue = (mouseY / (rect.height / 2)) * -10;
    const rotateYValue = (mouseX / (rect.width / 2)) * 10;
    
    setRotateX(rotateXValue);
    setRotateY(rotateYValue);
  };
  
  const handleMouseLeave = () => {
    setRotateX(0);
    setRotateY(0);
  };
  
  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        transformStyle: 'preserve-3d',
        perspective: 1000,
      }}
      animate={{
        rotateX,
        rotateY,
      }}
      transition={{ type: 'spring', stiffness: 300, damping: 20 }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
