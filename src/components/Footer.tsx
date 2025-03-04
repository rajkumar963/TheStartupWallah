
import React from "react";
import { Container } from "./ui/container";
import { Link } from "react-router-dom";
import { Mail, MapPin, Instagram } from "lucide-react";
import { FaLinkedinIn, FaWhatsapp } from "react-icons/fa";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-primary text-white">
      <Container>
        <div className="py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div>
              <Link to="/" className="flex items-center">
                <h2 className="text-2xl font-bold">The Startup Wallah</h2>
              </Link>
              <p className="mt-4 text-gray-300 max-w-xs">
                Bridging the gap between startups and success through investor access, learning resources, and expert-backed business services.
              </p>
              <div className="flex space-x-4 mt-6">
                <a href="#" className="hover:text-pink-500 transition-colors">
                  <Instagram size={20} />
                </a>
                
                <a href="https://www.linkedin.com/company/the-startup-wallah/about/" className="hover:text-blue-500 transition-colors">
                  <FaLinkedinIn size={20} />
                </a>
                <a href=" https://wa.me/message/DB45B2CA3YBTE1 " className="hover:text-green-500 transition-colors">
                  <FaWhatsapp size={20} />
                </a>
                
              </div>
            </div>

            <div>
              <h3 className="text-lg font-bold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li>
                  <Link to="/" className="hover:text-secondary transition-colors">Home</Link>
                </li>
                <li>
                  <Link to="/services" className="hover:text-secondary transition-colors">Services</Link>
                </li>
                <li>
                  <Link to="/resources" className="hover:text-secondary transition-colors">Resources</Link>
                </li>
                <li>
                  <Link to="/blog" className="hover:text-secondary transition-colors">Blog</Link>
                </li>
                
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-bold mb-4">Services</h3>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="hover:text-secondary transition-colors">Investor Access</a>
                </li>
                <li>
                  <a href="#" className="hover:text-secondary transition-colors">Learning Resources</a>
                </li>
                <li>
                  <a href="#" className="hover:text-secondary transition-colors">Pitch Deck Services</a>
                </li>
                
                <li>
                  <a href="#" className="hover:text-secondary transition-colors">Business Structuring</a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-bold mb-4">Contact Us</h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <MapPin size={20} className="mr-2 shrink-0 mt-1" />
                  <span>Whitefield, Bangalore 560066</span>
                </li>
                <li className="flex items-center">
                  <FaWhatsapp size={20} className="mr-2 shrink-0" />
                  <span>+91 98765 43210</span>
                </li>
                <li className="flex items-center">
                  <Mail size={20} className="mr-2 shrink-0" />
                  <span>ashutosh@thestartupwallah.com</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-700 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p>&copy; {currentYear} The Startup Wallah. All rights reserved.</p>
            <div className="mt-4 md:mt-0">
              <ul className="flex space-x-6">
                <li>
                  <a href="#" className="hover:text-secondary transition-colors">Privacy Policy</a>
                </li>
                <li>
                  <a href="#" className="hover:text-secondary transition-colors">Terms of Service</a>
                </li>
                <li>
                  <a href="#" className="hover:text-secondary transition-colors">Cookie Policy</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
