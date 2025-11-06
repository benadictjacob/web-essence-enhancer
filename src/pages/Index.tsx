import { Navigation } from "@/components/Navigation";
import { Hero } from "@/components/Hero";
import { Partners } from "@/components/Partners";
import { Features } from "@/components/Features";
import { Products } from "@/components/Products";
import { About } from "@/components/About";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { ScrollToTop } from "@/components/ScrollToTop";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <Hero />
      <Partners />
      <Features />
      <Products />
      <About />
      <Contact />
      <Footer />
      <ScrollToTop />
    </div>
  );
};

export default Index;
