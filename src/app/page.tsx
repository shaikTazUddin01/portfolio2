import About from "@/components/ui/About";
import Experience from "@/components/ui/Experience";
import HeroArea from "@/components/ui/HeroArea";
import MySkills from "@/components/ui/MySkills";
import Portfolio from "@/components/ui/Portfolio";

export default function Home() {
  return (
<div>
  {/* hero area */}
  <HeroArea/>
  <div className="max-w-7xl mx-auto">

  <About/>
  <MySkills/>
  {/* <Experience/> */}
  <Portfolio/>
  </div>
</div>
  );
}
