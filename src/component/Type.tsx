'use client';
import React, { useEffect, useRef } from 'react';
import Typed from 'typed.js';

const Type = () => {
  const typedRef = useRef(null);
  const typedInstance = useRef<Typed | null>(null);

  useEffect(() => {
    // Initialize Typed.js
    typedInstance.current = new Typed(typedRef.current, {
      strings: [
        "MERN Stack Developer.",
        "Next.js Developer.",
        "Frontend Developer.",
        "Freelancer."
      ],
      typeSpeed: 100,
      backSpeed: 60,
      loop: true,
      showCursor: false
    });

    return () => {
      typedInstance.current?.destroy();
    };
  }, []);

  return <span style={{color: '#ff8a5b', fontSize: '20px'}} ref={typedRef}></span>;
};

export default Type;
