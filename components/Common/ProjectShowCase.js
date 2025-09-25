import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, MapPin, Zap, Calendar } from "lucide-react";

export default function ProjectShowcase() {
  const [activeProject, setActiveProject] = useState(0);

  const projects = [
    {
      id: 1,
      title: "Residential Solar System - DHA Karachi",
      image: "https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?w=800",
      location: "Defence, Karachi",
      capacity: "10kW",
      savings: "₨18,000/month",
      date: "Dec 2024",
      type: "Residential",
      description: "Complete off-grid solar solution for a luxury home with battery backup system"
    },
    {
      id: 2,
      title: "Commercial Solar Installation - Gulshan",
      image: "https://images.unsplash.com/photo-1497440001374-f26997328c1b?w=800",
      location: "Gulshan-e-Iqbal, Karachi",
      capacity: "50kW",
      savings: "₨75,000/month", 
      date: "Nov 2024",
      type: "Commercial",
      description: "Net-metering system for office building reducing electricity costs by 80%"
    },
    {
      id: 3,
      title: "Industrial Solar Project - SITE",
      image: "https://images.unsplash.com/photo-1466611653911-95081537e5b7?w=800",
      location: "SITE Industrial Area, Karachi",
      capacity: "200kW",
      savings: "₨2,50,000/month",
      date: "Oct 2024", 
      type: "Industrial",
      description: "Large-scale hybrid solar system for textile manufacturing facility"
    }
  ];

  return (
    <div className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Recent Solar Installations
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Explore our latest solar projects across Karachi and see the real impact 
            we're making for homes and businesses.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Project Navigation */}
          <div className="space-y-6">
            {projects.map((project, index) => (
              <div
                key={project.id}
                className={`p-6 rounded-2xl cursor-pointer transition-all duration-300 ${
                  activeProject === index
                    ? "bg-orange-50 border-2 border-orange-200 shadow-lg"
                    : "bg-white border-2 border-gray-100 hover:border-orange-100 hover:shadow-md"
                }`}
                onClick={() => setActiveProject(index)}
              >
                <div className="flex items-start justify-between mb-4">
                  <Badge 
                    variant="secondary" 
                    className={`${
                      project.type === 'Residential' ? 'bg-blue-100 text-blue-800' :
                      project.type === 'Commercial' ? 'bg-green-100 text-green-800' :
                      'bg-purple-100 text-purple-800'
                    }`}
                  >
                    {project.type}
                  </Badge>
                  <div className="flex items-center text-sm text-gray-500">
                    <Calendar className="w-4 h-4 mr-1" />
                    {project.date}
                  </div>
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {project.title}
                </h3>
                
                <p className="text-gray-600 mb-4">{project.description}</p>
                
                <div className="grid grid-cols-3 gap-4">
                  <div className="text-center">
                    <div className="flex items-center justify-center text-orange-600 mb-1">
                      <MapPin className="w-4 h-4 mr-1" />
                    </div>
                    <div className="text-sm font-medium text-gray-900">{project.location}</div>
                  </div>
                  <div className="text-center">
                    <div className="flex items-center justify-center text-green-600 mb-1">
                      <Zap className="w-4 h-4 mr-1" />
                    </div>
                    <div className="text-sm font-medium text-gray-900">{project.capacity}</div>
                  </div>
                  <div className="text-center">
                    <div className="text-lg font-bold text-green-600">{project.savings}</div>
                    <div className="text-xs text-gray-500">Monthly Savings</div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Project Image */}
          <div className="relative">
            <div className="aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl">
              <img
                src={projects[activeProject].image}
                alt={projects[activeProject].title}
                className="w-full h-full object-cover"
              />
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
              {/* Project Info Overlay */}
              <div className="absolute bottom-6 left-6 right-6 text-white">
                <h3 className="text-2xl font-bold mb-2">
                  {projects[activeProject].title}
                </h3>
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <MapPin className="w-5 h-5 mr-2" />
                    {projects[activeProject].location}
                  </div>
                  <div className="flex items-center">
                    <Zap className="w-5 h-5 mr-2" />
                    {projects[activeProject].capacity}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="text-center mt-12">
          <Button size="lg" className="bg-orange-600 hover:bg-orange-700">
            View All Projects
            <ArrowRight className="w-5 h-5 ml-2" />
          </Button>
        </div>
      </div>
    </div>
  );
}