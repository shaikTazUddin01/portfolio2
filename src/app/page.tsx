import About from "@/components/ui/About";
import Contact from "@/components/ui/Contact";
import Experience from "@/components/ui/Experience";
import HeroArea from "@/components/ui/HeroArea";
import MySkills from "@/components/ui/MySkills";
import Portfolio from "@/components/ui/Portfolio";

export default function Home() {
  return (
<div>
  {/* hero area */}
  <div className="">
  <HeroArea/>
  </div>

  <About/>
  <Experience/>
  <MySkills/>
  <Portfolio/>
  <Contact/>
</div>
  );
}
