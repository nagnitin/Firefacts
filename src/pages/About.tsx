
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Flame, CheckCircle, Award, Building, Users, Calendar } from "lucide-react";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-fire-600 to-fire-800 py-16 md:py-24 text-white">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div>
                <h1 className="font-heading text-4xl md:text-5xl font-bold mb-6 leading-tight">
                  About FireFacts
                </h1>
                <p className="text-white/90 text-lg mb-8 max-w-xl">
                  FireFacts is dedicated to revolutionizing fire safety training for hotel employees through engaging, 
                  interactive learning experiences that save lives and protect property.
                </p>
                <div className="flex flex-wrap gap-4">
                  <Button className="bg-white text-fire-700 hover:bg-gray-100 font-medium px-6 py-6 text-lg rounded-xl">
                    <Link to="/courses">
                      Start Learning
                    </Link>
                  </Button>
                  <Button variant="outline" className="border-white text-white hover:bg-white/10 font-medium px-6 py-6 text-lg rounded-xl">
                    <Link to="/contact">
                      Contact Us
                    </Link>
                  </Button>
                </div>
              </div>
              <div className="flex justify-center">
                <div className="relative w-64 h-64 md:w-80 md:h-80">
                  <div className="absolute inset-0 rounded-full bg-white/10 animate-pulse"></div>
                  <div className="absolute inset-4 rounded-full bg-white/20 animate-pulse animation-delay-200"></div>
                  <div className="absolute inset-8 rounded-full bg-white/30 animate-pulse animation-delay-400"></div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <Flame className="h-24 w-24 text-white" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Our Mission */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center mb-16">
              <h2 className="font-heading text-3xl font-bold text-gray-900 mb-4">
                Our Mission
              </h2>
              <p className="text-lg text-gray-600">
                At FireFacts, we believe that effective fire safety training shouldn't be boring or forgettable.
                Our mission is to transform traditional safety education into an engaging, interactive experience 
                that helps hotel employees retain critical knowledge and respond effectively during emergencies.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Card className="border-t-4 border-t-fire-500">
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 rounded-full bg-fire-100 flex items-center justify-center mx-auto mb-4">
                    <Flame className="h-8 w-8 text-fire-500" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">Engaging Education</h3>
                  <p className="text-gray-600">
                    Transform dry fire safety content into interactive, memorable learning experiences through gamification and multimedia.
                  </p>
                </CardContent>
              </Card>
              
              <Card className="border-t-4 border-t-navy-500">
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 rounded-full bg-navy-100 flex items-center justify-center mx-auto mb-4">
                    <Users className="h-8 w-8 text-navy-500" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">Industry Specific</h3>
                  <p className="text-gray-600">
                    Offer specialized training that addresses the unique fire safety challenges and protocols in hotel environments.
                  </p>
                </CardContent>
              </Card>
              
              <Card className="border-t-4 border-t-green-500">
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-4">
                    <Award className="h-8 w-8 text-green-500" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">Life-Saving Results</h3>
                  <p className="text-gray-600">
                    Equip hotel staff with the knowledge and confidence to prevent fires and protect lives during emergencies.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
        
        {/* Our Story */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="font-heading text-3xl font-bold text-gray-900 mb-4">
                  Our Story
                </h2>
                <p className="text-gray-600 mb-6">
                  FireFacts was founded in 2022 by a team of fire safety professionals who recognized a critical gap in hotel employee training. 
                  After witnessing how quickly traditional safety training was forgotten, we set out to create a more effective approach.
                </p>
                <p className="text-gray-600 mb-6">
                  By combining expertise in fire safety with modern learning techniques, we developed a platform that makes crucial safety 
                  information engaging and memorable. Today, FireFacts is used by hundreds of hotels worldwide to ensure their staff are 
                  prepared for fire emergencies.
                </p>
                <div className="space-y-3">
                  <div className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-1" />
                    <p className="text-gray-700">Founded by certified fire safety experts with hotel industry experience</p>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-1" />
                    <p className="text-gray-700">Developed in consultation with leading hotel chains and safety organizations</p>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-1" />
                    <p className="text-gray-700">Continuously updated to reflect the latest fire safety best practices and regulations</p>
                  </div>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-4">
                  <img src="https://images.unsplash.com/photo-1582139329536-e7284fece509?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="Fire safety training" className="rounded-lg h-48 w-full object-cover" />
                  <img src="https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="Hotel safety" className="rounded-lg h-64 w-full object-cover" />
                </div>
                <div className="space-y-4 pt-8">
                  <img src="https://images.unsplash.com/photo-1569242840510-5254d83b77ea?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="Fire equipment" className="rounded-lg h-64 w-full object-cover" />
                  <img src="https://images.unsplash.com/photo-1587491439149-bd2ff295d450?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="Training session" className="rounded-lg h-48 w-full object-cover" />
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Stats Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 text-center">
              <div className="p-6">
                <div className="text-4xl font-bold text-fire-600 mb-2">500+</div>
                <div className="text-lg font-semibold text-gray-900 mb-1">Hotels</div>
                <p className="text-gray-600 text-sm">Using FireFacts training</p>
              </div>
              
              <div className="p-6">
                <div className="text-4xl font-bold text-fire-600 mb-2">25,000+</div>
                <div className="text-lg font-semibold text-gray-900 mb-1">Employees</div>
                <p className="text-gray-600 text-sm">Trained on our platform</p>
              </div>
              
              <div className="p-6">
                <div className="text-4xl font-bold text-fire-600 mb-2">98%</div>
                <div className="text-lg font-semibold text-gray-900 mb-1">Completion Rate</div>
                <p className="text-gray-600 text-sm">For our interactive courses</p>
              </div>
              
              <div className="p-6">
                <div className="text-4xl font-bold text-fire-600 mb-2">30%</div>
                <div className="text-lg font-semibold text-gray-900 mb-1">Knowledge Retention</div>
                <p className="text-gray-600 text-sm">Increase over traditional training</p>
              </div>
            </div>
          </div>
        </section>
        
        {/* Team Section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="font-heading text-3xl font-bold text-gray-900 mb-4">
                Meet Our Team
              </h2>
              <p className="text-gray-600">
                Our team combines decades of fire safety expertise, hospitality industry experience, and 
                education technology knowledge to create the most effective training platform for hotel employees.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="w-48 h-48 rounded-full bg-gray-200 mx-auto mb-4"></div>
                <h3 className="text-xl font-semibold mb-1">Robert Chen</h3>
                <p className="text-fire-600 font-medium mb-3">Founder & CEO</p>
                <p className="text-gray-600 text-sm">Former Fire Chief with 20+ years of experience in fire safety and prevention.</p>
              </div>
              
              <div className="text-center">
                <div className="w-48 h-48 rounded-full bg-gray-200 mx-auto mb-4"></div>
                <h3 className="text-xl font-semibold mb-1">Sarah Johnson</h3>
                <p className="text-fire-600 font-medium mb-3">Director of Training</p>
                <p className="text-gray-600 text-sm">Former hotel safety director with expertise in staff training and emergency protocols.</p>
              </div>
              
              <div className="text-center">
                <div className="w-48 h-48 rounded-full bg-gray-200 mx-auto mb-4"></div>
                <h3 className="text-xl font-semibold mb-1">Michael Torres</h3>
                <p className="text-fire-600 font-medium mb-3">Head of Technology</p>
                <p className="text-gray-600 text-sm">EdTech specialist focused on creating engaging, effective learning experiences.</p>
              </div>
              
              <div className="text-center">
                <div className="w-48 h-48 rounded-full bg-gray-200 mx-auto mb-4"></div>
                <h3 className="text-xl font-semibold mb-1">Priya Sharma</h3>
                <p className="text-fire-600 font-medium mb-3">Content Director</p>
                <p className="text-gray-600 text-sm">Develops our curriculum and ensures accuracy of all safety information.</p>
              </div>
            </div>
          </div>
        </section>
        
        {/* CTA Section */}
        <section className="py-16 bg-navy-900 text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="font-heading text-3xl md:text-4xl font-bold mb-6">
              Ready to Transform Your Hotel's Fire Safety Training?
            </h2>
            <p className="text-white/80 text-lg max-w-2xl mx-auto mb-8">
              Join hundreds of hotels using FireFacts to keep their staff and guests safe with engaging, 
              effective training that meets industry standards.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button className="bg-fire-500 hover:bg-fire-600 text-white font-medium px-6 py-6 text-lg rounded-xl">
                <Link to="/signup">
                  Sign Up Now
                </Link>
              </Button>
              <Button variant="outline" className="border-white text-white hover:bg-white/10 font-medium px-6 py-6 text-lg rounded-xl">
                <Link to="/contact">
                  Request Demo
                </Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default About;
