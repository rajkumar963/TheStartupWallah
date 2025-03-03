
import React from "react";
import { Container } from "./ui/container";
import { CheckCircle2, X } from "lucide-react";

const comparisonData = [
  {
    feature: "Direct Investor Access",
    us: true,
    others: false,
    description: "Connect directly with pre-vetted investors interested in your industry.",
  },
  {
    feature: "Expert Mentorship",
    us: true,
    others: false,
    description: "Get guidance from seasoned entrepreneurs who've been in your shoes.",
  },
  {
    feature: "Business Model Refinement",
    us: true,
    others: true,
    description: "Professional assistance in perfecting your business strategy and model.",
  },
  {
    feature: "Pitch Deck Creation",
    us: true,
    others: true,
    description: "Create compelling pitch decks that capture investor attention.",
  },
  {
    feature: "Startup Community",
    us: true,
    others: false,
    description: "Join our exclusive network of founders, investors, and mentors.",
  },
  {
    feature: "Dedicated Support Team",
    us: true,
    others: false,
    description: "Receive personalized support throughout your startup journey.",
  },
];

const WhyChooseUs = () => {
  return (
    <section id="why-choose-us" className="section-padding bg-white relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-1/3 -left-20 w-72 h-72 bg-primary/5 rounded-full filter blur-3xl z-0"></div>
      <div className="absolute bottom-1/4 -right-16 w-64 h-64 bg-secondary/5 rounded-full filter blur-3xl z-0"></div>
      
      <Container className="relative z-10">
        <div className="mb-16 max-w-3xl mx-auto text-center">
          <div className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary font-medium text-sm mb-4 animate-fade-in">
            Why Choose Us
          </div>
          <h2 className="section-title animate-fade-in" style={{ animationDelay: "0.1s" }}>
            <span className="text-gradient">The Startup Wallah</span> Advantage
          </h2>
          <p className="section-subtitle animate-fade-in" style={{ animationDelay: "0.2s" }}>
            We go beyond traditional startup support by offering a unique combination of resources, connections, and expertise that sets us apart.
          </p>
        </div>

        <div className="bg-gray-50 rounded-2xl p-6 md:p-10 shadow-sm animate-fade-in" style={{ animationDelay: "0.3s" }}>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="col-span-1 md:col-span-3 grid grid-cols-3 gap-6 font-semibold text-lg pb-4 border-b border-gray-200">
              <div className="col-span-1">Features</div>
              <div className="col-span-1 text-center">The Startup Wallah</div>
              <div className="col-span-1 text-center">Traditional Options</div>
            </div>

            {comparisonData.map((item, index) => (
              <React.Fragment key={index}>
                <div className="col-span-1 md:col-span-3 grid grid-cols-3 gap-6 py-4 border-b border-gray-100">
                  <div className="col-span-3 md:col-span-1">
                    <div className="font-medium">{item.feature}</div>
                    <div className="text-sm text-text-muted mt-1 md:hidden">{item.description}</div>
                  </div>
                  <div className="hidden md:block md:col-span-1 text-center">
                    <CheckCircle2 className="w-6 h-6 text-green-500 mx-auto" />
                  </div>
                  <div className="hidden md:block md:col-span-1 text-center">
                    {item.others ? (
                      <CheckCircle2 className="w-6 h-6 text-gray-400 mx-auto" />
                    ) : (
                      <X className="w-6 h-6 text-red-400 mx-auto" />
                    )}
                  </div>

                  <div className="flex md:hidden col-span-3 mt-2">
                    <div className="flex-1 flex items-center justify-center">
                      <div className="flex flex-col items-center">
                        <CheckCircle2 className="w-6 h-6 text-green-500" />
                        <span className="text-sm mt-1">Us</span>
                      </div>
                    </div>
                    <div className="flex-1 flex items-center justify-center">
                      <div className="flex flex-col items-center">
                        {item.others ? (
                          <CheckCircle2 className="w-6 h-6 text-gray-400" />
                        ) : (
                          <X className="w-6 h-6 text-red-400" />
                        )}
                        <span className="text-sm mt-1">Others</span>
                      </div>
                    </div>
                  </div>
                </div>
              </React.Fragment>
            ))}
          </div>

          <div className="hidden md:grid grid-cols-3 gap-6 mt-8">
            <div className="col-span-1">
              <h3 className="font-medium text-lg mb-2">Feature Details</h3>
              <p className="text-text-muted">
                We've designed our services based on real startup needs and challenges faced in the entrepreneurial journey.
              </p>
            </div>
            <div className="col-span-1 bg-primary/5 p-5 rounded-lg border border-primary/10">
              <h3 className="font-medium text-lg mb-2 text-primary">Complete Solution</h3>
              <p className="text-text-muted">
                We offer an integrated ecosystem of services designed to address every aspect of startup growth.
              </p>
            </div>
            <div className="col-span-1 bg-gray-100 p-5 rounded-lg">
              <h3 className="font-medium text-lg mb-2 text-gray-600">Partial Support</h3>
              <p className="text-text-muted">
                Most alternatives offer fragmented solutions that address only specific aspects of startup development.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-16 text-center animate-fade-in" style={{ animationDelay: "0.4s" }}>
          <a
            href="#testimonials"
            className="btn-hover inline-flex items-center justify-center rounded-md px-6 py-3 font-semibold text-white bg-secondary shadow-md"
          >
            See Success Stories
          </a>
        </div>
      </Container>
    </section>
  );
};

export default WhyChooseUs;
