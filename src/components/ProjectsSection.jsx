import { ArrowRight, ExternalLink } from "lucide-react";

const projects = [
  {
  id: 1,
  title: "Food Delivery Webpage",
  description:
    "CraveCart is a full-stack food ordering platform that lets users browse menus, place orders, and make secure payments. It features real-time order tracking, user authentication, and an admin panel for restaurant and menu management.",
  image: "/projects/CraveCart.png",
  tags: [
    "React",
    "MongoDb",
    "Express",
    "Axios",
    "Stripe",
    "Bcrypt",
    "Nodemon",
  ],
  Url: "https://food-del-frontend-uva2.onrender.com",
},
{
  id: 2,
  title: "SnappyTalk",
  description:
    "SnappyTalk is a real-time chat application designed for seamless communication. It supports private messaging, online status indicators, and a responsive UI to ensure smooth conversations across all devices.",
  image: "/projects/snappy-talk.png",
  tags: ["React", "MongoDb", "Cloudinary", "Axios", "Socket.io", "Daisy UI"],
  Url: "https://snappytalk.onrender.com/",
},
{
  id: 3,
  title: "TaskoraAI",
  description:
    "TaskoraAI is a SaaS AI platform offering tools for article and blog title generation, AI image creation, object/background removal, and resume reviews. It includes Clerk authentication, a personalized dashboard, and a community hub for collaboration.",
  image: "/projects/Taskora-ai.png",
  tags: [
    "React",
    "Axios",
    "Clerk",
    "Express",
    "Cloudinary",
    "Gemini API",
    "CORS",
  ],
  Url: "https://taskora-ai.vercel.app/",
}

];

export const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          {" "}
          Featured <span className="text-primary"> Projects </span>
        </h2>
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Here are some of my recent projects. Each project was carefully
          crafted with attention to detail, performance, and user experience.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, key) => (
            <div
              key={key}
              className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover"
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <div className="p-6">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span className="px-2 py-1 text-xs font-medium border rounded-full bg-primary/20 text-secondary-foreground">
                      {tag}
                    </span>
                  ))}
                </div>

                <h3 className="text-xl font-semibold mb-1">{project.title}</h3>
                <p className="text-muted-foreground text-sm mb-4">
                  {project.description}
                </p>
                <div className="flex justify-between items-center">
                  <div className="flex space-x-3">
                    <a
                      href={project.Url}
                      target="_blank"
                      className="text-foreground/80 hover:text-primary transition-colors duration-300"
                    >
                      <ExternalLink size={20} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            className="cosmic-button w-fit flex items-center mx-auto gap-2"
            target="_blank"
            href="https://github.com/jaimilModi"
          >
            Check My Github
            <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
};
