"use client";

import { Button } from "@/components/ui/button";
import { ArrowDown, Key, Shield, Clock, MapPin, CheckCircle } from "lucide-react";
import { useLanguage } from "@/lib/i18n";

export function HeroSection() {
  const { t } = useLanguage();

  const scrollToPlanner = () => {
    document.getElementById("planner")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-[85vh] sm:min-h-[90vh] flex items-center justify-center bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-10" style={{
        backgroundImage: `radial-gradient(circle at 1px 1px, #f59e0b 1px, transparent 0)`,
        backgroundSize: '40px 40px',
      }} />
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-1/4 -left-20 w-64 md:w-[500px] h-64 md:h-[500px] bg-amber-500/10 rounded-full blur-[80px] md:blur-[120px]" />
        <div className="absolute bottom-1/4 -right-20 w-48 md:w-[400px] h-48 md:h-[400px] bg-amber-600/10 rounded-full blur-[60px] md:blur-[100px]" />
      </div>

      <div className="container relative px-4 pt-20 pb-10 md:pt-28 md:pb-16">
        <div className="max-w-4xl mx-auto">
          {/* Location Badge */}
          <div className="flex justify-center mb-4 md:mb-6 animate-fade-in">
            <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/20">
              <MapPin className="h-3.5 w-3.5 text-amber-400" />
              <span className="text-amber-400 text-xs md:text-sm font-medium">{t.hero.badge}</span>
            </div>
          </div>

          {/* Main Headline - Emotionally Compelling */}
          <h1 className="text-center text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white tracking-tight mb-4 md:mb-6 leading-tight animate-fade-in animation-delay-100">
            {t.hero.title}
            <br />
            <span className="text-amber-400">{t.hero.subtitle}</span>
          </h1>

          {/* Subheadline - Addressing the Fear */}
          <p className="text-center text-sm sm:text-base md:text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed mb-5 md:mb-8 px-2 animate-fade-in animation-delay-200">
            {t.hero.description}
          </p>

          {/* Key Feature - The Killer USP */}
          <div className="flex justify-center mb-6 md:mb-8 animate-fade-in animation-delay-250">
            <div className="inline-flex items-center gap-2 px-4 py-2.5 md:px-5 md:py-3 rounded-xl bg-green-500/15 border border-green-500/30">
              <Key className="h-5 w-5 text-green-400" />
              <span className="text-green-300 text-sm md:text-base font-semibold">
                {t.hero.keyFeature}
              </span>
            </div>
          </div>

          {/* CTA */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 mb-8 md:mb-10 animate-fade-in animation-delay-300">
            <Button
              variant="cta"
              size="lg"
              onClick={scrollToPlanner}
              className="text-sm md:text-base px-6 md:px-8 py-3 md:py-4 h-auto shadow-xl shadow-amber-500/25 w-full sm:w-auto"
            >
              {t.hero.cta}
              <ArrowDown className="ml-2 h-4 w-4" />
            </Button>
            <p className="text-slate-500 text-xs md:text-sm">
              {t.hero.ctaSubtext}
            </p>
          </div>

          {/* Trust Indicators */}
          <div className="flex flex-wrap justify-center gap-4 md:gap-8 animate-fade-in animation-delay-400">
            <div className="flex items-center gap-2 text-slate-400">
              <CheckCircle className="h-4 w-4 text-green-500" />
              <span className="text-xs md:text-sm">{t.hero.features.shuttle}</span>
            </div>
            <div className="flex items-center gap-2 text-slate-400">
              <CheckCircle className="h-4 w-4 text-green-500" />
              <span className="text-xs md:text-sm">{t.hero.features.distance}</span>
            </div>
            <div className="flex items-center gap-2 text-slate-400">
              <CheckCircle className="h-4 w-4 text-green-500" />
              <span className="text-xs md:text-sm">{t.hero.features.security}</span>
            </div>
          </div>

          {/* Social Proof */}
          <div className="mt-8 md:mt-10 text-center animate-fade-in animation-delay-400">
            <p className="text-slate-500 text-xs md:text-sm">
              {t.hero.trust} <span className="text-amber-400 font-semibold">{t.hero.customers}</span> {t.hero.region}
            </p>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes fade-in {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in {
          animation: fade-in 0.6s ease-out forwards;
          opacity: 0;
        }
        .animation-delay-100 { animation-delay: 0.1s; }
        .animation-delay-200 { animation-delay: 0.2s; }
        .animation-delay-250 { animation-delay: 0.3s; }
        .animation-delay-300 { animation-delay: 0.4s; }
        .animation-delay-400 { animation-delay: 0.5s; }
      `}</style>
    </section>
  );
}
