
import React from "react";
import Navbar from "@/components/Navbar";
import { BlogList } from "@/components/BlogList";
import CallToAction from "@/components/CallToAction";
import Footer from "@/components/Footer";
import { Helmet } from "react-helmet";

const Blog = () => {
  return (
    <>
      <Helmet>
        <title>Blog & Insights | The Startup Wallah</title>
        <meta name="description" content="Discover the latest insights, funding tips, startup success stories, and growth hacks from The Startup Wallah's expert blog." />
      </Helmet>
      <Navbar />
      <div className="pt-20">
        <header className="bg-primary py-20 text-white">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">Blog & Insights</h1>
            <p className="text-xl max-w-3xl">The latest insights, funding tips, and growth hacks for startup success</p>
          </div>
        </header>
        <BlogList />
        <CallToAction />
      </div>
      <Footer />
    </>
  );
};

export default Blog;
