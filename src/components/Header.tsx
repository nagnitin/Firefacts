
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Flame, Menu, X, Bell, User, BookOpen } from 'lucide-react';

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-200">
      <div className="container mx-auto px-4 flex justify-between items-center h-16">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2">
          <Flame className="h-6 w-6 text-fire-500 animate-flame" />
          <span className="font-heading font-bold text-xl text-gray-900">FireFacts</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6">
          <Link to="/" className="text-gray-700 hover:text-fire-600 font-medium">Home</Link>
          <Link to="/courses" className="text-gray-700 hover:text-fire-600 font-medium">Courses</Link>
          <Link to="/quizzes" className="text-gray-700 hover:text-fire-600 font-medium">Quizzes</Link>
          <Link to="/about" className="text-gray-700 hover:text-fire-600 font-medium">About</Link>
        </nav>

        {/* Action Buttons */}
        <div className="hidden md:flex items-center gap-3">
          <Button variant="ghost" size="icon" className="text-gray-700">
            <Bell className="h-5 w-5" />
          </Button>
          <Button variant="ghost" size="icon" className="text-gray-700">
            <BookOpen className="h-5 w-5" />
          </Button>
          <Button className="bg-fire-500 hover:bg-fire-600 text-white">
            <User className="h-4 w-4 mr-2" />
            Sign In
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <Button
          variant="ghost"
          size="icon"
          className="md:hidden"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </Button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-b border-gray-200 py-4 px-4 animate-slide-up">
          <nav className="flex flex-col space-y-4">
            <Link to="/" className="text-gray-700 hover:text-fire-600 font-medium py-2">Home</Link>
            <Link to="/courses" className="text-gray-700 hover:text-fire-600 font-medium py-2">Courses</Link>
            <Link to="/quizzes" className="text-gray-700 hover:text-fire-600 font-medium py-2">Quizzes</Link>
            <Link to="/about" className="text-gray-700 hover:text-fire-600 font-medium py-2">About</Link>
            <Button className="bg-fire-500 hover:bg-fire-600 text-white mt-2">
              <User className="h-4 w-4 mr-2" />
              Sign In
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
