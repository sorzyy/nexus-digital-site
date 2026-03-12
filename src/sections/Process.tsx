import { motion } from 'framer-motion';
import { Search, Brain, Rocket, TrendingUp } from 'lucide-react';

const steps = [
  {
    icon: Search,
    title: 'Audit',
    description: 'Analyse complète de votre présence digitale et de vos données.',
    color: 'from-primary to-purple-600',
  },
  {
    icon: Brain,
    title: 'Stratégie',
    description: 'Plan d\'action personnalisé basé sur vos objectifs.',
    color: 'from-secondary to-cyan-600',
  },
  {
    icon: Rocket,
    title: 'Execution',
    description: 'Mise en place rapide avec itérations agiles.',
    color: 'from-accent to-orange-600',
  },
  {
    icon: TrendingUp,
    title: 'Optimisation',
    description: 'Amélioration continue basée sur les données.',
    color: 'from-green-500 to-emerald-600',
  },
];

export default function Process() {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-dark">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-accent font-semibold text-sm uppercase tracking-wider">Notre Process</span>
          <h2 className="mt-4 text-3xl sm:text-5xl font-bold font-display text-white">
            Comment on travaille
          </h2>
        </div>
        
        <div className="relative">
          <div className="absolute left-8 top-0 bottom-0 w-px bg-gradient-to-b from-primary via-secondary to-accent hidden md:block" />
          
          <div className="space-y-12">
            {steps.map((step, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.2 }}
                className="relative flex flex-col md:flex-row gap-8 items-start"
              >
                <div className="flex-shrink-0 relative z-10">
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${step.color} flex items-center justify-center shadow-lg`}>
                    <step.icon className="w-8 h-8 text-white" />
                  </div>
                  <div className="absolute -inset-2 bg-gradient-to-r from-primary to-secondary rounded-2xl blur-lg opacity-30 animate-pulse" />
                </div>
                
                <div className="flex-1 pt-2">
                  <div className="flex items-center gap-4 mb-2">
                    <span className="text-sm font-bold text-primary">0{i + 1}</span>
                    <h3 className="text-2xl font-bold text-white">{step.title}</h3>
                  </div>
                  <p className="text-gray-400">{step.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
