import { ChevronLeft, ChevronRight, Quote } from "lucide-react";

const Testimonial = () => {
  return (
    <section id="testimonials" className="py-32 relative overflow-hidden">
      <div
        className="absolute top-1/2 left-1/2
       w-[800px] h-[800px] bg-primary/5
        rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"
      />
      <div
        className="container mx-auto 
      px-6 relative z-10"
      >
        {/* Section Header */}
        <div
          className="text-center max-w-3xl 
        mx-auto mb-16"
        >
          <span
            className="text-secondary-foreground 
          text-sm font-medium tracking-wider 
          uppercase animate-fade-in"
          >
            What People Say
          </span>
          <h2
            className="text-4xl md:text-5xl 
          font-bold mt-4 mb-6 animate-fade-in 
          animation-delay-100 text-secondary-foreground"
          >
            Kind words from ,
            <span
              className="font-serif italic 
            font-normal text-white gap-1"
            >
              amazing people.
            </span>
          </h2>
        </div>

        {/* testimonial card */}
        <div className="flex justify-center align-center">
          <img
            className="object-cover w-full max-w-2xl "
            src="/projects/testimonial-5.png"
            alt="testimonial"
          />
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
