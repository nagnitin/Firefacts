
import QuizCard from "./QuizCard";
import { Link } from "react-router-dom";

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
];

const QuizList = () => {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div>
            <h2 className="font-heading text-3xl font-bold text-gray-900 mb-4">
              Test Your Knowledge
            </h2>
            <p className="text-gray-600 max-w-2xl">
              Challenge yourself with our interactive quizzes to reinforce your fire safety training.
              Each quiz is timed to simulate the pressure of real emergency situations.
            </p>
          </div>
          <Link to="/quizzes" className="text-navy-600 font-medium mt-4 md:mt-0 hover:text-navy-700 flex items-center">
            View all quizzes
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4 ml-1">
              <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
            </svg>
          </Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {quizzes.map((quiz) => (
            <QuizCard key={quiz.id} {...quiz} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default QuizList;
