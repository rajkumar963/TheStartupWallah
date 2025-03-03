import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";

export default function NotFound() {
  return (
    <>
      <Helmet>
        <title>Page Not Found | The Startup Wallah</title>
        <meta name="description" content="The page you are looking for doesn't exist or has been moved." />
      </Helmet>
      <Navbar />
      <div className="pt-20">
        <div className="min-h-[60vh] flex flex-col items-center justify-center text-center p-4">
          <h1 className="text-6xl md:text-8xl font-bold text-primary mb-4">404</h1>
          <h2 className="text-2xl md:text-3xl font-semibold mb-4">Page Not Found</h2>
          <p className="text-lg text-text-muted max-w-lg mb-8">
            Oops! The page you are looking for doesn't exist or has been moved.
          </p>
          <div className="space-x-4">
            <Button asChild>
              <Link to="/">Back to Home</Link>
            </Button>
            <Button variant="outline" asChild>
              <Link to="/contact">Contact Us</Link>
            </Button>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
