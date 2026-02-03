import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import SteamSection from "@/components/SteamSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="bg-black">
      <HeroSection />
      <AboutSection />
      <SteamSection />
      <Footer />
    </main>
  );
}
