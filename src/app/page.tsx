import AboutSection from "@/components/about-section";
import BlogSection from "@/components/blogs-section";
import FooterSection from "@/components/footer-section";
import HeroSection from "@/components/hero-section";
import NavBar from "@/components/nav-bar";
import LoadingPage from "@/components/loading-page";

export default function Home() {
  return (
    <>
      <NavBar />
      <main>
        <HeroSection />
        <AboutSection />
        <LoadingPage />
        <BlogSection />
        <FooterSection />
      </main>
    </>
  );
}
