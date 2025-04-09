import Counter from "./components/Counter";
import Greetings from "./components/Greetings";
import Hello from "./courses/Hello";
import About from "./sections/about/About";
import Experience from "./sections/experience/Experience";
import GetInTouch from "./sections/getintouch/GetInTouch";
import HeroSection from "./sections/herosection/HeroSection";
import Skills from "./sections/skills/Skills";
import Testomonials from "./sections/testimonials/Testomonials";
import Work from "./sections/work/Work";

export default function Home() {
  return (
    <div className="grid m:0 p:0 box-border">
      <Greetings />
      <Counter />
      <HeroSection />
      <About />
      <Skills />
      <Experience />
      <Work />
      <Testomonials />
      <GetInTouch />
    </div>
  );
}
