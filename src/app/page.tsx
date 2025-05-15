import AboutSection from "@/components/about-section";
import FooterSection from "@/components/footer-section";
import HeroSection from "@/components/hero-section";
import NavBar from "@/components/nav-bar";

export default function Home() {
  return (
    <>
      {/* <NavBar /> */}
      <main>
        <HeroSection />
        <AboutSection />
        <FooterSection />
      </main>
    </>
  );
}
