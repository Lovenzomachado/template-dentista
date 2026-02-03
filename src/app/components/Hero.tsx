import { BlurFade } from "./ui/blur-fade";
import { ArrowRight } from "lucide-react";

export const Hero = () => {
  return (
    <section className="relative min-h-[90vh] flex flex-col justify-center overflow-hidden bg-white">
      {/* Background Gradients */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10 pointer-events-none">
        <div className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] rounded-full bg-blue-50/50 blur-[100px]" />
        <div className="absolute bottom-[-10%] left-[-10%] w-[600px] h-[600px] rounded-full bg-indigo-50/50 blur-[120px]" />
      </div>

      <div className="container mx-auto px-4 md:px-6 py-20">
        <div className="flex flex-col items-center text-center space-y-8 max-w-4xl mx-auto">
          
          <BlurFade delay={0.1}>
            <div className="inline-flex items-center rounded-full border border-slate-200 bg-slate-50/50 px-3 py-1 text-sm text-slate-500 backdrop-blur-sm transition-colors hover:bg-slate-100/80">
              <span className="flex h-2 w-2 rounded-full bg-blue-500 mr-2 animate-pulse"></span>
              Reimagining Digital Health
            </div>
          </BlurFade>

          <BlurFade delay={0.2} className="relative z-10">
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-medium tracking-tight text-slate-950 text-balance">
              Healthcare <span className="text-slate-400 italic font-serif">simplified</span> for everyone.
            </h1>
          </BlurFade>

          <BlurFade delay={0.3}>
            <p className="max-w-2xl text-lg md:text-xl text-slate-500 text-balance leading-relaxed">
              Experience the future of medical care with our intelligent platform. 
              Seamless appointments, expert consultations, and personalized records.
            </p>
          </BlurFade>

          <BlurFade delay={0.4} className="flex flex-col sm:flex-row items-center gap-4 pt-4">
            <button className="group relative inline-flex h-12 items-center justify-center overflow-hidden rounded-full bg-slate-900 px-8 font-medium text-white transition-all duration-300 hover:bg-slate-800 hover:scale-105 active:scale-95">
              <span>Get Started</span>
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </button>
            
            <button className="group inline-flex h-12 items-center justify-center rounded-full border border-slate-200 bg-white px-8 font-medium text-slate-900 transition-all hover:bg-slate-50 hover:border-slate-300">
              How it works
            </button>
          </BlurFade>

          <BlurFade delay={0.6} className="pt-12 w-full flex justify-center">
             <div className="relative w-full max-w-5xl aspect-[16/9] rounded-2xl border border-slate-200 bg-slate-100/50 overflow-hidden shadow-2xl shadow-slate-200/50">
                <img 
                  src="https://images.unsplash.com/photo-1758691463393-a2aa9900af8a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzbWlsaW5nJTIwZG9jdG9yJTIwcG9ydHJhaXQlMjB3aGl0ZSUyMGNvYXR8ZW58MXx8fHwxNzcwMDg3OTQ0fDA&ixlib=rb-4.1.0&q=80&w=1080"
                  alt="Dashboard Preview"
                  className="w-full h-full object-cover opacity-90 hover:scale-105 transition-transform duration-700 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-white/20 to-transparent pointer-events-none" />
             </div>
          </BlurFade>

        </div>
      </div>
    </section>
  );
};
