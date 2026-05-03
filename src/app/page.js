import Navbar from "@/components/Navbar";
import About from "@/components/sections/About";
import Contact from "@/components/sections/Contact";
import Education from "@/components/sections/Education";
import Footer from "@/components/sections/Footer";
import Hero   from "@/components/sections/Hero";
import ProjectsSection from "@/components/sections/Projects";
import Skills from "@/components/sections/Skills";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />

      {/* temporary placeholders */}
      {/* <section id="about"     className="min-h-screen flex items-center justify-center text-3xl font-bold text-gray-400">About</section> */}
            <About/>

      {/* <section id="skills"    className="min-h-screen flex items-center justify-center text-3xl font-bold text-gray-400">Skills</section> */}
      <Skills/>
      {/* <section id="education" className="min-h-screen flex items-center justify-center text-3xl font-bold text-gray-400">Education</section> */}

      <Education/>
      {/* <section id="projects"  className="min-h-screen flex items-center justify-center text-3xl font-bold text-gray-400">Projects</section> */}
      <ProjectsSection/>
      {/* <section id="contact"   className="min-h-screen flex items-center justify-center text-3xl font-bold text-gray-400">Contact</section> */}
      <Contact/>
      <Footer/>
    </main>
  );
}