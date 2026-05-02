import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <main>
      <Navbar/>

      {/* temporary section placeholders so scroll works */}
      <section id="home"      className="min-h-screen flex items-center justify-center text-4xl font-bold">Home</section>
      <section id="about"     className="min-h-screen flex items-center justify-center text-4xl font-bold">About</section>
      <section id="skills"    className="min-h-screen flex items-center justify-center text-4xl font-bold">Skills</section>
      <section id="education" className="min-h-screen flex items-center justify-center text-4xl font-bold">Education</section>
      <section id="projects"  className="min-h-screen flex items-center justify-center text-4xl font-bold">Projects</section>
      <section id="contact"   className="min-h-screen flex items-center justify-center text-4xl font-bold">Contact</section>
    </main>
  );
}