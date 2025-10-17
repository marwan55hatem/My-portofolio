import { Github, Linkedin, Mail } from 'lucide-react';

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center px-4 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-background to-accent/20"></div>
      
      <div className="max-w-4xl mx-auto text-center relative z-10 animate-fade-in">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
          Your Name
        </h1>
        <p className="text-xl md:text-2xl text-muted-foreground mb-8">
          Full Stack Developer & Creative Problem Solver
        </p>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-12">
          Building beautiful, functional web experiences with modern technologies
        </p>
        
        <div className="flex gap-6 justify-center">
          <a 
            href="https://github.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="p-3 rounded-full bg-secondary hover:bg-primary transition-all duration-300 hover:scale-110"
            aria-label="GitHub Profile"
          >
            <Github className="w-6 h-6" />
          </a>
          <a 
            href="https://linkedin.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="p-3 rounded-full bg-secondary hover:bg-primary transition-all duration-300 hover:scale-110"
            aria-label="LinkedIn Profile"
          >
            <Linkedin className="w-6 h-6" />
          </a>
          <a 
            href="mailto:your.email@example.com"
            className="p-3 rounded-full bg-secondary hover:bg-primary transition-all duration-300 hover:scale-110"
            aria-label="Email Contact"
          >
            <Mail className="w-6 h-6" />
          </a>
        </div>
      </div>
    </section>
  );
}
