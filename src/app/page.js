import Navbar from "@/components/Navbar";
import About from "@/components/sections/About";
import Hero   from "@/components/sections/Hero";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />

      {/* temporary placeholders */}
      {/* <section id="about"     className="min-h-screen flex items-center justify-center text-3xl font-bold text-gray-400">About</section> */}
            <About/>

      <section id="skills"    className="min-h-screen flex items-center justify-center text-3xl font-bold text-gray-400">Skills</section>
      <section id="education" className="min-h-screen flex items-center justify-center text-3xl font-bold text-gray-400">Education</section>
      <section id="projects"  className="min-h-screen flex items-center justify-center text-3xl font-bold text-gray-400">Projects</section>
      <section id="contact"   className="min-h-screen flex items-center justify-center text-3xl font-bold text-gray-400">Contact</section>
    </main>
  );
}