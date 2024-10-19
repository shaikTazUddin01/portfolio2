import About from "@/components/ui/About";
import Contact from "@/components/ui/Contact";
import Experience from "@/components/ui/Education";
import { HeroBanner } from "@/components/ui/HeroBanner";
// import HeroArea from "@/components/ui/HeroArea";
import MySkills from "@/components/ui/MySkills";
import Portfolio from "@/components/ui/Portfolio";

export default function Home() {
  
  return (
    <div>
      {/* hero area */}
      <div className="">
        <HeroBanner />
      </div>

      <About />
      <Experience />
      <MySkills />
      <Portfolio />
      <Contact />
    </div>
  );
}
