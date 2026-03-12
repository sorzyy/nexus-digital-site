import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center px-6 py-20">
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-block px-4 py-2 rounded-full bg-white/5 border border-white/10 text-sm text-gray-400 mb-8">
            Agence Growth & Performance
          </span>
          
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
            We Scale Brands
            <br />
            <span className="text-gradient">to 8 Figures</span>
          </h1>
          
          <p className="text-lg sm:text-xl text-gray-400 mb-10 max-w-2xl mx-auto">
            Stratégie data-driven, créativité débordante, résultats mesurables.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#contact"
              className="px-8 py-4 bg-white text-black font-semibold rounded-full hover:bg-gray-200 transition-colors"
            >
              Démarrer un projet
            </a>
            
            <a
              href="#results"
              className="px-8 py-4 border border-white/20 text-white font-semibold rounded-full hover:bg-white/5 transition-colors"
            >
              Voir nos résultats
            </a>
          </div>
          
          <div className="mt-16 flex items-center justify-center gap-8 text-sm text-gray-500">
            <div><span className="text-white font-semibold">150M+</span> Revenue</div>
            <div className="w-px h-4 bg-gray-700" />
            <div><span className="text-white font-semibold">200+</span> Clients</div>
            <div className="w-px h-4 bg-gray-700" />
            <div><span className="text-white font-semibold">340%</span> ROAS</div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
