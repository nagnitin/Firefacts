
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import QuizCard from "@/components/QuizCard";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { Search, Filter } from "lucide-react";

const quizzes = [
  {
    id: '1',
    title: 'Fire Prevention Fundamentals',
    description: 'Test your knowledge of basic fire prevention principles in hotel settings.',
    questionCount: 10,
    timeLimit: 15,
    difficulty: 'Easy' as const,
    lastUpdated: 'Apr 1, 2025',
    completed: true,
    score: 85,
  },
  {
    id: '2',
    title: 'Emergency Response Protocols',
    description: 'Evaluate your understanding of proper emergency response procedures during fire incidents.',
    questionCount: 15,
    timeLimit: 20,
    difficulty: 'Medium' as const,
    lastUpdated: 'Mar 28, 2025',
    completed: false,
  },
  {
    id: '3',
    title: 'Fire Equipment Mastery',
    description: 'Challenge your knowledge about different fire fighting equipment and their proper usage.',
    questionCount: 12,
    timeLimit: 18,
    difficulty: 'Hard' as const,
    lastUpdated: 'Mar 15, 2025',
    completed: false,
  },
  {
    id: '4',
    title: 'Hotel Evacuation Procedures',
    description: 'Learn the critical steps for safely evacuating a hotel during a fire emergency.',
    questionCount: 8,
    timeLimit: 12,
    difficulty: 'Medium' as const,
    lastUpdated: 'Mar 10, 2025',
    completed: false,
  },
  {
    id: '5',
    title: 'Fire Safety Communications',
    description: 'Understand how to effectively communicate during fire emergencies to ensure guest safety.',
    questionCount: 10,
    timeLimit: 15,
    difficulty: 'Easy' as const,
    lastUpdated: 'Feb 28, 2025',
    completed: true,
    score: 90,
  },
  {
    id: '6',
    title: 'Advanced Fire Prevention',
    description: 'Deepen your knowledge of complex fire prevention systems and strategies for large hotels.',
    questionCount: 18,
    timeLimit: 25,
    difficulty: 'Hard' as const,
    lastUpdated: 'Feb 15, 2025',
    completed: true,
    score: 78,
  },
];

const Quizzes = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filterDifficulty, setFilterDifficulty] = useState<string>('');
  
  // Filter quizzes based on search and filter
  const filteredQuizzes = quizzes.filter(quiz => {
    const matchesSearch = quiz.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                         quiz.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesDifficulty = filterDifficulty === '' || quiz.difficulty === filterDifficulty;
    return matchesSearch && matchesDifficulty;
  });
  
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="mb-12">
            <h1 className="font-heading text-4xl font-bold text-gray-900 mb-4">
              Fire Safety Quizzes
            </h1>
            <p className="text-gray-600 max-w-3xl">
              Test your knowledge with our interactive fire safety quizzes. Each quiz focuses on different aspects of hotel fire
              safety protocols and emergency procedures.
            </p>
          </div>
          
          {/* Search and Filters */}
          <div className="bg-white p-6 rounded-lg shadow-sm mb-8">
            <div className="flex flex-col md:flex-row gap-4">
              <div className="relative flex-grow">
                <Search className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                <Input 
                  className="pl-10" 
                  placeholder="Search quizzes..." 
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
              
              <div className="flex gap-2">
                <Button 
                  variant={filterDifficulty === '' ? "default" : "outline"}
                  className={filterDifficulty === '' ? "bg-fire-500 hover:bg-fire-600" : ""}
                  onClick={() => setFilterDifficulty('')}
                >
                  All
                </Button>
                <Button 
                  variant={filterDifficulty === 'Easy' ? "default" : "outline"}
                  className={filterDifficulty === 'Easy' ? "bg-green-600 hover:bg-green-700" : ""}
                  onClick={() => setFilterDifficulty('Easy')}
                >
                  Easy
                </Button>
                <Button 
                  variant={filterDifficulty === 'Medium' ? "default" : "outline"}
                  className={filterDifficulty === 'Medium' ? "bg-amber-600 hover:bg-amber-700" : ""}
                  onClick={() => setFilterDifficulty('Medium')}
                >
                  Medium
                </Button>
                <Button 
                  variant={filterDifficulty === 'Hard' ? "default" : "outline"}
                  className={filterDifficulty === 'Hard' ? "bg-fire-600 hover:bg-fire-700" : ""}
                  onClick={() => setFilterDifficulty('Hard')}
                >
                  Hard
                </Button>
              </div>
            </div>
          </div>
          
          {/* Quizzes Grid */}
          {filteredQuizzes.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredQuizzes.map((quiz) => (
                <QuizCard key={quiz.id} {...quiz} />
              ))}
            </div>
          ) : (
            <div className="text-center py-10">
              <Filter className="h-12 w-12 text-gray-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-700 mb-2">No Quizzes Found</h3>
              <p className="text-gray-600 mb-4">We couldn't find any quizzes matching your search criteria.</p>
              <Button 
                variant="outline" 
                onClick={() => {
                  setSearchTerm('');
                  setFilterDifficulty('');
                }}
              >
                Clear Filters
              </Button>
            </div>
          )}
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Quizzes;
