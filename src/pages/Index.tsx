
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import CourseList from "@/components/CourseList";
import QuizList from "@/components/QuizList";
import Features from "@/components/Features";
import StatisticsSection from "@/components/StatisticsSection";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <Hero />
        <Features />
        <CourseList />
        <div className="bg-gradient-to-r from-fire-600 to-fire-700 py-16">
          <div className="container mx-auto px-4 text-center">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Enhance Your Fire Safety Skills?
            </h2>
            <p className="text-white/90 text-lg max-w-2xl mx-auto mb-8">
              Join thousands of hotel employees who have improved their emergency preparedness with our interactive training platform.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button className="bg-white text-fire-700 hover:bg-gray-100 font-medium px-6 py-6 text-lg rounded-xl">
                Sign Up Now
              </Button>
              <Button variant="outline" className="bg-transparent border-white text-white hover:bg-white/10 font-medium px-6 py-6 text-lg rounded-xl">
                Learn More
              </Button>
            </div>
          </div>
        </div>
        <QuizList />
        <StatisticsSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
