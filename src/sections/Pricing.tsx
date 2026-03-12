import { useState } from 'react';
import { motion } from 'framer-motion';

const plans = [
  { name: 'Starter', price: '1,990€', desc: 'Pour démarrer', features: ['Audit', '2 campagnes', 'Rapport mensuel'] },
  { name: 'Growth', price: '4,990€', desc: 'Le plus populaire', features: ['Tout Starter', 'Campagnes illimitées', 'Support prioritaire'], popular: true },
  { name: 'Enterprise', price: 'Sur mesure', desc: 'Pour les grands comptes', features: ['Équipe dédiée', 'Custom dev', 'SLA garanti'] },
];

export default function Pricing() {
  const [isYearly, setIsYearly] = useState(false);
  
  return (
    <section className="py-20 px-6 bg-white/5">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-purple-400 text-sm font-medium">Tarifs</span>
          <h2 className="text-3xl sm:text-4xl font-bold mt-2">Des prix transparents</h2>
          
          <div className="mt-8 flex items-center justify-center gap-4">
            <span className={isYearly ? 'text-gray-500' : 'text-white'}>Mensuel</span>
            <button
              onClick={() => setIsYearly(!isYearly)}
              className="w-14 h-7 rounded-full bg-white/10 relative"
            >
              <div className={`absolute top-1 w-5 h-5 rounded-full bg-purple-400 transition-all ${isYearly ? 'left-8' : 'left-1'}`} />
            </button>
            <span className={isYearly ? 'text-white' : 'text-gray-500'}>Annuel</span>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {plans.map((p, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className={`p-8 rounded-2xl border ${p.popular ? 'border-purple-400 bg-purple-400/10' : 'border-white/10 bg-black'}`}
            >
              {p.popular && <span className="text-xs font-medium text-purple-400">POPULAIRE</span>}
              <h3 className="text-xl font-semibold mt-2">{p.name}</h3>
              <p className="text-gray-400 text-sm">{p.desc}</p>
              <div className="text-3xl font-bold my-4">{p.price}</div>
              
              <ul className="space-y-2 mb-8">
                {p.features.map((f, j) => (
                  <li key={j} className="text-sm text-gray-400">✓ {f}</li>
                ))}
              </ul>
              
              <button className={`w-full py-3 rounded-full font-medium ${p.popular ? 'bg-white text-black' : 'border border-white/20'}`}>
                Commencer
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
