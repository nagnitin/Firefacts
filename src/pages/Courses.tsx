
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CourseCard from "@/components/CourseCard";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import { useState } from "react";
import { Search, BookOpen, BookMarked } from "lucide-react";

const courses = [
  {
    id: '1',
    title: 'Fire Safety Basics',
    description: 'Learn the fundamentals of fire safety in hotel environments, including prevention, detection, and initial response strategies.',
    image: 'https://images.unsplash.com/photo-1587491439149-bd2ff295d450?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    duration: 45,
    lessonsCount: 5,
    progress: 75,
    category: 'Essential',
  },
  {
    id: '2',
    title: 'Emergency Evacuation Procedures',
    description: 'Master the protocols for safe and efficient building evacuation during fire emergencies.',
    image: 'https://images.unsplash.com/photo-1582139329536-e7284fece509?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    duration: 60,
    lessonsCount: 7,
    progress: 30,
    category: 'Essential',
  },
  {
    id: '3',
    title: 'Fire Extinguisher Operation',
    description: 'Hands-on training for proper fire extinguisher selection and operation techniques.',
    image: 'https://images.unsplash.com/photo-1569242840510-5254d83b77ea?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    duration: 30,
    lessonsCount: 4,
    progress: 0,
    category: 'Advanced',
  },
  {
    id: '4',
    title: 'Hotel-Specific Fire Risks',
    description: 'Identify and mitigate unique fire hazards common in hotel and hospitality environments.',
    image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    duration: 50,
    lessonsCount: 6,
    progress: 0,
    category: 'Advanced',
  },
  {
    id: '5',
    title: 'Communication During Emergencies',
    description: 'Learn effective communication strategies to ensure guest safety during fire incidents.',
    image: 'https://images.unsplash.com/photo-1577563908411-5077b6dc7624?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    duration: 35,
    lessonsCount: 4,
    progress: 100,
    category: 'Essential',
  },
  {
    id: '6',
    title: 'Fire Alarm Systems',
    description: 'Understand hotel fire alarm systems, components, and proper response to different alarm types.',
    image: 'https://images.unsplash.com/photo-1617973093508-78d62da6c826?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    duration: 55,
    lessonsCount: 6,
    progress: 20,
    category: 'Advanced',
  },
];

const Courses = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [categoryFilter, setCategoryFilter] = useState('');
  const [progressFilter, setProgressFilter] = useState('');
  
  // Filter courses based on search and filters
  const filteredCourses = courses.filter(course => {
    const matchesSearch = course.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                         course.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = categoryFilter === '' || course.category === categoryFilter;
    const matchesProgress = progressFilter === '' ||
                          (progressFilter === 'completed' && course.progress === 100) ||
                          (progressFilter === 'in-progress' && course.progress > 0 && course.progress < 100) ||
                          (progressFilter === 'not-started' && course.progress === 0);
    return matchesSearch && matchesCategory && matchesProgress;
  });
  
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="mb-12">
            <h1 className="font-heading text-4xl font-bold text-gray-900 mb-4">
              Fire Safety Courses
            </h1>
            <p className="text-gray-600 max-w-3xl">
              Enhance your fire safety knowledge with our comprehensive training modules.
              Each course is designed to equip hotel staff with essential skills for preventing and 
              responding to fire emergencies.
            </p>
          </div>
          
          {/* Search and Filters */}
          <div className="bg-white p-6 rounded-lg shadow-sm mb-8">
            <div className="flex flex-col space-y-4">
              <div className="relative">
                <Search className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                <Input 
                  className="pl-10" 
                  placeholder="Search courses..." 
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
              
              <div className="flex flex-col md:flex-row gap-4">
                <div>
                  <p className="text-sm font-medium mb-2 text-gray-700">Category</p>
                  <ToggleGroup type="single" value={categoryFilter} onValueChange={setCategoryFilter}>
                    <ToggleGroupItem value="" className="text-gray-700">All</ToggleGroupItem>
                    <ToggleGroupItem value="Essential" className="text-fire-700">Essential</ToggleGroupItem>
                    <ToggleGroupItem value="Advanced" className="text-navy-700">Advanced</ToggleGroupItem>
                  </ToggleGroup>
                </div>
                
                <div className="md:ml-auto">
                  <p className="text-sm font-medium mb-2 text-gray-700">Progress</p>
                  <ToggleGroup type="single" value={progressFilter} onValueChange={setProgressFilter}>
                    <ToggleGroupItem value="" className="text-gray-700">All</ToggleGroupItem>
                    <ToggleGroupItem value="not-started" className="text-gray-700">Not Started</ToggleGroupItem>
                    <ToggleGroupItem value="in-progress" className="text-amber-700">In Progress</ToggleGroupItem>
                    <ToggleGroupItem value="completed" className="text-green-700">Completed</ToggleGroupItem>
                  </ToggleGroup>
                </div>
              </div>
            </div>
          </div>
          
          {/* Courses Grid */}
          {filteredCourses.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredCourses.map((course) => (
                <CourseCard key={course.id} {...course} />
              ))}
            </div>
          ) : (
            <div className="text-center py-10">
              <BookOpen className="h-12 w-12 text-gray-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-700 mb-2">No Courses Found</h3>
              <p className="text-gray-600 mb-4">We couldn't find any courses matching your filters.</p>
              <Button 
                variant="outline" 
                onClick={() => {
                  setSearchTerm('');
                  setCategoryFilter('');
                  setProgressFilter('');
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

export default Courses;
