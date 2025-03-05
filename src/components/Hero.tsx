import React from 'react';
import { MapPin, Mail, Github, Linkedin } from 'lucide-react';

const Hero = () => {
  return (
    <section id="hero" className="pt-32 pb-16">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Hi, I'm Sagar <span className="inline-block animate-wave">👋</span>
          </h1>
          <p className="text-lg text-gray-700 mb-6 max-w-2xl">
            I'm a UI/UX Designer & Front-end Developer with 5 years of experience. I enjoy creating user-centric, delightful, and human experiences. I've worked with agencies, startups, and collaborated on products for clients like Spotify, Slack, Figma, Typeform, and more.
          </p>
          
          <div className="flex items-center space-x-4 mb-6">
            <div className="flex items-center text-gray-600">
              <MapPin size={18} className="mr-2" />
              <span>Mumbai, India</span>
            </div>
            <div className="flex items-center text-gray-600">
              <Mail size={18} className="mr-2" />
              <span>Available for new projects</span>
            </div>
          </div>
          
          <div className="flex space-x-4">
            <a href="#" className="text-gray-600 hover:text-gray-900">
              <Github size={20} />
            </a>
            <a href="#" className="text-gray-600 hover:text-gray-900">
              <Linkedin size={20} />
            </a>
          </div>
        </div>
        
        <div className="flex justify-center lg:justify-end">
          <div className="w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-gray-200">
            <img 
              src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80" 
              alt="Sagar's profile" 
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;