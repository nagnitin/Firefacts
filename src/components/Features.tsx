
import { Shield, Clock, BookOpen, Award } from "lucide-react";

const features = [
  {
    icon: <Shield className="h-10 w-10 text-fire-500" />,
    title: "Comprehensive Training",
    description: "Access a complete library of fire safety modules specifically designed for hotel environments.",
  },
  {
    icon: <Clock className="h-10 w-10 text-fire-500" />,
    title: "Timed Quizzes",
    description: "Test your knowledge under pressure with timed assessments that simulate emergency scenarios.",
  },
  {
    icon: <BookOpen className="h-10 w-10 text-fire-500" />,
    title: "Multimedia Learning",
    description: "Engage with videos, animations, and interactive content for enhanced knowledge retention.",
  },
  {
    icon: <Award className="h-10 w-10 text-fire-500" />,
    title: "Certification",
    description: "Earn certificates upon completion to demonstrate your fire safety competence.",
  },
];

const Features = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="font-heading text-3xl font-bold text-gray-900 mb-4">
            Why Choose FireFacts?
          </h2>
          <p className="text-gray-600">
            Our platform combines essential fire safety training with engaging learning methods
            to ensure hotel staff are properly prepared for emergency situations.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="fire-card flex flex-col items-center text-center p-6 transition-transform duration-300 hover:-translate-y-2"
            >
              <div className="mb-6 p-3 bg-white rounded-full shadow-sm">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
