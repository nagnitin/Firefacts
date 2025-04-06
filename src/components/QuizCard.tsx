
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Clock, Calendar, Activity } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

interface QuizCardProps {
  id: string;
  title: string;
  description: string;
  questionCount: number;
  timeLimit: number;
  difficulty: 'Easy' | 'Medium' | 'Hard';
  lastUpdated: string;
  completed?: boolean;
  score?: number;
}

const difficultyColors = {
  Easy: 'bg-green-100 text-green-800 hover:bg-green-200',
  Medium: 'bg-amber-100 text-amber-800 hover:bg-amber-200',
  Hard: 'bg-fire-100 text-fire-800 hover:bg-fire-200',
};

const QuizCard = ({
  id,
  title,
  description,
  questionCount,
  timeLimit,
  difficulty,
  lastUpdated,
  completed = false,
  score,
}: QuizCardProps) => {
  return (
    <Card className="overflow-hidden transition-all duration-300 hover:shadow-lg border-gray-200 h-full flex flex-col">
      <CardHeader className="p-4 pb-0">
        <div className="flex justify-between items-start">
          <CardTitle className="text-xl font-heading">{title}</CardTitle>
          <Badge className={difficultyColors[difficulty]}>
            {difficulty}
          </Badge>
        </div>
        <CardDescription className="line-clamp-2 mt-2">{description}</CardDescription>
      </CardHeader>
      <CardContent className="p-4 flex-grow">
        <div className="flex flex-col space-y-3 text-sm text-gray-600">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <Activity className="h-4 w-4 mr-1 text-gray-500" />
              <span>{questionCount} questions</span>
            </div>
            <div className="flex items-center">
              <Clock className="h-4 w-4 mr-1 text-gray-500" />
              <span>{timeLimit} minutes</span>
            </div>
          </div>
          <div className="flex items-center">
            <Calendar className="h-4 w-4 mr-1 text-gray-500" />
            <span>Updated {lastUpdated}</span>
          </div>
          {completed && (
            <div className="bg-gray-50 rounded-lg p-3 mt-2">
              <div className="flex justify-between items-center">
                <span className="font-medium text-gray-700">Your score</span>
                <span className={`font-bold ${
                  (score || 0) >= 80 ? 'text-green-600' : (score || 0) >= 60 ? 'text-amber-600' : 'text-fire-600'
                }`}>
                  {score}%
                </span>
              </div>
            </div>
          )}
        </div>
      </CardContent>
      <CardFooter className="p-4 pt-0">
        <Button asChild className={`w-full ${completed ? 'bg-navy-600 hover:bg-navy-700' : 'bg-fire-500 hover:bg-fire-600'}`}>
          <Link to={`/quizzes/${id}`}>
            {completed ? 'Retry Quiz' : 'Start Quiz'}
          </Link>
        </Button>
      </CardFooter>
    </Card>
  );
};

export default QuizCard;
