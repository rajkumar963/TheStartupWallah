import { Container } from "./ui/container";
import { Download, Search, ArrowRight, BookOpen, FileText, Video } from "lucide-react";
import { useState } from "react";

type ResourceHubProps = {
  fullPage?: boolean;
};

const resourceCategories = ["All", "Marketing", "Sales", "Entrepreneurship", "Case Studies"];

const resources = [
  {
    id: 1,
    title: "The Complete Guide to Government Funding 2025",
    description: "Explore government grants, schemes, and incentives for Indian startups in 2025, including eligibility and application details.",
    category: "E-Books",
    image: "https://images.unsplash.com/photo-1589561253898-768105ca91a8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1469&q=80",
    icon: <BookOpen className="w-5 h-5" />,
    isFeatured: true,
    isNew: false,
    isPremium: true,
  },
  {
    id: 2,
    title: "Marketing for Startups",
    description: "Gain real-world insights and proven marketing techniques, created by industry-leading experts, that set your business apart.",
    category: "E-Books",
    image: "https://images.unsplash.com/photo-1553877522-43269d4ea984?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    icon: <BookOpen className="w-5 h-5" />,
    isFeatured: false,
    isNew: true,
    isPremium: false,
  },
  {
    id: 3,
    title: "Sales ",
    description: "Discover actionable insights and time-tested sales strategies, developed by top sales innovators, that distinguish your business from the competition.",
    category: "E-Books",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1115&q=80",
    icon: <BookOpen className="w-5 h-5" />,
    isFeatured: false,
    isNew: false,
    isPremium: true,
  },
  {
    id: 4,
    title: "Entrepreneurship",
    description: "Discover actionable insights and time-tested entrepreneurial strategies, developed by visionary founders, that set your venture apart in today's competitive landscape.",
    category: "E-Books",
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    icon: <BookOpen className="w-5 h-5" />,
    isFeatured: false,
    isNew: false,
    isPremium: false,
  },
  {
    id: 5,
    title: "Essential Q&A for building a startup",
    description: "A complete Q&A guide for entrepreneurs on how to build a successful startup.",
    category: "E-Books",
    image: "https://images.unsplash.com/photo-1491438590914-bc09fcaaf77a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    icon: <BookOpen className="w-5 h-5" />,
    isFeatured: false,
    isNew:false,
    isPremium: true,
  },
  {
    id: 5,
    title: "Case Studies for building a startup",
    description: "A complete Q&A guide for entrepreneurs on how to build a successful startup.",
    category: "Case Studies",
    image: "https://images.unsplash.com/photo-1491438590914-bc09fcaaf77a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    icon: <BookOpen className="w-5 h-5" />,
    isFeatured: false,
    isNew: true,
    isPremium: false,
  },
];

const ResourceHub = ({ fullPage = false }: ResourceHubProps) => {
  const [activeCategory, setActiveCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredResources = resources.filter((resource) => {
    const matchesCategory = activeCategory === "All" || resource.category === activeCategory;
    const matchesSearch = resource.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          resource.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const featuredResource = resources.find((resource) => resource.isFeatured);

  return (
    <section id="resource-hub" className="section-padding bg-white relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-1/3 -left-20 w-72 h-72 bg-primary/5 rounded-full filter blur-3xl z-0"></div>
      <div className="absolute bottom-1/4 -right-16 w-64 h-64 bg-secondary/5 rounded-full filter blur-3xl z-0"></div>
      
      <Container className="relative z-10">
        <div className="mb-16 max-w-3xl mx-auto text-center">
          <div className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary font-medium text-sm mb-4 animate-fade-in">
            Resource Hub
          </div>
          <h2 className="section-title animate-fade-in" style={{ animationDelay: "0.1s" }}>
            Startup <span className="text-gradient">Learning Resources</span> & Materials
          </h2>
          <p className="section-subtitle animate-fade-in" style={{ animationDelay: "0.2s" }}>
            Access our library of Marketing, Sales, Entrepreneurship, and case studies designed to help you navigate every aspect of your startup journey.
          </p>
        </div>

        {featuredResource && (
          <div className="mb-12 animate-fade-in " style={{ animationDelay: "0.3s" }}>
            <div className="relative rounded-2xl overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-primary/90 to-primary/70 z-10"></div>
              <img
                src={featuredResource.image}
                alt={featuredResource.title}
                className="w-full h-64 md:h-80 object-cover"
              />
              <div className="absolute inset-0 z-20 flex flex-col justify-center p-6 md:p-12">
                <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-6">
                  <div className="inline-block px-3 py-1 bg-white/20 text-white text-sm font-medium rounded-full backdrop-blur-sm mb-4 md:mb-0">
                    Featured E-Book
                  </div>
                  <a
                    href="#"
                    className="btn-hover inline-flex items-center justify-center rounded-md px-5 py-2 font-semibold text-primary bg-white shadow-md"
                  >
                    <Download className="w-4 h-4 mr-2" />
                    Download Free
                  </a>
                </div>
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-3">
                  {featuredResource.title}
                </h3>
                <p className="text-white/80 mb-6 max-w-2xl">
                  {featuredResource.description}
                </p>
                <div className="flex flex-wrap gap-3">
                  <div className="inline-block px-3 py-1 bg-white/20 text-white text-sm rounded-full backdrop-blur-sm">
                    #StartupFunding
                  </div>
                  <div className="inline-block px-3 py-1 bg-white/20 text-white text-sm rounded-full backdrop-blur-sm">
                    #GovernmentGrant
                  </div>
                  <div className="inline-block px-3 py-1 bg-white/20 text-white text-sm rounded-full backdrop-blur-sm">
                    #EntrepreneurshipIndia
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        <div className="mb-8 animate-fade-in" style={{ animationDelay: "0.4s" }}>
          <div className="flex flex-col md:flex-row gap-4 justify-between">
            <div className="flex flex-wrap gap-2">
              {resourceCategories.map((category) => (
                <button
                  key={category}
                  onClick={() => setActiveCategory(category)}
                  className={`px-4 py-2 rounded-md text-sm font-medium transition-all ${
                    activeCategory === category
                      ? "bg-primary text-white shadow-md"
                      : "bg-gray-100 text-text-dark hover:bg-gray-200"
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Search className="h-5 w-5 text-gray-400" />
              </div>
              <input
                type="text"
                placeholder="Search resources..."
                className="pl-10 pr-4 py-2 rounded-md border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary/50 w-full md:w-64"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 animate-fade-in" style={{ animationDelay: "0.5s" }}>
          {filteredResources.map((resource) => (
            <div key={resource.id} className="card-hover glass-effect rounded-xl overflow-hidden">
              <div className="relative h-48">
                <img
                  src={resource.image}
                  alt={resource.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div className="absolute top-2 left-2 flex gap-2">
                  {resource.isNew && (
                    <div className="px-2 py-1 bg-secondary text-white text-xs font-medium rounded">
                      NEW
                    </div>
                  )}
                  {resource.isPremium && (
                    <div className="px-2 py-1 bg-primary text-white text-xs font-medium rounded">
                      PREMIUM
                    </div>
                  )}
                </div>
                <div className="absolute bottom-3 left-3 right-3 flex justify-between items-center">
                  <div className="inline-block px-3 py-1 bg-white/20 text-white text-xs font-medium rounded-full backdrop-blur-sm">
                    <div className="flex items-center gap-1.5">
                      {resource.icon}
                      {resource.category}
                    </div>
                  </div>
                </div>
              </div>
              <div className="p-5">
                <h3 className="text-xl font-bold mb-2">{resource.title}</h3>
                <p className="text-text-muted mb-4">{resource.description}</p>
                <div className="flex justify-between items-center">
                  <a
                    href="#"
                    className="group inline-flex items-center text-primary font-medium"
                  >
                    {resource.isPremium ? "Download Free" : "Get E-Books"}{" "}
                    <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </a>
                  
                </div>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default ResourceHub;
