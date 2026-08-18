import React from "react";

const experiences = [
  {
    period: "Apr 2026 — Sep 2026",
    role: "Full Stack Developer Course",
    company: "Mehran University of Engineering & Technology",
    description:
      "A six-month full stack development program focused on building practical web applications and developing a strong foundation across frontend and backend technologies.",
    technologies: [
      "HTML",
      "CSS",
      "JavaScript",
      "React",
      "Node.js",
      "Express.js",
      "MongoDB",
    ],
    current: true,
  },
  {
    period: "May 2026 — Present",
    role: "Frontend Developer Intern",
    company: "Devnito",
    description:
      "Working as a frontend developer intern, contributing to the development of modern web interfaces and strengthening practical experience with React and frontend development workflows.",
    technologies: ["React", "JavaScript", "HTML", "CSS", "Tailwind CSS"],
    current: true,
  },
];

const Experiance = () => {
  return (
    <section id="experiance" className="py-32 relative overflow-hidden">
      <div
        className="absolute top-1/2 left-1/4 w-96
       h-96 bg-primary/5 rounded-full blur-3xl -translate-y-1/2"
      />

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <span
            className="text-secondary-foreground text-sm
           font-medium tracking-wider uppercase animate-fade-in"
          >
            Career Journey
          </span>
          <h2
            className="text-4xl md:text-5xl font-bold
           mt-4 mb-6 animate-fade-in animation-delay-100
            text-secondary-foreground"
          >
            Learning,
            <span className="font-serif italic font-normal text-white">
              {" "}
              Building, Growing.
            </span>
          </h2>
          <p
            className="text-muted-foreground
  animate-fade-in animation-delay-200"
          >
            A journey of learning, building, and growing from being curious
            about how the web works to building real applications and gaining
            hands-on experience as a developer.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative ">
          <div className="timeline-glow absolute left-0 md:left-1/2 top-0 bottom-0 w-[2px] bg-gradient-to-b from-primary/70 via-primary/30 to-transparent md:-translate-x-1/2 shadow-[0_0_25px_rgba(32,178,166,0.8)]" />

          {/* Experiance Item */}
          <div className="space-y-12">
            {experiences.map((exp, idx) => {
              return (
                <div
                  className="relative grid md:grid-cols-2 gap-8 animate-fade-in "
                  key={idx}
                  style={{ animationDelay: `${(idx + 1) * 150}ms` }}
                >
                  {/* timeline dot */}
                  <div className="absolute left-0 md:left-1/2 top-0 w-3 h-3 bg-primary rounded-full -translate-x-1/2 ring-4 ring-background z-10  ">
                    {exp.current && (
                      <span className="absolute inset-0 rounded-full bg-primary animate-ping opacity-75" />
                    )}
                  </div>

                  {/* content */}
                  <div
                    className={`pl-8 md:pl-0 ${idx % 2 === 0 ? "md:pr-16 md:text-right" : "md:col-start-2 md:pl-16"}`}
                  >
                    <div
                      className={`glass p-6 rounded-2xl border border-primary/30 hover:border-primary/50 transition-all duration-500`}
                    >
                      <span className="text-sm text-primary font-medium ">
                        {" "}
                        {exp.period}{" "}
                      </span>

                      <h3 className="text-xl font-semibold mt-2">{exp.role}</h3>
                      <p className="text-muted-foreground"> {exp.company} </p>
                      <p className="text-sm text-muted-foreground mt-4">
                        {" "}
                        {exp.description}{" "}
                      </p>
                      <div
                        className={` flex flex-wrap gap-2 mt-4 ${idx % 2 === 0 ? "md:justify-end" : ""}`}
                      >
                        {" "}
                        {exp.technologies.map((tech, techIdx) => {
                          return (
                            <span
                              key={techIdx}
                              className="px-3 py-1 bg-surface text-xs rounded-full text-muted-foreground"
                            >
                              {" "}
                              {tech}{" "}
                            </span>
                          );
                        })}{" "}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experiance;
