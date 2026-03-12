import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

const faqs = [
  {
    question: 'Combien de temps pour voir des résultats ?',
    answer: 'Généralement, nos clients voient des améliorations significatives dès le premier mois. Les résultats explosifs arrivent souvent entre le 2ème et 3ème mois, une fois que nous avons suffisamment de données pour optimiser finement les campagnes.',
  },
  {
    question: 'Quels sont vos délais d\'engagement ?',
    answer: 'Nous fonctionnons sans engagement de durée. Vous pouvez arrêter quand vous voulez avec un préavis de 30 jours. Notre confiance repose sur les résultats, pas sur des contrats contraignants.',
  },
  {
    question: 'Travaillez-vous avec tous les secteurs ?',
    answer: 'Nous nous spécialisons dans l\'e-commerce, le SaaS et les services B2B. Nous déclinons les projets dans des niches où nous n\'avons pas d\'expertise avérée pour garantir des résultats.',
  },
  {
    question: 'Comment se passent les échanges ?',
    answer: 'Un point hebdomadaire pour suivre les KPIs, un rapport mensuel détaillé, et un channel Slack dédié pour la communication quotidienne. Vous avez toujours quelqu\'un à contacter.',
  },
  {
    question: 'Quel budget media recommandez-vous ?',
    answer: 'Pour des résultats significatifs, nous recommandons un minimum de 5 000€/mois de budget media pour le plan Starter, et 15 000€/mois pour le plan Growth. Cela varie selon votre secteur et vos objectifs.',
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-dark-light">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-accent font-semibold text-sm uppercase tracking-wider">FAQ</span>
          <h2 className="mt-4 text-3xl sm:text-5xl font-bold font-display text-white">
            Questions fréquentes
          </h2>
        </div>
        
        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className={`rounded-xl border transition-colors ${
                openIndex === i 
                  ? 'bg-dark border-primary/30' 
                  : 'bg-dark border-white/5 hover:border-white/10'
              }`}
            >
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full flex items-center justify-between p-6 text-left"
              >
                <span className="font-semibold text-white pr-4">{faq.question}</span>
                <motion.div
                  animate={{ rotate: openIndex === i ? 180 : 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <ChevronDown className="w-5 h-5 text-gray-400 flex-shrink-0" />
                </motion.div>
              </button>
              
              <AnimatePresence>
                {openIndex === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <p className="px-6 pb-6 text-gray-400">{faq.answer}</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
