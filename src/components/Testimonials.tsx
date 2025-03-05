import React from 'react';

interface TestimonialProps {
  content: string;
  name: string;
  role: string;
  avatar: string;
}

const TestimonialCard = ({ content, name, role, avatar }: TestimonialProps) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <p className="text-gray-700 mb-4">{content}</p>
      <div className="flex items-center">
        <img src={avatar} alt={name} className="w-10 h-10 rounded-full mr-4" />
        <div>
          <h4 className="font-semibold">{name}</h4>
          <p className="text-gray-600 text-sm">{role}</p>
        </div>
      </div>
    </div>
  );
};

const Testimonials = () => {
  const testimonials = [
    {
      content: "Working with Sagar was a pleasure. He understood our requirements perfectly and delivered a product that exceeded our expectations. His attention to detail and problem-solving skills are impressive.",
      name: "John Doe",
      role: "CEO at TechStart",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80"
    },
    {
      content: "Thank you for your outstanding UI/UX expertise! The redesign has significantly improved our user engagement and conversion rates. Looking forward to working with you again.",
      name: "Jane Smith",
      role: "Product Manager at DesignHub",
      avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80"
    },
    {
      content: "Sagar not only met our technical requirements but also brought innovative ideas that made our product stand out. His communication was clear, and he delivered everything on time.",
      name: "John Doe",
      role: "CTO at WebSolutions",
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80"
    }
  ];

  return (
    <section id="testimonials" className="py-16">
      <h2 className="text-2xl font-semibold mb-8 text-center">What people say about me</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {testimonials.map((testimonial, index) => (
          <TestimonialCard 
            key={index}
            content={testimonial.content}
            name={testimonial.name}
            role={testimonial.role}
            avatar={testimonial.avatar}
          />
        ))}
      </div>
    </section>
  );
};

export default Testimonials;