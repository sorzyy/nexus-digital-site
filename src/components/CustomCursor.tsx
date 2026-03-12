import { useEffect, useState } from 'react';
import { motion, useSpring, useMotionValue } from 'framer-motion';

export default function CustomCursor() {
  const [isHovering, setIsHovering] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  
  const cursorX = useMotionValue(0);
  const cursorY = useMotionValue(0);
  
  const springConfig = { damping: 25, stiffness: 300 };
  const cursorXSpring = useSpring(cursorX, springConfig);
  const cursorYSpring = useSpring(cursorY, springConfig);
  
  useEffect(() => {
    // Only show custom cursor on desktop
    if (window.innerWidth < 768) return;
    
    setIsVisible(true);
    
    const moveCursor = (e: MouseEvent) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
    };
    
    const handleMouseEnter = () => setIsHovering(true);
    const handleMouseLeave = () => setIsHovering(false);
    
    window.addEventListener('mousemove', moveCursor);
    
    // Add hover detection to interactive elements
    const interactiveElements = document.querySelectorAll('a, button, [role="button"]');
    interactiveElements.forEach(el => {
      el.addEventListener('mouseenter', handleMouseEnter);
      el.addEventListener('mouseleave', handleMouseLeave);
    });
    
    return () => {
      window.removeEventListener('mousemove', moveCursor);
      interactiveElements.forEach(el => {
        el.removeEventListener('mouseenter', handleMouseEnter);
        el.removeEventListener('mouseleave', handleMouseLeave);
      });
    };
  }, [cursorX, cursorY]);
  
  if (!isVisible) return null;
  
  return (
    <>
      <motion.div
        className="fixed top-0 left-0 w-4 h-4 rounded-full bg-primary pointer-events-none z-[9998] mix-blend-difference hidden md:block"
        style={{
          x: cursorXSpring,
          y: cursorYSpring,
          translateX: '-50%',
          translateY: '-50%',
        }}
        animate={{
          scale: isHovering ? 2.5 : 1,
          opacity: isHovering ? 0.5 : 1,
        }}
        transition={{ duration: 0.2 }}
      />
      <motion.div
        className="fixed top-0 left-0 w-10 h-10 rounded-full border border-white/30 pointer-events-none z-[9997] hidden md:block"
        style={{
          x: cursorX,
          y: cursorY,
          translateX: '-50%',
          translateY: '-50%',
        }}
        animate={{
          scale: isHovering ? 1.5 : 1,
          opacity: isHovering ? 0 : 1,
        }}
        transition={{ duration: 0.2 }}
      />
    </>
  );
}
