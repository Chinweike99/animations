'use client';

import gsap from "gsap";
import { useEffect, useRef } from "react";



export default function ResponsiveAnimation(){
    const boxRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleSize = () => {
            const isMobile = window.innerWidth < 768;

            gsap.to(boxRef.current, {
                x: isMobile ? 100 : 300,
                duration: 1,
            })
        };

        handleSize();

        window.addEventListener('resize', handleSize);
        return () => window.removeEventListener('resize', handleSize)
    })

   return (
    <div className="flex items-center justify-center min-h-screen bg-gray-900">
      <div ref={boxRef} className="w-16 h-16 bg-blue-500 rounded" />
    </div>
  ); 

}