import { Leaf, Compass, Users, Star } from 'lucide-react';
import { motion } from 'motion/react';

export default function ValueProps() {
  const props = [
    { icon: Leaf, title: "Sustainable Tourism" },
    { icon: Compass, title: "Tailored Itineraries" },
    { icon: Users, title: "Authentic Local Guides" },
    { icon: Star, title: "Premium Experiences" },
  ];

  return (
    <section className="bg-white py-12 border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {props.map((prop, index) => {
            const Icon = prop.icon;
            return (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex flex-col items-center text-center group"
              >
                <div className="w-16 h-16 rounded-full bg-amber-50 flex items-center justify-center mb-4 text-amber-600 group-hover:bg-amber-100 group-hover:scale-110 transition-all duration-300">
                  <Icon size={32} strokeWidth={1.5} />
                </div>
                <h3 className="text-gray-900 font-medium font-sans text-lg">{prop.title}</h3>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
