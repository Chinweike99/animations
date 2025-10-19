'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';

export default function TimelineExample() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const tl = gsap.timeline({ repeat: -1 });

    // Add animations to timeline sequentially
    tl.to('.box1', { duration: 1, x: 200 })
      .to('.box1', { duration: 1, y: 200 })
      .to('.box1', { duration: 1, x: 0 })
      .to('.box1', { duration: 1, y: 0 });

    // Alternative: use position parameter for parallel animations
    const tl2 = gsap.timeline();

    tl2.to('.box2', { duration: 1, y: 200 }, 200)
      .to('.box2', { duration: 1, x: 200 }, 0);
  }, []);

  return (
    <div
      ref={containerRef}
      className="p-8 bg-gray-900 min-h-screen space-y-8"
    >
      <div>
        <h2 className="text-white text-xl mb-4">Sequential Animation</h2>
        <div className="box1 w-16 h-16 bg-blue-500 rounded-t-4xl" />
      </div>

      <div>
        <h2 className="text-white text-xl mb-4">Parallel Animation</h2>
        <div className="box2 w-16 h-16 bg-green-500 rounded" />
      </div>
    </div>
  );
}