import { ArrowUpRight, Github } from "lucide-react";
import { AnimatedBorderButton } from "../components/AnimatedBorderButton";

const projects = [
  {
    title: "Image Project",
    description:
      "A full-stack image application built with the MERN stack, demonstrating image handling and a complete frontend-to-backend workflow.",
    image: "/projects/image-project.png",
    tags: ["React", "Node.js", "Express.js", "MongoDB"],
    link: "https://www.youtube.com/watch?v=ja7HJiVaDLg",
    github:
      "https://github.com/Uzair-Shaikh-1/Image-Project-By-Developer-Uzair",
  },

  {
    title: "Admin Dashboard",
    description:
      "A modern admin dashboard built with React, featuring Material UI components and Nivo charts for interactive data visualization.",
    image: "/projects/admindashboard.png",
    tags: ["React", "MUI", "Nivo Charts"],
    link: "https://www.youtube.com/watch?v=0M54JAhtuMY",
    github: "https://github.com/Uzair-Shaikh-1/Admin-Dashboard-by-devUzair",
  },

  {
    title: "Notes Project",
    description:
      "A browser-based notes application built with React and Local Storage for creating and managing notes directly in the browser.",
    image: "/projects/notes-project.png",
    tags: ["React", "Local Storage"],
    link: "https://notes-project-by-dev-uzair.netlify.app/",
    github: "https://github.com/Uzair-Shaikh-1/Notes-project",
  },

  {
    title: "E-commerce Store",
    description:
      "A frontend e-commerce store built with HTML, CSS, and JavaScript, featuring a product-focused shopping interface and interactive functionality.",
    image: "/projects/e-com store.png",
    tags: ["HTML", "CSS", "JavaScript"],
    link: "https://store-by-developer-uzair.netlify.app/",
    github:
      "https://github.com/Uzair-Shaikh-1/E-commerce-Store-by-Developer-Uzair1",
  },

  {
    title: "Task Manager",
    description:
      "A full-stack task management application built with the MERN stack for creating, managing, and organizing tasks.",
    image: "/projects/task-manager.png",
    tags: ["React", "Node.js", "Express.js", "MongoDB"],
    link: "https://www.youtube.com/watch?v=NiBnJ4pfLls",
    github: "https://github.com/Uzair-Shaikh-1/Task-Manager-By-Developer-Uzair",
  },

  {
    title: "Login API",
    description:
      "A backend authentication project demonstrating user login functionality and API-based authentication using the MERN stack.",
    image: "/projects/image-project.png",
    tags: ["React", "Node.js", "Express.js", "MongoDB"],
    link: "https://www.youtube.com/watch?v=kz25Zn-H8j4",
    github: "https://github.com/Uzair-Shaikh-1/Login-Api-By-Developer-Uzair",
  },

  {
    title: "Social Media Web",
    description:
      "A social media website built with HTML, CSS, and JavaScript, featuring a structured social platform interface and interactive frontend functionality.",
    image: "/projects/social-media-web.png",
    tags: ["HTML", "CSS", "JavaScript"],
    link: "https://social-media-web-by-developer-uzair1.netlify.app/",
    github:
      "https://github.com/Uzair-Shaikh-1/Social-Media-web-by-developer-uzair",
  },

  {
    title: "Chrome Extension to Easily Store Leads",
    description:
      "A Chrome extension built with HTML, CSS, JavaScript, and Local Storage for saving and managing leads directly from the browser.",
    image: "/projects/chrome-extension.png",
    tags: ["HTML", "CSS", "JavaScript", "Local Storage"],
    link: "https://www.youtube.com/watch?v=2YOcXd-hCC8",
    github:
      "https://github.com/Uzair-Shaikh-1/Chrome-extension-to-easily-store-leads-by-developer-uzair",
  },

  {
    title: "GPT-5 Web",
    description:
      "A modern GPT-5 inspired web interface built with React and CSS, focused on creating a clean and interactive AI-style user experience.",
    image: "/projects/gpt-5 web.png",
    tags: ["React", "CSS"],
    link: "https://gpt-5-web-bydev-uzair.netlify.app/",
    github: "https://github.com/Uzair-Shaikh-1/gpt-5-web-bydev-uzair",
  },

  {
    title: "FB Clone",
    description:
      "A Facebook-inspired web interface built with HTML, CSS, and JavaScript, recreating the core look and feel of a social media platform.",
    image: "/projects/facebook-clone.png",
    tags: ["HTML", "CSS", "JavaScript"],
    link: "https://fb-dashboard11.netlify.app/",
    github: "https://github.com/Uzair-Shaikh-1/Fb-Dashboard",
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-32 relative overflow-hidden">
      {/* bg glows */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 left-0 w-64 h-64 bg-highlight/5 rounded-full blur-3xl" />
      <div className="container mx-auto px-6 relative z-10">
        {/* section header */}
        <div className="text-center mx-auto max-w-3xl mb-16 ">
          <span className="text-secondary-foreground text-sm font-medium tracking-wider  uppercase animate-fade-in">
            Featured Work
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6 animation-delay-100 text-secondary-foreground">
            Projects that
            <span className="font-serif italic font-normal text-white">
              {" "}
              Make an impact.
            </span>
          </h2>
          <p className="text-muted-foreground animate-fade-in animation-delay-200">
            A selection of my recent work, from complex web applications to
            innovative tools that solve real-world problems.
          </p>
        </div>

        {/* projects Grid */}
        <div className="grid md:grid-cols-2 gap-8 ">
          {projects.map((project, idx) => {
            return (
              <div
                className="group glass rounded-2xl overflow-hidden animate-fade-in"
                style={{ animationDelay: `${(idx + 1) * 100}ms` }}
                key={idx}
              >
                {/* image */}
                <div className="relative  overflow-hidden aspect-video ">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition:transform duration-700 group-hover:scale-110"
                  />
                  <div
                    className="absolute inset-0 
                bg-linear-to-t from-card via-card/50
                 to-transparent opacity-60"
                  />
                </div>

                {/* content */}
                <div className="p-6 space-y-4">
                  <div className="flex items-start justify-between ">
                    <h3 className="text-xl font-semibold group-hover:text-primary transition-colors">
                      {project.title}
                    </h3>
                    <div className="flex justify-center align-center gap-2">
                      {" "}
                      <a
                        href={project.link}
                        className="p-3 rounded-full glass hover:bg-primary hover:text-primary-foreground transition-all"
                      >
                        <ArrowUpRight className="w-5 h-5" />
                      </a>
                      <a
                        href={project.github}
                        className="p-3 rounded-full glass hover:bg-primary hover:text-primary-foreground transition-all"
                      >
                        <Github className="w-5 h-5" />
                      </a>
                    </div>
                  </div>
                  <p className="text-muted-foreground text-sm">
                    {" "}
                    {project.description}{" "}
                  </p>
                  <div className="flex flex-wrap gap-2 ">
                    {" "}
                    {project.tags.map((tag, tagIdx) => {
                      return (
                        <span
                          key={tagIdx}
                          className="px-4 py-1.5 rounded-full bg-surface text-xs font-medium border-border/50 text-muted-foreground hover:border-primary/50 hover:text-primary transition-all duration-300"
                        >
                          {" "}
                          {tag}{" "}
                        </span>
                      );
                    })}{" "}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* View all CTA */}
        <div className="text-center mt-12 animate-fade-in animation-delay-500">
          <AnimatedBorderButton>
            View All Projects <ArrowUpRight className="w-5 h-5" />
          </AnimatedBorderButton>
        </div>
      </div>
    </section>
  );
};

export default Projects;
