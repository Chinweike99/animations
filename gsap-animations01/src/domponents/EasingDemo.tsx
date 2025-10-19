'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';

export default function EasingDemo() {
  const easeRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const easings = [
      'power1.inOut',
      'back.out',
      'elastic.out',
      'bounce.out',
      'sine.inOut',
      'expo.out',
    ];

    easeRefs.current.forEach((ref, index) => {
      if (!ref) return;

      gsap.to(ref, {
        x: 300,
        duration: 2,
        ease: easings[index],
        repeat: -1, 
        yoyo: true, 
        delay: index * 0.1,
      });
    });
  }, []);

  const easings = [
    'power1.inOut',
    'back.out',
    'elastic.out',
    'bounce.out',
    'sine.inOut',
    'expo.out',
  ];

  return (
    <div className="p-8 bg-gray-900 min-h-screen space-y-6">
      <h1 className="text-white text-3xl mb-8">Easing Functions</h1>

      {easings.map((ease, index) => (
        <div key={ease}>
          <p className="text-gray-300 text-sm mb-2">{ease}</p>
          <div
            ref={(el) => {
              easeRefs.current[index] = el;
            }}
            className="w-12 h-12 bg-cyan-500 rounded"
          />
        </div>
      ))}
    </div>
  );
}