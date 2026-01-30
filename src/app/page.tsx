import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main>
        {/* Hero Section */}
        <section className="relative bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl">
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Welcome to Bright Future School
              </h1>
              <p className="text-xl md:text-2xl mb-8 text-blue-100">
                Where excellence meets opportunity. Empowering students to achieve their full potential 
                through innovative education and personalized learning.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100" asChild>
                  <Link href="/admissions">Apply Now</Link>
                </Button>
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-600" asChild>
                  <Link href="/about">Learn More</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Choose Bright Future?</h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                We provide a comprehensive educational experience that prepares students for success in an ever-changing world.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Card>
                <CardHeader>
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                    <span className="text-blue-600 font-bold text-xl">📚</span>
                  </div>
                  <CardTitle>Academic Excellence</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>
                    Rigorous curriculum with experienced faculty dedicated to fostering critical thinking and intellectual growth.
                  </CardDescription>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mb-4">
                    <span className="text-green-600 font-bold text-xl">🌱</span>
                  </div>
                  <CardTitle>Holistic Development</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>
                    Focus on character development, leadership skills, and emotional intelligence alongside academic achievement.
                  </CardDescription>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mb-4">
                    <span className="text-purple-600 font-bold text-xl">🚀</span>
                  </div>
                  <CardTitle>Modern Facilities</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>
                    State-of-the-art classrooms, science labs, sports facilities, and technology integration for enhanced learning.
                  </CardDescription>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Statistics Section */}
        <section className="py-20 bg-blue-600 text-white">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              <div>
                <div className="text-4xl font-bold mb-2">500+</div>
                <div className="text-blue-100">Students</div>
              </div>
              <div>
                <div className="text-4xl font-bold mb-2">50+</div>
                <div className="text-blue-100">Faculty Members</div>
              </div>
              <div>
                <div className="text-4xl font-bold mb-2">15+</div>
                <div className="text-blue-100">Sports Programs</div>
              </div>
              <div>
                <div className="text-4xl font-bold mb-2">98%</div>
                <div className="text-blue-100">College Acceptance</div>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-20">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Join Our Community?</h2>
            <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
              Take the first step towards a brighter future. Explore our admission process and discover what makes Bright Future School special.
            </p>
            <Button size="lg" className="bg-blue-600 hover:bg-blue-700" asChild>
              <Link href="/admissions">Start Your Journey</Link>
            </Button>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
}
