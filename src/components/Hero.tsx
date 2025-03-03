
import { Container } from "./ui/container";
import { ArrowRight } from "lucide-react";
import { useEffect, useRef } from "react";

const Hero = () => {
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!heroRef.current) return;
      const scrollY = window.scrollY;
      const opacity = 1 - scrollY / 500;
      const transform = scrollY / 3;
      
      if (heroRef.current) {
        heroRef.current.style.opacity = Math.max(opacity, 0).toString();
        heroRef.current.style.transform = `translateY(${transform}px)`;
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <section className="relative pt-28 md:pt-36 lg:pt-40 pb-20 md:pb-32 overflow-hidden">
      {/* Background with a subtle geometric pattern */}
      <div className="absolute inset-0 bg-gradient-to-b from-white to-gray-50 z-0"></div>
      
      {/* Animated gradient orbs */}
      <div className="absolute top-1/4 right-0 w-64 h-64 bg-primary/5 rounded-full filter blur-3xl animate-float opacity-70 z-0"></div>
      <div className="absolute bottom-1/4 left-10 w-72 h-72 bg-secondary/5 rounded-full filter blur-3xl animate-float opacity-70 z-0" style={{ animationDelay: "1s" }}></div>
      
      <Container className="relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12 md:gap-16">
          <div className="w-full lg:w-1/2 space-y-6 animate-fade-in" ref={heroRef}>
            <div className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary font-medium text-sm mb-4">
              Your Startup's Secret Weapon
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl leading-tight font-bold">
              <span className="text-gradient">Ideas into</span> Empire
            </h1>
            <p className="text-lg md:text-xl text-text-muted max-w-xl">
              Connect with top investors, grab expert strategies, and rocket your startup to the stars. Let's make it happen.
            </p>
            <div className="pt-4 flex flex-wrap gap-4">
              <a
                href="#cta"
                className="btn-hover inline-flex items-center justify-center rounded-md px-6 py-3 font-semibold text-white bg-secondary shadow-md"
              >
                Get Started
                <ArrowRight className="ml-2 h-4 w-4" />
              </a>
              <a
                href="#services"
                className="btn-hover inline-flex items-center justify-center rounded-md px-6 py-3 font-semibold text-primary border border-primary/20 hover:bg-primary/5"
              >
                Explore Services
              </a>
            </div>
            <div className="pt-8 flex items-center gap-6">
              <div className="flex -space-x-2">
                <div className="w-10 h-10 rounded-full bg-gray-300 border-2 border-white flex items-center justify-center text-xs font-bold text-white">JS</div>
                <div className="w-10 h-10 rounded-full bg-gray-400 border-2 border-white flex items-center justify-center text-xs font-bold text-white">KP</div>
                <div className="w-10 h-10 rounded-full bg-gray-500 border-2 border-white flex items-center justify-center text-xs font-bold text-white">RV</div>
                <div className="w-10 h-10 rounded-full bg-gray-600 border-2 border-white flex items-center justify-center text-xs font-bold text-white">+5</div>
              </div>
              <p className="text-sm text-text-muted">
                <span className="font-semibold text-primary">50+</span> startups funded this month
              </p>
            </div>
          </div>

          <div className="w-full lg:w-1/2 h-full animate-fade-in" style={{ animationDelay: "0.2s" }}>
            <div className="relative">
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-secondary/10 rounded-full z-0"></div>
              <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-primary/10 rounded-full z-0"></div>
              
              <div className="glass-effect rounded-2xl p-4 md:p-6 relative z-10">
                <div className="aspect-[4/3] overflow-hidden rounded-lg relative">
                  <img
                    src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80"
                    alt="Startup team collaboration"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                  <div className="absolute bottom-4 left-4 right-4 text-white">
                    <div className="px-3 py-1 rounded-full bg-secondary/80 text-white text-xs font-medium inline-block mb-2">
                      Success Story
                    </div>
                    <h3 className="text-lg font-semibold">
                      How DigitalCore raised $2M in seed funding
                    </h3>
                  </div>
                </div>

                <div className="mt-4 grid grid-cols-2 gap-4">
                  <div className="bg-white p-4 rounded-lg shadow-sm">
                    <div className="text-3xl font-bold text-primary">$10M+</div>
                    <p className="text-sm text-text-muted">Funding Raised</p>
                  </div>
                  <div className="bg-white p-4 rounded-lg shadow-sm">
                    <div className="text-3xl font-bold text-primary">200+</div>
                    <p className="text-sm text-text-muted">Startups Helped</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Hero;
