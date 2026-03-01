import { cn } from "@/lib/utils";
import { useState } from "react";

const coreStack = [
  "Next.js",
  "React",
  "TypeScript",
  "Node.js",
  "MongoDB",
  "Tailwind CSS",
  "Convex",
  "Clerk",
];

const skills = [
  { name: "C", category: "languages" },
  { name: "C++", category: "languages" },
  { name: "Python", category: "languages" },
  { name: "JavaScript", category: "languages" },
  { name: "TypeScript", category: "languages" },
  { name: "Java", category: "languages" },

  { name: "HTML", category: "frontend" },
  { name: "CSS", category: "frontend" },
  { name: "React", category: "frontend" },
  { name: "Next.js", category: "frontend" },
  { name: "Tailwind CSS", category: "frontend" },
  { name: "Framer Motion", category: "frontend" },
  { name: "Monaco Editor", category: "frontend" },
  { name: "Zustand", category: "frontend" },

  { name: "Node.js", category: "backend" },
  { name: "Express.js", category: "backend" },
  { name: "Convex", category: "backend" },
  { name: "Socket.io", category: "backend" },
  { name: "Clerk", category: "backend" },
  { name: "JWT", category: "backend" },
  { name: "REST APIs", category: "backend" },

  { name: "MongoDB", category: "database" },
  { name: "Mongoose", category: "database" },
  { name: "SQL", category: "database" },
  { name: "Neon PostgreSQL", category: "database" },

  { name: "Stripe", category: "payments" },
  { name: "LemonSqueezy", category: "payments" },

  { name: "Data Structures", category: "dsa" },
  { name: "Algorithms", category: "dsa" },

  { name: "Arduino", category: "iot" },
  { name: "Embedded C", category: "iot" },

  { name: "Unity", category: "game-dev" },

  { name: "Git", category: "tools" },
  { name: "GitHub", category: "tools" },
  { name: "VS Code", category: "tools" },
  { name: "Postman", category: "tools" },
  { name: "Axios", category: "tools" },
  { name: "Vercel", category: "tools" },
  { name: "Render", category: "tools" },
];

const categories = [
  "all",
  "frontend",
  "backend",
  "languages",
  "database",
  "payments",
  "dsa",
  "iot",
  "game-dev",
  "tools",
];

export const SkillsSection = () => {
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredSkills =
    activeCategory === "all"
      ? skills
      : skills.filter((skill) => skill.category === activeCategory);

  return (
    <section id="skill" className="py-28 px-4 relative">
      <div className="container mx-auto max-w-6xl">
        {/* Heading */}
        <div className="text-center mb-20">
          <h2 className="text-4xl font-bold tracking-tight">
            My <span className="text-primary">Tech Arsenal</span>
          </h2>
          <p className="text-muted-foreground mt-4">
            Technologies I use to build scalable, production-ready systems.
          </p>
        </div>

        <div className="mb-20 text-center">
          <h3 className="text-sm uppercase tracking-wider text-muted-foreground mb-6">
            Core Stack
          </h3>

          <div className="flex flex-wrap justify-center gap-4">
            {coreStack.map((tech, i) => (
              <span
                key={i}
                className="px-6 py-2 rounded-full
                           bg-white/5 backdrop-blur-md
                           border border-white/10
                           text-primary font-medium
                           hover:bg-primary hover:text-primary-foreground
                           transition-all duration-300"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        <div className="flex flex-wrap justify-center gap-3 mb-16">
          {categories.map((category, i) => (
            <button
              key={i}
              onClick={() => setActiveCategory(category)}
              className={cn(
                "px-5 py-2 text-sm rounded-full capitalize transition-all duration-300",
                activeCategory === category
                  ? "bg-primary text-primary-foreground shadow-md"
                  : "bg-white/5 backdrop-blur-md border border-white/10 hover:bg-white/10",
              )}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredSkills.map((skill, i) => (
            <div
              key={i}
              className="
                group relative
                p-6 rounded-xl
                bg-white/5 backdrop-blur-md
                border border-white/10
                hover:border-primary/40
                hover:-translate-y-1
                hover:shadow-[0_8px_30px_rgba(0,0,0,0.3)]
                transition-all duration-300
              "
            >
              <h4 className="font-semibold text-lg">{skill.name}</h4>

              <p className="text-sm text-muted-foreground capitalize mt-2">
                {skill.category}
              </p>

              <div className="absolute bottom-0 left-0 h-[2px] w-0 bg-primary transition-all duration-300 group-hover:w-full rounded-full" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
