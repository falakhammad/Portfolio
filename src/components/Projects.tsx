import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ExternalLink, Github } from 'lucide-react';

const projects = [
  {
    title: 'E-Commerce Platform',
    description: 'A modern e-commerce solution with React, TypeScript, and Stripe integration. Features include real-time inventory, user authentication, and mobile-responsive design.',
    technologies: ['React', 'TypeScript', 'Node.js', 'MongoDB'],
    category: 'Web Application',
    image: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?auto=format&fit=crop&w=800&q=80'
  },
  {
    title: 'Portfolio Dashboard',
    description: 'An analytics dashboard for tracking portfolio performance with interactive charts, real-time data updates, and comprehensive reporting features.',
    technologies: ['Next.js', 'Chart.js', 'PostgreSQL', 'Tailwind'],
    category: 'Dashboard',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80'
  },
  {
    title: 'Mobile Banking App',
    description: 'A secure mobile banking application with biometric authentication, transaction history, and budget tracking capabilities.',
    technologies: ['React Native', 'Redux', 'Firebase', 'Expo'],
    category: 'Mobile App',
    image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=800&q=80'
  },
  {
    title: 'SaaS Management Tool',
    description: 'A comprehensive SaaS platform for team collaboration with project management, file sharing, and real-time communication features.',
    technologies: ['Vue.js', 'Express.js', 'Socket.io', 'AWS'],
    category: 'SaaS Platform',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80'
  }
];

const Projects = () => {
  return (
    <section id="projects" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 text-foreground">
            Featured Projects
          </h2>
          <p className="text-center text-muted-foreground text-lg mb-16 max-w-2xl mx-auto">
            A showcase of recent work demonstrating technical expertise and creative problem-solving
          </p>
          
          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <Card key={index} className="card-elevated group overflow-hidden">
                <div className="relative overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 bg-accent text-accent-foreground text-sm rounded-full">
                      {project.category}
                    </span>
                  </div>
                </div>
                
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-3 text-foreground">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground mb-4 text-sm leading-relaxed">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.map((tech, techIndex) => (
                      <span 
                        key={techIndex}
                        className="px-2 py-1 bg-primary/10 text-primary text-xs rounded-md"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  
                  <div className="flex gap-3">
                    <Button size="sm" className="flex items-center gap-2">
                      <ExternalLink size={16} />
                      Live Demo
                    </Button>
                    <Button variant="outline" size="sm" className="flex items-center gap-2">
                      <Github size={16} />
                      Code
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;