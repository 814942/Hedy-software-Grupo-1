"use client";
import { useEffect, useState } from "react";
import { SpinnerCircular } from "spinners-react";

export default function Loading() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  return (
    isLoading && (
      <div className="flex flex-col items-center justify-center min-h-screen bg-black">
        <SpinnerCircular
          color="#FFFFFF"
          secondaryColor="#4A5568"
          size={100}
          thickness={120}
          className="animate-pulse"
        />
      </div>
    )
  );
}
