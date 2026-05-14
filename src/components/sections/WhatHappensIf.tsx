"use client";

import { useState } from "react";
import { Key, AlertCircle, Clock, HelpCircle, Car, Luggage, Phone, ChevronDown, ChevronUp } from "lucide-react";
import { useLanguage } from "@/lib/i18n";

export function WhatHappensIf() {
  const { t } = useLanguage();
  const [expandedIndex, setExpandedIndex] = useState<number | null>(0);

  const scenarios = [
    {
      icon: Key,
      question: t.whatHappensIf.questions.giveKey.title,
      shortQ: t.whatHappensIf.questions.giveKey.title,
      answer: t.whatHappensIf.questions.giveKey.answer,
      highlight: true,
    },
    {
      icon: AlertCircle,
      question: t.whatHappensIf.questions.flightDelay.title,
      shortQ: t.whatHappensIf.questions.flightDelay.title,
      answer: t.whatHappensIf.questions.flightDelay.answer,
      highlight: false,
    },
    {
      icon: Clock,
      question: t.whatHappensIf.questions.earlyDeparture.title,
      shortQ: t.whatHappensIf.questions.earlyDeparture.title,
      answer: t.whatHappensIf.questions.earlyDeparture.answer,
      highlight: false,
    },
    {
      icon: Car,
      question: t.whatHappensIf.questions.carSafe.title,
      shortQ: t.whatHappensIf.questions.carSafe.title,
      answer: t.whatHappensIf.questions.carSafe.answer,
      highlight: false,
    },
    {
      icon: HelpCircle,
      question: t.whatHappensIf.questions.notFound.title,
      shortQ: t.whatHappensIf.questions.notFound.title,
      answer: t.whatHappensIf.questions.notFound.answer,
      highlight: false,
    },
    {
      icon: Luggage,
      question: t.whatHappensIf.questions.muchLuggage.title,
      shortQ: t.whatHappensIf.questions.muchLuggage.title,
      answer: t.whatHappensIf.questions.muchLuggage.answer,
      highlight: false,
    },
  ];

  return (
    <section id="faq" className="py-10 sm:py-14 md:py-20 bg-slate-50">
      <div className="container px-4">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-6 sm:mb-8 md:mb-12">
          <p className="text-amber-600 font-medium text-xs sm:text-sm mb-2">{t.whatHappensIf.badge}</p>
          <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-slate-800 mb-2 sm:mb-3">
            {t.whatHappensIf.title}
          </h2>
          <p className="text-slate-500 text-xs sm:text-sm md:text-base">
            {t.whatHappensIf.subtitle}
          </p>
        </div>

        {/* FAQ Grid - 2 columns on mobile */}
        <div className="max-w-3xl mx-auto">
          <div className="grid grid-cols-2 sm:grid-cols-1 gap-2 sm:gap-3">
            {scenarios.map((scenario, index) => {
              const isExpanded = expandedIndex === index;
              return (
                <button
                  key={index}
                  onClick={() => setExpandedIndex(isExpanded ? null : index)}
                  className={`text-left rounded-xl border p-3 sm:p-4 md:p-5 transition-all ${
                    scenario.highlight
                      ? "border-green-200 bg-gradient-to-br from-green-50 to-emerald-50/50"
                      : "border-slate-200 bg-white hover:border-amber-200"
                  }`}
                >
                  <div className="flex items-start gap-2 sm:gap-3">
                    <div className={`flex-shrink-0 w-7 h-7 sm:w-8 sm:h-8 md:w-10 md:h-10 rounded-lg flex items-center justify-center ${
                      scenario.highlight ? "bg-green-100" : "bg-amber-100"
                    }`}>
                      <scenario.icon className={`h-3.5 w-3.5 sm:h-4 sm:w-4 md:h-5 md:w-5 ${
                        scenario.highlight ? "text-green-600" : "text-amber-600"
                      }`} />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-start justify-between gap-1">
                        <h3 className="font-semibold text-slate-800 text-[11px] sm:text-sm md:text-base leading-tight">
                          <span className="sm:hidden">{scenario.shortQ}</span>
                          <span className="hidden sm:inline">{scenario.question}</span>
                        </h3>
                        <div className="flex-shrink-0 sm:hidden">
                          {isExpanded ? (
                            <ChevronUp className="h-3 w-3 text-slate-400" />
                          ) : (
                            <ChevronDown className="h-3 w-3 text-slate-400" />
                          )}
                        </div>
                      </div>
                      {/* Mobile: Show answer only when expanded, Desktop: Always show */}
                      <p className={`text-slate-600 text-[10px] sm:text-xs md:text-sm leading-snug mt-1.5 sm:mt-2 ${
                        isExpanded ? "block" : "hidden sm:block"
                      }`}>
                        {scenario.answer}
                      </p>
                    </div>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Contact CTA */}
          <div className="mt-6 sm:mt-8 md:mt-10 text-center">
            <p className="text-slate-600 text-xs sm:text-sm mb-2">
              {t.whatHappensIf.moreQuestions}
            </p>
            <div className="flex items-center justify-center gap-3 sm:gap-4">
              <a href="tel:+4915124147779" className="inline-flex items-center gap-1.5 text-amber-600 font-medium text-xs sm:text-sm hover:underline">
                <Phone className="h-3 w-3 sm:h-4 sm:w-4" />
                {t.whyDifferent.call}
              </a>
              <span className="text-slate-300">|</span>
              <a href="https://wa.me/4915124147779" target="_blank" rel="noopener noreferrer" className="text-green-600 font-medium text-xs sm:text-sm hover:underline">
                WhatsApp
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
