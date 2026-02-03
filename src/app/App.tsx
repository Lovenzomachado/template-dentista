import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { ServicesScroll } from './components/ServicesScroll';
import { TrustedCare } from './components/TrustedCare';
import { LeadingWithHeart } from './components/LeadingWithHeart';
import { FAQ } from './components/FAQ';
import { Footer } from './components/Footer';

export default function App() {
  return (
    <main className="w-full min-h-screen bg-white font-sans text-slate-900 antialiased selection:bg-blue-100 selection:text-blue-900">
      <Navbar />
      <Hero />
      <TrustedCare />
      <ServicesScroll />
      <LeadingWithHeart />
      
      {/* Minimal CTA */}
      <section className="py-32 bg-white text-center">
        <div className="container mx-auto px-4">
           <h2 className="text-4xl md:text-6xl font-medium tracking-tighter mb-8">
             Ready to feel better?
           </h2>
           <button className="h-14 px-10 rounded-full bg-slate-900 text-white font-medium hover:scale-105 hover:bg-slate-800 transition-all duration-300 shadow-xl shadow-slate-200">
             Start Your Journey
           </button>
        </div>
      </section>

      <FAQ />
      <Footer />
    </main>
  );
}
