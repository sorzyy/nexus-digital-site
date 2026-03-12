import Hero from './sections/Hero';
import Services from './sections/Services';
import Results from './sections/Results';
import Process from './sections/Process';
import Pricing from './sections/Pricing';
import Team from './sections/Team';
import FAQ from './sections/FAQ';
import CTA from './sections/CTA';
import Footer from './sections/Footer';

function App() {
  return (
    <div className="min-h-screen bg-dark text-white">
      <Hero />
      <Services />
      <Results />
      <Process />
      <Pricing />
      <Team />
      <FAQ />
      <CTA />
      <Footer />
    </div>
  );
}

export default App;
