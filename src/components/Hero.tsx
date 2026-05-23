import { motion } from 'motion/react';

export default function Hero() {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image Setup */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1489493173507-6feea31f12ff?q=80&w=2070&auto=format&fit=crop")',
          backgroundPosition: 'center',
          backgroundSize: 'cover'
        }}
      >
        {/* Overlay to ensure text readability */}
        <div className="absolute inset-0 bg-black/50" />
      </div>

      <div className="relative z-10 text-center px-4 max-w-5xl mx-auto flex flex-col items-center">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-4xl md:text-6xl lg:text-7xl font-serif text-white leading-tight mb-6"
        >
          Société ARG Chasse touristique au Maroc <br/>
          <span className="text-amber-400 italic font-normal text-3xl md:text-5xl lg:text-6xl mt-4 block">
            Your Gateway to Authentic Adventures.
          </span>
        </motion.h1>

        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="text-lg md:text-xl text-gray-200 max-w-2xl mb-10 font-sans"
        >
          Go beyond the guidebook. Experience tailored tours, deep cultural immersion, and unforgettable journeys crafted by local experts.
        </motion.p>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
          className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto"
        >
          <button className="px-8 py-4 bg-amber-500 hover:bg-amber-600 text-white font-semibold rounded-sm transition-colors duration-300 shadow-lg cursor-pointer">
            Plan Your Trip
          </button>
          <button className="px-8 py-4 bg-transparent border-2 border-white text-white hover:bg-white hover:text-gray-900 font-semibold rounded-sm transition-all duration-300 cursor-pointer">
            Explore Destinations
          </button>
        </motion.div>
      </div>
    </section>
  );
}
