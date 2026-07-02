import Hero from "../components/Hero";
import About from "../components/About";
import Menu from "../components/Menu";
import Events from "../components/Events";
import Gallery from "../components/Gallery";
import Reviews from "../components/Reviews";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Menu />
      <Events />
      <Gallery />
      <Reviews />
      <Contact />
      <Footer />
    </>
  );
}