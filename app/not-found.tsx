import Link from "next/link";
import { ServicesGrid } from "@/components/Sections";

export default function NotFound() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <span className="eyebrow eyebrow--light">404</span>
          <h1>This page took a wrong turn at the Akshardham flyover</h1>
          <p className="lead">The page you’re looking for doesn’t exist or has moved. Let’s get you back on track.</p>
          <div className="hero-actions">
            <Link href="/" className="btn btn-primary btn-lg">Back to home</Link>
            <Link href="/contact" className="btn btn-light btn-lg">Contact us</Link>
          </div>
        </div>
      </section>
      <ServicesGrid />
    </>
  );
}
