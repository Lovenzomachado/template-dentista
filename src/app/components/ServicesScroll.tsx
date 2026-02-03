import { motion, useScroll, useTransform } from 'motion/react';
import { useRef } from 'react';
import { Activity, Heart, Brain, Smile, Stethoscope } from 'lucide-react';

const services = [
  {
    title: "General Care",
    description: "Daily health needs.",
    icon: Stethoscope,
  },
  {
    title: "Cardiology",
    description: "Heart specialists.",
    icon: Heart,
  },
  {
    title: "Neurology",
    description: "Brain health experts.",
    icon: Brain,
  },
  {
    title: "Dental",
    description: "Bright smiles.",
    icon: Smile,
  },
  {
    title: "Pediatrics",
    description: "Care for kids.",
    icon: Activity,
  }
];

export const ServicesScroll = () => {
  const targetRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  // Adjust scroll mapping for smoother feel
  const x = useTransform(scrollYProgress, [0.1, 0.9], ["0%", "-50%"]);

  return (
    <section ref={targetRef} className="relative h-[250vh] bg-slate-950 text-white">
      <div className="sticky top-0 flex h-screen items-center overflow-hidden">
        
        {/* Title Block */}
        <div className="absolute top-12 left-6 md:top-24 md:left-24 z-20 max-w-[300px] md:max-w-md pointer-events-none">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
             <h2 className="text-4xl md:text-6xl font-medium tracking-tighter text-white mb-6 leading-tight">
               Seamless <br /> <span className="text-blue-500">Care</span> Flow.
             </h2>
             <p className="text-slate-400 text-lg">
               Scroll to explore our specialized departments designed for your well-being.
             </p>
          </motion.div>
        </div>

        {/* Horizontal Moving Container */}
        <motion.div style={{ x }} className="flex gap-6 pl-6 md:pl-24 items-center h-full w-[200vw] md:w-auto">
            {/* Spacer to push first card properly relative to title */}
            <div className="w-[85vw] md:w-[40vw] lg:w-[35vw] shrink-0"></div>
            
            {services.map((service, index) => (
              <div
                key={index}
                className="group relative h-[320px] w-[260px] md:h-[400px] md:w-[320px] shrink-0 rounded-3xl p-8 flex flex-col justify-between bg-white/5 border border-white/10 hover:bg-white/10 transition-colors backdrop-blur-md"
              >
                <div>
                  <div className="mb-8 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-white/10 text-white group-hover:bg-blue-500 group-hover:scale-110 transition-all duration-300">
                    <service.icon size={26} />
                  </div>
                  <h3 className="text-3xl font-medium text-white mb-3 tracking-tight">{service.title}</h3>
                  <p className="text-slate-400 text-sm leading-relaxed">
                    {service.description}
                  </p>
                </div>
                
                <div className="flex items-center justify-between mt-auto pt-8 border-t border-white/5">
                  <span className="text-xs font-semibold text-slate-300 uppercase tracking-wider">Explore</span>
                  <div className="h-8 w-8 rounded-full border border-white/20 flex items-center justify-center text-white group-hover:bg-white group-hover:text-black transition-all">
                     <span className="text-lg leading-none mb-1">→</span>
                  </div>
                </div>
              </div>
            ))}
            
            <div className="w-[20vw] shrink-0"></div>
        </motion.div>
      </div>
    </section>
  );
};
