import type { Metadata } from "next";
import Link from "next/link";
import { ServicesGrid } from "@/components/Sections";

export const metadata: Metadata = {
  title: "Page not found",
  description: "This page doesn’t exist or has moved. Browse Digital Ravindra’s services or contact us.",
};

export default function NotFound() {
  return (
    <>
      {/* Metadata streams late on 404s with cacheComponents; a React title is hoisted into <head> right away. */}
      <title>Page not found | Digital Ravindra</title>
      <section className="page-hero">
        <div className="container">
          <span className="eyebrow eyebrow--light">404</span>
          <h1>This page took a wrong turn at the Akshardham flyover</h1>
          <p className="lead">The page you’re looking for doesn’t exist or has moved. Let’s get you back on track.</p>
          <div className="hero-actions">
            <Link href="/" className="btn btn-primary btn-lg">Back to home</Link>
            <Link href="/contact-us" className="btn btn-light btn-lg">Contact us</Link>
          </div>
        </div>
      </section>
      <ServicesGrid />
    </>
  );
}
