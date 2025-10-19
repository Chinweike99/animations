'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';

export default function TweenVariations() {
  const boxToRef = useRef<HTMLDivElement>(null);
  const boxFromRef = useRef<HTMLDivElement>(null);
  const boxFromToRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // to() - Current position to new position
    gsap.to(boxToRef.current, {
      duration: 2,
      x: 150,
      delay: 0.5,
    });

    // from() - Start at x: 150, animate TO x: 0 (current)
    gsap.from(boxFromRef.current, {
      duration: 2,
      x: 150,
      delay: 0.5,
    });

    // fromTo() - Explicitly define start and end
    gsap.fromTo(
      boxFromToRef.current,
      { x: 0, opacity: 0, scale: 0.5 }, // from
      { x: 150, opacity: 1, scale: 1, duration: 2, delay: 0.5 } // to
    );
  }, []);

  return (
    <div className="space-y-16 p-8 bg-gray-900 min-h-screen">
      <div>
        <h2 className="text-white text-xl mb-4">gsap.to()</h2>
        <div
          ref={boxToRef}
          className="w-16 h-16 bg-blue-500 rounded"
        />
      </div>

      <div>
        <h2 className="text-white text-xl mb-4">gsap.from()</h2>
        <div
          ref={boxFromRef}
          className="w-16 h-16 bg-green-500 rounded"
        />
      </div>

      <div>
        <h2 className="text-white text-xl mb-4">gsap.fromTo()</h2>
        <div
          ref={boxFromToRef}
          className="w-16 h-16 bg-purple-500 rounded"
        />
      </div>
    </div>
  );
}