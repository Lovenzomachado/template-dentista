import { motion } from 'motion/react';
import { Quote } from 'lucide-react';

export const Testimonial = () => {
  return (
    <section className="py-24 bg-slate-50">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
           
           <div className="relative h-[400px] lg:h-[600px] rounded-[3rem] overflow-hidden shadow-2xl">
             <img 
               src="https://images.unsplash.com/photo-1758691461957-474a7686e388?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzZW5pb3IlMjBwYXRpZW50JTIwd2l0aCUyMGRvY3RvciUyMGNvbnN1bHRhdGlvbnxlbnwxfHx8fDE3NzAwODc5NDR8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral" 
               alt="Happy Patient" 
               className="h-full w-full object-cover"
             />
             <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
             <div className="absolute bottom-10 left-10 text-white">
                <p className="text-2xl font-bold">Excellent Care</p>
                <p className="opacity-80">Recovered in record time</p>
             </div>
           </div>

           <div>
              <Quote size={60} className="text-blue-200 mb-8" fill="currentColor" />
              <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-8 leading-tight">
                "The care I received was absolutely world-class. The team made me feel comfortable and heard every step of the way."
              </h2>
              
              <div className="flex items-center gap-4">
                <div className="h-16 w-16 rounded-full bg-slate-300 overflow-hidden">
                   <img src="https://i.pravatar.cc/150?img=32" alt="Reviewer" className="h-full w-full object-cover" />
                </div>
                <div>
                   <p className="font-bold text-lg text-slate-900">Emily Robinson</p>
                   <p className="text-slate-500">Patient since 2021</p>
                </div>
              </div>
           </div>

        </div>
      </div>
    </section>
  );
};
