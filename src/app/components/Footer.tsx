import { Facebook, Twitter, Instagram, Linkedin, Heart } from 'lucide-react';

export const Footer = () => {
  return (
    <footer className="bg-slate-900 text-white pt-20 pb-10">
      <div className="container mx-auto px-4">
        
        {/* Top Section */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          <div>
            <div className="flex items-center gap-2 mb-6 text-2xl font-bold">
               <div className="h-8 w-8 rounded bg-blue-500 flex items-center justify-center">
                 <Heart size={18} className="text-white" fill="currentColor" />
               </div>
               CureNest
            </div>
            <p className="text-slate-400 mb-6">
              Your trusted partner for health solutions. We care about your well-being and provide the best medical services.
            </p>
            <div className="flex gap-4">
               {[Facebook, Twitter, Instagram, Linkedin].map((Icon, i) => (
                 <a key={i} href="#" className="h-10 w-10 rounded-full bg-slate-800 flex items-center justify-center text-slate-400 hover:bg-blue-600 hover:text-white transition-all">
                   <Icon size={18} />
                 </a>
               ))}
            </div>
          </div>

          <div>
             <h3 className="text-lg font-bold mb-6">Departments</h3>
             <ul className="space-y-4 text-slate-400">
               {['Cardiology', 'Neurology', 'Orthopedics', 'Pediatrics', 'Dental Care'].map(item => (
                 <li key={item}><a href="#" className="hover:text-blue-500 transition-colors">{item}</a></li>
               ))}
             </ul>
          </div>

          <div>
             <h3 className="text-lg font-bold mb-6">Quick Links</h3>
             <ul className="space-y-4 text-slate-400">
               {['About Us', 'Our Doctors', 'Appointment', 'Blog', 'Contact'].map(item => (
                 <li key={item}><a href="#" className="hover:text-blue-500 transition-colors">{item}</a></li>
               ))}
             </ul>
          </div>

          <div>
             <h3 className="text-lg font-bold mb-6">Contact</h3>
             <ul className="space-y-4 text-slate-400">
               <li>123 Medical Center Dr,<br/>New York, NY 10001</li>
               <li>+1 (555) 123-4567</li>
               <li>support@curenest.com</li>
             </ul>
          </div>

        </div>

        <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row items-center justify-between text-slate-500 text-sm">
           <p>&copy; 2026 CureNest. All rights reserved.</p>
           <div className="flex gap-6 mt-4 md:mt-0">
             <a href="#" className="hover:text-white">Privacy Policy</a>
             <a href="#" className="hover:text-white">Terms of Service</a>
           </div>
        </div>

      </div>
    </footer>
  );
};
