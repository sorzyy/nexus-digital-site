import { motion } from 'framer-motion';

export default function CTA() {
  return (
    <section id="contact" className="py-20 px-6">
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-6">
            Ready to Scale ?
          </h2>
          
          <p className="text-gray-400 mb-8 max-w-xl mx-auto">
            Discutons de vos objectifs et voyons comment on peut vous aider.
          </p>
          
          <a
            href="mailto:contact@nexusdigital.com"
            className="inline-block px-8 py-4 bg-white text-black font-semibold rounded-full hover:bg-gray-200 transition-colors"
          >
            Book a Call
          </a>
        </motion.div>
      </div>
    </section>
  );
}
