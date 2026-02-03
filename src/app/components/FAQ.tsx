import { BlurFade } from "./ui/blur-fade";

export const FAQ = () => {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4 max-w-3xl">
        <BlurFade>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-medium tracking-tight text-slate-900">
              Frequently Asked
            </h2>
          </div>
        </BlurFade>

        <div className="space-y-4">
          {[
            "How do I schedule a virtual appointment?",
            "Is my medical data secure?",
            "What insurance plans do you accept?",
            "Can I get a prescription refill online?"
          ].map((q, i) => (
            <BlurFade key={i} delay={i * 0.1}>
              <div className="group border border-slate-100 rounded-2xl p-6 hover:border-slate-300 transition-colors cursor-pointer bg-slate-50/30">
                <div className="flex justify-between items-center">
                   <span className="font-medium text-slate-700">{q}</span>
                   <span className="text-slate-400 text-xl group-hover:text-slate-900 transition-colors">+</span>
                </div>
              </div>
            </BlurFade>
          ))}
        </div>
      </div>
    </section>
  );
};
