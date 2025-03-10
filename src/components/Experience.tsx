import React from 'react';

interface ExperienceItemProps {
  company: string;
  logo: string;
  role: string;
  period: string;
  description: string[];
}

const ExperienceItem = ({ company, logo, role, period, description }: ExperienceItemProps) => {
  return (
    <div className="mb-12">
      <div className="flex items-center mb-4">
        <div className="w-12 h-12 bg-gray-100 rounded-md flex items-center justify-center mr-4">
          <img src={logo} alt={company} className="w-8 h-8" />
        </div>
        <div>
          <h3 className="text-lg font-semibold">{role}</h3>
          <p className="text-gray-600">{period}</p>
        </div>
      </div>
      <ul className="list-disc pl-6 space-y-2 text-gray-700">
        {description.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

const Experience = () => {
  const experiences = [
    {
      company: 'Ai Agency Marketplace',
      logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d2/Upwork-logo.svg/320px-Upwork-logo.svg.png',
      role: 'Sr. Frontend Developer',
      period: 'Nov 2021 - Present',
      description: [
        '',
        '',
        '',
        '',
      ]
    },
    {
      company: 'College League App',
      logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d2/Upwork-logo.svg/320px-Upwork-logo.svg.png',
      role: 'Team Lead',
      period: 'Jul 2019 - Oct 2021',
      description: [
        '',
        '',
        '',
        ''
      ]
    },
    {
      company: 'The Fashion District',
      logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d2/Upwork-logo.svg/320px-Upwork-logo.svg.png',
      role: 'Full Stack Developer',
      period: 'Jan 2018 - Jun 2019',
      description: [
        '',
        '',
        ''
      ]
    }
  ];

  return (
    <section id="experience" className="py-16">
      <h2 className="text-2xl font-semibold mb-8 text-center">Experience</h2>
      
      <div className="max-w-3xl mx-auto">
        {experiences.map((exp, index) => (
          <ExperienceItem 
            key={index}
            company={exp.company}
            logo={exp.logo}
            role={exp.role}
            period={exp.period}
            description={exp.description}
          />
        ))}
      </div>
    </section>
  );
};

export default Experience;