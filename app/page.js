import Navbar from "@/components/layout/navbar";
import Experience from "@/components/sections/experience";
import Hero from "@/components/sections/hero";
import Journey from "@/components/sections/journey";
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
      </main>
    </>
  );
}
