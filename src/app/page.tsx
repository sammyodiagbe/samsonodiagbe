import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/sections/Hero";
import Projects from "@/components/sections/Projects";
import TechStack from "@/components/sections/TechStack";
import Contact from "@/components/sections/Contact";
import CustomCursor from "@/components/interactive/CustomCursor";

export default function Home() {
  return (
    <>
      <CustomCursor />
      <Navbar />
      <main className="min-h-screen">
        <Hero />
        <Projects />
        <TechStack />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
