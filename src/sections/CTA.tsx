import { motion } from 'framer-motion';
import { ArrowRight, Sparkles } from 'lucide-react';

export default function CTA() {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-dark relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-primary/20 via-secondary/20 to-accent/20 opacity-30" />
      
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/30 rounded-full blur-[150px]" />
      
      <div className="relative max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm mb-8">
            <Sparkles className="w-4 h-4 text-accent" />
            <span className="text-sm text-gray-300">Prêt à scaler ?</span>
          </div>
          
          <h2 className="text-4xl sm:text-6xl font-bold font-display text-white mb-6">
            Ready to Scale ?
          </h2>
          
          <p className="text-xl text-gray-400 mb-10 max-w-2xl mx-auto">
            Discutons de vos objectifs et voyons comment on peut vous aider à les atteindre.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="group px-8 py-4 bg-gradient-to-r from-primary to-secondary text-white font-semibold rounded-full hover:scale-105 transition-all shadow-lg shadow-primary/25 inline-flex items-center justify-center gap-2">
              Book a Call
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
          
          <p className="mt-6 text-sm text-gray-500">
            Réponse sous 24h. Sans engagement.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
