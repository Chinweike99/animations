'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';

export default function StaggerExample() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Stagger animates multiple elements with delay between each
    gsap.to('.stagger-box', {
      duration: 1.5,
      y: 200,
      opacity: 0,
      stagger: 0.8, // 0.15s delay between each element
      ease: 'power1.inOut',
      repeat: -1,
      yoyo: true,
    });

    gsap.to('.grid-item', {
  duration: 1,
  y: 100,
  stagger: {
    grid: [4, 3], // 4 columns, 3 rows
    from: 'center', // animate from center outward
    amount: 1, // total time for stagger
  },
});

  }, []);

  return (
    <div
      ref={containerRef}
      className="p-8 bg-gray-900 min-h-screen flex flex-col items-center gap-8"
    >
      <h1 className="text-white text-3xl">Stagger Animation</h1>

      <div className="flex gap-2">
        {Array.from({ length: 5 }).map((_, i) => (
          <div
            key={i}
            className="stagger-box w-12 h-12 bg-blue-500 rounded"
          />
        ))}
      </div>

      <p className="text-gray-300 max-w-md text-center">
        Each box animates downward with a 0.15s stagger between them.
      </p>
    </div>
  );
}