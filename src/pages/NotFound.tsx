
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Flame, Home } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 px-4">
      <div className="text-center max-w-md">
        <div className="mb-8 flex justify-center">
          <div className="relative">
            <div className="absolute -inset-1 bg-gradient-to-r from-fire-400 to-fire-600 rounded-full blur-xl opacity-70 animate-pulse"></div>
            <Flame className="relative h-24 w-24 text-fire-500 animate-flame" />
          </div>
        </div>
        <h1 className="text-5xl font-heading font-bold text-gray-900 mb-4">404</h1>
        <p className="text-xl text-gray-600 mb-8">
          Oops! We couldn't find the page you're looking for. 
          It may have been moved or doesn't exist.
        </p>
        <Button asChild size="lg" className="bg-fire-500 hover:bg-fire-600">
          <Link to="/" className="inline-flex items-center">
            <Home className="mr-2 h-5 w-5" />
            Return to Home
          </Link>
        </Button>
        <p className="mt-8 text-gray-500">
          If you believe this page should exist, please contact our support team.
        </p>
      </div>
    </div>
  );
};

export default NotFound;
