
import { useState, useEffect } from "react";
import { Container } from "./ui/container";
import { Menu, X, ChevronDown, Search } from "lucide-react";
import { SearchDialog } from "./SearchDialog";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <>
      <SearchDialog open={isSearchOpen} onOpenChange={setIsSearchOpen} />
      
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "py-3 bg-white/90 shadow-md backdrop-blur-md"
            : "py-5 bg-transparent"
        }`}
      >
        <Container>
          <nav className="flex items-center justify-between">
            <a
              href="/"
              className="text-primary font-poppins font-bold text-2xl flex items-center"
            >
              The Startup Wallah
            </a>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-8">
              <a
                href="#services"
                className="text-text-dark font-medium hover:text-primary transition-colors"
              >
                Services
              </a>
              <a
                href="#about"
                className="text-text-dark font-medium hover:text-primary transition-colors"
              >
                About Us
              </a>
              <a
                href="#why-choose-us"
                className="text-text-dark font-medium hover:text-primary transition-colors"
              >
                Why Choose Us
              </a>
              <div className="relative group">
                <button className="text-text-dark font-medium hover:text-primary transition-colors flex items-center">
                  Resources
                  <ChevronDown className="ml-1 h-4 w-4 transition-transform group-hover:rotate-180" />
                </button>
                <div className="absolute z-10 left-0 mt-2 w-56 opacity-0 translate-y-1 invisible group-hover:opacity-100 group-hover:translate-y-0 group-hover:visible transition-all duration-300 bg-white rounded-lg shadow-lg overflow-hidden">
                  <div className="py-2">
                    <a
                      href="#resource-hub"
                      className="block px-4 py-3 text-sm text-gray-700 hover:bg-primary/5 hover:text-primary"
                    >
                      Resource Hub
                    </a>
                    <a
                      href="#blog"
                      className="block px-4 py-3 text-sm text-gray-700 hover:bg-primary/5 hover:text-primary"
                    >
                      Blog & Insights
                    </a>
                  </div>
                </div>
              </div>
              <a
                href="#contact"
                className="text-text-dark font-medium hover:text-primary transition-colors"
              >
                Contact
              </a>
            </div>

            <div className="hidden lg:flex items-center space-x-3">
              <button 
                onClick={() => setIsSearchOpen(true)}
                className="p-2 text-text-dark hover:text-primary transition-colors rounded-full hover:bg-primary/5"
                aria-label="Search"
              >
                {/* <Search className="h-5 w-5" /> */}
              </button>
              <a
                href="#cta"
                className="btn-hover inline-flex items-center justify-center rounded-md px-6 py-2.5 font-semibold text-white bg-secondary shadow-md"
              >
                Get Started
              </a>
            </div>

            {/* Mobile Menu Button */}
            <div className="lg:hidden flex items-center space-x-2">
              <button 
                onClick={() => setIsSearchOpen(true)}
                className="p-2 text-text-dark hover:text-primary transition-colors"
                aria-label="Search"
              >
                <Search className="h-5 w-5" />
              </button>
              <button
                onClick={toggleMobileMenu}
                className="text-text-dark focus:outline-none"
                aria-label="Toggle mobile menu"
              >
                {isMobileMenuOpen ? (
                  <X className="h-6 w-6" />
                ) : (
                  <Menu className="h-6 w-6" />
                )}
              </button>
            </div>
          </nav>

          {/* Mobile Navigation */}
          {isMobileMenuOpen && (
            <div className="lg:hidden mt-4 py-4 bg-white rounded-lg shadow-lg animate-fade-in">
              <div className="flex flex-col space-y-3">
                <a
                  href="#services"
                  className="px-4 py-2 text-text-dark font-medium hover:bg-primary/5 hover:text-primary"
                  onClick={toggleMobileMenu}
                >
                  Services
                </a>
                <a
                  href="#about"
                  className="px-4 py-2 text-text-dark font-medium hover:bg-primary/5 hover:text-primary"
                  onClick={toggleMobileMenu}
                >
                  About Us
                </a>
                <a
                  href="#why-choose-us"
                  className="px-4 py-2 text-text-dark font-medium hover:bg-primary/5 hover:text-primary"
                  onClick={toggleMobileMenu}
                >
                  Why Choose Us
                </a>
                <a
                  href="#resource-hub"
                  className="px-4 py-2 text-text-dark font-medium hover:bg-primary/5 hover:text-primary"
                  onClick={toggleMobileMenu}
                >
                  Resource Hub
                </a>
                <a
                  href="#blog"
                  className="px-4 py-2 text-text-dark font-medium hover:bg-primary/5 hover:text-primary"
                  onClick={toggleMobileMenu}
                >
                  Blog & Insights
                </a>
                <a
                  href="#contact"
                  className="px-4 py-2 text-text-dark font-medium hover:bg-primary/5 hover:text-primary"
                  onClick={toggleMobileMenu}
                >
                  Contact
                </a>
                <div className="pt-2 px-4">
                  <a
                    href="#cta"
                    onClick={toggleMobileMenu}
                    className="btn-hover w-full inline-flex items-center justify-center rounded-md px-6 py-2.5 font-semibold text-white bg-secondary shadow-md"
                  >
                    Get Started
                  </a>
                </div>
              </div>
            </div>
          )}
        </Container>
      </header>
    </>
  );
};

export default Navbar;
