
import { useEffect, useState } from 'react';

const CustomCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const [isClicking, setIsClicking] = useState(false);
  const [isText, setIsText] = useState(false);
  const [trails, setTrails] = useState<Array<{ x: number; y: number; id: number }>>([]);

  useEffect(() => {
    let trailId = 0;

    const handleMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
      
      // Add trail effect
      const newTrail = { x: e.clientX, y: e.clientY, id: trailId++ };
      setTrails(prev => [...prev.slice(-5), newTrail]);
    };

    const handleMouseDown = () => setIsClicking(true);
    const handleMouseUp = () => setIsClicking(false);

    const handleMouseOver = (e: MouseEvent) => {
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
    };

    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mousedown', handleMouseDown);
    document.addEventListener('mouseup', handleMouseUp);
    document.addEventListener('mouseover', handleMouseOver);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mousedown', handleMouseDown);
      document.removeEventListener('mouseup', handleMouseUp);
      document.removeEventListener('mouseover', handleMouseOver);
    };
  }, []);

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
            opacity: (index + 1) / trails.length * 0.5,
            transform: `translate(-50%, -50%) scale(${(index + 1) / trails.length})`,
          }}
        />
      ))}
    </>
  );
};

export default CustomCursor;
