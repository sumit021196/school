import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main>
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">About Bright Future School</h1>
            <p className="text-xl max-w-3xl text-blue-100">
              For over 25 years, we have been dedicated to providing exceptional education that prepares students for success in college, career, and life.
            </p>
          </div>
        </section>

        {/* Mission & Vision */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-12">
              <div>
                <h2 className="text-3xl font-bold mb-6 text-blue-600">Our Mission</h2>
                <p className="text-lg text-gray-700 leading-relaxed">
                  To provide a transformative educational experience that empowers students to become critical thinkers, 
                  compassionate leaders, and lifelong learners who positively impact their communities and the world.
                </p>
              </div>
              <div>
                <h2 className="text-3xl font-bold mb-6 text-blue-600">Our Vision</h2>
                <p className="text-lg text-gray-700 leading-relaxed">
                  To be a leading educational institution recognized for academic excellence, innovation in teaching, 
                  and graduates who make meaningful contributions to society.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Core Values */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Core Values</h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                These principles guide everything we do and shape the culture of our school community.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <Card>
                <CardHeader>
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                    <span className="text-blue-600 font-bold text-xl">🎯</span>
                  </div>
                  <CardTitle>Excellence</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>
                    We pursue the highest standards in teaching, learning, and personal conduct.
                  </CardDescription>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mb-4">
                    <span className="text-green-600 font-bold text-xl">🤝</span>
                  </div>
                  <CardTitle>Integrity</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>
                    We act with honesty, respect, and ethical responsibility in all our endeavors.
                  </CardDescription>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mb-4">
                    <span className="text-purple-600 font-bold text-xl">💡</span>
                  </div>
                  <CardTitle>Innovation</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>
                    We embrace creativity and forward-thinking approaches to education and problem-solving.
                  </CardDescription>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mb-4">
                    <span className="text-orange-600 font-bold text-xl">❤️</span>
                  </div>
                  <CardTitle>Compassion</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>
                    We care for one another and serve our community with empathy and kindness.
                  </CardDescription>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* History */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Our History</h2>
              
              <div className="space-y-8">
                <div className="flex gap-8">
                  <div className="flex-shrink-0 w-24 text-right">
                    <div className="text-2xl font-bold text-blue-600">1999</div>
                  </div>
                  <div className="flex-grow">
                    <h3 className="text-xl font-semibold mb-2">Foundation</h3>
                    <p className="text-gray-600">
                      Bright Future School was founded with a vision to provide quality education that prepares students for the challenges of the 21st century.
                    </p>
                  </div>
                </div>
                
                <div className="flex gap-8">
                  <div className="flex-shrink-0 w-24 text-right">
                    <div className="text-2xl font-bold text-blue-600">2005</div>
                  </div>
                  <div className="flex-grow">
                    <h3 className="text-xl font-semibold mb-2">Expansion</h3>
                    <p className="text-gray-600">
                      Added new science laboratories, library, and sports facilities to enhance the learning experience.
                    </p>
                  </div>
                </div>
                
                <div className="flex gap-8">
                  <div className="flex-shrink-0 w-24 text-right">
                    <div className="text-2xl font-bold text-blue-600">2015</div>
                  </div>
                  <div className="flex-grow">
                    <h3 className="text-xl font-semibold mb-2">Technology Integration</h3>
                    <p className="text-gray-600">
                      Implemented comprehensive technology program with 1:1 device initiative and digital curriculum.
                    </p>
                  </div>
                </div>
                
                <div className="flex gap-8">
                  <div className="flex-shrink-0 w-24 text-right">
                    <div className="text-2xl font-bold text-blue-600">2024</div>
                  </div>
                  <div className="flex-grow">
                    <h3 className="text-xl font-semibold mb-2">Silver Anniversary</h3>
                    <p className="text-gray-600">
                      Celebrating 25 years of educational excellence and thousands of successful graduates.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
}
