import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export default function AcademicsPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main>
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-green-600 to-green-800 text-white py-20">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Academic Programs</h1>
            <p className="text-xl max-w-3xl text-green-100">
              Discover our comprehensive curriculum designed to challenge, inspire, and prepare students for future success.
            </p>
          </div>
        </section>

        {/* Elementary School */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Elementary School (K-5)</h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Building strong foundations through engaging, hands-on learning experiences.
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <Card>
                <CardHeader>
                  <CardTitle>Language Arts</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>
                    Reading comprehension, writing skills, phonics, and literary appreciation through diverse texts and creative expression.
                  </CardDescription>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle>Mathematics</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>
                    Number sense, problem-solving, logical reasoning, and mathematical concepts applied to real-world situations.
                  </CardDescription>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle>Science & Exploration</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>
                    Hands-on experiments, scientific inquiry, environmental awareness, and discovery-based learning.
                  </CardDescription>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Middle School */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Middle School (6-8)</h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Bridging elementary foundations with high school preparation through specialized instruction.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <Card>
                <CardHeader>
                  <CardTitle>English</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>
                    Advanced literature analysis, composition, grammar, and communication skills.
                  </CardDescription>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle>Mathematics</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>
                    Pre-algebra, algebra foundations, geometry, and mathematical reasoning.
                  </CardDescription>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle>Sciences</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>
                    Life science, physical science, earth science, and laboratory skills.
                  </CardDescription>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle>Social Studies</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>
                    World history, geography, civics, and cultural understanding.
                  </CardDescription>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* High School */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">High School (9-12)</h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                College preparatory curriculum with advanced placement and specialized programs.
              </p>
            </div>
            
            <div className="grid lg:grid-cols-3 gap-8">
              <div className="lg:col-span-2">
                <h3 className="text-2xl font-bold mb-6">Core Curriculum</h3>
                <div className="space-y-6">
                  <Card>
                    <CardHeader>
                      <CardTitle>Advanced Placement (AP) Courses</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <CardDescription>
                        AP Calculus, AP Physics, AP Chemistry, AP Biology, AP English Literature, AP World History, 
                        AP Psychology, and more for college credit opportunities.
                      </CardDescription>
                    </CardContent>
                  </Card>
                  
                  <Card>
                    <CardHeader>
                      <CardTitle>STEM Programs</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <CardDescription>
                        Computer science, engineering, robotics, advanced mathematics, and research opportunities 
                        with industry partnerships.
                      </CardDescription>
                    </CardContent>
                  </Card>
                  
                  <Card>
                    <CardHeader>
                      <CardTitle>Arts & Humanities</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <CardDescription>
                        Visual arts, music theory, theater arts, creative writing, philosophy, and cultural studies.
                      </CardDescription>
                    </CardContent>
                  </Card>
                </div>
              </div>
              
              <div>
                <h3 className="text-2xl font-bold mb-6">Special Programs</h3>
                <div className="space-y-4">
                  <Card>
                    <CardHeader>
                      <CardTitle>Honors Program</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <CardDescription>
                        Rigorous coursework for high-achieving students seeking academic challenges.
                      </CardDescription>
                    </CardContent>
                  </Card>
                  
                  <Card>
                    <CardHeader>
                      <CardTitle>Dual Enrollment</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <CardDescription>
                        College credit courses through partnerships with local universities.
                      </CardDescription>
                    </CardContent>
                  </Card>
                  
                  <Card>
                    <CardHeader>
                      <CardTitle>Study Abroad</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <CardDescription>
                        International exchange programs and global learning experiences.
                      </CardDescription>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Academic Support */}
        <section className="py-20 bg-blue-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Academic Support Services</h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Comprehensive support systems to ensure every student succeeds.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <Card>
                <CardHeader>
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                    <span className="text-blue-600 font-bold text-xl">👥</span>
                  </div>
                  <CardTitle>Tutoring Center</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>
                    Peer and professional tutoring available for all subjects during and after school hours.
                  </CardDescription>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mb-4">
                    <span className="text-green-600 font-bold text-xl">📚</span>
                  </div>
                  <CardTitle>Learning Resources</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>
                    Extensive library, digital resources, study spaces, and research assistance.
                  </CardDescription>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mb-4">
                    <span className="text-purple-600 font-bold text-xl">🎯</span>
                  </div>
                  <CardTitle>College Counseling</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>
                    Guidance for college applications, scholarships, career planning, and test preparation.
                  </CardDescription>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
}
