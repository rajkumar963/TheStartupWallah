
import React from "react";
import { Container } from "./ui/container";
import { Button } from "./ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "./ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";
import { Calendar, Clock, User } from "lucide-react";

// Mock blog data
const blogPosts = [
  {
    id: 1,
    title: "10 Proven Strategies to Secure Seed Funding in 2023",
    excerpt: "Learn the latest strategies that are helping startups secure seed funding in today's competitive environment.",
    category: "Funding",
    author: "Rajan Sharma",
    date: "May 15, 2023",
    readTime: "8 min read",
    image: "https://images.unsplash.com/photo-1559526324-4b87b5e36e44?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
  },
  {
    id: 2,
    title: "Building a Pitch Deck That Investors Can't Resist",
    excerpt: "Discover the essential elements of a compelling pitch deck that captures investor attention and drives funding success.",
    category: "Pitch Decks",
    author: "Priya Agarwal",
    date: "June 2, 2023",
    readTime: "6 min read",
    image: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
  },
  {
    id: 3,
    title: "The SaaS Growth Playbook: From Zero to $1M ARR",
    excerpt: "A comprehensive guide to scaling your SaaS startup from zero to $1 million in annual recurring revenue.",
    category: "Growth",
    author: "Vikram Mehta",
    date: "June 18, 2023",
    readTime: "12 min read",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
  },
  {
    id: 4,
    title: "How to Build a Strong Founding Team for Your Startup",
    excerpt: "Learn the key characteristics to look for when assembling a founding team that can weather the startup journey.",
    category: "Team Building",
    author: "Ananya Desai",
    date: "July 5, 2023",
    readTime: "7 min read",
    image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
  },
  {
    id: 5,
    title: "Navigating the Term Sheet: What Founders Need to Know",
    excerpt: "A detailed breakdown of startup term sheets and how to negotiate terms that protect your interests.",
    category: "Legal",
    author: "Rajesh Kapoor",
    date: "July 22, 2023",
    readTime: "10 min read",
    image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
  },
  {
    id: 6,
    title: "Product-Market Fit: How to Know When You've Found It",
    excerpt: "The definitive guide to identifying and measuring product-market fit for early-stage startups.",
    category: "Product",
    author: "Neha Singh",
    date: "August 10, 2023",
    readTime: "9 min read",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
  },
];

const categories = ["All", "Funding", "Pitch Decks", "Growth", "Team Building", "Legal", "Product"];

export const BlogList = () => {
  return (
    <section className="py-16 bg-bg-light">
      <Container>
        <Tabs defaultValue="All" className="w-full">
          <div className="flex justify-center mb-10">
            <TabsList className="bg-white shadow-md">
              {categories.map((category) => (
                <TabsTrigger key={category} value={category} className="px-4 py-2">
                  {category}
                </TabsTrigger>
              ))}
            </TabsList>
          </div>

          {/* All Posts Tab */}
          <TabsContent value="All" className="mt-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {blogPosts.map((post) => (
                <BlogCard key={post.id} post={post} />
              ))}
            </div>
          </TabsContent>

          {/* Category Tabs */}
          {categories.slice(1).map((category) => (
            <TabsContent key={category} value={category} className="mt-6">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {blogPosts
                  .filter((post) => post.category === category)
                  .map((post) => (
                    <BlogCard key={post.id} post={post} />
                  ))}
              </div>
            </TabsContent>
          ))}

          <div className="flex justify-center mt-12">
            <Button variant="outline" size="lg">
              Load More Articles
            </Button>
          </div>
        </Tabs>
      </Container>
    </section>
  );
};

interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  category: string;
  author: string;
  date: string;
  readTime: string;
  image: string;
}

const BlogCard = ({ post }: { post: BlogPost }) => {
  return (
    <Card className="overflow-hidden hover:shadow-lg transition-shadow duration-300">
      <div className="h-48 overflow-hidden">
        <img
          src={post.image}
          alt={post.title}
          className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
        />
      </div>
      <CardHeader className="pb-2">
        <div className="flex items-center justify-between mb-2">
          <span className="bg-primary/10 text-primary px-3 py-1 rounded-full text-xs font-medium">
            {post.category}
          </span>
          <div className="flex items-center text-text-muted text-sm">
            <Clock size={14} className="mr-1" />
            {post.readTime}
          </div>
        </div>
        <CardTitle className="text-xl hover:text-primary transition-colors duration-300">
          <a href="#">{post.title}</a>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <CardDescription className="text-base text-text-muted">
          {post.excerpt}
        </CardDescription>
      </CardContent>
      <CardFooter className="flex items-center justify-between border-t pt-4">
        <div className="flex items-center">
          <User size={14} className="mr-1 text-text-muted" />
          <span className="text-sm text-text-muted">{post.author}</span>
        </div>
        <div className="flex items-center">
          <Calendar size={14} className="mr-1 text-text-muted" />
          <span className="text-sm text-text-muted">{post.date}</span>
        </div>
      </CardFooter>
    </Card>
  );
};
