import { motion } from 'framer-motion';

const results = [
  { value: '+340%', label: 'ROAS', client: 'E-commerce Mode' },
  { value: '2M€', label: 'Revenue', client: 'SaaS B2B' },
  { value: '-40%', label: 'CPA', client: 'Retail' },
];

export default function Results() {
  return (
    <section id="results" className="py-20 px-6 bg-white/5">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-cyan-400 text-sm font-medium">Résultats</span>
          <h2 className="text-3xl sm:text-4xl font-bold mt-2">Des chiffres qui parlent</h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {results.map((r, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              className="text-center p-8 rounded-2xl bg-black border border-white/10"
            >
              <p className="text-sm text-gray-500 mb-4">{r.client}</p>
              <div className="text-5xl font-bold text-gradient mb-2">{r.value}</div>
              <p className="text-orange-400 font-medium">{r.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
