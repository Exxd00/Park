"use client";
import { Key, Shield, Clock, MapPin, Phone, Check, X } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { useLanguage } from "@/lib/i18n";

export function WhyDifferent() {
  const { t } = useLanguage();

  const features = [
    {
      icon: Key,
      title: t.whyDifferent.yourKey,
      shortTitle: t.whyDifferent.yourKey,
      description: t.whyDifferent.yourKeyDesc,
      highlight: true,
      color: "green",
    },
    {
      icon: Clock,
      title: t.whyDifferent.fiveMin,
      shortTitle: t.whyDifferent.fiveMin,
      description: t.whyDifferent.fiveMinDesc,
      highlight: false,
      color: "amber",
    },
    {
      icon: Shield,
      title: t.whyDifferent.secure,
      shortTitle: t.whyDifferent.secure,
      description: t.whyDifferent.secureDesc,
      highlight: false,
      color: "blue",
    },
    {
      icon: MapPin,
      title: t.whyDifferent.atNue,
      shortTitle: t.whyDifferent.atNue,
      description: t.whyDifferent.atNueDesc,
      highlight: false,
      color: "slate",
    },
  ];

  const comparison = [
    { feature: t.whyDifferent.comparisonItems.keyWithCustomer, us: true, others: false },
    { feature: t.whyDifferent.comparisonItems.shuttle247, us: true, others: false },
    { feature: t.whyDifferent.comparisonItems.directContact, us: true, others: false },
    { feature: t.whyDifferent.comparisonItems.clearPrices, us: true, others: false },
  ];

  return (
    <section className="py-10 sm:py-14 md:py-20 bg-white">
      <div className="container px-4">
        <div className="max-w-4xl mx-auto">
          {/* Section Header - Compact on Mobile */}
          <div className="text-center mb-6 sm:mb-8 md:mb-12">
            <p className="text-amber-600 font-medium text-xs sm:text-sm mb-2 sm:mb-3">{t.whyDifferent.badge}</p>
            <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-slate-800 mb-2 sm:mb-4">
              {t.whyDifferent.title}
              <span className="hidden sm:inline"><br /></span>
              <span className="sm:hidden"> </span>
              <span className="text-slate-500">{t.whyDifferent.subtitle}</span>
            </h2>
          </div>

          {/* Features - 2x2 Grid on Mobile */}
          <div className="grid grid-cols-2 gap-2 sm:gap-3 md:gap-4 mb-6 sm:mb-8 md:mb-12">
            {features.map((feature) => (
              <Card
                key={feature.title}
                className={`border transition-all ${
                  feature.highlight
                    ? "border-green-300 bg-gradient-to-br from-green-50 to-emerald-50/50"
                    : "border-slate-100"
                }`}
              >
                <CardContent className="p-3 sm:p-4 md:p-5">
                  <div className="flex flex-col sm:flex-row gap-2 sm:gap-3">
                    <div className={`flex-shrink-0 w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 rounded-lg flex items-center justify-center ${
                      feature.color === "green" ? "bg-green-100" :
                      feature.color === "amber" ? "bg-amber-100" :
                      feature.color === "blue" ? "bg-blue-100" :
                      "bg-slate-100"
                    }`}>
                      <feature.icon className={`h-4 w-4 sm:h-5 sm:w-5 md:h-6 md:w-6 ${
                        feature.color === "green" ? "text-green-600" :
                        feature.color === "amber" ? "text-amber-600" :
                        feature.color === "blue" ? "text-blue-600" :
                        "text-slate-600"
                      }`} />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="font-semibold text-slate-800 text-xs sm:text-sm md:text-base mb-0.5 sm:mb-1 truncate sm:whitespace-normal">
                        <span className="sm:hidden">{feature.shortTitle}</span>
                        <span className="hidden sm:inline">{feature.title}</span>
                      </h3>
                      <p className="text-slate-600 text-[10px] sm:text-xs md:text-sm leading-snug line-clamp-2 sm:line-clamp-none">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Comparison Table - Compact on Mobile */}
          <div className="bg-slate-50 rounded-xl sm:rounded-2xl p-4 sm:p-5 md:p-8">
            <h3 className="text-center font-semibold text-slate-800 text-sm sm:text-base mb-4 sm:mb-6">
              {t.whyDifferent.comparison}
            </h3>
            <div className="space-y-0">
              {/* Header Row */}
              <div className="grid grid-cols-[1fr_auto_auto] gap-2 sm:gap-4 pb-2 sm:pb-3 border-b border-slate-200">
                <div></div>
                <div className="text-center text-[10px] sm:text-xs md:text-sm text-amber-600 font-semibold w-12 sm:w-16 md:w-24">{t.whyDifferent.us}</div>
                <div className="text-center text-[10px] sm:text-xs md:text-sm text-slate-400 font-medium w-12 sm:w-16 md:w-24">{t.whyDifferent.others}</div>
              </div>
              {/* Data Rows */}
              {comparison.map((row, index) => (
                <div
                  key={row.feature}
                  className={`grid grid-cols-[1fr_auto_auto] gap-2 sm:gap-4 py-2 sm:py-3 ${
                    index !== comparison.length - 1 ? "border-b border-slate-200" : ""
                  }`}
                >
                  <div className="text-slate-700 text-[11px] sm:text-xs md:text-sm">{row.feature}</div>
                  <div className="flex justify-center w-12 sm:w-16 md:w-24">
                    <span className="inline-flex items-center justify-center w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-green-100">
                      <Check className="h-3 w-3 sm:h-4 sm:w-4 text-green-600" />
                    </span>
                  </div>
                  <div className="flex justify-center w-12 sm:w-16 md:w-24">
                    <span className="inline-flex items-center justify-center w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-slate-100">
                      <X className="h-3 w-3 sm:h-4 sm:w-4 text-slate-400" />
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Trust Statement - Compact */}
          <div className="mt-4 sm:mt-6 md:mt-8 text-center">
            <a href="tel:+4915124147779" className="inline-flex items-center gap-1.5 text-slate-500 hover:text-amber-600 transition-colors">
              <Phone className="h-3 w-3 sm:h-4 sm:w-4" />
              <span className="text-[11px] sm:text-xs md:text-sm">{t.whyDifferent.questions} 0151 241 477 79</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
