import React from 'react';

const About = () => {
  return (
    <section id="about" className="py-16">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="md:col-span-1">
          <img 
            src="images/good_pic.jpg" 
            alt="About me" 
            className="w-full h-auto rounded-lg object-cover"
          />
        </div>
        
        <div className="md:col-span-2">
          <h2 className="text-2xl font-semibold mb-6">Curious about me? Here you have it:</h2>
          
          <div className="space-y-4 text-gray-700">
            <p>
              I'm a passionate fullstack software engineer with a strong focus on creating intuitive and engaging user experiences. My journey in development began 5 years ago, and I've been fortunate to work with a diverse range of clients and projects since then.
            </p>
            
            <p>
              I began my career as a developer in late 2020, and over time, I've evolved into a multidisciplinary developer who can handle everything from scratch to deployments, focusing on both frontend and backend development. I believe in a customer experience, always putting the needs and goals of the end-user first.
            </p>
            
            <p>
              When I'm not developing, you can find me exploring new hiking trails or diving into a good book. I'm also passionate about mentoring aspiring developers and regularly participate in dev communities and forums.
            </p>
            

          </div>
        </div>
      </div>
    </section>
  );
};

export default About;