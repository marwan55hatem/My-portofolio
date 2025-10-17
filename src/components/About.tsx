export default function About() {
  return (
    <section id="about" className="py-20 px-4">
      <div className="max-w-4xl mx-auto animate-slide-up">
        <h2 className="text-4xl font-bold mb-8 text-center">About Me</h2>
        <div className="bg-secondary/50 backdrop-blur-sm rounded-2xl p-8 border border-border">
          <p className="text-lg text-muted-foreground mb-4">
            I'm a passionate developer with expertise in creating modern web applications. 
            I love turning complex problems into simple, beautiful, and intuitive solutions.
          </p>
          <p className="text-lg text-muted-foreground">
            With a strong foundation in both frontend and backend technologies, I build 
            full-stack applications that are scalable, performant, and user-friendly.
          </p>
        </div>
      </div>
    </section>
  );
}
