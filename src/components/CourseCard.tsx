
import { useState } from "react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { BookOpen, Clock, Award, AlertCircle, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { toast } from "sonner";

interface CourseCardProps {
  id: string;
  title: string;
  description: string;
  image: string;
  duration: number;
  lessonsCount: number;
  progress?: number;
  category: string;
}

const CourseCard = ({
  id,
  title,
  description,
  image,
  duration,
  lessonsCount,
  progress = 0,
  category,
}: CourseCardProps) => {
  const [imageError, setImageError] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  
  const handleImageError = () => {
    setImageError(true);
    toast.error("Course image could not be loaded", {
      description: "Using placeholder image instead"
    });
  };
  
  const getPlaceholderImage = () => {
    const placeholders = [
      "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1649972904349-6e44c42644a7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    ];
    
    // Use the course ID to select a consistent placeholder
    const placeholderIndex = parseInt(id, 10) % placeholders.length;
    return placeholders[placeholderIndex] || placeholders[0];
  };

  const progressStatus = () => {
    if (progress === 100) {
      return (
        <div className="flex items-center text-green-600 text-sm mt-2">
          <CheckCircle className="h-4 w-4 mr-1" />
          <span>Completed</span>
        </div>
      );
    } else if (progress > 0) {
      return (
        <div className="space-y-1 mt-2">
          <div className="flex items-center justify-between text-sm">
            <span className="text-gray-600">Progress</span>
            <span className="font-medium">{progress}%</span>
          </div>
          <Progress value={progress} className="h-2" />
        </div>
      );
    }
    return null;
  };

  return (
    <Card 
      className="overflow-hidden transition-all duration-300 hover:shadow-lg border-gray-200 h-full flex flex-col"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="aspect-video relative overflow-hidden">
        {imageError ? (
          <div className="relative">
            <img
              src={getPlaceholderImage()}
              alt={title}
              className="object-cover w-full h-full transition-transform duration-300 hover:scale-105"
            />
            <div className="absolute bottom-0 right-0 bg-amber-100 p-1 text-xs text-amber-800 rounded-tl-md">
              <AlertCircle className="h-3 w-3 inline mr-1" />
              Placeholder
            </div>
          </div>
        ) : (
          <img
            src={image}
            alt={title}
            className={`object-cover w-full h-full transition-transform duration-300 ${isHovered ? 'scale-105' : ''}`}
            onError={handleImageError}
          />
        )}
        <div className="absolute top-3 left-3">
          <span className={`px-2 py-1 text-xs font-medium rounded-full ${
            category === 'Essential' ? 'bg-fire-100 text-fire-700' : 'bg-navy-100 text-navy-700'
          }`}>
            {category}
          </span>
        </div>
      </div>
      <CardHeader className="p-4">
        <CardTitle className="text-xl font-heading">
          <Link to={`/courses/${id}`} className="hover:text-fire-600 transition-colors">
            {title}
          </Link>
        </CardTitle>
        <CardDescription className="line-clamp-2">{description}</CardDescription>
      </CardHeader>
      <CardContent className="p-4 pt-0 flex-grow">
        <div className="flex items-center justify-between text-sm text-gray-600 mb-3">
          <div className="flex items-center">
            <Clock className="h-4 w-4 mr-1" />
            <span>{duration} mins</span>
          </div>
          <div className="flex items-center">
            <BookOpen className="h-4 w-4 mr-1" />
            <span>{lessonsCount} lessons</span>
          </div>
        </div>
        {progressStatus()}
      </CardContent>
      <CardFooter className="p-4 pt-0">
        <Button asChild className="w-full bg-fire-500 hover:bg-fire-600">
          <Link to={`/courses/${id}`}>
            {progress === 100 ? 'Review Course' : progress > 0 ? 'Continue Course' : 'Start Course'}
          </Link>
        </Button>
      </CardFooter>
    </Card>
  );
};

export default CourseCard;
