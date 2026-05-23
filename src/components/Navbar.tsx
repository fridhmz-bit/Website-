import { motion } from 'motion/react';

export default function Navbar() {
  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className="absolute top-0 left-0 right-0 z-50 bg-transparent py-6"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <div className="text-white font-serif text-2xl font-bold tracking-wider">
            ARG<span className="text-amber-500">.</span>
          </div>
          <div className="hidden md:flex space-x-8 mt-1">
            <a href="#" className="text-white/80 hover:text-white text-sm uppercase tracking-widest font-medium transition-colors">Tours</a>
            <a href="#" className="text-white/80 hover:text-white text-sm uppercase tracking-widest font-medium transition-colors">Destinations</a>
            <a href="#" className="text-white/80 hover:text-white text-sm uppercase tracking-widest font-medium transition-colors">About</a>
            <a href="#" className="text-white/80 hover:text-white text-sm uppercase tracking-widest font-medium transition-colors">Contact</a>
          </div>
        </div>
      </div>
    </motion.nav>
  );
}
