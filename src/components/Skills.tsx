import { Card, CardContent } from '@/components/ui/card';
import { Code, Palette, Smartphone, Zap } from 'lucide-react';

const skills = [
  {
    icon: Code,
    title: 'Frontend Development',
    description: 'React, TypeScript, Next.js, Vue.js',
    technologies: ['React', 'TypeScript', 'Next.js', 'Tailwind CSS', 'Vue.js']
  },
  {
    icon: Palette,
    title: 'UI/UX Design',
    description: 'Modern design principles and user experience',
    technologies: ['Figma', 'Adobe XD', 'Prototyping', 'User Research']
  },
  {
    icon: Smartphone,
    title: 'Responsive Design',
    description: 'Mobile-first approach and cross-platform compatibility',
    technologies: ['CSS Grid', 'Flexbox', 'Bootstrap', 'Material-UI']
  },
  {
    icon: Zap,
    title: 'Performance',
    description: 'Optimization and modern development practices',
    technologies: ['Webpack', 'Vite', 'Performance Audits', 'SEO']
  }
];

const Skills = () => {
  return (
    <section id="skills" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 text-foreground">
            Skills & Expertise
          </h2>
          <p className="text-center text-muted-foreground text-lg mb-16 max-w-2xl mx-auto">
            A comprehensive toolkit for building modern, scalable, and beautiful web applications
          </p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {skills.map((skill, index) => {
              const IconComponent = skill.icon;
              return (
                <Card key={index} className="card-elevated group hover:scale-105 transition-all duration-300">
                  <CardContent className="p-6 text-center">
                    <div className="mb-4 flex justify-center">
                      <div className="p-3 bg-accent/10 rounded-lg group-hover:bg-accent/20 transition-colors duration-300">
                        <IconComponent className="w-8 h-8 text-accent" />
                      </div>
                    </div>
                    <h3 className="text-xl font-semibold mb-3 text-foreground">
                      {skill.title}
                    </h3>
                    <p className="text-muted-foreground mb-4 text-sm">
                      {skill.description}
                    </p>
                    <div className="flex flex-wrap gap-2 justify-center">
                      {skill.technologies.map((tech, techIndex) => (
                        <span 
                          key={techIndex}
                          className="px-2 py-1 bg-secondary text-secondary-foreground text-xs rounded-md"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;