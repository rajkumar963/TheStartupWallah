
import React, { useState } from "react";
import { Container } from "./ui/container";
import { Card, CardContent, CardFooter, CardHeader } from "./ui/card";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Search, Filter, LinkedinIcon, Mail, User, Building, ArrowRight } from "lucide-react";

// Sample investor data
const investors = [
  {
    id: 1,
    name: "Rajan Anandan",
    company: "Sequoia Capital India",
    email: "rajan@sequoiacap.com",
    linkedin: "https://www.linkedin.com/in/rajananandan/",
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=150&q=80",
    sectors: ["Tech", "SaaS", "Fintech"]
  },
  {
    id: 2,
    name: "Vani Kola",
    company: "Kalaari Capital",
    email: "vani@kalaari.com",
    linkedin: "https://www.linkedin.com/in/vanikola/",
    image: "https://images.unsplash.com/photo-1581092795360-fd1ca04f0952?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=150&q=80",
    sectors: ["E-commerce", "Consumer", "EdTech"]
  },
  {
    id: 3,
    name: "Kunal Shah",
    company: "Cred & Angel Investor",
    email: "kunal@cred.club",
    linkedin: "https://www.linkedin.com/in/kunalshah1/",
    image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=150&q=80",
    sectors: ["Fintech", "Consumer", "D2C"]
  },
  {
    id: 4,
    name: "Sanjay Mehta",
    company: "100X.VC",
    email: "sanjay@100x.vc",
    linkedin: "https://www.linkedin.com/in/mehtasanjay/",
    image: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=150&q=80",
    sectors: ["Early Stage", "AI/ML", "Web3"]
  },
  {
    id: 5,
    name: "Anupam Mittal",
    company: "Shaadi.com & Shark Tank",
    email: "anupam@people-group.com",
    linkedin: "https://www.linkedin.com/in/anupammittal/",
    image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=150&q=80",
    sectors: ["Marketplace", "D2C", "Consumer"]
  },
  {
    id: 6,
    name: "Karthik Reddy",
    company: "Blume Ventures",
    email: "karthik@blumeventures.com",
    linkedin: "https://www.linkedin.com/in/karthikreddy/",
    image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=150&q=80",
    sectors: ["SaaS", "DeepTech", "Consumer"]
  }
];

// Available sector filters
const sectors = ["All", "Tech", "SaaS", "Fintech", "E-commerce", "Consumer", "D2C", "EdTech", "AI/ML", "Web3", "Marketplace", "DeepTech", "Early Stage"];

const InvestorData = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [activeSector, setActiveSector] = useState("All");
  const [showFilterMenu, setShowFilterMenu] = useState(false);

  // Filter investors based on search term and active sector
  const filteredInvestors = investors.filter(
    (investor) => {
      const matchesSearch = 
        investor.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        investor.company.toLowerCase().includes(searchTerm.toLowerCase());
      
      const matchesSector = 
        activeSector === "All" || 
        investor.sectors.includes(activeSector);
      
      return matchesSearch && matchesSector;
    }
  );

  return (
    <section id="investor-data" className="section-padding bg-gray-50 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-1/3 -left-20 w-72 h-72 bg-primary/5 rounded-full filter blur-3xl z-0"></div>
      <div className="absolute bottom-1/4 -right-16 w-64 h-64 bg-secondary/5 rounded-full filter blur-3xl z-0"></div>
      
      <Container className="relative z-10">
        <div className="mb-16 max-w-3xl mx-auto text-center">
          <div className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary font-medium text-sm mb-4 animate-fade-in">
            Funding Matchmakers
          </div>
          <h2 className="section-title animate-fade-in" style={{ animationDelay: "0.1s" }}>
            Meet Your <span className="text-gradient">Dream Investors</span>
          </h2>
          <p className="section-subtitle animate-fade-in" style={{ animationDelay: "0.2s" }}>
            Our VIP rolodex of active investors hunting for the next big thing. Find your perfect funding match.
          </p>
        </div>

        {/* Search and filter bar */}
        <div className="mb-8 flex flex-col md:flex-row gap-4 animate-fade-in" style={{ animationDelay: "0.3s" }}>
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
            <Input 
              placeholder="Find by name or company..." 
              className="pl-10 bg-white"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          <div className="relative">
            <Button 
              variant="outline" 
              className="bg-white w-full md:w-auto flex items-center gap-2"
              onClick={() => setShowFilterMenu(!showFilterMenu)}
            >
              <Filter className="h-4 w-4" />
              <span>Filter by Sector</span>
            </Button>
            
            {showFilterMenu && (
              <div className="absolute right-0 mt-2 z-50 bg-white shadow-lg rounded-lg p-4 w-64 border animate-in fade-in">
                <div className="font-medium mb-2">Sectors</div>
                <div className="flex flex-wrap gap-2">
                  {sectors.map((sector) => (
                    <button
                      key={sector}
                      onClick={() => {
                        setActiveSector(sector);
                        setShowFilterMenu(false);
                      }}
                      className={`px-3 py-1 text-xs rounded-full ${
                        activeSector === sector
                          ? "bg-primary text-white"
                          : "bg-gray-100 hover:bg-gray-200"
                      }`}
                    >
                      {sector}
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Investors grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10 animate-fade-in" style={{ animationDelay: "0.4s" }}>
          {filteredInvestors.map((investor) => (
            <Card key={investor.id} className="hover:shadow-md transition-all duration-300">
              <CardHeader className="p-6 pb-4">
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 rounded-full overflow-hidden">
                    <img 
                      src={investor.image} 
                      alt={investor.name} 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">{investor.name}</h3>
                    <div className="flex items-center gap-1 text-sm text-gray-600">
                      <Building className="h-4 w-4" />
                      <span>{investor.company}</span>
                    </div>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="px-6 py-2">
                <div className="flex flex-col gap-2">
                  <div className="flex items-center gap-2">
                    <Mail className="h-4 w-4 text-gray-500" />
                    <span className="text-sm text-gray-600">{investor.email}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <LinkedinIcon className="h-4 w-4 text-gray-500" />
                    <a href={investor.linkedin} target="_blank" rel="noopener noreferrer" className="text-sm text-primary hover:underline">
                      LinkedIn Profile
                    </a>
                  </div>
                  <div className="mt-3 flex flex-wrap gap-1">
                    {investor.sectors.map((sector) => (
                      <span key={sector} className="inline-block bg-gray-100 text-gray-800 text-xs px-2 py-1 rounded-full">
                        {sector}
                      </span>
                    ))}
                  </div>
                </div>
              </CardContent>
              <CardFooter className="p-6 pt-2">
                <Button variant="outline" className="w-full group">
                  <span>View Profile</span>
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>

        {/* CTA section */}
        <div className="bg-gradient-to-r from-primary/10 to-secondary/10 rounded-2xl p-8 text-center animate-fade-in" style={{ animationDelay: "0.5s" }}>
          <h3 className="text-2xl font-bold mb-4">Want Our Full Investor Black Book?</h3>
          <p className="text-gray-700 mb-6 max-w-2xl mx-auto">
            Get VIP access to 500+ active investors, their sweet spots, check sizes, and direct contacts. Your fundraising secret weapon.
          </p>
          <Button size="lg" className="px-6">
            Unlock Investor Access
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </Container>
    </section>
  );
};

export default InvestorData;
