'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';

export default function YoyoExample() {
  const box1Ref = useRef<HTMLDivElement>(null);
  const box2Ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Repeat infinite with yoyo (reverses direction)
    gsap.to(box1Ref.current, {
      duration: 1,
      x: 300,
      repeat: -1,
      yoyo: true,
      ease: 'sine.inOut',
    });

    // Repeat 3 times (4 total animations: forward, reverse, forward, reverse)
    gsap.to(box2Ref.current, {
      duration: 1,
      y: 150,
      repeat: 3,
      yoyo: true,
      ease: 'power2.inOut',
    });
  }, []);

  return (
    <div className="p-8 bg-gray-900 min-h-screen space-y-16">
      <div>
        <h2 className="text-white text-xl mb-4">Infinite Yoyo</h2>
        <div ref={box1Ref} className="w-16 h-16 bg-blue-500 rounded" />
      </div>

      <div>
        <h2 className="text-white text-xl mb-4">Repeat 3 Times with Yoyo</h2>
        <div ref={box2Ref} className="w-16 h-16 bg-green-500 rounded" />
      </div>
    </div>
  );
}