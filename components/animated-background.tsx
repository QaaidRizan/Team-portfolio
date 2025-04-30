"use client";

import { useEffect, useRef } from 'react';

// Particle class with TypeScript safety
class Particle {
  x: number;
  y: number;
  size: number;
  speedX: number;
  speedY: number;
  color: string;

  constructor(canvasWidth: number, canvasHeight: number) {
    this.x = Math.random() * canvasWidth;
    this.y = Math.random() * canvasHeight;
    this.size = Math.random() * 3 + 1;
    this.speedX = Math.random() * 1 - 0.5;
    this.speedY = Math.random() * 1 - 0.5;
    this.color = '#ffffff';
  }

  update(canvasWidth: number, canvasHeight: number) {
    this.x += this.speedX;
    this.y += this.speedY;

    if (this.x > canvasWidth || this.x < 0) {
      this.speedX = -this.speedX;
    }
    if (this.y > canvasHeight || this.y < 0) {
      this.speedY = -this.speedY;
    }
  }

  draw(ctx: CanvasRenderingContext2D) {
    ctx.fillStyle = this.color;
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
    ctx.fill();
  }
}

export default function AnimatedBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    
    // Store width and height variables at the useEffect level
    // so they're available to all nested functions
    let width = canvas.width;
    let height = canvas.height;
    
    // Create particles array first - before any function declarations
    let particles: Particle[] = [];
    
    // Set canvas to full width and height
    const handleResize = () => {
      // Since we checked canvas is not null above, we can use non-null assertion here
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width;
      canvas.height = height;
      initParticles(); // Reinitialize particles when canvas size changes
    };
    
    window.addEventListener('resize', handleResize);
    handleResize();
    
    function initParticles() {
      if (!canvas) return; // Add a runtime check for null

      particles = [];
      const particleCount = Math.min(
        100,
        Math.floor((canvas.width * canvas.height) / 8000)
      );

      for (let i = 0; i < particleCount; i++) {
        particles.push(new Particle(canvas.width, canvas.height));
      }
    }
    
    // Animation loop
    function animate() {
      ctx.clearRect(0, 0, width, height);
      
      // Update and draw particles
      for (let i = 0; i < particles.length; i++) {
        particles[i].update(width, height);
        particles[i].draw(ctx);
      }
      
      // Connect particles with lines if they're close enough
      connectParticles();
      
      requestAnimationFrame(animate);
    }
    
    function connectParticles() {
      const maxDistance = 150;
      
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          
          if (distance < maxDistance) {
            const opacity = 1 - (distance / maxDistance);
            ctx.strokeStyle = `rgba(255, 255, 255, ${opacity * 0.2})`;
            ctx.lineWidth = 1;
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.stroke();
          }
        }
      }
    }
    
    // Start animation
    initParticles();
    animate();
    
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  
  return (
    <canvas 
      ref={canvasRef} 
      className="absolute inset-0 w-full h-full" 
      style={{ pointerEvents: 'none' }}
    />
  );
}
