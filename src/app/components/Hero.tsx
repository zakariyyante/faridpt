import { Crown, ShieldCheck, Zap } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative py-20 md:py-32 overflow-hidden felt-texture">
      <div className="container mx-auto px-4 relative z-10 text-center">
        <div className="inline-flex items-center gap-2 px-6 py-2 rounded-full bg-primary/5 border border-primary/20 mb-10 shadow-inner">
          <Crown className="text-primary animate-pulse" size={18} />
          <span className="text-xs font-black text-primary uppercase tracking-[0.2em]">
            Portugal&apos;s Elite Casino Hub 2026
          </span>
        </div>

        <h1 className="text-5xl md:text-8xl font-black mb-8 leading-[0.9] tracking-tighter italic uppercase">
          Find <span className="gold-text">Faridpt&apos;s</span> <br />
          <span className="text-white">Top Rated</span> Sites
        </h1>

        <p className="text-lg md:text-xl text-gray-400 mb-14 max-w-2xl mx-auto font-medium leading-relaxed">
          Expertly curated, crown-approved bonuses, and lightning-fast payouts. The ultimate destination for Portuguese high rollers.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          <div className="flex flex-col items-center gap-4 p-8 rounded-3xl bg-card-bg/40 border border-primary/5 casino-glow backdrop-blur-sm group hover:border-primary/20 transition-all duration-500">
            <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center text-primary group-hover:scale-110 transition-transform duration-500">
              <ShieldCheck size={32} />
            </div>
            <h3 className="font-black text-white uppercase tracking-widest text-sm">Certified Safe</h3>
            <p className="text-xs text-gray-500">Full SRIJ compliance & encryption</p>
          </div>
          
          <div className="flex flex-col items-center gap-4 p-8 rounded-3xl bg-card-bg/40 border border-primary/5 casino-glow backdrop-blur-sm group hover:border-primary/20 transition-all duration-500 transform md:-translate-y-4">
            <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center text-primary group-hover:scale-110 transition-transform duration-500">
              <Crown size={32} />
            </div>
            <h3 className="font-black text-white uppercase tracking-widest text-sm">Premium Offers</h3>
            <p className="text-xs text-gray-500">Exclusive VIP bonuses & rewards</p>
          </div>

          <div className="flex flex-col items-center gap-4 p-8 rounded-3xl bg-card-bg/40 border border-primary/5 casino-glow backdrop-blur-sm group hover:border-primary/20 transition-all duration-500">
            <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center text-primary group-hover:scale-110 transition-transform duration-500">
              <Zap size={32} />
            </div>
            <h3 className="font-black text-white uppercase tracking-widest text-sm">Instant Payouts</h3>
            <p className="text-xs text-gray-500">Withdrawals processed in minutes</p>
          </div>
        </div>
      </div>

      {/* Decorative Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 -left-48 w-96 h-96 bg-primary/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-1/4 -right-48 w-96 h-96 bg-primary/5 rounded-full blur-[120px]" />
        
        {/* Animated Particles (CSS only) */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full opacity-20">
          {[...Array(20)].map((_, i) => (
            <div 
              key={i}
              className="absolute w-1 h-1 bg-primary rounded-full animate-pulse"
              style={{
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 5}s`,
                animationDuration: `${2 + Math.random() * 3}s`
              }}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
