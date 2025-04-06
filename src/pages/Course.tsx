
import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useToast } from "@/hooks/use-toast";
import { ArrowLeft, Clock, BookOpen, CheckCircle, PlayCircle, LockKeyholeIcon, Download, Award } from "lucide-react";

// Mock course data - in a real app this would come from an API
const coursesData = {
  '1': {
    title: 'Fire Safety Basics',
    description: 'Learn the fundamentals of fire safety in hotel environments, including prevention, detection, and initial response strategies.',
    image: 'https://images.unsplash.com/photo-1587491439149-bd2ff295d450?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    duration: 45,
    lessonsCount: 5,
    progress: 75,
    category: 'Essential',
    instructor: 'Sarah Johnson',
    instructorRole: 'Fire Safety Specialist',
    overview: 'This course covers the essential aspects of fire safety that every hotel employee should know. You will learn about fire prevention, early detection methods, and how to respond correctly in the critical first minutes of a fire emergency. The material is presented through a combination of videos, interactive elements, and practical scenario exercises.',
    modules: [
      {
        id: 'm1',
        title: 'Understanding Fire Risks',
        description: 'Learn about common causes of hotel fires and how to identify potential hazards.',
        duration: 10,
        completed: true,
        lessons: [
          {
            id: 'l1',
            title: 'Common Fire Causes in Hotels',
            duration: 5,
            type: 'video',
            completed: true
          },
          {
            id: 'l2',
            title: 'Fire Hazard Identification',
            duration: 5,
            type: 'interactive',
            completed: true
          }
        ]
      },
      {
        id: 'm2',
        title: 'Prevention Strategies',
        description: 'Discover proactive measures to prevent fires in hotel environments.',
        duration: 12,
        completed: true,
        lessons: [
          {
            id: 'l3',
            title: 'Daily Prevention Practices',
            duration: 6,
            type: 'video',
            completed: true
          },
          {
            id: 'l4',
            title: 'Maintaining Fire Prevention Systems',
            duration: 6,
            type: 'document',
            completed: true
          }
        ]
      },
      {
        id: 'm3',
        title: 'Early Detection Methods',
        description: 'Learn about fire detection systems and how to recognize early warning signs.',
        duration: 8,
        completed: true,
        lessons: [
          {
            id: 'l5',
            title: 'Fire Alarm Systems Overview',
            duration: 4,
            type: 'video',
            completed: true
          },
          {
            id: 'l6',
            title: 'Recognizing Signs of Fire',
            duration: 4,
            type: 'quiz',
            completed: true
          }
        ]
      },
      {
        id: 'm4',
        title: 'Initial Response Procedures',
        description: 'Master the crucial first steps when responding to a fire emergency.',
        duration: 15,
        completed: false,
        lessons: [
          {
            id: 'l7',
            title: 'First Response Protocol',
            duration: 5,
            type: 'video',
            completed: true
          },
          {
            id: 'l8',
            title: 'Using Fire Extinguishers',
            duration: 5,
            type: 'interactive',
            completed: true
          },
          {
            id: 'l9',
            title: 'Emergency Communication',
            duration: 5,
            type: 'simulation',
            completed: false
          }
        ]
      },
      {
        id: 'm5',
        title: 'Final Assessment',
        description: 'Test your knowledge of fire safety basics with a comprehensive assessment.',
        duration: 10,
        completed: false,
        lessons: [
          {
            id: 'l10',
            title: 'Comprehensive Fire Safety Assessment',
            duration: 10,
            type: 'exam',
            completed: false
          }
        ]
      }
    ]
  }
};

// Add more courses as needed

const Course = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { toast } = useToast();
  
  const [activeTab, setActiveTab] = useState('content');
  const [currentLessonId, setCurrentLessonId] = useState<string | null>(null);
  
  // Get course data based on ID
  const course = id ? coursesData[id as keyof typeof coursesData] : null;
  
  useEffect(() => {
    if (!course) {
      toast({
        title: "Course not found",
        description: "The requested course could not be found",
        variant: "destructive",
      });
      navigate("/courses");
    }
  }, [id, course, navigate, toast]);
  
  if (!course) {
    return <div>Loading...</div>;
  }
  
  // Calculate total lessons
  const totalLessons = course.modules.reduce((acc, module) => acc + module.lessons.length, 0);
  
  // Calculate completed lessons
  const completedLessons = course.modules.reduce((acc, module) => {
    return acc + module.lessons.filter(lesson => lesson.completed).length;
  }, 0);
  
  // Calculate overall progress
  const progress = Math.round((completedLessons / totalLessons) * 100);
  
  const handleLessonClick = (lessonId: string) => {
    setCurrentLessonId(lessonId);
    
    // In a real app, you'd load the lesson content
    // For now, we'll just show a toast
    toast({
      title: "Lesson Started",
      description: "You've started a new lesson",
    });
  };
  
  const handleDownloadCertificate = () => {
    // In a real app, you'd generate and download a certificate
    toast({
      title: "Certificate Download",
      description: "Your certificate would download here in a complete implementation",
    });
  };
  
  const getLessonTypeIcon = (type: string) => {
    switch (type) {
      case 'video':
        return <PlayCircle className="h-4 w-4" />;
      case 'document':
        return <BookOpen className="h-4 w-4" />;
      case 'quiz':
      case 'exam':
        return <CheckCircle className="h-4 w-4" />;
      case 'interactive':
      case 'simulation':
        return <PlayCircle className="h-4 w-4" />;
      default:
        return <PlayCircle className="h-4 w-4" />;
    }
  };
  
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow">
        {/* Course Header */}
        <div className="relative h-64 md:h-96 bg-cover bg-center" style={{ backgroundImage: `url(${course.image})` }}>
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black opacity-70"></div>
          <div className="container mx-auto px-4 h-full flex items-end pb-8 relative z-10">
            <div className="text-white">
              <Button 
                variant="outline" 
                className="mb-4 bg-black/20 border-white/20 text-white hover:bg-black/40"
                onClick={() => navigate("/courses")}
              >
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Courses
              </Button>
              <h1 className="font-heading text-3xl md:text-4xl font-bold mb-2">{course.title}</h1>
              <p className="text-white/80 max-w-2xl mb-4">{course.description}</p>
              <div className="flex flex-wrap gap-4 text-sm">
                <div className="flex items-center">
                  <Clock className="h-4 w-4 mr-1" />
                  <span>{course.duration} minutes</span>
                </div>
                <div className="flex items-center">
                  <BookOpen className="h-4 w-4 mr-1" />
                  <span>{totalLessons} lessons</span>
                </div>
                <div className="flex items-center">
                  <span className="px-2 py-1 rounded-full bg-fire-500 text-white text-xs font-medium">
                    {course.category}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Progress Bar */}
        <div className="bg-white border-b">
          <div className="container mx-auto px-4 py-4">
            <div className="flex flex-col md:flex-row md:items-center justify-between">
              <div className="flex items-center mb-4 md:mb-0">
                <div className="w-full md:max-w-md">
                  <div className="flex justify-between text-sm text-gray-600 mb-1">
                    <span>Course Progress</span>
                    <span>{progress}% Complete</span>
                  </div>
                  <Progress value={progress} className="h-2" />
                </div>
              </div>
              {progress === 100 ? (
                <Button onClick={handleDownloadCertificate} className="bg-green-600 hover:bg-green-700">
                  <Award className="mr-2 h-4 w-4" />
                  Download Certificate
                </Button>
              ) : (
                <div className="text-gray-600">
                  <span className="font-medium">{completedLessons}</span> of <span className="font-medium">{totalLessons}</span> lessons completed
                </div>
              )}
            </div>
          </div>
        </div>
        
        {/* Course Content */}
        <div className="container mx-auto px-4 py-8">
          <Tabs defaultValue="content" value={activeTab} onValueChange={setActiveTab}>
            <TabsList className="mb-8">
              <TabsTrigger value="content">Course Content</TabsTrigger>
              <TabsTrigger value="overview">Overview</TabsTrigger>
              <TabsTrigger value="instructor">Instructor</TabsTrigger>
            </TabsList>
            
            <TabsContent value="content">
              <div className="space-y-6">
                {course.modules.map((module, index) => (
                  <Card key={module.id} className={module.completed ? "border-green-200" : ""}>
                    <CardContent className="p-0">
                      <div className="p-6 border-b">
                        <div className="flex justify-between items-start">
                          <div>
                            <h3 className="text-xl font-semibold mb-2">
                              Module {index + 1}: {module.title}
                            </h3>
                            <p className="text-gray-600">{module.description}</p>
                          </div>
                          <div className="flex items-center ml-4">
                            <Clock className="h-4 w-4 text-gray-500 mr-1" />
                            <span className="text-sm text-gray-600">{module.duration} min</span>
                          </div>
                        </div>
                      </div>
                      
                      <div className="divide-y">
                        {module.lessons.map((lesson, lessonIndex) => (
                          <div 
                            key={lesson.id}
                            className={`p-4 flex justify-between items-center hover:bg-gray-50 cursor-pointer ${
                              currentLessonId === lesson.id ? 'bg-gray-50' : ''
                            }`}
                            onClick={() => handleLessonClick(lesson.id)}
                          >
                            <div className="flex items-center">
                              {lesson.completed ? (
                                <div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center mr-3">
                                  <CheckCircle className="h-5 w-5 text-green-600" />
                                </div>
                              ) : (
                                <div className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center mr-3">
                                  <span className="text-sm font-medium text-gray-700">{index + 1}.{lessonIndex + 1}</span>
                                </div>
                              )}
                              <div>
                                <p className="font-medium">{lesson.title}</p>
                                <div className="flex items-center text-sm text-gray-500 mt-1">
                                  {getLessonTypeIcon(lesson.type)}
                                  <span className="ml-1 capitalize">{lesson.type}</span>
                                  <span className="mx-2">•</span>
                                  <Clock className="h-3 w-3 mr-1" />
                                  <span>{lesson.duration} min</span>
                                </div>
                              </div>
                            </div>
                            
                            {!lesson.completed && index > 0 && !course.modules[index-1].completed && (
                              <LockKeyholeIcon className="h-5 w-5 text-gray-400" />
                            )}
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
            
            <TabsContent value="overview">
              <Card>
                <CardContent className="p-6">
                  <h2 className="text-2xl font-semibold mb-4">Course Overview</h2>
                  <p className="text-gray-700 mb-6">{course.overview}</p>
                  
                  <h3 className="text-xl font-semibold mb-3">What You'll Learn</h3>
                  <ul className="space-y-2 mb-6">
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                      <span>Identify common fire hazards in hotel environments</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                      <span>Implement preventative measures to reduce fire risks</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                      <span>Properly respond in the first critical minutes of a fire emergency</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                      <span>Understand hotel fire alarm systems and how to respond to different alerts</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                      <span>Communicate effectively with guests during fire emergencies</span>
                    </li>
                  </ul>
                  
                  <h3 className="text-xl font-semibold mb-3">Requirements</h3>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-fire-500 mr-2 mt-0.5 flex-shrink-0" />
                      <span>No prior knowledge required - suitable for all hotel staff</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-fire-500 mr-2 mt-0.5 flex-shrink-0" />
                      <span>Basic understanding of hotel operations is helpful but not necessary</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="instructor">
              <Card>
                <CardContent className="p-6">
                  <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
                    <div className="w-24 h-24 rounded-full bg-gray-200 flex-shrink-0 flex items-center justify-center text-2xl font-semibold text-gray-600">
                      {course.instructor.split(' ').map(name => name[0]).join('')}
                    </div>
                    <div>
                      <h2 className="text-2xl font-semibold mb-2">{course.instructor}</h2>
                      <p className="text-fire-600 font-medium mb-4">{course.instructorRole}</p>
                      <p className="text-gray-700 mb-6">
                        Sarah Johnson is a certified Fire Safety Specialist with over 15 years of experience
                        in the hospitality industry. She has developed and implemented fire safety training
                        programs for major hotel chains globally and is passionate about making fire safety
                        education accessible and engaging for all hotel employees.
                      </p>
                      <div className="space-y-3">
                        <div className="flex items-start">
                          <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                          <span>Certified Fire Protection Specialist (CFPS)</span>
                        </div>
                        <div className="flex items-start">
                          <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                          <span>Former Fire Safety Director for Marriott International</span>
                        </div>
                        <div className="flex items-start">
                          <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                          <span>Author of "Hotel Fire Safety: A Comprehensive Guide"</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Course;
