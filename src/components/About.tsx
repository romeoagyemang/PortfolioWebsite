import React from 'react';

const About = () => {
  return (
    <section id="about" className="py-16">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="md:col-span-1">
          <img 
            src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80" 
            alt="About me" 
            className="w-full h-auto rounded-lg object-cover"
          />
        </div>
        
        <div className="md:col-span-2">
          <h2 className="text-2xl font-semibold mb-6">Curious about me? Here you have it:</h2>
          
          <div className="space-y-4 text-gray-700">
            <p>
              I'm a passionate UI/UX designer with a strong focus on creating intuitive and engaging user experiences. My journey in design began over 5 years ago, and I've been fortunate to work with a diverse range of clients and projects since then.
            </p>
            
            <p>
              I began my career as a web designer in 2018, and over time, I've evolved into a multidisciplinary designer who can handle everything from user research and wireframing to high-fidelity prototypes and front-end development. I believe in a user-centered approach to design, always putting the needs and goals of the end-user first.
            </p>
            
            <p>
              When I'm not designing, you can find me exploring new hiking trails, experimenting with photography, or diving into a good book. I'm also passionate about mentoring aspiring designers and regularly participate in design communities and forums.
            </p>
            
            <div className="pt-4">
              <h3 className="font-semibold mb-2">My hobbies and interests:</h3>
              <ul className="list-disc pl-5 space-y-1">
                <li>Photography and visual arts</li>
                <li>Hiking and outdoor adventures</li>
                <li>Reading design books and sci-fi novels</li>
                <li>Attending design workshops and conferences</li>
                <li>Cooking and exploring new cuisines</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;