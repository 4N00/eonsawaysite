import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import StorySection from "@/components/StorySection";
import FeaturesSection from "@/components/FeaturesSection";
import WorldSection from "@/components/WorldSection";
import GallerySection from "@/components/GallerySection";
import SteamWishlistSection from "@/components/SteamWishlistSection";
import CommunitySection from "@/components/CommunitySection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Navigation />
      <HeroSection />
      <StorySection />
      <FeaturesSection />
      <WorldSection />
      <GallerySection />
      <SteamWishlistSection />
      <CommunitySection />
      <Footer />
    </main>
  );
}
