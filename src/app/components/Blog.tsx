import { motion } from 'motion/react';
import { ArrowRight, Calendar } from 'lucide-react';

const posts = [
  {
    title: "How hygiene health is moving into a new era",
    category: "Health",
    date: "Oct 24, 2025",
    img: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    author: "Dr. Sarah"
  },
  {
    title: "Managing chronic illness: Tips for a better life",
    category: "Lifestyle",
    date: "Oct 28, 2025",
    img: "https://images.unsplash.com/photo-1505751172876-fa1923c5c528?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    author: "Dr. James"
  }
];

export const Blog = () => {
  return (
    <section className="py-24 bg-blue-50/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
           <span className="text-blue-600 font-semibold tracking-wider text-sm uppercase">Our Blog</span>
           <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mt-2">
             Stay informed <br /> With CureNest Updates
           </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {posts.map((post, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.2 }}
              className="bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow group cursor-pointer"
            >
               <div className="h-64 overflow-hidden">
                 <img src={post.img} alt={post.title} className="h-full w-full object-cover group-hover:scale-110 transition-transform duration-700" />
               </div>
               <div className="p-8">
                  <div className="flex items-center gap-4 text-xs font-semibold text-slate-500 mb-4 uppercase tracking-wider">
                     <span className="text-blue-600">{post.category}</span>
                     <div className="flex items-center gap-1">
                       <Calendar size={12} />
                       {post.date}
                     </div>
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-4 leading-tight group-hover:text-blue-600 transition-colors">
                    {post.title}
                  </h3>
                  <div className="flex items-center justify-between mt-6 pt-6 border-t border-slate-100">
                     <div className="flex items-center gap-2">
                        <div className="h-8 w-8 rounded-full bg-slate-200 overflow-hidden">
                          <img src={`https://i.pravatar.cc/100?u=${post.author}`} alt={post.author} />
                        </div>
                        <span className="text-sm font-bold text-slate-700">{post.author}</span>
                     </div>
                     <div className="h-10 w-10 rounded-full bg-slate-100 flex items-center justify-center group-hover:bg-blue-600 group-hover:text-white transition-all">
                        <ArrowRight size={18} />
                     </div>
                  </div>
               </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
