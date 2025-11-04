import { useEffect } from "react";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Skills } from "@/components/Skills";
import { Projects } from "@/components/Projects";
import { Timeline } from "@/components/Timeline";
import { Footer } from "@/components/Footer";
import { WhatsAppFloat } from "@/components/WhatsAppFloat";

const Index = () => {
  useEffect(() => {
    // Check if URL has hash for timeline
    if (window.location.hash === "#timeline") {
      setTimeout(() => {
        const timeline = document.getElementById("timeline");
        if (timeline) {
          timeline.scrollIntoView({ behavior: "smooth" });
        }
      }, 100);
    }
  }, []);

  return (
    <div className="min-h-screen">
      <Hero />
      <About />
      <Timeline />
      <Skills />
      <Projects />
      <Footer />
      <WhatsAppFloat />
    </div>
  );
};

export default Index;
