import { useState, useEffect } from 'react';

const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';

interface ScrambleTextProps {
  text: string;
  className?: string;
  trigger?: boolean;
}

export default function ScrambleText({ text, className = '', trigger = true }: ScrambleTextProps) {
  const [displayText, setDisplayText] = useState(text);
  const [isScrambling, setIsScrambling] = useState(false);
  
  useEffect(() => {
    if (!trigger || isScrambling) return;
    
    setIsScrambling(true);
    let iteration = 0;
    const maxIterations = text.length * 3;
    
    const interval = setInterval(() => {
      setDisplayText(
        text
          .split('')
          .map((char, index) => {
            if (char === ' ') return ' ';
            if (index < iteration / 3) {
              return text[index];
            }
            return chars[Math.floor(Math.random() * chars.length)];
          })
          .join('')
      );
      
      iteration++;
      
      if (iteration >= maxIterations) {
        clearInterval(interval);
        setDisplayText(text);
        setIsScrambling(false);
      }
    }, 30);
    
    return () => clearInterval(interval);
  }, [text, trigger]);
  
  return <span className={className}>{displayText}</span>;
}
