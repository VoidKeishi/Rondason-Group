import { UtilityBar } from "@/components/sections/UtilityBar";
import { MarketTicker } from "@/components/sections/MarketTicker";
import { Header } from "@/components/sections/Header";
import { Hero } from "@/components/sections/Hero";
import { Process } from "@/components/sections/Process";
import { Story } from "@/components/sections/Story";
import { Pillars } from "@/components/sections/Pillars";
import { Markets } from "@/components/sections/Markets";
import { Footer } from "@/components/sections/Footer";

export default function Home() {
  return (
    <>
      <UtilityBar />
      <MarketTicker />
      <Header />
      <main>
        <Hero />
        <Process />
        <Story />
        <Pillars />
        <Markets />
      </main>
      <Footer />
    </>
  );
}
