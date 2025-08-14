import { cn } from "@/lib/utils";
import { useState } from "react";

const skills = [
  { name: "C", level: 80, category: "languages" },
  { name: "C++", level: 70, category: "languages" },
  { name: "Python", level: 75, category: "languages" },
  { name: "JavaScript", level: 70, category: "languages" },

  { name: "HTML", level: 95, category: "frontend" },
  { name: "CSS", level: 90, category: "frontend" },
  { name: "React", level: 90, category: "frontend" },
  { name: "Next.js", level: 60, category: "frontend" },
  { name: "Tailwind CSS", level: 60, category: "frontend" },

  { name: "Node.js", level: 50, category: "backend" },
  { name: "Express", level: 50, category: "backend" },

  { name: "MongoDB", level: 70, category: "database" },
  { name: "SQL", level: 85, category: "database" },

  { name: "DSA (C Implementation)", level: 65, category: "dsa" },

  { name: "Arduino Uno", level: 85, category: "iot" },
  { name: "Sensors", level: 85, category: "iot" },
  { name: "Microcontrollers", level: 55, category: "iot" },

  { name: "Android (C#)", level: 75, category: "mobile" },

  { name: "Unity", level: 69, category: "game-dev" },

  { name: "Git/GitHub", level: 75, category: "tools" },
  { name: "VS Code", level: 85, category: "tools" },
];
const categories = [
  "all",
  "frontend",
  "backend",
  "languages",
  "database",
  "dsa",
  "iot",
  "mobile",
  "tools",
];

export const SkillsSection = () => {
  const [activeCategory, setActiveCategory] = useState("all");
  const filteredSkills = skills.filter(
    (skill) => activeCategory === "all" || skill.category === activeCategory
  );
  return (
    <section id="skill" className="py-24 px-4 relative bg-secondary/30">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          My <span className="text-primary">Skills</span>
        </h2>

        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category, key) => (
            <button
              key={key}
              onClick={() => setActiveCategory(category)}
              className={cn(
                "px-5 py-2 rounded-full transition-colors duration-300 capitalize",
                activeCategory === category
                  ? "bg-primary text-primary-foreground"
                  : "bg-secondary/70 text-foreground hover:bg-secondary"
              )}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredSkills.map((skill, key) => (
            <div
              key={key}
              className="bg-card p-6 rounded-lg shadow-xs card-hover"
            >
              <div className="text-left mb-4">
                <h3 classname="font-semibold text-lg">{skill.name}</h3>
              </div>
              <div classname="w-full bg-secondary/50 h-2 rounded-full overflow-hidden">
                <div
                  className="bg-primary h-2 rounded-full origin-left animate-[grow_1.5s_ease-out"
                  style={{ width: skill.level + "%" }}
                />
              </div>
              <div className="text-right mt-1">
                <span className="text-sm text-muted-foreground">
                  {skill.level}%
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
