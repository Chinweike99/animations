"use client";

// hooks/useGSAP.ts
import { useEffect, useRef } from 'react';
import gsap from 'gsap';

export function useGSAP(
  callback: (ctx: gsap.Context) => void,
  dependencies?: React.DependencyList
) {
  const ctxRef = useRef<gsap.Context>(null);

  useEffect(() => {
    ctxRef.current = gsap.context(() => {
      callback(ctxRef.current as gsap.Context);
    });

    return () => ctxRef.current?.revert();
  }, dependencies);
}

// Usage
export default function Component() {
  useGSAP(() => {
    gsap.to('.element', { duration: 1, x: 100 });
  }, []);

  return <div className="element w-16 h-16 bg-blue-500 rounded" />;
}