import { motion } from 'framer-motion';

const steps = [
  { num: '01', title: 'Audit', desc: 'Analyse complète de votre présence' },
  { num: '02', title: 'Stratégie', desc: 'Plan personnalisé' },
  { num: '03', title: 'Execution', desc: 'Mise en place rapide' },
  { num: '04', title: 'Optimisation', desc: 'Amélioration continue' },
];

export default function Process() {
  return (
    <section className="py-20 px-6">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-orange-400 text-sm font-medium">Notre Process</span>
          <h2 className="text-3xl sm:text-4xl font-bold mt-2">Comment on travaille</h2>
        </div>
        
        <div className="space-y-8">
          {steps.map((s, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="flex items-start gap-6"
            >
              <span className="text-2xl font-bold text-purple-400">{s.num}</span>
              <div>
                <h3 className="text-xl font-semibold mb-1">{s.title}</h3>
                <p className="text-gray-400">{s.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
