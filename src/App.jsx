import Navbar from "./components/Navbar";
import Hero from "./sections/Hero";
import Intro from "./sections/Intro";
import SelectedWork from "./sections/SelectedWork";
import Services from "./sections/Services";
import Process from "./sections/Process";
import About from "./sections/About";
import Pricing from "./sections/Pricing";
import FAQ from "./sections/FAQ";
import Contact from "./sections/Contact";
import Footer from "./sections/Footer";

function App() {
  return (
    <>
      <Navbar />

      <main>
        <Hero />
        <Intro />
        <SelectedWork />
        <Services />
        <Process />
        <About />
        <Pricing />
        <FAQ />
        <Contact />
        <Footer />
      </main>
    </>
  );
}

export default App;