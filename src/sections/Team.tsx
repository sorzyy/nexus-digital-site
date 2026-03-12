import { motion } from 'framer-motion';
import { Linkedin, Twitter } from 'lucide-react';

const team = [
  {
    name: 'Alexandre Dubois',
    role: 'CEO & Stratège',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&q=80',
  },
  {
    name: 'Marie Lefevre',
    role: 'Directrice Créative',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop&q=80',
  },
  {
    name: 'Thomas Martin',
    role: 'Head of Paid Media',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop&q=80',
  },
  {
    name: 'Sophie Bernard',
    role: 'Data Analyst',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop&q=80',
  },
];

export default function Team() {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-dark">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-secondary font-semibold text-sm uppercase tracking-wider">L\'Équipe</span>
          <h2 className="mt-4 text-3xl sm:text-5xl font-bold font-display text-white">
            Les experts derrière vos résultats
          </h2>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {team.map((member, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: i * 0.1 }}
              className="group relative"
            >
              <div className="relative overflow-hidden rounded-2xl aspect-square mb-4 bg-dark-lighter">
                <img
                  src={member.image}
                  alt={member.name}
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dark/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                
                <div className="absolute bottom-4 left-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-4 group-hover:translate-y-0">
                  <button className="p-2 rounded-full bg-white/10 backdrop-blur-sm hover:bg-white/20 transition-colors">
                    <Linkedin className="w-4 h-4 text-white" />
                  </button>
                  <button className="p-2 rounded-full bg-white/10 backdrop-blur-sm hover:bg-white/20 transition-colors">
                    <Twitter className="w-4 h-4 text-white" />
                  </button>
                </div>
              </div>
              
              <h3 className="text-lg font-bold text-white">{member.name}</h3>
              <p className="text-gray-400 text-sm">{member.role}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
