
import React from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import WhyChooseUs from "@/components/WhyChooseUs";
import Testimonials from "@/components/Testimonials";
import ResourceHub from "@/components/ResourceHub";
import BlogPreview from "@/components/BlogPreview";
import CallToAction from "@/components/CallToAction";
import Footer from "@/components/Footer";
import CaseStudies from "@/components/CaseStudies";
import IndustryTrends from "@/components/IndustryTrends";
import InvestorData from "@/components/InvestorData";
import { Helmet } from "react-helmet";

export default function Index() {
  return (
    <>
      <Helmet>
        <title>The Startup Wallah | From Ideas to Empire</title>
        <meta name="description" content="Connect with top investors, get expert growth strategies, and scale your startup to new heights with The Startup Wallah." />
      </Helmet>
      <Navbar />
      <Hero />
      <About />
      <Services />
      <WhyChooseUs />
      <InvestorData />
      <CaseStudies />
      <Testimonials />
      <IndustryTrends />
      <ResourceHub fullPage={false} />
      <BlogPreview />
      <CallToAction />
      <Footer />
    </>
  );
}
