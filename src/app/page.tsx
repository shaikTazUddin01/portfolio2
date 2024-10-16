import About from "@/components/ui/About";
import HeroArea from "@/components/ui/HeroArea";
import MySkills from "@/components/ui/MySkills";

export default function Home() {
  return (
<div>
  {/* hero area */}
  <HeroArea/>
  <div className="max-w-7xl mx-auto">

  <About/>
  <MySkills/>
  </div>
</div>
  );
}
