import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { cn } from "@/lib/utils";

export const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <div className="fixed top-6 left-0 right-0 z-50 flex justify-center px-4 pointer-events-none">
        <nav 
          className={cn(
            "pointer-events-auto flex items-center gap-2 p-2 rounded-full transition-all duration-300 border",
            scrolled 
              ? "bg-white/80 backdrop-blur-md shadow-lg border-slate-200/50 py-2 px-3" 
              : "bg-transparent border-transparent py-2 px-3"
          )}
        >
          {/* Logo */}
          <div className="flex items-center gap-2 px-4">
             <div className="h-6 w-6 rounded-full bg-slate-900"></div>
             <span className="font-semibold text-slate-900 tracking-tight hidden sm:block">CureNest</span>
          </div>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center gap-1 mx-2">
            {['Home', 'Services', 'Doctors', 'Blog'].map(item => (
              <a 
                key={item} 
                href="#" 
                className="px-4 py-2 text-sm font-medium text-slate-600 hover:text-slate-900 hover:bg-slate-100 rounded-full transition-all"
              >
                {item}
              </a>
            ))}
          </div>

          {/* Action Button */}
          <div className="pl-2">
            <button className="bg-slate-900 text-white px-5 py-2 rounded-full text-sm font-medium hover:bg-slate-800 transition-colors">
              Book Now
            </button>
          </div>

          {/* Mobile Toggle */}
          <button className="md:hidden p-2 text-slate-900" onClick={() => setMobileMenuOpen(true)}>
            <Menu size={20} />
          </button>
        </nav>
      </div>

      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, scale: 0.95, y: -20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: -20 }}
            className="fixed inset-0 z-[60] bg-white p-6 flex flex-col"
          >
             <div className="flex items-center justify-between mb-8">
                <span className="font-bold text-xl">CureNest</span>
                <button onClick={() => setMobileMenuOpen(false)} className="p-2 bg-slate-100 rounded-full">
                  <X size={20} />
                </button>
             </div>

             <div className="flex flex-col gap-2">
                {['Home', 'About', 'Services', 'Doctors', 'Blog'].map(item => (
                  <a key={item} href="#" className="text-2xl font-medium text-slate-900 py-4 border-b border-slate-50">
                    {item}
                  </a>
                ))}
             </div>

             <button className="mt-auto w-full py-4 bg-slate-900 text-white rounded-xl font-medium">
                Get Started
             </button>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
