
import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AiExplainer from "@/components/AiExplainer";
import { Flame, Clock, ArrowLeft, CheckCircle2, XCircle } from "lucide-react";

// Define question types
interface Question {
  id: string;
  text: string;
  options: string[];
  correctAnswer: number;
  explanation: string;
}

// Mock quiz data - in a real app this would come from an API
const quizData = {
  '1': {
    title: 'Fire Prevention Fundamentals',
    description: 'Test your knowledge of basic fire prevention principles in hotel settings.',
    timeLimit: 15,
    questions: [
      {
        id: '1-1',
        text: 'What should be your first action when discovering a small, contained fire?',
        options: [
          'Call for help immediately',
          'Assess if you can safely extinguish it',
          'Evacuate the building',
          'Open windows to release smoke'
        ],
        correctAnswer: 1,
        explanation: 'You should first quickly assess if the fire is small and contained enough to be safely extinguished with available equipment. If not, proceed to evacuation protocols.'
      },
      {
        id: '1-2',
        text: 'How often should fire extinguishers be inspected in hotel settings?',
        options: [
          'Once a year',
          'Every six months',
          'Monthly',
          'Weekly'
        ],
        correctAnswer: 2,
        explanation: 'Fire extinguishers should be visually inspected monthly to ensure they are in proper working condition, with professional maintenance performed annually.'
      },
      {
        id: '1-3',
        text: 'Which of these is NOT a common cause of hotel fires?',
        options: [
          'Cooking equipment',
          'Electrical issues',
          'Smoking materials',
          'Proper storage of flammable materials'
        ],
        correctAnswer: 3,
        explanation: 'Proper storage of flammable materials is a preventive measure, not a cause of fires. The other options are common causes of hotel fires.'
      },
      {
        id: '1-4',
        text: 'What does the P.A.S.S. method refer to?',
        options: [
          'Procedures for Assessing Safety Situations',
          'Proper fire extinguisher usage technique',
          'Protocol for Alerting Security Staff',
          'Preventative Actions for Safety Systems'
        ],
        correctAnswer: 1,
        explanation: 'P.A.S.S. stands for Pull, Aim, Squeeze, and Sweep - the proper technique for using a fire extinguisher.'
      },
      {
        id: '1-5',
        text: 'What is the recommended minimum distance to keep flammable materials away from heat sources?',
        options: [
          '1 foot',
          '2 feet',
          '3 feet',
          '5 feet'
        ],
        correctAnswer: 2,
        explanation: 'The general recommendation is to keep flammable materials at least 3 feet away from heat sources like heaters, stoves, and electrical equipment.'
      }
    ]
  },
  '2': {
    title: 'Emergency Response Protocols',
    description: 'Evaluate your understanding of proper emergency response procedures during fire incidents.',
    timeLimit: 20,
    questions: [
      {
        id: '2-1',
        text: 'What should hotel staff do first when the fire alarm sounds?',
        options: [
          'Call the fire department',
          'Begin evacuating guests',
          'Check the alarm panel to identify the location',
          'Attempt to silence the alarm'
        ],
        correctAnswer: 2,
        explanation: 'The first step should be to check the alarm panel to identify the location of the potential fire, then initiate the appropriate emergency response.'
      },
      {
        id: '2-2',
        text: 'When evacuating guests during a fire emergency, hotel staff should:',
        options: [
          'Direct guests to use elevators for quickest evacuation',
          'Keep guest room doors open to improve visibility',
          'Direct guests toward the nearest fire exit stairwell',
          'Gather all guests in the hotel lobby'
        ],
        correctAnswer: 2,
        explanation: 'During a fire emergency, guests should be directed to the nearest fire exit stairwell. Elevators should never be used, and doors should be kept closed to prevent fire spread.'
      },
      {
        id: '2-3',
        text: 'Which of the following is NOT a responsibility of the designated fire warden?',
        options: [
          'Conducting a sweep of their assigned area',
          'Personally extinguishing fires',
          'Assisting guests with mobility issues',
          'Reporting to the assembly point after evacuation'
        ],
        correctAnswer: 1,
        explanation: 'Fire wardens are not responsible for personally extinguishing fires. Their primary duties include guiding evacuation, conducting sweeps, assisting those with mobility issues, and reporting to assembly points.'
      },
      {
        id: '2-4',
        text: 'What information should be provided to emergency responders when they arrive?',
        options: [
          'The hotel\'s occupancy rate',
          'Names of all guests currently checked in',
          'Location of the fire, missing persons, and building layout',
          'A list of hotel valuables to be protected'
        ],
        correctAnswer: 2,
        explanation: 'The most critical information for emergency responders is the location of the fire, anyone unaccounted for, and the building layout to aid their response efforts.'
      },
      {
        id: '2-5',
        text: 'How should staff handle a situation where a guest refuses to evacuate?',
        options: [
          'Physically remove them from the building',
          'Ignore them and continue helping others',
          'Note their room number and inform emergency responders',
          'Stay with them until the all-clear is given'
        ],
        correctAnswer: 2,
        explanation: 'If a guest refuses to evacuate, staff should note their room number and immediately inform emergency responders upon their arrival. Staff should not endanger themselves by staying behind.'
      }
    ]
  },
  '3': {
    title: 'Fire Equipment Mastery',
    description: 'Challenge your knowledge about different fire fighting equipment and their proper usage.',
    timeLimit: 18,
    questions: [
      {
        id: '3-1',
        text: 'Which type of fire extinguisher should be used for electrical fires?',
        options: [
          'Class A (Water)',
          'Class B (CO2)',
          'Class C (Dry Chemical)',
          'Class K (Wet Chemical)'
        ],
        correctAnswer: 2,
        explanation: 'Class C fire extinguishers are designed for electrical fires. They use non-conductive agents to suppress the fire without conducting electricity back to the user.'
      },
      {
        id: '3-2',
        text: 'What does a fire blanket primarily do?',
        options: [
          'Absorbs smoke to improve visibility',
          'Smothers small fires by cutting off oxygen',
          'Cools burning surfaces with embedded chemicals',
          'Protects furniture from water damage'
        ],
        correctAnswer: 1,
        explanation: 'Fire blankets are designed to smother small fires by cutting off their oxygen supply, especially effective for small kitchen fires or clothing fires.'
      },
      {
        id: '3-3',
        text: 'How should a fire hose be unrolled for use?',
        options: [
          'In a circular motion away from the valve',
          'By throwing the entire hose at once',
          'By zigzagging it back and forth',
          'From the nozzle end toward the valve'
        ],
        correctAnswer: 0,
        explanation: 'A fire hose should be unrolled in a circular motion starting from the valve end to prevent kinking and ensure proper water flow when activated.'
      },
      {
        id: '3-4',
        text: 'What is the primary purpose of a fire damper in HVAC systems?',
        options: [
          'To increase airflow during a fire',
          'To prevent spread of fire through ducts',
          'To release suppression chemicals',
          'To sound an alarm when smoke is detected'
        ],
        correctAnswer: 1,
        explanation: 'Fire dampers are designed to close automatically during a fire to prevent the spread of fire and smoke through the HVAC ductwork system.'
      },
      {
        id: '3-5',
        text: 'What information is typically found on the inspection tag of a fire extinguisher?',
        options: [
          'Manufacturer warranty details',
          'Chemical composition of the extinguishing agent',
          'Maintenance history and next inspection date',
          'Instructions for refilling'
        ],
        correctAnswer: 2,
        explanation: 'Fire extinguisher inspection tags display the maintenance history, last inspection date, and the date when the next inspection is due to ensure the extinguisher remains in proper working condition.'
      }
    ]
  }
};

const Quiz = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { toast } = useToast();
  
  // Get quiz data based on ID
  const quiz = id ? quizData[id as keyof typeof quizData] : null;
  
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [showExplanation, setShowExplanation] = useState(false);
  const [score, setScore] = useState(0);
  const [answers, setAnswers] = useState<{ questionId: string, selected: number, correct: boolean }[]>([]);
  const [timeLeft, setTimeLeft] = useState(quiz?.timeLimit ? quiz.timeLimit * 60 : 0);
  const [quizCompleted, setQuizCompleted] = useState(false);
  
  useEffect(() => {
    // Redirect if quiz not found
    if (!quiz && id) {
      toast({
        title: "Quiz not found",
        description: "The requested quiz could not be found",
        variant: "destructive",
      });
      navigate("/");
      return;
    }

    // Initialize timer
    if (quiz && !quizCompleted) {
      const timer = setInterval(() => {
        setTimeLeft((prev) => {
          if (prev <= 1) {
            clearInterval(timer);
            if (!quizCompleted) {
              // Auto-submit if time runs out
              setQuizCompleted(true);
              toast({
                title: "Time's up!",
                description: "Your quiz has been automatically submitted",
                variant: "destructive",
              });
            }
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
      
      return () => clearInterval(timer);
    }
  }, [id, quiz, quizCompleted, navigate, toast]);
  
  if (!quiz) {
    return <div>Loading...</div>;
  }
  
  const currentQuestion = quiz.questions[currentQuestionIndex];
  const progress = ((currentQuestionIndex + 1) / quiz.questions.length) * 100;
  
  const formatTime = (seconds: number) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes}:${remainingSeconds < 10 ? '0' : ''}${remainingSeconds}`;
  };
  
  const handleAnswer = (optionIndex: number) => {
    setSelectedAnswer(optionIndex);
  };
  
  const checkAnswer = () => {
    if (selectedAnswer === null) {
      toast({
        title: "Please select an answer",
        description: "You must select an answer before submitting",
        variant: "destructive",
      });
      return;
    }
    
    const isCorrect = selectedAnswer === currentQuestion.correctAnswer;
    if (isCorrect) {
      setScore(score + 1);
    }
    
    setAnswers([...answers, {
      questionId: currentQuestion.id,
      selected: selectedAnswer,
      correct: isCorrect
    }]);
    
    setShowExplanation(true);
  };
  
  const nextQuestion = () => {
    setSelectedAnswer(null);
    setShowExplanation(false);
    
    if (currentQuestionIndex < quiz.questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      // Quiz completed
      setQuizCompleted(true);
      const finalScore = Math.round((score + (showExplanation && selectedAnswer === currentQuestion.correctAnswer ? 1 : 0)) / quiz.questions.length * 100);
      
      toast({
        title: "Quiz Completed!",
        description: `Your final score is ${finalScore}%`,
      });
    }
  };
  
  const restartQuiz = () => {
    setCurrentQuestionIndex(0);
    setSelectedAnswer(null);
    setShowExplanation(false);
    setScore(0);
    setAnswers([]);
    setQuizCompleted(false);
    setTimeLeft(quiz.timeLimit * 60);
  };
  
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="mb-8">
            <Button 
              variant="ghost" 
              className="mb-4 flex items-center text-gray-700"
              onClick={() => navigate(-1)}
            >
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back
            </Button>
            
            <h1 className="font-heading text-3xl font-bold text-gray-900 mb-2">{quiz.title}</h1>
            <p className="text-gray-600 mb-6">{quiz.description}</p>
            
            {!quizCompleted ? (
              <div className="flex flex-col md:flex-row md:items-center justify-between mb-6">
                <div className="flex items-center mb-4 md:mb-0">
                  <div className="w-full max-w-md">
                    <div className="flex justify-between text-sm text-gray-600 mb-1">
                      <span>Question {currentQuestionIndex + 1} of {quiz.questions.length}</span>
                      <span>{Math.round(progress)}%</span>
                    </div>
                    <Progress value={progress} className="h-2" />
                  </div>
                </div>
                
                <div className="flex items-center">
                  <Clock className="h-5 w-5 text-fire-500 mr-2" />
                  <span className={`font-medium ${timeLeft < 60 ? 'text-fire-600 animate-pulse' : 'text-gray-700'}`}>
                    Time remaining: {formatTime(timeLeft)}
                  </span>
                </div>
              </div>
            ) : null}
          </div>
          
          {!quizCompleted ? (
            <Card className="mb-8">
              <CardContent className="p-6">
                {/* Question */}
                <div className="mb-6">
                  <h2 className="text-xl font-semibold mb-4">{currentQuestion.text}</h2>
                  
                  <RadioGroup value={selectedAnswer?.toString()} onValueChange={(value) => handleAnswer(parseInt(value))}>
                    <div className="space-y-3">
                      {currentQuestion.options.map((option, index) => (
                        <div
                          key={index}
                          className={`flex items-center space-x-2 border rounded-lg p-4 transition-colors ${
                            showExplanation && index === currentQuestion.correctAnswer
                              ? 'bg-green-50 border-green-200'
                              : showExplanation && index === selectedAnswer && index !== currentQuestion.correctAnswer
                              ? 'bg-red-50 border-red-200'
                              : selectedAnswer === index && !showExplanation
                              ? 'bg-gray-100 border-gray-300'
                              : 'border-gray-200 hover:bg-gray-50'
                          }`}
                        >
                          <RadioGroupItem value={index.toString()} id={`option-${index}`} disabled={showExplanation} />
                          <Label 
                            htmlFor={`option-${index}`}
                            className="flex-grow cursor-pointer py-1"
                          >
                            {option}
                          </Label>
                          
                          {showExplanation && index === currentQuestion.correctAnswer && (
                            <CheckCircle2 className="h-5 w-5 text-green-500" />
                          )}
                          
                          {showExplanation && index === selectedAnswer && index !== currentQuestion.correctAnswer && (
                            <XCircle className="h-5 w-5 text-red-500" />
                          )}
                        </div>
                      ))}
                    </div>
                  </RadioGroup>
                </div>
                
                {/* Explanation */}
                {showExplanation && (
                  <div className={`p-4 rounded-lg mb-6 ${
                    selectedAnswer === currentQuestion.correctAnswer 
                      ? 'bg-green-50 border border-green-200' 
                      : 'bg-red-50 border border-red-200'
                  }`}>
                    <h3 className={`font-medium mb-2 ${
                      selectedAnswer === currentQuestion.correctAnswer ? 'text-green-700' : 'text-red-700'
                    }`}>
                      {selectedAnswer === currentQuestion.correctAnswer ? 'Correct!' : 'Incorrect'}
                    </h3>
                    <p className="text-gray-700">{currentQuestion.explanation}</p>
                    
                    {/* AI Explainer Component */}
                    <AiExplainer 
                      questionText={currentQuestion.text}
                      answerText={currentQuestion.explanation}
                    />
                  </div>
                )}
                
                {/* Controls */}
                <div className="flex justify-end">
                  {!showExplanation ? (
                    <Button 
                      className="bg-fire-500 hover:bg-fire-600"
                      onClick={checkAnswer}
                      disabled={selectedAnswer === null}
                    >
                      Check Answer
                    </Button>
                  ) : (
                    <Button 
                      className="bg-navy-600 hover:bg-navy-700"
                      onClick={nextQuestion}
                    >
                      {currentQuestionIndex < quiz.questions.length - 1 ? 'Next Question' : 'Finish Quiz'}
                    </Button>
                  )}
                </div>
              </CardContent>
            </Card>
          ) : (
            <Card>
              <CardContent className="p-6">
                <div className="text-center py-6">
                  <div className="mb-6 inline-flex p-3 bg-fire-100 rounded-full">
                    <Flame className="h-12 w-12 text-fire-500" />
                  </div>
                  
                  <h2 className="text-2xl font-bold mb-2">Quiz Completed!</h2>
                  <p className="text-gray-600 mb-6">You've completed the {quiz.title} quiz.</p>
                  
                  <div className="mb-8 flex flex-col items-center">
                    <div className="text-4xl font-bold text-fire-600 mb-2">
                      {Math.round((score / quiz.questions.length) * 100)}%
                    </div>
                    <p className="text-gray-600">
                      You answered {score} out of {quiz.questions.length} questions correctly
                    </p>
                  </div>
                  
                  <div className="flex flex-col md:flex-row justify-center gap-4">
                    <Button 
                      className="bg-fire-500 hover:bg-fire-600"
                      onClick={restartQuiz}
                    >
                      Take Quiz Again
                    </Button>
                    
                    <Button 
                      variant="outline"
                      onClick={() => navigate('/quizzes')}
                    >
                      Back to Quizzes
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          )}
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Quiz;
