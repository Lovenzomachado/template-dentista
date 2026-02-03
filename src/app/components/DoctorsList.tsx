import { motion } from 'motion/react';
import { Star, MoreHorizontal } from 'lucide-react';

const doctors = [
  {
    name: "Dr. James Carter",
    role: "Cardiologist",
    rating: 4.9,
    img: "https://i.pravatar.cc/300?img=11",
    status: "Available"
  },
  {
    name: "Dr. Sarah Lee",
    role: "Neurologist",
    rating: 5.0,
    img: "https://i.pravatar.cc/300?img=5",
    status: "In Surgery"
  },
  {
    name: "Dr. Mike Chen",
    role: "Dermatologist",
    rating: 4.8,
    img: "https://i.pravatar.cc/300?img=3",
    status: "Available"
  },
  {
    name: "Dr. Emily Davis",
    role: "Pediatrician",
    rating: 4.9,
    img: "https://i.pravatar.cc/300?img=9",
    status: "On Break"
  }
];

export const DoctorsList = () => {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="text-blue-600 font-semibold tracking-wider text-sm uppercase">Our Team</span>
          <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mt-2">
            Online Doctor Support, <br /> Always Available
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
           {doctors.map((doc, i) => (
             <motion.div 
               key={i}
               initial={{ opacity: 0, y: 20 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               transition={{ delay: i * 0.1 }}
               className="group relative bg-white rounded-3xl p-4 shadow-lg hover:shadow-xl transition-all border border-slate-100"
             >
                <div className="relative h-64 w-full rounded-2xl overflow-hidden mb-4 bg-slate-100">
                  <img src={doc.img} alt={doc.name} className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  <div className="absolute top-3 right-3 bg-white/90 backdrop-blur px-2 py-1 rounded-full text-xs font-bold text-slate-700 flex items-center gap-1">
                    <Star size={12} className="text-yellow-400" fill="currentColor" />
                    {doc.rating}
                  </div>
                </div>
                
                <div className="text-center">
                  <h3 className="text-lg font-bold text-slate-900">{doc.name}</h3>
                  <p className="text-blue-600 text-sm font-medium mb-4">{doc.role}</p>
                  
                  <div className="flex items-center justify-between border-t pt-4 border-slate-100">
                     <span className={`text-xs font-bold px-2 py-1 rounded-full ${doc.status === 'Available' ? 'bg-green-100 text-green-700' : 'bg-slate-100 text-slate-500'}`}>
                       {doc.status}
                     </span>
                     <button className="text-slate-400 hover:text-blue-600 transition-colors">
                       <MoreHorizontal size={20} />
                     </button>
                  </div>
                </div>
             </motion.div>
           ))}
        </div>
        
        <div className="mt-12 text-center">
          <button className="bg-blue-600 text-white px-8 py-3 rounded-full font-semibold hover:bg-blue-700 transition-colors">
            See All Doctors
          </button>
        </div>
      </div>
    </section>
  );
};
