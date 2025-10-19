"use client";

import gsap from "gsap";
import { useEffect, useRef, useState } from "react";



export default function CallbackExample(){
    const boxRef = useRef<HTMLDivElement>(null);
    const [status, setStatus] = useState('Waiting ...');

    useEffect(() => {
        if(!boxRef.current)  return;

        gsap.to(boxRef.current, {
            duration: 2,
            x: 200,
            rotation: 360,
            repeat: -1,
            onStart: () => {
                setStatus('Animation Started');
                console.log("Animation began")
            },
            onUpdate: function(){
                const progress = this.progress();
                console.log(`Progress: ${(progress * 100).toFixed(0)}%`);
            },
            onComplete: () => {
                setStatus("Animation completed")
            },
            onReverseComplete: () => {
                setStatus("Animation Reversed")
            }
        })

    }, [])

    return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 gap-8">
      <h1 className="text-white text-3xl">Animation Callbacks</h1>

      <div ref={boxRef} className="w-16 h-16 bg-purple-500 rounded" />

      <p className="text-cyan-400 text-lg">{status}</p>
    </div>
  );

}