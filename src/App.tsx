import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Market from './components/Market';
import PropertyTypes from './components/PropertyTypes';
import Hardware from './components/Hardware';
import Pricing from './components/Pricing';
import Timeline from './components/Timeline';
import Booking from './components/Booking';
import Footer from './components/Footer';

function App() {
  return (
    <div id="top" className="min-h-screen bg-[#0B0F17] text-[#dfe2ee] font-body">
      <Navbar />
      <main>
        <Hero />
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
