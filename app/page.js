import Navbar from "@/components/layout/navbar";
import Hero from "@/components/sections/hero";
import Journey from "@/components/sections/journey";

export default function Home() {
  return (
    <>
      <Navbar />

      <main>
        <Hero />
        <Journey />
      </main>
    </>
  );
}
