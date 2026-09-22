import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Marquee from './components/Marquee';
import Market from './components/Market';
import PropertyTypes from './components/PropertyTypes';
import Hardware from './components/Hardware';
import Pricing from './components/Pricing';
import Timeline from './components/Timeline';
import Booking from './components/Booking';
import Footer from './components/Footer';

function App() {
  return (
    <div id="top" className="min-h-screen bg-[#0b2936] font-body text-[#edf5f2] antialiased">
      <Navbar />
      <main>
        <Hero />
        <div className="mt-14 sm:mt-20">
          <Marquee />
        </div>
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
