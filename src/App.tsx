import Hero from './sections/Hero';
import Services from './sections/Services';
import Results from './sections/Results';
import Process from './sections/Process';
import Pricing from './sections/Pricing';
import CTA from './sections/CTA';
import Footer from './sections/Footer';

function App() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Hero />
      <Services />
      <Results />
      <Process />
      <Pricing />
      <CTA />
      <Footer />
    </div>
  );
}

export default App;
