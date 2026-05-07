// Animated progress bar molecule that switches between indeterminate and fake-determinate modes.
"use client";

import { useState, useEffect } from "react";

type Props = {
  className?: string;
  /** When provided, switches to determinate mode with fake progress.
   *  Set to `true` once the task is complete to jump to 100%. */
  complete?: boolean;
};

export function IndeterminateBar({ className, complete }: Props) {
  const [progress, setProgress] = useState(0);

  // Fake progress timer — increments while waiting, slows near the top
  useEffect(() => {
    if (complete === undefined) return; // indeterminate mode
    if (complete) {
      setProgress(100);
      return;
    }

    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 90) return Math.min(prev + 0.5, 95);
        if (prev >= 70) return prev + 1;
        return prev + 5;
      });
    }, 2000);

    return () => clearInterval(timer);
  }, [complete]);

  // Indeterminate mode (original behavior)
  if (complete === undefined) {
    return (
      <>
        <style>{`
          @keyframes indeterminate-slide {
            0%   { transform: translateX(-100%); }
            100% { transform: translateX(250%); }
          }
        `}</style>
        <div
          className={`w-full h-2 bg-grey-100 rounded-full overflow-hidden ${className ?? ""}`}
        >
          <div
            className="h-full w-[40%] bg-blue-500 rounded-full"
            style={{
              animation: "indeterminate-slide 1.5s ease-in-out infinite",
            }}
          />
        </div>
      </>
    );
  }

  // Determinate mode with percentage
  return (
    <div className={`w-full flex flex-col gap-2 ${className ?? ""}`}>
      <div className="w-full h-2 bg-grey-100 rounded-full overflow-hidden">
        <div
          className="h-full bg-blue-500 rounded-full transition-all duration-500 ease-out"
          style={{ width: `${progress}%` }}
        />
      </div>
      <span className="text-body-small text-white text-center">
        {Math.round(progress)}%
      </span>
    </div>
  );
}
