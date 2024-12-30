'use client';

import { Suspense, useEffect, useState } from 'react';
import dynamic from 'next/dynamic';

const Spline = dynamic(() => import('@splinetool/react-spline').then(mod => {
  return mod.default;
}), {
  ssr: false,
  loading: () => <div className="w-full h-full bg-black/50" />
});

interface SplineWrapperProps {
  scene: string;
  className?: string;
}

export default function SplineWrapper({ scene, className = '' }: SplineWrapperProps) {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return <div className={`w-full h-full bg-black/50 ${className}`} />;
  }

  return (
    <div className={className}>
      <Suspense fallback={<div className="w-full h-full bg-black/50" />}>
        <Spline scene={scene} />
      </Suspense>
    </div>
  );
} 