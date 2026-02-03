import { BlurFade } from "./ui/blur-fade";

const stats = [
  { value: "99%", label: "Satisfaction" },
  { value: "24/7", label: "Support" },
  { value: "15m", label: "Avg Wait" },
];

export const LeadingWithHeart = () => {
  return (
    <section className="py-24 bg-slate-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          <div className="relative order-2 lg:order-1">
             <BlurFade delay={0.2} className="relative aspect-square overflow-hidden rounded-3xl bg-slate-200">
               <img 
                 src="https://images.unsplash.com/photo-1758653500481-a1b46b5b63d4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxudXJzZSUyMGhlbHBpbmclMjBwYXRpZW50JTIwaG9zcGl0YWx8ZW58MXx8fHwxNzcwMDg3OTQ0fDA&ixlib=rb-4.1.0&q=80&w=1080" 
                 alt="Care" 
                 className="h-full w-full object-cover"
               />
               
               {/* Minimal Floating Card */}
               <div className="absolute bottom-6 left-6 right-6 bg-white/90 backdrop-blur-md p-6 rounded-2xl shadow-sm border border-white/50">
                  <div className="flex justify-between items-center divide-x divide-slate-100">
                    {stats.map((s, i) => (
                      <div key={i} className="px-4 text-center first:pl-0 last:pr-0 flex-1">
                         <div className="text-xl font-bold text-slate-900">{s.value}</div>
                         <div className="text-xs text-slate-500 uppercase tracking-wide mt-1">{s.label}</div>
                      </div>
                    ))}
                  </div>
               </div>
             </BlurFade>
          </div>

          <div className="order-1 lg:order-2">
            <BlurFade delay={0.1}>
               <h2 className="text-4xl md:text-5xl font-medium tracking-tight text-slate-900 mb-6">
                 Modern care designed <br /> around <span className="text-blue-600">you</span>.
               </h2>
            </BlurFade>
            
            <BlurFade delay={0.2}>
               <p className="text-lg text-slate-500 mb-8 leading-relaxed">
                 We believe in a future where healthcare is proactive, not reactive. 
                 Our digital-first approach ensures you have access to the best specialists 
                 whenever you need them, without the hassle.
               </p>
            </BlurFade>

            <BlurFade delay={0.3}>
               <div className="space-y-6">
                  {[
                    { title: "Smart Scheduling", desc: "AI-powered booking system that respects your time." },
                    { title: "Digital Records", desc: "Access your full medical history securely from anywhere." },
                    { title: "Virtual Consults", desc: "HD video calls with specialists from the comfort of home." }
                  ].map((item, i) => (
                    <div key={i} className="group flex gap-4">
                      <div className="h-10 w-10 shrink-0 rounded-full bg-blue-50 flex items-center justify-center text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300">
                         {i + 1}
                      </div>
                      <div>
                        <h3 className="font-semibold text-slate-900">{item.title}</h3>
                        <p className="text-sm text-slate-500 mt-1">{item.desc}</p>
                      </div>
                    </div>
                  ))}
               </div>
            </BlurFade>
          </div>

        </div>
      </div>
    </section>
  );
};
