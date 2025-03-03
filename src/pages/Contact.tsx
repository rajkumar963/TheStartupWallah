
import React from "react";
import Navbar from "@/components/Navbar";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";
import { Helmet } from "react-helmet";
import { MapPin, Mail, Phone } from "lucide-react";

const Contact = () => {
  return (
    <>
      <Helmet>
        <title>Contact Us | The Startup Wallah</title>
        <meta name="description" content="Get in touch with The Startup Wallah team. We're here to answer your questions and help your startup succeed." />
      </Helmet>
      <Navbar />
      <div className="pt-20">
        <header className="bg-primary py-20 text-white">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">Contact Us</h1>
            <p className="text-xl max-w-3xl">We're here to answer your questions and help your startup succeed</p>
          </div>
        </header>
        
        <section className="py-16 bg-bg-light">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
              <div>
                <h2 className="text-3xl font-bold mb-6">Get In Touch</h2>
                <p className="text-lg text-text-muted mb-8">
                  Have questions about our services or want to learn more about how we can help your startup? Fill out the form and our team will get back to you shortly.
                </p>
                
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <MapPin className="text-primary mt-1" />
                    <div>
                      <h3 className="font-semibold text-lg">Our Location</h3>
                      <p className="text-text-muted">123 Innovation Street, Startup Hub, Mumbai 400001</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <Mail className="text-primary mt-1" />
                    <div>
                      <h3 className="font-semibold text-lg">Email Us</h3>
                      <p className="text-text-muted">hello@startupwallah.com</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <Phone className="text-primary mt-1" />
                    <div>
                      <h3 className="font-semibold text-lg">Call Us</h3>
                      <p className="text-text-muted">+91 98765 43210</p>
                    </div>
                  </div>
                </div>
                
                <div className="mt-10">
                  <h3 className="text-xl font-bold mb-4">Join Our Community</h3>
                  <p className="mb-4">Connect with fellow entrepreneurs and get access to exclusive resources.</p>
                  <div className="flex space-x-4">
                    <a href="#" className="bg-primary text-white px-4 py-2 rounded hover:bg-primary-dark transition-colors">
                      Telegram Community
                    </a>
                    <a href="#" className="bg-secondary text-white px-4 py-2 rounded hover:bg-secondary-dark transition-colors">
                      Discord Channel
                    </a>
                  </div>
                </div>
              </div>
              
              <div className="bg-white p-8 rounded-lg shadow-lg">
                <ContactForm />
              </div>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
};

export default Contact;
