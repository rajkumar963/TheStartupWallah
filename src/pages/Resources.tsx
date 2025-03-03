
import React from "react";
import Navbar from "@/components/Navbar";
import ResourceHub from "@/components/ResourceHub";
import CallToAction from "@/components/CallToAction";
import Footer from "@/components/Footer";
import { Helmet } from "react-helmet";

const Resources = () => {
  return (
    <>
      <Helmet>
        <title>Resources | The Startup Wallah</title>
        <meta name="description" content="Access our library of free and premium e-books, guides, and tools designed to help startups succeed in fundraising, marketing, and scaling." />
      </Helmet>
      <Navbar />
      <div className="pt-20">
        <header className="bg-primary py-20 text-white">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">Resource Hub</h1>
            <p className="text-xl max-w-3xl">E-books, guides, and tools to help your startup succeed</p>
          </div>
        </header>
        <ResourceHub fullPage={true} />
        <CallToAction />
      </div>
      <Footer />
    </>
  );
};

export default Resources;
