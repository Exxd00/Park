"use client";
import { X, Check } from "lucide-react";
import { useLanguage } from "@/lib/i18n";

export function NotForEveryone() {
  const { t } = useLanguage();

  const notForItems = [
    t.notForEveryone.notForYou.dropOff,
    t.notForEveryone.notForYou.preferTaxi,
    t.notForEveryone.notForYou.tallVehicle,
    t.notForEveryone.notForYou.otherAirport,
  ];

  const forYouItems = [
    t.notForEveryone.forYou.driveSelf,
    t.notForEveryone.forYou.securePark,
    t.notForEveryone.forYou.keepKey,
    t.notForEveryone.forYou.clearPlan,
  ];

  return (
    <section className="py-10 sm:py-14 md:py-20 bg-white">
      <div className="container px-4">
        <div className="max-w-3xl mx-auto">
          {/* Section Header - Compact */}
          <div className="text-center mb-6 sm:mb-8 md:mb-10">
            <h2 className="text-base sm:text-xl md:text-2xl lg:text-3xl font-bold text-slate-800 mb-2 sm:mb-3">
              {t.notForEveryone.title}
            </h2>
            <p className="text-slate-500 text-xs sm:text-sm md:text-base">
              {t.notForEveryone.subtitle}
            </p>
          </div>

          {/* Two Columns Side by Side - Even on Mobile */}
          <div className="grid grid-cols-2 gap-3 sm:gap-4 md:gap-6">
            {/* Not For */}
            <div className="bg-slate-50 rounded-xl sm:rounded-2xl p-3 sm:p-4 md:p-6">
              <h3 className="font-semibold text-slate-700 text-xs sm:text-sm md:text-base mb-3 sm:mb-4 flex items-center gap-1.5 sm:gap-2">
                <span className="w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-slate-200 flex items-center justify-center flex-shrink-0">
                  <X className="h-3 w-3 sm:h-4 sm:w-4 text-slate-500" />
                </span>
                <span>{t.notForEveryone.no}</span>
              </h3>
              <ul className="space-y-2 sm:space-y-2.5 md:space-y-3">
                {notForItems.map((item, i) => (
                  <li key={i} className="flex items-start gap-1.5 sm:gap-2 text-slate-600">
                    <X className="h-3 w-3 sm:h-4 sm:w-4 text-slate-400 mt-0.5 flex-shrink-0" />
                    <span className="text-[10px] sm:text-xs md:text-sm leading-tight">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* For You */}
            <div className="bg-green-50 rounded-xl sm:rounded-2xl p-3 sm:p-4 md:p-6 border border-green-100">
              <h3 className="font-semibold text-green-800 text-xs sm:text-sm md:text-base mb-3 sm:mb-4 flex items-center gap-1.5 sm:gap-2">
                <span className="w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-green-200 flex items-center justify-center flex-shrink-0">
                  <Check className="h-3 w-3 sm:h-4 sm:w-4 text-green-700" />
                </span>
                <span>{t.notForEveryone.yes}</span>
              </h3>
              <ul className="space-y-2 sm:space-y-2.5 md:space-y-3">
                {forYouItems.map((item, i) => (
                  <li key={i} className="flex items-start gap-1.5 sm:gap-2 text-green-800">
                    <Check className="h-3 w-3 sm:h-4 sm:w-4 text-green-600 mt-0.5 flex-shrink-0" />
                    <span className="text-[10px] sm:text-xs md:text-sm leading-tight">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
