"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main>
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-orange-600 to-orange-800 text-white py-20">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Contact Us</h1>
            <p className="text-xl max-w-3xl text-orange-100">
              We're here to answer your questions and help you learn more about Bright Future School.
            </p>
          </div>
        </section>

        {/* Contact Information */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12">
              <div>
                <h2 className="text-3xl font-bold mb-8">Get in Touch</h2>
                
                <div className="space-y-6">
                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center gap-3">
                        <span className="text-2xl">📍</span>
                        Main Campus
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <CardDescription className="text-gray-700">
                        123 Education Street<br />
                        Learning City, LC 12345<br />
                        United States
                      </CardDescription>
                    </CardContent>
                  </Card>
                  
                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center gap-3">
                        <span className="text-2xl">📞</span>
                        Phone Numbers
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <CardDescription className="text-gray-700">
                        Main Office: (555) 123-4567<br />
                        Admissions: (555) 123-4568<br />
                        Attendance: (555) 123-4569<br />
                        Emergency: (555) 123-4570
                      </CardDescription>
                    </CardContent>
                  </Card>
                  
                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center gap-3">
                        <span className="text-2xl">✉️</span>
                        Email Addresses
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <CardDescription className="text-gray-700">
                        General Info: info@brightfuture.edu<br />
                        Admissions: admissions@brightfuture.edu<br />
                        Principal: principal@brightfuture.edu<br />
                        Support: support@brightfuture.edu
                      </CardDescription>
                    </CardContent>
                  </Card>
                  
                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center gap-3">
                        <span className="text-2xl">🕐</span>
                        Office Hours
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <CardDescription className="text-gray-700">
                        Monday - Friday: 8:00 AM - 4:00 PM<br />
                        Saturday: 9:00 AM - 12:00 PM<br />
                        Sunday: Closed<br />
                        <br />
                        School Hours: 8:30 AM - 3:30 PM
                      </CardDescription>
                    </CardContent>
                  </Card>
                </div>
              </div>
              
              <div>
                <h2 className="text-3xl font-bold mb-8">Send us a Message</h2>
                
                <Card>
                  <CardHeader>
                    <CardTitle>Contact Form</CardTitle>
                    <CardDescription>
                      Fill out the form below and we'll get back to you within 24-48 hours.
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium mb-2">First Name *</label>
                        <input 
                          type="text" 
                          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
                          placeholder="John"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium mb-2">Last Name *</label>
                        <input 
                          type="text" 
                          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
                          placeholder="Doe"
                        />
                      </div>
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium mb-2">Email *</label>
                      <input 
                        type="email" 
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
                        placeholder="john.doe@example.com"
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium mb-2">Phone</label>
                      <input 
                        type="tel" 
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
                        placeholder="(555) 123-4567"
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium mb-2">Subject *</label>
                      <select className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500">
                        <option value="">Select a topic</option>
                        <option value="admissions">Admissions Inquiry</option>
                        <option value="general">General Information</option>
                        <option value="tour">Schedule a Tour</option>
                        <option value="employment">Employment Opportunities</option>
                        <option value="other">Other</option>
                      </select>
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium mb-2">Message *</label>
                      <textarea 
                        rows={4}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
                        placeholder="How can we help you?"
                      ></textarea>
                    </div>
                    
                    <Button size="lg" className="bg-orange-600 hover:bg-orange-700 w-full">
                      Send Message
                    </Button>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Map Section */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Visit Our Campus</h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Come see our beautiful campus and experience the Bright Future difference firsthand.
              </p>
            </div>
            
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="bg-gray-200 h-96 rounded-lg flex items-center justify-center">
                  <span className="text-gray-500 text-lg">Interactive Map</span>
                </div>
              </div>
              
              <div className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Campus Tours</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription>
                      Schedule a personalized tour to see our classrooms, facilities, and meet our dedicated faculty.
                    </CardDescription>
                    <Button className="mt-4 bg-orange-600 hover:bg-orange-700">
                      Schedule Tour
                    </Button>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardHeader>
                    <CardTitle>Open House Events</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription>
                      Join us for our upcoming open house events to learn more about our programs and community.
                    </CardDescription>
                    <div className="mt-4 space-y-2">
                      <div className="flex justify-between">
                        <span>January 20, 2025</span>
                        <span className="text-orange-600 font-semibold">10:00 AM - 2:00 PM</span>
                      </div>
                      <div className="flex justify-between">
                        <span>March 15, 2025</span>
                        <span className="text-orange-600 font-semibold">10:00 AM - 2:00 PM</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardHeader>
                    <CardTitle>Parking & Directions</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription>
                      Free parking available on campus. Enter through the main gate on Education Street. 
                      Visitor parking is clearly marked near the main entrance.
                    </CardDescription>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Emergency Contact */}
        <section className="py-20 bg-red-50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-6 text-red-600">Emergency Contact</h2>
              <p className="text-lg text-gray-700 mb-8">
                For urgent matters during school hours, please contact our main office immediately.
              </p>
              <div className="grid md:grid-cols-2 gap-8">
                <Card>
                  <CardHeader>
                    <CardTitle>School Office</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold text-red-600 mb-2">(555) 123-4570</div>
                    <CardDescription>
                      Available 8:00 AM - 4:00 PM on school days
                    </CardDescription>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardHeader>
                    <CardTitle>After Hours Emergency</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold text-red-600 mb-2">(555) 987-6543</div>
                    <CardDescription>
                      For urgent matters outside regular school hours
                    </CardDescription>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
}
