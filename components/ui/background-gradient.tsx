"use client";
import { cn } from "../../lib/utils";
import React, { useEffect, useRef, useState } from "react";

export const BackgroundGradient = ({
  children,
  className,
  containerClassName,
  animate = true,
}: {
  children?: React.ReactNode;
  className?: string;
  containerClassName?: string;
  animate?: boolean;
}) => {
  const containerRef = useRef<HTMLDivElement>(null);

  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: MouseEvent) => {
    if (!containerRef.current) return;

    const rect = containerRef.current.getBoundingClientRect();

    setPosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  useEffect(() => {
    if (!animate) return;
    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, [animate]);

  return (
    <div
      ref={containerRef}
      className={cn(
        "relative h-full w-full overflow-hidden rounded-[inherit]",
        containerClassName
      )}
    >
      <div
        className={cn(
          "pointer-events-none absolute inset-0 transition duration-300 bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-pink-500/20",
          className
        )}
        style={{
          maskImage: `radial-gradient(circle at ${position.x}px ${position.y}px, black, transparent 40%)`,
          WebkitMaskImage: `radial-gradient(circle at ${position.x}px ${position.y}px, black, transparent 40%)`,
        }}
      />
      {children}
    </div>
  );
};

