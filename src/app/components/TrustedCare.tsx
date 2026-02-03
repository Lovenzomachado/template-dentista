import { Marquee } from "./ui/marquee";

const doctors = [
  "https://i.pravatar.cc/150?img=11",
  "https://i.pravatar.cc/150?img=5",
  "https://i.pravatar.cc/150?img=3",
  "https://i.pravatar.cc/150?img=9",
  "https://i.pravatar.cc/150?img=12",
  "https://i.pravatar.cc/150?img=20",
];

export const TrustedCare = () => {
  return (
    <section className="py-20 bg-white border-b border-slate-100">
      <div className="container mx-auto px-4 mb-10 text-center">
        <p className="text-sm font-medium text-slate-400 uppercase tracking-widest">
          Trusted by 10,000+ Patients
        </p>
      </div>
      
      <div className="relative flex h-32 w-full flex-col items-center justify-center overflow-hidden bg-white">
        <Marquee pauseOnHover className="[--duration:20s]">
          {doctors.map((img, i) => (
            <div key={i} className="flex flex-col items-center justify-center mx-8 group cursor-pointer">
              <div className="relative h-16 w-16 rounded-full overflow-hidden border border-slate-100 grayscale transition-all duration-300 group-hover:grayscale-0 group-hover:scale-110">
                <img src={img} alt="Doctor" className="h-full w-full object-cover" />
              </div>
            </div>
          ))}
        </Marquee>
        
        {/* Fog on sides */}
        <div className="pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-white dark:from-background"></div>
        <div className="pointer-events-none absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-white dark:from-background"></div>
      </div>
    </section>
  );
};
