
import React from "react";
import Navbar from "@/components/Navbar";
import ServicesSection from "@/components/Services";
import CallToAction from "@/components/CallToAction";
import Footer from "@/components/Footer";
import { Helmet } from "react-helmet";

const Services = () => {
  return (
    <>
      <Helmet>
        <title>Our Services | The Startup Wallah</title>
        <meta name="description" content="Discover our range of expert-backed services designed to help startups thrive - from investor connections to business strategy and mentorship." />
      </Helmet>
      <Navbar />
      <div className="pt-20">
        <header className="bg-primary py-20 text-white">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">Our Services</h1>
            <p className="text-xl max-w-3xl">Comprehensive support to help your startup reach its full potential</p>
          </div>
        </header>
        <ServicesSection fullPage={true} />
        <CallToAction />
      </div>
      <Footer />
    </>
  );
};

export default Services;
