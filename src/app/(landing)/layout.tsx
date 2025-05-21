import FooterSection from "@/components/layout/footer-section";
import HeroSection from "@/components/layout/hero-section";
import { Navbar } from "@/components/layout/navbar";

export default function LandingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Navbar />
      <HeroSection />
      {children}
      <FooterSection />
    </>
  );
}
