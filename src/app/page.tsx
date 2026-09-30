import Intro from "@/components/home/Intro";
import TradeFocus from "@/components/home/TradeFocus";
import SpicesStory from "@/components/home/SpicesStory";
import MedicalStory from "@/components/home/MedicalStory";
import TradeProcess from "@/components/home/TradeProcess";
import AboutStory from "@/components/home/AboutStory";
import Enquiry from "@/components/home/Enquiry";
import Footer from "@/components/layout/Footer";

export default function Home() {
  return (
    <main>
      <Intro />
      <TradeFocus />
      <SpicesStory />
      <MedicalStory />
      <TradeProcess />
      <AboutStory />
      <Enquiry />
      <Footer />
    </main>
  );
}