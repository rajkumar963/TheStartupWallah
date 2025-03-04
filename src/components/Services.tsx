
import { Container } from "./ui/container";
import { ArrowRight, Rocket, BookOpen, FileText, UserCheck } from "lucide-react";

const services = [
  {
    icon: <Rocket className="w-8 h-8 text-secondary" />,
    title: "Investor ",
    description: "Meet your funding soulmates – we'll connect you with investors who get your vision and want in.",
    link: "#",
    delay: "0s",
  },
  {
    icon: <BookOpen className="w-8 h-8 text-secondary" />,
    title: "Growth Playbooks",
    description: "Snag ready-to-use guides on marketing, sales, and growth hacking that actually work.",
    link: "#",
    delay: "0.1s",
  },
  {
    icon: <FileText className="w-8 h-8 text-secondary" />,
    title: "Pitch Perfect",
    description: "Craft irresistible pitch decks and business plans that make investors reach for their checkbooks.",
    link: "#",
    delay: "0.2s",
  },
  {
    icon: <UserCheck className="w-8 h-8 text-secondary" />,
    title: "Mentor Magic",
    description: "Get brain-picking sessions with founders who've been there, done that, and wrote the playbook.",
    link: "#",
    delay: "0.3s",
  },
];

type ServicesProps = {
  fullPage?: boolean;
};

const Services = ({ fullPage }: ServicesProps = {}) => {
  return (
    <section id="services" className="section-padding bg-white relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-gray-50 to-transparent z-0"></div>
      <div className="absolute top-1/3 -right-20 w-80 h-80 bg-primary/5 rounded-full filter blur-3xl z-0"></div>
      <div className="absolute bottom-1/4 -left-16 w-64 h-64 bg-secondary/5 rounded-full filter blur-3xl z-0"></div>
      
      <Container className="relative z-10">
        <div className="mb-16 max-w-3xl mx-auto text-center">
          <div className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary font-medium text-sm mb-4 animate-fade-in">
            How We Help
          </div>
          <h2 className="section-title animate-fade-in" style={{ animationDelay: "0.1s" }}>
            <span className="text-gradient">Rocket Fuel</span> for Your Startup
          </h2>
          <p className="section-subtitle animate-fade-in" style={{ animationDelay: "0.2s" }}>
            We've got everything you need to blast off – from funding to scaling. Your one-stop shop for startup superpowers.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {services.map((service, index) => (
            <div 
              key={index}
              className="card-hover glass-effect p-6 rounded-xl animate-fade-in"
              style={{ animationDelay: service.delay }}
            >
              <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mb-6">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold mb-3">{service.title}</h3>
              <p className="text-text-muted mb-6">{service.description}</p>
              <a
                href={service.link}
                className="group inline-flex items-center text-primary font-medium"
              >
                Tell me more{" "}
                <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </a>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center animate-fade-in" style={{ animationDelay: "0.4s" }}>
          <a
            href="#cta"
            className="btn-hover inline-flex items-center justify-center rounded-md px-6 py-3 font-semibold text-white bg-primary shadow-md"
          >
            See All Services
            <ArrowRight className="ml-2 h-4 w-4" />
          </a>
        </div>
      </Container>
    </section>
  );
};

export default Services;
