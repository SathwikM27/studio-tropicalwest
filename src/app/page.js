import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Philosophy from "@/components/sections/Philosophy";
import WhyChooseUs from "@/components/sections/WhyChooseUs";
import Gallery from "@/components/sections/Gallery";
import Brands from "@/components/sections/Brands";
import Founders from "@/components/sections/Founders";
import Contact from "@/components/sections/Contact";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <Philosophy />
        <WhyChooseUs />
        <Gallery />
        <Brands />
        <Founders />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
