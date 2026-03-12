import { motion } from 'framer-motion';
import { Search, Share2, Mail, Users, BarChart3, TrendingUp } from 'lucide-react';

const services = [
  { icon: Search, title: 'SEO & Content', desc: 'Dominez les résultats Google' },
  { icon: Share2, title: 'Paid Social', desc: 'Meta, TikTok, LinkedIn' },
  { icon: TrendingUp, title: 'Google Ads', desc: 'Capturez l\'intention d\'achat' },
  { icon: Mail, title: 'Email Marketing', desc: 'Automatisez vos séquences' },
  { icon: Users, title: 'Influence', desc: 'Créateurs qui convertissent' },
  { icon: BarChart3, title: 'Analytics', desc: 'Data-driven decisions' },
];

export default function Services() {
  return (
    <section id="services" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-purple-400 text-sm font-medium">Nos Services</span>
          <h2 className="text-3xl sm:text-4xl font-bold mt-2">Tout pour scaler</h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="p-6 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors"
            >
              <s.icon className="w-8 h-8 text-purple-400 mb-4" />
              <h3 className="text-lg font-semibold mb-2">{s.title}</h3>
              <p className="text-gray-400">{s.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
