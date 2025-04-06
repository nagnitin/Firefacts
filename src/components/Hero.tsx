
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import heroImage from "../assets/hero-image.png";

const Hero = () => {
  return (
    <div className="bg-gradient-to-br from-fire-50 via-white to-navy-50 py-16 md:py-24">
      <div className="container mx-auto px-4 grid md:grid-cols-2 gap-8 items-center">
        <div className="space-y-6">
          <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
            Fire Safety <span className="text-fire-600">Training</span> That Saves Lives
          </h1>
          <p className="text-lg text-gray-700 max-w-lg">
            Interactive, gamified learning for hotel employees to master fire safety protocols with engaging quizzes and multimedia content.
          </p>
          <div className="flex flex-wrap gap-4 pt-4">
            <Button asChild className="bg-fire-500 hover:bg-fire-600 text-white px-6 py-6 text-lg rounded-xl">
              <Link to="/courses">
                Start Learning
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button asChild variant="outline" className="bg-white hover:bg-gray-50 text-gray-900 px-6 py-6 text-lg rounded-xl border-2">
              <Link to="/quizzes">
                Try a Quiz
              </Link>
            </Button>
          </div>
          <div className="flex items-center gap-4 pt-4">
            <div className="flex -space-x-2">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="w-10 h-10 rounded-full bg-gray-300 border-2 border-white flex items-center justify-center text-xs font-medium">
                  U{i}
                </div>
              ))}
            </div>
            <p className="text-gray-600">
              <span className="font-semibold">500+</span> staff trained this month
            </p>
          </div>
        </div>
        <div className="flex justify-center md:justify-end">
          <div className="relative">
            <div className="absolute -inset-1 bg-gradient-to-r from-fire-400 to-navy-400 rounded-2xl blur-xl opacity-30 animate-pulse"></div>
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
