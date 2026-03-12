import { motion } from 'framer-motion';

const results = [
  {
    client: 'E-commerce Mode',
    metric: '+340%',
    label: 'ROAS',
    detail: 'Passage de 2.1 à 9.2 de ROAS en 3 mois',
  },
  {
    client: 'SaaS B2B',
    metric: '2M€',
    label: 'Revenue',
    detail: 'Générés en 6 mois via LinkedIn Ads',
  },
  {
    client: 'Retail Physique',
    metric: '-40%',
    label: 'CPA',
    detail: 'Réduction du coût d\'acquisition client',
  },
];

const logos = ['Shopify', 'Notion', 'Stripe', 'Vercel', 'Figma', 'Slack', 'Linear', 'Raycast'];

export default function Results() {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-dark-light overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-secondary font-semibold text-sm uppercase tracking-wider">Résultats</span>
          <h2 className="mt-4 text-3xl sm:text-5xl font-bold font-display text-white">
            Des chiffres qui parlent
          </h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          {results.map((result, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.2 }}
              className="relative p-8 rounded-2xl bg-dark border border-white/5 text-center group hover:border-primary/50 transition-colors"
            >
              <div className="absolute -inset-px bg-gradient-to-r from-primary/20 to-secondary/20 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity blur-sm" />
              
              <div className="relative">
                <p className="text-sm text-gray-500 mb-4">{result.client}</p>
                <div className="text-5xl font-bold font-display bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent mb-2">
                  {result.metric}
                </div>
                <p className="text-accent font-semibold mb-4">{result.label}</p>
                <p className="text-gray-400 text-sm">{result.detail}</p>
              </div>
            </motion.div>
          ))}
        </div>
        
        <div className="relative">
          <p className="text-center text-gray-500 text-sm mb-8">Ils nous font confiance</p>
          
          <div className="flex overflow-hidden">
            <div className="flex gap-16 animate-marquee">
              {[...logos, ...logos].map((logo, i) => (
                <div key={i} className="flex-shrink-0 text-2xl font-bold text-gray-600 hover:text-gray-400 transition-colors">
                  {logo}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
