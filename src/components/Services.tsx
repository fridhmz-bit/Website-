import { motion } from 'motion/react';

export default function Services() {
  const services = [
    {
      title: "Cultural Tours",
      description: "Step into the heart of Moroccan heritage. Wander through centuries-old medinas, learn time-honored crafts in artisan workshops, and taste the authentic flavors of local cuisine.",
      image: "https://images.unsplash.com/photo-1539020140153-e479b8c22e70?q=80&w=2070&auto=format&fit=crop", // Medina/Fes style
      cta: "Discover Culture"
    },
    {
      title: "Adventure Tours",
      description: "Answer the call of the wild. Embark on breathtaking hikes through the High Atlas, experience the thrill of a desert safari, and sleep under the stars in a luxury Sahara camp.",
      image: "https://images.unsplash.com/photo-1549416550-ee9ba3ee0555?q=80&w=2069&auto=format&fit=crop", // Atlas mountains / Desert
      cta: "Seek Adventure"
    },
    {
      title: "Luxury Experiences",
      description: "Indulge in unparalleled Moroccan hospitality. Relax in exclusive, world-class Riads, enjoy private guided excursions, and savor gourmet dining experiences tailored just for you.",
      image: "https://images.unsplash.com/photo-1542314831-c6a4d1b827e6?q=80&w=2069&auto=format&fit=crop", // Riad courtyard / Luxury
      cta: "Experience Luxury"
    }
  ];

  return (
    <section className="bg-gray-50 py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-serif text-gray-900 mb-6"
          >
            Uncover the Magic of Morocco
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg text-gray-600 font-sans"
          >
            Whether you're seeking the thrill of the desert, the quiet luxury of a traditional Riad, or the vibrant pulse of ancient medinas, ARG curates the perfect journey for your travel style.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className="bg-white rounded-sm overflow-hidden shadow-sm hover:shadow-xl transition-shadow duration-300 border border-gray-100 flex flex-col"
            >
              <div className="h-64 overflow-hidden relative">
                <div 
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-700 hover:scale-105"
                  style={{ backgroundImage: `url("${service.image}")` }}
                />
              </div>
              <div className="p-8 flex flex-col flex-grow">
                <h3 className="text-2xl font-serif text-gray-900 mb-4">{service.title}</h3>
                <p className="text-gray-600 mb-8 flex-grow leading-relaxed">
                  {service.description}
                </p>
                <button className="w-full py-3 border border-gray-300 text-gray-800 font-medium hover:bg-gray-50 hover:text-amber-600 hover:border-amber-600 transition-colors duration-300 rounded-sm cursor-pointer">
                  {service.cta}
                </button>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
