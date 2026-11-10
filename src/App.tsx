import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Marquee from './components/Marquee';
import Divisions from './components/Divisions';
import Market from './components/Market';
import PropertyTypes from './components/PropertyTypes';
import Hardware from './components/Hardware';
import Pricing from './components/Pricing';
import Timeline from './components/Timeline';
import Booking from './components/Booking';
import Footer from './components/Footer';

function App() {
  return (
    <div id="top" className="min-h-screen bg-petrol font-body text-ink antialiased">
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-3 focus:z-[60] focus:bg-mint focus:px-4 focus:py-2 focus:font-mono focus:text-[12px] focus:uppercase focus:text-on-mint"
      >
        Skip to content
      </a>
      <Navbar />
      <main id="main" tabIndex={-1} className="focus:outline-none">
        <Hero />
        <div className="mt-14 sm:mt-20">
          <Marquee />
        </div>
        <Divisions />
        <Market />
        <PropertyTypes />
        <Hardware />
        <Pricing />
        <Timeline />
        <Booking />
      </main>
      <Footer />
    </div>
  );
}

export default App;
