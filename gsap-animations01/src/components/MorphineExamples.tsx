"use client";''

import gsap from "gsap";
import MorphSVGPlugin from "gsap/dist/MorphSVGPlugin";
import { useEffect, useRef } from "react";

gsap.registerPlugin(MorphSVGPlugin);


export default function MorphineExample(){

    // const svgRef = useRef<SVGAElement>(null);
    const svgRef = useRef<SVGSVGElement>(null);

    useEffect(() => {
        // if(!svgRef.current) return;

        const path = svgRef.current?.querySelector('path');
        if(!path) return;

        const tl = gsap.timeline({repeat: -1});
        tl.to(path, {
            attr: {
                d: 'M 150 50 Q 150 100 100 150 Q 50 100 150 50',
            },
            duration: 2,
            ease: 'sine.inOut'
        })
        .to(path, {
            attr: {
                d: 'M 75 50 L 175 50 L 175 150 L 75 150 Z',
            },
            duration: 2,
            ease: 'sine.inOut'
        },
        0.5
    )
    }, [])

    return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 gap-8">
      <h1 className="text-white text-3xl">SVG Morphing</h1>
      <svg
        ref={svgRef}
        width="300"
        height="300"
        viewBox="0 0 200 200"
        className="bg-gray-800 rounded"
      >
        <path
          d="M 150 50 Q 150 100 100 150 Q 50 100 150 50"
          fill="none"
          stroke="#22d3ee"
          strokeWidth="3"
        />
      </svg>

      <p className="text-gray-300">Shape morphs between circle and square</p>
    </div>
  );

}