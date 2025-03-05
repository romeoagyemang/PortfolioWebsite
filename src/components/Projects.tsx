import React from 'react';
import { ExternalLink, Github } from 'lucide-react';

interface ProjectProps {
  title: string;
  description: string;
  image: string;
  tags: string[];
  demoLink: string;
  githubLink: string;
}

const ProjectCard = ({ title, description, image, tags, demoLink, githubLink }: ProjectProps) => {
  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300">
      <div className="relative">
        <div className="absolute top-2 right-2 bg-indigo-500 text-white text-xs px-2 py-1 rounded">DEMO</div>
        <img src={image} alt={title} className="w-full h-48 object-cover" />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-gray-600 mb-4">{description}</p>
        
        <div className="flex flex-wrap gap-2 mb-4">
          {tags.map((tag, index) => (
            <span key={index} className="bg-gray-100 text-gray-700 text-xs px-2 py-1 rounded">{tag}</span>
          ))}
        </div>
        
        <div className="flex space-x-4">
          <a href={demoLink} className="text-gray-600 hover:text-gray-900 flex items-center">
            <ExternalLink size={16} className="mr-1" />
            <span>Demo</span>
          </a>
          <a href={githubLink} className="text-gray-600 hover:text-gray-900 flex items-center">
            <Github size={16} className="mr-1" />
            <span>GitHub</span>
          </a>
        </div>
      </div>
    </div>
  );
};

const Projects = () => {
  const projects = [
    {
      title: 'Finki',
      description: 'Cryptocurrency dashboard that helps users track their investments and market trends in real-time.',
      image: 'https://images.unsplash.com/photo-1639762681057-408e52192e55?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2232&q=80',
      tags: ['React', 'Redux', 'TailwindCSS', 'Firebase'],
      demoLink: '#',
      githubLink: '#'
    },
    {
      title: 'Finki',
      description: 'Cryptocurrency dashboard that helps users track their investments and market trends in real-time.',
      image: 'https://images.unsplash.com/photo-1639762681057-408e52192e55?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2232&q=80',
      tags: ['React', 'Redux', 'TailwindCSS', 'Firebase'],
      demoLink: '#',
      githubLink: '#'
    },
    {
      title: 'Finki',
      description: 'Cryptocurrency dashboard that helps users track their investments and market trends in real-time.',
      image: 'https://images.unsplash.com/photo-1639762681057-408e52192e55?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2232&q=80',
      tags: ['React', 'Redux', 'TailwindCSS', 'Firebase'],
      demoLink: '#',
      githubLink: '#'
    }
  ];

  return (
    <section id="projects" className="py-16">
      <h2 className="text-2xl font-semibold mb-8 text-center">Projects</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <ProjectCard 
            key={index}
            title={project.title}
            description={project.description}
            image={project.image}
            tags={project.tags}
            demoLink={project.demoLink}
            githubLink={project.githubLink}
          />
        ))}
      </div>
    </section>
  );
};

export default Projects;