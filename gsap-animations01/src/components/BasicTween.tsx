"use client";

import gsap from "gsap";
import { useEffect, useRef } from "react";


export default function BasicTween(){
    const boxRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if(!boxRef.current) return;

        gsap.to(boxRef.current, {
            duration: 5,
            x: 600,
            rotation: 360,
            backgroundColor: '#ff6b6b'
        })

    }, []);

    return (
       <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 gap-8">
      <h1 className="text-white text-3xl">Basic Tween</h1>
      
      <div
        ref={boxRef}
        className="w-20 h-20 bg-blue-500 rounded-lg cursor-pointer"
      />
      
      <p className="text-gray-300 max-w-md text-center">
        The box animates to the right, rotates 360 degrees, and changes color.
      </p>
    </div>
    )

}