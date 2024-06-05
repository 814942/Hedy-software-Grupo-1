"use client";
import { useEffect, useState } from "react";
import { SpinnerCircular } from "spinners-react";

export default function Loading() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return (
    isLoading && (
      <div className="flex flex-col items-center justify-center min-h-screen bg-transparent">
        <h2 className="mb-4 text-4xl font-bold text-white animate-pulse">
          LOADING
        </h2>
        <SpinnerCircular
          color="#FFFFFF"
          secondaryColor="#4A5568"
          size={60}
          thickness={120}
        />
      </div>
    )
  );
}
