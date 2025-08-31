import { Card } from '@/components/ui/card';

const About = () => {
  return (
    <section id="about" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 text-foreground">
            About Me
          </h2>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-semibold mb-6 text-foreground">
                Passionate Developer & Designer
              </h3>
              <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                With over 5 years of experience in web development, I specialize in creating 
                beautiful, functional, and user-centered digital experiences. My expertise spans 
                modern frontend technologies, responsive design, and performance optimization.
              </p>
              <p className="text-muted-foreground text-lg leading-relaxed mb-8">
                I believe in the power of clean code, thoughtful design, and continuous learning. 
                Every project is an opportunity to push boundaries and deliver exceptional results.
              </p>
              
              <div className="grid grid-cols-2 gap-4">
                <Card className="p-4 text-center card-elevated">
                  <div className="text-2xl font-bold text-accent mb-2">50+</div>
                  <div className="text-sm text-muted-foreground">Projects Completed</div>
                </Card>
                <Card className="p-4 text-center card-elevated">
                  <div className="text-2xl font-bold text-accent mb-2">5+</div>
                  <div className="text-sm text-muted-foreground">Years Experience</div>
                </Card>
              </div>
            </div>
            
            <div className="relative">
              <div className="bg-gradient-to-br from-accent/20 to-purple-500/20 rounded-2xl p-8 backdrop-blur-sm">
                <div className="bg-card rounded-xl p-6 card-elevated">
                  <h4 className="text-xl font-semibold mb-4 text-foreground">Core Values</h4>
                  <ul className="space-y-3">
                    <li className="flex items-center text-muted-foreground">
                      <div className="w-2 h-2 bg-accent rounded-full mr-3"></div>
                      Quality over quantity
                    </li>
                    <li className="flex items-center text-muted-foreground">
                      <div className="w-2 h-2 bg-accent rounded-full mr-3"></div>
                      User-centered design
                    </li>
                    <li className="flex items-center text-muted-foreground">
                      <div className="w-2 h-2 bg-accent rounded-full mr-3"></div>
                      Continuous innovation
                    </li>
                    <li className="flex items-center text-muted-foreground">
                      <div className="w-2 h-2 bg-accent rounded-full mr-3"></div>
                      Clean, maintainable code
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;