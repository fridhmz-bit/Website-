import Hero from './components/Hero';
import ValueProps from './components/ValueProps';
import Services from './components/Services';
import Navbar from './components/Navbar';

export default function App() {
  return (
    <div className="min-h-screen bg-gray-50 font-sans selection:bg-amber-100 selection:text-amber-900">
      <Navbar />
      <main>
        <Hero />
        <ValueProps />
        <Services />
      </main>
      
      <footer className="bg-gray-900 text-white/60 py-12 text-center text-sm border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4">
          <p className="mb-4 text-white/80 font-serif text-xl">Société ARG Chasse touristique au Maroc</p>
          <p>Ready to draft the "About Us" and "Destinations" sections next.</p>
          <p className="mt-8 opacity-50">&copy; {new Date().getFullYear()} Société ARG. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
