
import { Container } from "./ui/container";
import { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";

const testimonials = [
  {
    id: 1,
    content:
      "The Startup Wallah's investor network was instrumental in helping us secure our seed funding of $1.2M. Their guidance throughout the process was invaluable.",
    author: "Samantha Chen",
    position: "CEO, FinTech Solutions",
    image: "https://randomuser.me/api/portraits/women/18.jpg",
    company: "FinTech Solutions",
    funding: "$1.2M",
  },
  {
    id: 2,
    content:
      "The mentorship program exceeded our expectations. Our mentor helped us pivot our business model, resulting in a 300% increase in user acquisition within just two months.",
    author: "Rajiv Mehta",
    position: "Founder, EduSpark",
    image: "https://randomuser.me/api/portraits/men/54.jpg",
    company: "EduSpark",
    funding: "$800K",
  },
  {
    id: 3,
    content:
      "The pitch deck service transformed our presentation. We went from getting rejected to securing three investment offers after working with The Startup Wallah team.",
    author: "Alex Johnson",
    position: "Co-founder, GreenTech",
    image: "https://randomuser.me/api/portraits/men/22.jpg",
    company: "GreenTech",
    funding: "$2.5M",
  },
];

const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const goToNext = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setActiveIndex((prev) => (prev + 1) % testimonials.length);
    setTimeout(() => setIsAnimating(false), 500);
  };

  const goToPrev = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    setTimeout(() => setIsAnimating(false), 500);
  };

  useEffect(() => {
    const interval = setInterval(goToNext, 6000);
    return () => clearInterval(interval);
  }, [activeIndex, isAnimating]);

  return (
    <section id="testimonials" className="section-padding bg-primary/5 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-white to-transparent z-0"></div>
      <div className="absolute top-1/4 -right-20 w-72 h-72 bg-secondary/5 rounded-full filter blur-3xl z-0"></div>
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-white to-transparent z-0"></div>
      
      <Container className="relative z-10">
        <div className="mb-16 max-w-3xl mx-auto text-center">
          <div className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary font-medium text-sm mb-4 animate-fade-in">
            Success Stories
          </div>
          <h2 className="section-title animate-fade-in" style={{ animationDelay: "0.1s" }}>
            See What <span className="text-gradient">Our Startups</span> Have Achieved
          </h2>
          <p className="section-subtitle animate-fade-in" style={{ animationDelay: "0.2s" }}>
            Don't just take our word for it. Hear directly from founders who have experienced transformative results with our support.
          </p>
        </div>

        <div className="relative animate-fade-in" style={{ animationDelay: "0.3s" }}>
          <div className="relative overflow-hidden p-1">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${activeIndex * 100}%)` }}
            >
              {testimonials.map((testimonial) => (
                <div key={testimonial.id} className="w-full flex-shrink-0 px-1">
                  <div className="glass-effect rounded-2xl p-6 md:p-10 h-full">
                    <div className="flex flex-col md:flex-row gap-8 items-start">
                      <div className="w-full md:w-1/3">
                        <div className="relative mb-6">
                          <div className="w-20 h-20 rounded-full overflow-hidden border-4 border-white shadow-md">
                            <img
                              src={testimonial.image}
                              alt={testimonial.author}
                              className="w-full h-full object-cover"
                            />
                          </div>
                          <div className="absolute -bottom-3 -right-3 w-8 h-8 bg-secondary rounded-full flex items-center justify-center">
                            <Quote className="w-4 h-4 text-white" />
                          </div>
                        </div>
                        <h3 className="text-xl font-bold">{testimonial.author}</h3>
                        <p className="text-text-muted mb-2">{testimonial.position}</p>
                        <div className="inline-block px-3 py-1 bg-primary/10 text-primary text-sm font-medium rounded-full">
                          {testimonial.company}
                        </div>
                        <div className="mt-4 pt-4 border-t border-gray-200">
                          <div className="text-sm text-text-muted">Funding Raised</div>
                          <div className="text-2xl font-bold text-secondary">
                            {testimonial.funding}
                          </div>
                        </div>
                      </div>
                      <div className="w-full md:w-2/3">
                        <blockquote className="text-xl md:text-2xl font-medium italic leading-relaxed text-text-dark">
                          "{testimonial.content}"
                        </blockquote>
                        <div className="mt-8 flex items-center">
                          <div className="flex space-x-1">
                            {[...Array(5)].map((_, i) => (
                              <svg
                                key={i}
                                className="w-5 h-5 text-yellow-500"
                                fill="currentColor"
                                viewBox="0 0 20 20"
                              >
                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                              </svg>
                            ))}
                          </div>
                          <span className="ml-2 text-text-muted">Case Study</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="flex justify-center mt-8 gap-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  activeIndex === index ? "bg-primary w-8" : "bg-gray-300"
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>

          <div className="absolute top-1/2 left-4 transform -translate-y-1/2 z-10 hidden md:block">
            <button
              onClick={goToPrev}
              className="w-10 h-10 rounded-full bg-white shadow-md flex items-center justify-center hover:bg-gray-50 transition-colors"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="w-6 h-6 text-primary" />
            </button>
          </div>
          <div className="absolute top-1/2 right-4 transform -translate-y-1/2 z-10 hidden md:block">
            <button
              onClick={goToNext}
              className="w-10 h-10 rounded-full bg-white shadow-md flex items-center justify-center hover:bg-gray-50 transition-colors"
              aria-label="Next testimonial"
            >
              <ChevronRight className="w-6 h-6 text-primary" />
            </button>
          </div>
        </div>

        <div className="mt-16 text-center animate-fade-in" style={{ animationDelay: "0.4s" }}>
          <a
            href="#resource-hub"
            className="btn-hover inline-flex items-center justify-center rounded-md px-6 py-3 font-semibold text-white bg-secondary shadow-md"
          >
            Explore Resources
          </a>
        </div>
      </Container>
    </section>
  );
};

export default Testimonials;
