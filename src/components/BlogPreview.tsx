
import { Container } from "./ui/container";
import { ArrowRight, Calendar, User } from "lucide-react";

export const blogPosts = [
  {
    id: 1,
    title: "10 Pitch Deck Sins That Make Investors Ghost You",
    excerpt: "Avoid these all-too-common pitch deck blunders that send investors running for the hills.",
    author: "Priya Sharma",
    date: "May 15, 2023",
    image: "https://images.unsplash.com/photo-1542744094-3a31f272c490?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    category: "Funding",
  },
  {
    id: 2,
    title: "Build an MVP That Investors Can't Resist",
    excerpt: "Create a minimum viable product that proves your concept and makes investors fight to fund you.",
    author: "Michael Chen",
    date: "June 2, 2023",
    image: "https://images.unsplash.com/photo-1559028012-481c04fa702d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1736&q=80",
    category: "Product",
  },
  {
    id: 3,
    title: "The Startup Equity Playbook",
    excerpt: "Master the art of dividing the pie without creating enemies or selling your soul.",
    author: "Sarah Williams",
    date: "June 18, 2023",
    image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    category: "Finance",
  },
];

const BlogPreview = () => {
  return (
    <section id="blog" className="section-padding bg-primary/5 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-white to-transparent z-0"></div>
      <div className="absolute top-1/3 -right-20 w-72 h-72 bg-secondary/5 rounded-full filter blur-3xl z-0"></div>
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-white to-transparent z-0"></div>
      
      <Container className="relative z-10">
        <div className="mb-16 max-w-3xl mx-auto text-center">
          <div className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary font-medium text-sm mb-4 animate-fade-in">
            Brain Food
          </div>
          <h2 className="section-title animate-fade-in" style={{ animationDelay: "0.1s" }}>
            Fresh <span className="text-gradient">Startup Insights</span> & Hacks
          </h2>
          <p className="section-subtitle animate-fade-in" style={{ animationDelay: "0.2s" }}>
            Stay ahead with cutting-edge strategies, funding intel, and growth tactics that actually work.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 lg:gap-8 animate-fade-in" style={{ animationDelay: "0.3s" }}>
          {blogPosts.map((post, index) => (
            <div 
              key={post.id} 
              className="card-hover bg-white rounded-xl overflow-hidden shadow-sm"
              style={{ animationDelay: `${0.3 + index * 0.1}s` }}
            >
              <div className="relative h-56 overflow-hidden">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                />
                <div className="absolute top-3 left-3 px-3 py-1 bg-primary text-white text-xs font-medium rounded">
                  {post.category}
                </div>
              </div>
              <div className="p-6">
                <div className="flex items-center gap-4 text-text-muted text-sm mb-3">
                  <div className="flex items-center gap-1.5">
                    <Calendar className="w-4 h-4" />
                    {post.date}
                  </div>
                  <div className="flex items-center gap-1.5">
                    <User className="w-4 h-4" />
                    {post.author}
                  </div>
                </div>
                <h3 className="text-xl font-bold mb-3">{post.title}</h3>
                <p className="text-text-muted mb-5">{post.excerpt}</p>
                <a
                  href="#"
                  className="group inline-flex items-center text-primary font-medium"
                >
                  Read Full Story{" "}
                  <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </a>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center animate-fade-in" style={{ animationDelay: "0.6s" }}>
          <a
            href="#"
            className="btn-hover inline-flex items-center justify-center rounded-md px-6 py-3 font-semibold text-white bg-secondary shadow-md"
          >
            Explore All Articles
            <ArrowRight className="ml-2 h-4 w-4" />
          </a>
        </div>
      </Container>
    </section>
  );
};

export default BlogPreview;
