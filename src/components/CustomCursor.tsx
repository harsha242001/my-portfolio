
import { useEffect, useState, useRef, useCallback } from 'react';

const CustomCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const [isClicking, setIsClicking] = useState(false);
  const [isText, setIsText] = useState(false);
  const [trails, setTrails] = useState<Array<{ x: number; y: number; id: number }>>([]);
  
  const lastUpdateRef = useRef(0);
  const trailIdRef = useRef(0);

  // Throttle mouse move updates for better performance
  const handleMouseMove = useCallback((e: MouseEvent) => {
    const now = Date.now();
    if (now - lastUpdateRef.current < 16) return; // ~60fps
    
    lastUpdateRef.current = now;
    setPosition({ x: e.clientX, y: e.clientY });
    
    // Reduce trail updates frequency
    if (now % 2 === 0) {
      const newTrail = { x: e.clientX, y: e.clientY, id: trailIdRef.current++ };
      setTrails(prev => [...prev.slice(-3), newTrail]); // Reduced trail count
    }
  }, []);

  const handleMouseDown = useCallback(() => setIsClicking(true), []);
  const handleMouseUp = useCallback(() => setIsClicking(false), []);

  const handleMouseOver = useCallback((e: MouseEvent) => {
    const target = e.target as HTMLElement;
    
    if (target.matches('button, a, [role="button"]')) {
      setIsHovering(true);
      setIsText(false);
    } else if (target.matches('input, textarea, [contenteditable]')) {
      setIsText(true);
      setIsHovering(false);
    } else {
      setIsHovering(false);
      setIsText(false);
    }
  }, []);

  useEffect(() => {
    document.addEventListener('mousemove', handleMouseMove, { passive: true });
    document.addEventListener('mousedown', handleMouseDown);
    document.addEventListener('mouseup', handleMouseUp);
    document.addEventListener('mouseover', handleMouseOver, { passive: true });

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mousedown', handleMouseDown);
      document.removeEventListener('mouseup', handleMouseUp);
      document.removeEventListener('mouseover', handleMouseOver);
    };
  }, [handleMouseMove, handleMouseDown, handleMouseUp, handleMouseOver]);

  return (
    <>
      {/* Main Cursor */}
      <div
        className={`custom-cursor ${isHovering ? 'hover' : ''} ${isClicking ? 'click' : ''} ${isText ? 'text' : ''}`}
        style={{
          left: position.x,
          top: position.y,
        }}
      />
      
      {/* Cursor Trails */}
      {trails.map((trail, index) => (
        <div
          key={trail.id}
          className="cursor-trail"
          style={{
            left: trail.x,
            top: trail.y,
            opacity: (index + 1) / trails.length * 0.4,
            transform: `translate(-50%, -50%) scale(${(index + 1) / trails.length * 0.8})`,
          }}
        />
      ))}
    </>
  );
};

export default CustomCursor;
