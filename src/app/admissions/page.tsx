"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function AdmissionsPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main>
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-purple-600 to-purple-800 text-white py-20">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Admissions</h1>
            <p className="text-xl max-w-3xl text-purple-100">
              Join our community of learners and leaders. Discover the simple steps to become part of Bright Future School.
            </p>
            <div className="mt-8">
              <Button size="lg" className="bg-white text-purple-600 hover:bg-gray-100" asChild>
                <Link href="#application-form">Start Application</Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Admission Process */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Admission Process</h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Our straightforward admission process ensures a smooth journey for prospective families.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <Card>
                <CardHeader>
                  <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mb-4">
                    <span className="text-purple-600 font-bold text-xl">1</span>
                  </div>
                  <CardTitle>Inquiry</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>
                    Submit an inquiry form or attend an information session to learn about our programs.
                  </CardDescription>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mb-4">
                    <span className="text-purple-600 font-bold text-xl">2</span>
                  </div>
                  <CardTitle>Application</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>
                    Complete the online application form and submit required documents.
                  </CardDescription>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mb-4">
                    <span className="text-purple-600 font-bold text-xl">3</span>
                  </div>
                  <CardTitle>Assessment</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>
                    Schedule and complete entrance assessment and family interview.
                  </CardDescription>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mb-4">
                    <span className="text-purple-600 font-bold text-xl">4</span>
                  </div>
                  <CardTitle>Decision</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>
                    Receive admission decision and complete enrollment process if accepted.
                  </CardDescription>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Important Dates */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Important Dates</h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Key deadlines for the 2024-2025 academic year admission cycle.
              </p>
            </div>
            
            <div className="max-w-4xl mx-auto">
              <div className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="text-purple-600">Early Decision</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <strong>Application Deadline:</strong> November 15, 2024
                      </div>
                      <div>
                        <strong>Decision Notification:</strong> December 15, 2024
                      </div>
                    </div>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardHeader>
                    <CardTitle className="text-purple-600">Regular Decision</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <strong>Application Deadline:</strong> January 15, 2025
                      </div>
                      <div>
                        <strong>Decision Notification:</strong> March 15, 2025
                      </div>
                    </div>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardHeader>
                    <CardTitle className="text-purple-600">Rolling Admission</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <strong>Applications Accepted:</strong> After March 15, 2025
                      </div>
                      <div>
                        <strong>Decisions:</strong> Within 2-3 weeks of completion
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Tuition & Financial Aid */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Tuition & Financial Aid</h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                We are committed to making quality education accessible through various financial assistance programs.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <Card>
                <CardHeader>
                  <CardTitle>Elementary (K-5)</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-3xl font-bold text-purple-600 mb-4">$12,500</div>
                  <CardDescription>
                    Annual tuition includes textbooks, supplies, and field trips.
                  </CardDescription>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle>Middle School (6-8)</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-3xl font-bold text-purple-600 mb-4">$15,000</div>
                  <CardDescription>
                    Annual tuition includes technology fees and extracurricular activities.
                  </CardDescription>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle>High School (9-12)</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-3xl font-bold text-purple-600 mb-4">$18,000</div>
                  <CardDescription>
                    Annual tuition includes AP exam fees and college counseling services.
                  </CardDescription>
                </CardContent>
              </Card>
            </div>
            
            <div className="mt-12 text-center">
              <h3 className="text-2xl font-bold mb-6">Financial Assistance</h3>
              <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
                <div>
                  <h4 className="font-semibold mb-2">Need-Based Aid</h4>
                  <p className="text-gray-600">Financial assistance based on family income and circumstances</p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Merit Scholarships</h4>
                  <p className="text-gray-600">Academic and talent-based scholarships for qualified students</p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Payment Plans</h4>
                  <p className="text-gray-600">Flexible monthly and quarterly payment options available</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Application Form */}
        <section id="application-form" className="py-20 bg-purple-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Apply?</h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Take the first step towards joining our community of learners.
              </p>
            </div>
            
            <div className="max-w-2xl mx-auto">
              <Card>
                <CardHeader>
                  <CardTitle>Online Application Portal</CardTitle>
                  <CardDescription>
                    Our secure online application system makes it easy to apply and track your progress.
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="bg-gray-50 p-6 rounded-lg">
                    <h4 className="font-semibold mb-4">Required Documents:</h4>
                    <ul className="space-y-2 text-gray-600">
                      <li>• Birth certificate or passport</li>
                      <li>• Previous school transcripts (last 2 years)</li>
                      <li>• Immunization records</li>
                      <li>• Parent/guardian identification</li>
                      <li>• Teacher recommendations (2)</li>
                      <li>• Personal statement (grades 6-12)</li>
                    </ul>
                  </div>
                  
                  <div className="flex gap-4">
                    <Button size="lg" className="bg-purple-600 hover:bg-purple-700">
                      Start Application
                    </Button>
                    <Button size="lg" variant="outline">
                      Schedule Tour
                    </Button>
                  </div>
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
