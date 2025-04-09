import Counter from "./components/Counter";
import Greetings from "./components/Greetings";
import Hello from "./courses/Hello";
import HeroSection from "./sections/herosection/HeroSection";

export default function Home() {
  return (
    <div className="grid m:0 p:0 box-border">
      <Greetings />
      <Counter />
      <HeroSection />
    </div>
  );
}
