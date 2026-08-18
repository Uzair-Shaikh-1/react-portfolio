import { Code2, Lightbulb, Rocket, Users } from "lucide-react";

const highlights = [
  {
    icon: Code2,
    title: "Clean Code",
    description:
      "Writing maintainable, scalable code that stands the test of time.",
  },
  {
    icon: Rocket,
    title: "Performance",
    description:
      "Optimizing for speed and delivering lightning-fast user experiences.",
  },
  {
    icon: Users,
    title: "Collaboration",
    description: "Working closely with teams to bring ideas to life.",
  },
  {
    icon: Lightbulb,
    title: "Innovation",
    description:
      "Staying ahead with the latest technologies and best practices.",
  },
];

const About = () => {
  return (
    <section id="about" className="py-32 relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10 ">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* left column */}
          <div className="space-y-8">
            <div className="animade-fade-in">
              <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase">
                About Me
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold leading-tight animate-fade-in animate-delay-100 text-secondary-foreground">
              Building the future,
              <span className="font-serif italic font-normal text-white">
                {" "}
                one components at a time.
              </span>
            </h2>

            <div className="space-y-4 text-muted-foreground animate-fade-in animation-delay-200">
              <p>
                My journey into development started with a question. I remember
                typing something into Google and instantly getting thousands of
                results, links, and suggestions. I wasn't just interested in the
                answer anymore I started wondering,{" "}
                <span className="text-foreground">
                  how is all of this actually happening?
                </span>
              </p>

              <p>
                That question led me into web development. I started learning
                how the websites I used every day were built, and eventually
                moved from understanding the interface to building the systems
                behind it. Today, I work with the MERN stack, building
                applications with React, Node.js, Express, and MongoDB.
              </p>

              <p>
                I'm still driven by that same curiosity. I like taking things
                apart, understanding how they work, and then building something
                of my own. Every project is another question to answer, another
                problem to solve, and another opportunity to become a better
                developer.
              </p>
            </div>

            <div className="glass rounded-2xl p-6 glow-border animate-fade-in animation-delay-300">
              <p className="text-lg font-medium italic text-foreground">
                "Every application starts with a question. My job is to turn
                that question into something real something useful, reliable,
                and worth using."
              </p>
            </div>
          </div>

          {/* right column */}
          <div className="grid sm:grid-cols-2 gap-6">
            {highlights.map((item, idx) => {
              return (
                <div
                  key={idx}
                  className="glass p-6 rounded-2xl group animate-fade-in"
                  style={{ animationDelay: `${(idx + 1) * 100} ms` }}
                >
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 hover:bg-primary/20">
                    <item.icon className="w-6 h-6 text-primary " />
                  </div>
                  <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                  <p className="text-sm text-muted-foreground">
                    {item.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
