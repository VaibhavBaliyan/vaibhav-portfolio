"use client";

import { useEffect } from "react";
import { Button } from "@/components/ui/button";

export default function Error({ error, reset }) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="text-center space-y-6">
        <h1 className="text-6xl font-bold text-accent">Oops!</h1>
        <h2 className="text-2xl font-semibold">Something went wrong</h2>
        <p className="text-white/60 max-w-md">
          We encountered an unexpected error. Don't worry, it's not your fault.
        </p>
        <div className="flex gap-4 justify-center">
          <Button onClick={reset} variant="outline">
            Try Again
          </Button>
          <Button
            onClick={() => (window.location.href = "/")}
            className="bg-accent hover:bg-accent/80 text-primary"
          >
            Go Home
          </Button>
        </div>
      </div>
    </div>
  );
}
