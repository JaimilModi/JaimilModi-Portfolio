import { Code, GraduationCap, Rocket } from "lucide-react";

export const AboutSection = () => {
  return (
    <section id="abouts" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          About <span className="text-primary"> Me</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold">
              Passionate Web Developer & Creator
            </h3>
            <p className="text-muted-foreground">
              I&#39;m new to the tech world but excited to grow every day. I
              love exploring new tools, learning skills, and creating projects
              that bring ideas to life.
            </p>
            <p className="text-muted-foreground">
              I&#39;m a beginner developer passionate about learning new
              technologies and building creative projects. I&#39;m always eager
              to explore, improve, and turn fresh ideas into reality.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
              <a href="#contact" className="cosmic-button">
                Get In Touch
              </a>

              <a
                href="/Jaimil_Modi_Resume.pdf"
                download="Jaimil_Modi_Resume.pdf"
                className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300"
              >
                Download CV
              </a>
            </div>
          </div>
          <div className="grid grid-cols-1 gap-6">
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Code className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">Full-Stack Explorer</h4>
                  <p className="text-muted-foreground">
                    Turning ideas into reality using MERN stack and exploring
                    new tools, tech, and creative solutions.
                  </p>
                </div>
              </div>
            </div>

            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Rocket className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">Learning & Building</h4>
                  <p className="text-muted-foreground">
                    Exploring new technologies and creating projects to sharpen
                    my skills.
                  </p>
                </div>
              </div>
            </div>

            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <GraduationCap className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">Student Developer</h4>
                  <p className="text-muted-foreground">
                    Currently a student exploring web development and modern
                    technologies.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
