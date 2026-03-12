import { useState } from 'react';
import { motion } from 'framer-motion';
import { Check } from 'lucide-react';

const plans = [
  {
    name: 'Starter',
    description: 'Pour les startups qui veulent décoller',
    monthlyPrice: 1990,
    yearlyPrice: 1690,
    features: [
      'Audit complet',
      '2 campagnes actives',
      'Rapport mensuel',
      'Support email',
      'Accès dashboard',
    ],
    popular: false,
  },
  {
    name: 'Growth',
    description: 'Pour scaler rapidement',
    monthlyPrice: 4990,
    yearlyPrice: 4240,
    features: [
      'Tout Starter +',
      'Campagnes illimitées',
      'Stratégie SEO',
      'Email marketing',
      'Support prioritaire',
      'Calls stratégiques',
    ],
    popular: true,
  },
  {
    name: 'Enterprise',
    description: 'Sur mesure pour les grands comptes',
    monthlyPrice: null,
    yearlyPrice: null,
    features: [
      'Tout Growth +',
      'Équipe dédiée',
      'Custom dev',
      'Formation équipe',
      'SLA garanti',
      'CRO optimisé',
    ],
    popular: false,
  },
];

export default function Pricing() {
  const [isYearly, setIsYearly] = useState(false);
  
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-dark-light">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <span className="text-primary font-semibold text-sm uppercase tracking-wider">Tarifs</span>
          <h2 className="mt-4 text-3xl sm:text-5xl font-bold font-display text-white">
            Des prix transparents
          </h2>
          
          <div className="mt-8 flex items-center justify-center gap-4">
            <span className={`text-sm ${!isYearly ? 'text-white' : 'text-gray-500'}`}>Mensuel</span>
            <button
              onClick={() => setIsYearly(!isYearly)}
              className="relative w-14 h-7 rounded-full bg-dark border border-white/10 transition-colors"
            >
              <motion.div
                animate={{ x: isYearly ? 28 : 2 }}
                className="absolute top-1 w-5 h-5 rounded-full bg-primary"
              />
            </button>
            <span className={`text-sm ${isYearly ? 'text-white' : 'text-gray-500'}`}>Annuel</span>
            {isYearly && <span className="ml-2 px-2 py-0.5 text-xs bg-accent/20 text-accent rounded-full">-15%</span>}
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className={`relative p-8 rounded-2xl border transition-all hover:scale-105
                ${plan.popular 
                  ? 'bg-dark border-primary/50 shadow-lg shadow-primary/10' 
                  : 'bg-dark-light border-white/5'}
              `}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-primary text-white text-xs font-bold rounded-full">
                  POPULAIRE
                </div>
              )}
              
              <div className="mb-6">
                <h3 className="text-xl font-bold text-white">{plan.name}</h3>
                <p className="text-gray-400 text-sm mt-1">{plan.description}</p>
              </div>
              
              <div className="mb-6">
                {plan.monthlyPrice ? (
                  <div className="flex items-baseline">
                    <span className="text-4xl font-bold text-white">
                      {isYearly ? plan.yearlyPrice : plan.monthlyPrice}€
                    </span>
                    <span className="text-gray-500 ml-2">/mois</span>
                  </div>
                ) : (
                  <div className="text-2xl font-bold text-white">Sur mesure</div>
                )}
              </div>
              
              <ul className="space-y-3 mb-8">
                {plan.features.map((feature, j) => (
                  <li key={j} className="flex items-center gap-3 text-gray-300">
                    <Check className="w-5 h-5 text-primary flex-shrink-0" />
                    <span className="text-sm">{feature}</span>
                  </li>
                ))}
              </ul>
              
              <button
                className={`w-full py-3 rounded-full font-semibold transition-colors
                  ${plan.popular 
                    ? 'bg-primary text-white hover:bg-primary-dark' 
                    : 'bg-white/5 text-white border border-white/10 hover:bg-white/10'}
                `}
              >
                {plan.monthlyPrice ? 'Commencer' : 'Nous contacter'}
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
