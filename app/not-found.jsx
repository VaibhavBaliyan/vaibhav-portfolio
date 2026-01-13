import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="text-center space-y-6">
        <h1 className="text-9xl font-bold text-outline">404</h1>
        <h2 className="text-4xl font-bold">Page Not Found</h2>
        <p className="text-white/60 max-w-md">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <Link href="/">
          <Button className="bg-accent hover:bg-accent/80 text-primary font-semibold">
            Back to Home
          </Button>
        </Link>
      </div>
    </div>
  );
}
