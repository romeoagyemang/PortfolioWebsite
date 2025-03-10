import React from 'react';
import { Mail, Phone } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="py-16">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-2xl font-semibold mb-4">Get In Touch</h2>
        <p className="text-gray-700 mb-8">
          Whether you have a question, want to start a project, or simply want to connect, feel free to reach out to me. I'm currently open to new opportunities and would love to hear from you.
        </p>
        
        <div className="flex justify-center mb-8">
          <a 
            href="mailto:agyemangromeo74@gmail.com" 
            className="flex items-center justify-center bg-black text-white px-6 py-3 rounded-md hover:bg-gray-800 transition-colors"
          >
            <Mail size={20} className="mr-2" />
            agyemangromeo74@gmail.com
          </a>
        </div>
        
        <div className="flex justify-center">
          <a 
            href="tel:+233509744732" 
            className="flex items-center justify-center text-gray-700 hover:text-black"
          >
            <Phone size={20} className="mr-2" />
            +233509744732 - +233595060480
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;