"use client";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Plane,
  Clock,
  Car,
  Bus,
  MapPin,
  CheckCircle2,
  ArrowRight,
  Calendar,
  Users,
  Phone,
  MessageCircle,
  Key,
  ExternalLink,
} from "lucide-react";
import { DatePickerField, TimePickerField } from "@/components/ui/date-time-picker";
import { trackTimePlannerUsed } from "@/lib/tracking";
import { company } from "@/data/company";
import { useLanguage } from "@/lib/i18n";

const cities = [
  { value: "nuernberg", label: "Nürnberg", driveTime: 15 },
  { value: "fuerth", label: "Fürth", driveTime: 20 },
  { value: "erlangen", label: "Erlangen", driveTime: 25 },
  { value: "schwabach", label: "Schwabach", driveTime: 25 },
  { value: "zirndorf", label: "Zirndorf", driveTime: 22 },
  { value: "lauf", label: "Lauf", driveTime: 25 },
  { value: "roth", label: "Roth", driveTime: 30 },
  { value: "forchheim", label: "Forchheim", driveTime: 35 },
  { value: "ansbach", label: "Ansbach", driveTime: 45 },
  { value: "other", label: "Andere", driveTime: 45 },
];

interface TravelPlan {
  leaveHome: string;
  arriveParking: string;
  shuttleDeparts: string;
  arriveTerminal: string;
  bufferMinutes: number;
  flightTime: string;
  flightDate: string;
  cityName: string;
  driveTime: number;
  persons: string;
}

export function PreFlightPlanner() {
  const { t, locale } = useLanguage();
  const [step, setStep] = useState<"input" | "result">("input");
  const [flightDate, setFlightDate] = useState("");
  const [flightTime, setFlightTime] = useState("");
  const [city, setCity] = useState("");
  const [persons, setPersons] = useState("2");
  const [travelPlan, setTravelPlan] = useState<TravelPlan | null>(null);

  const calculatePlan = () => {
    if (!flightDate || !flightTime || !city) return;

    const selectedCity = cities.find((c) => c.value === city);
    const driveTime = selectedCity?.driveTime || 45;
    const cityName = selectedCity?.label || (locale === "de" ? "Ihrer Stadt" : "your city");
    const flightDateTime = new Date(`${flightDate}T${flightTime}`);

    const bufferMinutes = 90;
    const shuttleTime = 5;
    const parkingBuffer = 10;

    const arriveTerminal = new Date(flightDateTime.getTime() - bufferMinutes * 60000);
    const shuttleDeparts = new Date(arriveTerminal.getTime() - shuttleTime * 60000);
    const arriveParking = new Date(shuttleDeparts.getTime() - parkingBuffer * 60000);
    const leaveHome = new Date(arriveParking.getTime() - driveTime * 60000);

    const formatTime = (date: Date) =>
      date.toLocaleTimeString(locale === "de" ? "de-DE" : "en-US", { hour: "2-digit", minute: "2-digit" });

    const formatDate = (dateStr: string) => {
      const date = new Date(dateStr);
      return date.toLocaleDateString(locale === "de" ? "de-DE" : "en-US", { weekday: "short", day: "numeric", month: "short" });
    };

    setTravelPlan({
      leaveHome: formatTime(leaveHome),
      arriveParking: formatTime(arriveParking),
      shuttleDeparts: formatTime(shuttleDeparts),
      arriveTerminal: formatTime(arriveTerminal),
      bufferMinutes,
      flightTime,
      flightDate: formatDate(flightDate),
      cityName,
      driveTime,
      persons,
    });

    setStep("result");
    trackTimePlannerUsed();
  };

  const resetPlanner = () => {
    setStep("input");
    setTravelPlan(null);
  };

  return (
    <section id="planner" className="py-8 sm:py-12 md:py-16 bg-gradient-to-b from-white to-slate-50">
      <div className="container px-4">
        <div className="max-w-md sm:max-w-lg md:max-w-xl mx-auto">
          {step === "input" ? (
            <>
              {/* Header */}
              <div className="text-center mb-5 sm:mb-6 md:mb-8">
                <div className="inline-flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-amber-100 mb-3">
                  <Plane className="h-5 w-5 sm:h-6 sm:w-6 text-amber-600" />
                </div>
                <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-800 mb-1 sm:mb-2">
                  {t.planner.title}
                </h2>
                <p className="text-slate-500 text-xs sm:text-sm">
                  {t.planner.subtitle}
                </p>
              </div>

              {/* Input Form */}
              <Card className="border-0 shadow-xl bg-white">
                <CardContent className="p-4 sm:p-5 md:p-6">
                  {/* 2x2 Grid */}
                  <div className="grid grid-cols-2 gap-3 sm:gap-4 mb-4">
                    {/* Date Picker */}
                    <DatePickerField
                      value={flightDate}
                      onChange={setFlightDate}
                      label={t.planner.flightDate}
                      placeholder={t.planner.selectDate}
                      locale={locale}
                      icon={Calendar}
                    />

                    {/* Time Picker */}
                    <TimePickerField
                      value={flightTime}
                      onChange={setFlightTime}
                      label={t.planner.flightTime}
                      placeholder={t.planner.selectTime}
                      locale={locale}
                      icon={Clock}
                    />

                    {/* City */}
                    <div>
                      <label className="text-xs sm:text-sm text-slate-700 mb-1.5 flex items-center gap-1.5 font-medium">
                        <MapPin className="h-3.5 w-3.5 text-amber-500" />
                        {t.planner.origin}
                      </label>
                      <select
                        value={city}
                        onChange={(e) => setCity(e.target.value)}
                        className={`w-full h-11 sm:h-12 px-3 rounded-xl border-2 bg-white text-sm transition-all appearance-none cursor-pointer ${
                          city
                            ? "border-amber-400 bg-amber-50 text-slate-800"
                            : "border-slate-200 text-slate-400 hover:border-slate-300"
                        }`}
                        style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='%2394a3b8'%3E%3Cpath stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M19 9l-7 7-7-7'%3E%3C/path%3E%3C/svg%3E")`, backgroundRepeat: 'no-repeat', backgroundPosition: 'right 10px center', backgroundSize: '20px' }}
                      >
                        <option value="">{t.planner.selectCity}</option>
                        {cities.map((c) => (
                          <option key={c.value} value={c.value}>
                            {c.label}
                          </option>
                        ))}
                      </select>
                    </div>

                    {/* Persons */}
                    <div>
                      <label className="text-xs sm:text-sm text-slate-700 mb-1.5 flex items-center gap-1.5 font-medium">
                        <Users className="h-3.5 w-3.5 text-amber-500" />
                        {t.planner.persons}
                      </label>
                      <select
                        value={persons}
                        onChange={(e) => setPersons(e.target.value)}
                        className="w-full h-11 sm:h-12 px-3 rounded-xl border-2 border-amber-400 bg-amber-50 text-slate-800 text-sm transition-all appearance-none cursor-pointer"
                        style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='%2394a3b8'%3E%3Cpath stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M19 9l-7 7-7-7'%3E%3C/path%3E%3C/svg%3E")`, backgroundRepeat: 'no-repeat', backgroundPosition: 'right 10px center', backgroundSize: '20px' }}
                      >
                        {[1, 2, 3, 4, 5, 6].map((n) => (
                          <option key={n} value={n}>
                            {n} {n === 1 ? t.planner.person : t.planner.personsLabel}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  {/* Submit Button */}
                  <Button
                    variant="cta"
                    className="w-full h-12 text-sm sm:text-base font-semibold"
                    onClick={calculatePlan}
                    disabled={!flightDate || !flightTime || !city}
                  >
                    {t.planner.calculate}
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </CardContent>
              </Card>
            </>
          ) : (
            <>
              {/* Result Header */}
              <div className="text-center mb-4 sm:mb-5">
                <div className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-green-100 mb-2">
                  <CheckCircle2 className="h-5 w-5 text-green-600" />
                </div>
                <h2 className="text-base sm:text-lg md:text-xl font-bold text-slate-800">
                  {t.planner.resultTitle}
                </h2>
                <p className="text-slate-500 text-xs sm:text-sm">
                  {travelPlan?.flightDate} · {travelPlan?.flightTime} {locale === "de" ? "Uhr" : ""}
                </p>
              </div>

              {/* Timeline - 2x2 Grid */}
              <Card className="border-2 border-green-200 bg-gradient-to-b from-white to-green-50/30 mb-4">
                <CardContent className="p-4 sm:p-5">
                  <div className="grid grid-cols-2 gap-3 sm:gap-4">
                    <TimelineItem
                      icon={<Car className="h-4 w-4" />}
                      time={travelPlan?.leaveHome || ""}
                      label={t.planner.departure}
                      sublabel={travelPlan?.cityName || ""}
                      color="slate"
                    />
                    <TimelineItem
                      icon={<MapPin className="h-4 w-4" />}
                      time={travelPlan?.arriveParking || ""}
                      label={t.planner.parking}
                      sublabel={t.planner.arrive}
                      color="blue"
                    />
                    <TimelineItem
                      icon={<Bus className="h-4 w-4" />}
                      time={travelPlan?.shuttleDeparts || ""}
                      label={t.planner.shuttle}
                      sublabel={`5 ${t.common.min}`}
                      color="amber"
                    />
                    <TimelineItem
                      icon={<Plane className="h-4 w-4" />}
                      time={travelPlan?.arriveTerminal || ""}
                      label={t.planner.terminal}
                      sublabel={`+90 ${t.common.min}`}
                      color="green"
                    />
                  </div>
                </CardContent>
              </Card>

              {/* Key Feature */}
              <div className="flex items-center justify-center gap-2 p-3 rounded-xl bg-green-50 border border-green-200 mb-4">
                <Key className="h-4 w-4 text-green-600" />
                <span className="text-green-800 text-sm font-medium">{t.planner.keyStays}</span>
              </div>

              {/* CTA */}
              <div className="space-y-3">
                <p className="text-center text-sm font-medium text-slate-800">
                  {t.planner.planReady}
                </p>

                {/* Primary CTA - Book on official website */}
                <a
                  href="https://park-express24.de"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 w-full h-12 rounded-xl bg-amber-500 hover:bg-amber-600 text-white font-semibold text-sm transition-all shadow-lg hover:shadow-xl"
                >
                  <ExternalLink className="h-4 w-4" />
                  Jetzt auf park-express24.de buchen
                </a>

                <p className="text-center text-xs text-slate-500">
                  Bestätigen Sie Ihre Buchung auf unserer offiziellen Website
                </p>

                <div className="flex gap-3">
                  <a href={company.contact.whatsappLink} target="_blank" rel="noopener noreferrer" className="flex-1">
                    <Button className="w-full h-11 text-sm gap-2 bg-green-500 hover:bg-green-600">
                      <MessageCircle className="h-4 w-4" />
                      {t.planner.whatsapp}
                    </Button>
                  </a>
                  <a href={company.contact.phoneLink}>
                    <Button variant="outline" className="h-11 px-4 border-2">
                      <Phone className="h-4 w-4" />
                    </Button>
                  </a>
                </div>
                <button
                  onClick={resetPlanner}
                  className="w-full text-center text-xs text-slate-400 hover:text-slate-600 py-2"
                >
                  {t.planner.newCalculation}
                </button>
              </div>
            </>
          )}
        </div>
      </div>
    </section>
  );
}

function TimelineItem({
  icon,
  time,
  label,
  sublabel,
  color,
}: {
  icon: React.ReactNode;
  time: string;
  label: string;
  sublabel: string;
  color: "slate" | "blue" | "amber" | "green";
}) {
  const colors = {
    slate: "bg-slate-100 text-slate-600",
    blue: "bg-blue-100 text-blue-600",
    amber: "bg-amber-100 text-amber-600",
    green: "bg-green-100 text-green-600",
  };

  return (
    <div className="flex items-center gap-3 p-3 rounded-xl bg-white border border-slate-100 shadow-sm">
      <div className={`flex items-center justify-center w-9 h-9 rounded-lg ${colors[color]}`}>
        {icon}
      </div>
      <div className="flex-1 min-w-0">
        <div className="text-lg font-bold text-slate-800">{time}</div>
        <div className="text-xs text-slate-500">{label} · {sublabel}</div>
      </div>
    </div>
  );
}
