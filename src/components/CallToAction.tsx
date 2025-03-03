
import { Container } from "./ui/container";
import { ArrowRight } from "lucide-react";
import { useState } from "react";

const CallToAction = () => {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim() === "") return;
    
    // Simulate form submission
    setTimeout(() => {
      setSubmitted(true);
      setEmail("");
    }, 500);
  };

  return (
    <section id="cta" className="py-20 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-primary z-0"></div>
      
      {/* Background geometric elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
        <div className="absolute top-1/4 -right-20 w-80 h-80 bg-white/5 rounded-full"></div>
        <div className="absolute top-3/4 -left-40 w-96 h-96 bg-white/5 rounded-full"></div>
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-secondary/10 rounded-full"></div>
      </div>
      
      <Container className="relative z-10">
        <div className="max-w-3xl mx-auto">
          <div className="glass-effect bg-white/10 rounded-3xl overflow-hidden shadow-xl">
            <div className="p-8 md:p-12">
              <div className="text-center mb-10">
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 animate-fade-in">
                  Ready to Take Your Startup to the Next Level?
                </h2>
                <p className="text-white/80 text-lg max-w-2xl mx-auto animate-fade-in" style={{ animationDelay: "0.1s" }}>
                  Join hundreds of founders who have accelerated their growth with The Startup Wallah's resources and investor network.
                </p>
              </div>

              <div className="flex flex-col md:flex-row items-center gap-8 mb-10">
                <div className="w-full md:w-1/2 animate-fade-in-left" style={{ animationDelay: "0.2s" }}>
                  <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl border border-white/20">
                    <div className="flex items-center justify-center w-14 h-14 bg-secondary/20 rounded-full mb-4">
                      <svg className="w-8 h-8 text-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                      </svg>
                    </div>
                    <h3 className="text-xl font-bold text-white mb-2">Startup Growth Plan</h3>
                    <p className="text-white/70 mb-4">
                      Get a customized roadmap for your startup's growth with expert guidance at every step.
                    </p>
                    <ul className="space-y-3">
                      <li className="flex items-start gap-2">
                        <svg className="w-5 h-5 text-green-400 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span className="text-white/80">Business model validation</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <svg className="w-5 h-5 text-green-400 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span className="text-white/80">Market entry strategy</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <svg className="w-5 h-5 text-green-400 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span className="text-white/80">Funding readiness assessment</span>
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="w-full md:w-1/2 animate-fade-in-right" style={{ animationDelay: "0.3s" }}>
                  <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl border border-white/20">
                    <div className="flex items-center justify-center w-14 h-14 bg-secondary/20 rounded-full mb-4">
                      <svg className="w-8 h-8 text-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                      </svg>
                    </div>
                    <h3 className="text-xl font-bold text-white mb-2">Investor Matching</h3>
                    <p className="text-white/70 mb-4">
                      Get introduced to investors who are specifically interested in your industry and stage.
                    </p>
                    <ul className="space-y-3">
                      <li className="flex items-start gap-2">
                        <svg className="w-5 h-5 text-green-400 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span className="text-white/80">Curated investor matching</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <svg className="w-5 h-5 text-green-400 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span className="text-white/80">Pitch preparation sessions</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <svg className="w-5 h-5 text-green-400 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span className="text-white/80">Deal negotiation support</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="max-w-md mx-auto animate-fade-in" style={{ animationDelay: "0.4s" }}>
                <div className="text-center mb-6">
                  <h3 className="text-xl font-bold text-white mb-2">
                    Get Early Access to Funding Opportunities
                  </h3>
                  <p className="text-white/70">
                    Subscribe to receive exclusive investment opportunities and startup resources.
                  </p>
                </div>

                {submitted ? (
                  <div className="bg-white/10 backdrop-blur-sm p-4 rounded-xl border border-white/20 text-center">
                    <svg className="w-12 h-12 text-green-400 mx-auto mb-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <h4 className="text-lg font-bold text-white mb-1">Thank You for Subscribing!</h4>
                    <p className="text-white/70">
                      We'll keep you updated with the latest funding opportunities and resources.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="flex flex-col sm:flex-row gap-2">
                      <input
                        type="email"
                        placeholder="Enter your email"
                        className="flex-1 px-4 py-3 rounded-md focus:outline-none focus:ring-2 focus:ring-secondary"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                      />
                      <button
                        type="submit"
                        className="btn-hover inline-flex items-center justify-center rounded-md px-6 py-3 font-semibold text-white bg-secondary shadow-md"
                      >
                        Subscribe
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </button>
                    </div>
                    <p className="text-white/60 text-xs text-center">
                      By subscribing, you agree to receive marketing communications from us. Don't worry, we respect your privacy.
                    </p>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default CallToAction;
