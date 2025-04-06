
import { useState, useEffect } from "react";
import CourseCard from "./CourseCard";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Search, Filter, X, BookOpen } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { toast } from "sonner";

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
];

const CourseList = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [showFilters, setShowFilters] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [selectedDuration, setSelectedDuration] = useState<string | null>(null);
  const [activeFiltersCount, setActiveFiltersCount] = useState(0);
  
  useEffect(() => {
    let count = 0;
    if (selectedCategory) count++;
    if (selectedDuration) count++;
    setActiveFiltersCount(count);
  }, [selectedCategory, selectedDuration]);
  
  const handleClearFilters = () => {
    setSelectedCategory(null);
    setSelectedDuration(null);
    toast.success("Filters cleared");
  };
  
  const filteredCourses = courses.filter(course => {
    const matchesSearch = 
      course.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      course.description.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesCategory = !selectedCategory || course.category === selectedCategory;
    
    const matchesDuration = !selectedDuration || 
      (selectedDuration === 'short' && course.duration <= 30) ||
      (selectedDuration === 'medium' && course.duration > 30 && course.duration <= 60) ||
      (selectedDuration === 'long' && course.duration > 60);
    
    return matchesSearch && matchesCategory && matchesDuration;
  });

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8">
          <div>
            <h2 className="font-heading text-3xl font-bold text-gray-900 mb-4">
              Popular Courses
            </h2>
            <p className="text-gray-600 max-w-2xl">
              Enhance your fire safety knowledge with our most popular training modules,
              designed specifically for hotel staff.
            </p>
          </div>
          <a href="/courses" className="text-fire-600 font-medium mt-4 md:mt-0 hover:text-fire-700 flex items-center">
            View all courses
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4 ml-1">
              <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
            </svg>
          </a>
        </div>
        
        <div className="bg-white p-4 rounded-lg shadow-sm mb-6">
          <div className="flex flex-col sm:flex-row gap-4">
            <div className="relative flex-grow">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
              <Input 
                className="pl-10" 
                placeholder="Search courses..." 
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            <Button 
              variant="outline" 
              className="flex items-center gap-2" 
              onClick={() => setShowFilters(!showFilters)}
            >
              <Filter className="h-4 w-4" />
              Filters
              {activeFiltersCount > 0 && (
                <Badge variant="secondary" className="ml-1 h-5 w-5 p-0 flex items-center justify-center">
                  {activeFiltersCount}
                </Badge>
              )}
            </Button>
          </div>
          
          {showFilters && (
            <div className="mt-4 pt-4 border-t border-gray-100">
              <div className="flex flex-wrap gap-4">
                <div>
                  <p className="text-sm font-medium mb-2">Category</p>
                  <div className="flex flex-wrap gap-2">
                    <Button 
                      size="sm"
                      variant={selectedCategory === 'Essential' ? "default" : "outline"}
                      className={selectedCategory === 'Essential' ? "bg-fire-500" : ""}
                      onClick={() => setSelectedCategory(selectedCategory === 'Essential' ? null : 'Essential')}
                    >
                      Essential
                    </Button>
                    <Button 
                      size="sm"
                      variant={selectedCategory === 'Advanced' ? "default" : "outline"}
                      className={selectedCategory === 'Advanced' ? "bg-navy-600" : ""}
                      onClick={() => setSelectedCategory(selectedCategory === 'Advanced' ? null : 'Advanced')}
                    >
                      Advanced
                    </Button>
                  </div>
                </div>
                
                <div>
                  <p className="text-sm font-medium mb-2">Duration</p>
                  <div className="flex flex-wrap gap-2">
                    <Button 
                      size="sm"
                      variant={selectedDuration === 'short' ? "default" : "outline"}
                      onClick={() => setSelectedDuration(selectedDuration === 'short' ? null : 'short')}
                    >
                      Short (&lt;30 min)
                    </Button>
                    <Button 
                      size="sm"
                      variant={selectedDuration === 'medium' ? "default" : "outline"}
                      onClick={() => setSelectedDuration(selectedDuration === 'medium' ? null : 'medium')}
                    >
                      Medium (30-60 min)
                    </Button>
                    <Button 
                      size="sm"
                      variant={selectedDuration === 'long' ? "default" : "outline"}
                      onClick={() => setSelectedDuration(selectedDuration === 'long' ? null : 'long')}
                    >
                      Long (&gt;60 min)
                    </Button>
                  </div>
                </div>
                
                {activeFiltersCount > 0 && (
                  <Button 
                    size="sm" 
                    variant="ghost" 
                    className="text-fire-600 hover:text-fire-700 hover:bg-fire-50 ml-auto self-end"
                    onClick={handleClearFilters}
                  >
                    <X className="h-4 w-4 mr-1" />
                    Clear filters
                  </Button>
                )}
              </div>
            </div>
          )}
        </div>
        
        {filteredCourses.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {filteredCourses.map((course) => (
              <CourseCard key={course.id} {...course} />
            ))}
          </div>
        ) : (
          <div className="text-center py-16 bg-white rounded-lg shadow-sm">
            <BookOpen className="h-12 w-12 text-gray-400 mx-auto mb-4" />
            <p className="text-gray-600 mb-4">No courses match your search criteria.</p>
            <div className="flex justify-center gap-4">
              <Button onClick={() => setSearchTerm('')}>Clear Search</Button>
              {activeFiltersCount > 0 && (
                <Button variant="outline" onClick={handleClearFilters}>Clear Filters</Button>
              )}
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default CourseList;
