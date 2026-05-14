"use client";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Car,
  Calendar,
  Users,
  Phone,
  ExternalLink,
  Warehouse,
  Copy,
  Check,
  ArrowRight
} from "lucide-react";
import { DatePickerField } from "@/components/ui/date-time-picker";
import { useLanguage } from "@/lib/i18n";
import {
  trackFormStarted,
  trackFormCompleted,
  trackAndOpenBookingPage
} from "@/lib/tracking";

export function RequestSection() {
  const { t, locale } = useLanguage();
  const [step, setStep] = useState<"form" | "summary">("form");
  const [copied, setCopied] = useState(false);
  const [formData, setFormData] = useState({
    parkingType: "aussen",
    arrivalDate: "",
    departureDate: "",
    persons: "2",
    contact: "",
  });

  const formatDate = (dateStr: string) => {
    if (!dateStr) return "";
    const date = new Date(dateStr);
    return date.toLocaleDateString("de-DE", { day: "2-digit", month: "2-digit", year: "numeric" });
  };

  const bookingSummary = `Parkplatz-Anfrage:
• Art: ${formData.parkingType === "aussen" ? "Außenstellplatz" : "Hallenparkplatz"}
• Anreise: ${formatDate(formData.arrivalDate)}
• Rückreise: ${formatDate(formData.departureDate)}
• Personen: ${formData.persons}
• Telefon: ${formData.contact}`;

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(bookingSummary);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      // Fallback for older browsers
      const textArea = document.createElement("textarea");
      textArea.value = bookingSummary;
      document.body.appendChild(textArea);
      textArea.select();
      document.execCommand("copy");
      document.body.removeChild(textArea);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  // Track form start when user starts filling
  const [hasStartedForm, setHasStartedForm] = useState(false);

  useEffect(() => {
    if (!hasStartedForm && (formData.arrivalDate || formData.contact)) {
      setHasStartedForm(true);
      trackFormStarted('booking_request');
    }
  }, [formData.arrivalDate, formData.contact, hasStartedForm]);

  const handleContinue = (e: React.FormEvent) => {
    e.preventDefault();
    trackFormCompleted('booking_request');
    setStep("summary");
  };

  const goToOfficialSite = () => {
    trackAndOpenBookingPage("https://park-express24.de", "request_section");
  };

  // Summary view - shows booking details and CTA to official site
  if (step === "summary") {
    return (
      <section id="anfrage" className="py-12 md:py-20 bg-white">
        <div className="container px-4">
          <div className="max-w-lg mx-auto">
            <Card className="border-2 border-amber-200 shadow-xl overflow-hidden">
              <div className="bg-amber-500 p-4 text-center">
                <h2 className="text-lg md:text-xl font-bold text-white">
                  Fast geschafft!
                </h2>
                <p className="text-amber-100 text-sm mt-1">
                  Vervollständigen Sie Ihre Buchung auf unserer offiziellen Website
                </p>
              </div>

              <CardContent className="p-5 md:p-6">
                {/* Booking Summary */}
                <div className="bg-slate-50 rounded-xl p-4 mb-5">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-sm font-medium text-slate-700">Ihre Angaben:</span>
                    <button
                      onClick={copyToClipboard}
                      className="flex items-center gap-1.5 text-xs text-amber-600 hover:text-amber-700 font-medium"
                    >
                      {copied ? <Check className="h-3.5 w-3.5" /> : <Copy className="h-3.5 w-3.5" />}
                      {copied ? "Kopiert!" : "Kopieren"}
                    </button>
                  </div>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-slate-500">Parkplatz:</span>
                      <span className="font-medium text-slate-800">
                        {formData.parkingType === "aussen" ? "Außenstellplatz" : "Hallenparkplatz"}
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-500">Anreise:</span>
                      <span className="font-medium text-slate-800">{formatDate(formData.arrivalDate)}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-500">Rückreise:</span>
                      <span className="font-medium text-slate-800">{formatDate(formData.departureDate)}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-500">Personen:</span>
                      <span className="font-medium text-slate-800">{formData.persons}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-500">Telefon:</span>
                      <span className="font-medium text-slate-800">{formData.contact}</span>
                    </div>
                  </div>
                </div>

                {/* CTA to official site */}
                <button
                  onClick={goToOfficialSite}
                  className="w-full flex items-center justify-center gap-2 h-14 rounded-xl bg-amber-500 hover:bg-amber-600 text-white font-bold text-base transition-all shadow-lg hover:shadow-xl"
                >
                  <ExternalLink className="h-5 w-5" />
                  Jetzt auf park-express24.de buchen
                </button>

                <p className="text-center text-xs text-slate-500 mt-4">
                  Sie werden zur offiziellen Website weitergeleitet, um Ihre Buchung abzuschließen.
                </p>

                {/* Back button */}
                <button
                  onClick={() => setStep("form")}
                  className="w-full text-center text-sm text-slate-400 hover:text-slate-600 mt-4 py-2"
                >
                  ← Angaben ändern
                </button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    );
  }

  // Form view
  return (
    <section id="anfrage" className="py-12 md:py-20 bg-white">
      <div className="container px-4">
        <div className="max-w-lg mx-auto">
          {/* Header */}
          <div className="text-center mb-6 md:mb-8">
            <p className="text-amber-600 font-medium text-sm mb-2">
              {t.request.badge}
            </p>
            <h2 className="text-xl md:text-2xl font-bold text-slate-800 mb-2">
              {t.request.title}
            </h2>
            <p className="text-slate-500 text-sm">
              {t.request.subtitle}
            </p>
          </div>

          <Card className="border-0 shadow-xl">
            <CardContent className="p-5 md:p-6">
              <form onSubmit={handleContinue} className="space-y-5">
                {/* Parking Type */}
                <div>
                  <label className="text-sm text-slate-700 font-medium mb-2 flex items-center gap-1.5">
                    <Car className="h-4 w-4 text-amber-500" />
                    {t.request.parkingType}
                  </label>
                  <div className="grid grid-cols-2 gap-3">
                    <button
                      type="button"
                      onClick={() => setFormData({...formData, parkingType: "aussen"})}
                      className={`p-3 sm:p-4 rounded-xl border-2 text-left transition-all flex items-center gap-2 sm:gap-3 ${
                        formData.parkingType === "aussen"
                          ? "border-amber-500 bg-amber-50"
                          : "border-slate-200 hover:border-slate-300"
                      }`}
                    >
                      <div className={`w-9 h-9 sm:w-10 sm:h-10 rounded-lg flex items-center justify-center flex-shrink-0 ${
                        formData.parkingType === "aussen" ? "bg-amber-500" : "bg-slate-100"
                      }`}>
                        <Car className={`h-4 w-4 sm:h-5 sm:w-5 ${formData.parkingType === "aussen" ? "text-white" : "text-slate-500"}`} />
                      </div>
                      <div>
                        <span className="font-semibold text-slate-800 text-xs sm:text-sm block">{t.request.outdoor}</span>
                        <span className="text-[10px] sm:text-xs text-slate-500">{t.request.from} 6,90€</span>
                      </div>
                    </button>
                    <button
                      type="button"
                      onClick={() => setFormData({...formData, parkingType: "halle"})}
                      className={`p-3 sm:p-4 rounded-xl border-2 text-left transition-all flex items-center gap-2 sm:gap-3 ${
                        formData.parkingType === "halle"
                          ? "border-amber-500 bg-amber-50"
                          : "border-slate-200 hover:border-slate-300"
                      }`}
                    >
                      <div className={`w-9 h-9 sm:w-10 sm:h-10 rounded-lg flex items-center justify-center flex-shrink-0 ${
                        formData.parkingType === "halle" ? "bg-amber-500" : "bg-slate-100"
                      }`}>
                        <Warehouse className={`h-4 w-4 sm:h-5 sm:w-5 ${formData.parkingType === "halle" ? "text-white" : "text-slate-500"}`} />
                      </div>
                      <div>
                        <span className="font-semibold text-slate-800 text-xs sm:text-sm block">{t.request.indoor}</span>
                        <span className="text-[10px] sm:text-xs text-slate-500">{t.request.from} 8,90€</span>
                      </div>
                    </button>
                  </div>
                </div>

                {/* Dates */}
                <div className="grid grid-cols-2 gap-3">
                  <DatePickerField
                    value={formData.arrivalDate}
                    onChange={(date) => setFormData({...formData, arrivalDate: date})}
                    label={t.request.arrival}
                    placeholder={t.planner.selectDate}
                    locale={locale}
                    icon={Calendar}
                  />
                  <DatePickerField
                    value={formData.departureDate}
                    onChange={(date) => setFormData({...formData, departureDate: date})}
                    label={t.request.departure}
                    placeholder={t.planner.selectDate}
                    locale={locale}
                    minDate={formData.arrivalDate || new Date().toISOString().split("T")[0]}
                    icon={Calendar}
                  />
                </div>

                {/* Persons & Contact */}
                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="text-sm text-slate-700 font-medium mb-1.5 flex items-center gap-1.5">
                      <Users className="h-4 w-4 text-amber-500" />
                      {t.planner.persons}
                    </label>
                    <select
                      value={formData.persons}
                      onChange={(e) => setFormData({...formData, persons: e.target.value})}
                      className="w-full h-11 sm:h-12 px-3 rounded-xl border-2 border-amber-400 bg-amber-50 text-slate-800 text-sm appearance-none cursor-pointer"
                      style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='%2394a3b8'%3E%3Cpath stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M19 9l-7 7-7-7'%3E%3C/path%3E%3C/svg%3E")`, backgroundRepeat: 'no-repeat', backgroundPosition: 'right 10px center', backgroundSize: '20px' }}
                    >
                      {[1, 2, 3, 4, 5, 6].map((n) => (
                        <option key={n} value={n}>{n} {n === 1 ? t.planner.person : t.planner.personsLabel}</option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label className="text-sm text-slate-700 font-medium mb-1.5 flex items-center gap-1.5">
                      <Phone className="h-4 w-4 text-amber-500" />
                      {t.request.phone}
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder={t.request.yourNumber}
                      value={formData.contact}
                      onChange={(e) => setFormData({...formData, contact: e.target.value})}
                      className={`w-full h-11 sm:h-12 px-3 rounded-xl border-2 text-sm transition-all ${
                        formData.contact
                          ? "border-amber-400 bg-amber-50 text-slate-800"
                          : "border-slate-200 bg-white text-slate-800 placeholder:text-slate-400 hover:border-slate-300"
                      } focus:border-amber-400 focus:ring-2 focus:ring-amber-400/20 focus:outline-none`}
                    />
                  </div>
                </div>

                {/* Submit */}
                <Button
                  type="submit"
                  variant="cta"
                  className="w-full h-12 text-sm sm:text-base font-semibold"
                  disabled={!formData.arrivalDate || !formData.departureDate || !formData.contact}
                >
                  Weiter zur Buchung
                  <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5" />
                </Button>

                <p className="text-center text-xs text-slate-500">
                  Sie werden zu park-express24.de weitergeleitet
                </p>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
