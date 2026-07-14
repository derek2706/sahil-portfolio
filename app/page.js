import Navbar from "@/components/layout/navbar";
import Contact from "@/components/sections/contact";
import Experience from "@/components/sections/experience";
import Footer from "@/components/sections/footer";
import Hero from "@/components/sections/hero";
import Journey from "@/components/sections/journey";
import Principles from "@/components/sections/principles";
import Skills from "@/components/sections/skills";

export default function Home() {
  return (
    <>
      <Navbar />

      <main>
        <Hero />

        <Journey />

        <Skills />

        <Experience />

        <Principles />

        <Contact />

        <Footer />
      </main>
    </>
  );
}
