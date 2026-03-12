import { motion } from 'framer-motion';
import { Search, Share2, Mail, Users, BarChart3, TrendingUp } from 'lucide-react';

const services = [
  {
    icon: Search,
    title: 'SEO & Content',
    description: 'Dominez les résultats Google avec une stratégie SEO sur mesure.',
    size: 'large',
  },
  {
    icon: Share2,
    title: 'Paid Social',
    description: 'Meta Ads, TikTok, LinkedIn. On scale vos campagnes.',
    size: 'medium',
  },
  {
    icon: TrendingUp,
    title: 'Google Ads',
    description: 'Capturez l\'intention d\'achat au moment clé.',
    size: 'medium',
  },
  {
    icon: Mail,
    title: 'Email Marketing',
    description: 'Automatisez et personnalisez vos séquences.',
    size: 'small',
  },
  {
    icon: Users,
    title: 'Influence',
    description: 'Collaborez avec les créateurs qui convertissent.',
    size: 'small',
  },
  {
    icon: BarChart3,
    title: 'Analytics',
    description: 'Data-driven decisions. Pas de bullshit.',
    size: 'small',
  },
];

export default function Services() {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-dark">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-primary font-semibold text-sm uppercase tracking-wider">Nos Services</span>
          <h2 className="mt-4 text-3xl sm:text-5xl font-bold font-display text-white">
            Tout pour scaler
          </h2>
          <p className="mt-4 text-gray-400 max-w-2xl mx-auto">
            Une approche 360° du growth marketing. Chaque canal optimisé pour maximiser votre ROI.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {services.map((service, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ y: -8, scale: 1.02 }}
              className={`group relative p-8 rounded-2xl bg-dark-light border border-white/5 overflow-hidden cursor-pointer
                ${service.size === 'large' ? 'md:col-span-2 md:row-span-2' : ''}
                ${service.size === 'medium' ? 'md:col-span-1' : ''}
              `}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              
              <div className="relative z-10">
                <div className="w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <service.icon className="w-6 h-6 text-primary" />
                </div>
                
                <h3 className="text-xl font-bold text-white mb-2">{service.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{service.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
