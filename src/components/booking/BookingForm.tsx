"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { Card, CardContent } from "@/components/ui/card";
import {
  Calendar,
  Car,
  Users,
  User,
  CheckCircle2,
  ArrowRight,
  ArrowLeft,
  Plane,
  Clock,
  ExternalLink,
  AlertCircle,
  Copy,
  Check
} from "lucide-react";
import { DatePickerField, TimePickerField } from "@/components/ui/date-time-picker";
import { trackFormStarted, trackFormCompleted, trackFormSubmitted, trackCtaClick } from "@/lib/tracking";

interface BookingData {
  // Step 1: Travel dates
  arrivalDate: string;
  arrivalTime: string;
  departureDate: string;
  departureTime: string;
  flightNumber: string;
  // Step 2: Parking type
  parkingType: "aussen" | "halle";
  // Step 3: Persons & Vehicle
  persons: string;
  vehicleType: string;
  licensePlate: string;
  notes: string;
  // Step 4: Customer data
  name: string;
  phone: string;
  email: string;
  whatsapp: string;
  // Step 5: Confirmation
  acceptPrivacy: boolean;
}

const initialData: BookingData = {
  arrivalDate: "",
  arrivalTime: "",
  departureDate: "",
  departureTime: "",
  flightNumber: "",
  parkingType: "aussen",
  persons: "2",
  vehicleType: "",
  licensePlate: "",
  notes: "",
  name: "",
  phone: "",
  email: "",
  whatsapp: "",
  acceptPrivacy: false,
};

const steps = [
  { number: 1, title: "Reisedaten", icon: Calendar },
  { number: 2, title: "Parkplatzart", icon: Car },
  { number: 3, title: "Personen", icon: Users },
  { number: 4, title: "Kontakt", icon: User },
  { number: 5, title: "Prüfen", icon: CheckCircle2 },
];

export function BookingForm() {
  const [currentStep, setCurrentStep] = useState(1);
  const [data, setData] = useState<BookingData>(initialData);
  const [copied, setCopied] = useState(false);

  const updateData = (field: keyof BookingData, value: string | boolean) => {
    setData((prev) => ({ ...prev, [field]: value }));
  };

  const nextStep = () => {
    if (currentStep < 5) {
      trackFormCompleted(`booking_step_${currentStep}`);
      setCurrentStep((prev) => prev + 1);
    }
  };

  const prevStep = () => {
    if (currentStep > 1) {
      setCurrentStep((prev) => prev - 1);
    }
  };

  const handleSubmit = () => {
    if (!data.acceptPrivacy) return;

    trackFormSubmitted("booking_form");

    // Open official website to complete booking
    window.open("https://park-express24.de", "_blank");
  };

  // Track booking start on first render
  useState(() => {
    trackFormStarted("booking_form");
  });

  return (
    <div>
      {/* Progress Steps */}
      <div className="mb-8">
        <div className="flex items-center justify-between">
          {steps.map((step, index) => (
            <div key={step.number} className="flex items-center">
              <div
                className={`flex h-10 w-10 items-center justify-center rounded-full text-sm font-semibold transition-colors ${
                  currentStep >= step.number
                    ? "bg-amber-500 text-white"
                    : "bg-slate-200 text-slate-500"
                }`}
              >
                {currentStep > step.number ? (
                  <CheckCircle2 className="h-5 w-5" />
                ) : (
                  step.number
                )}
              </div>
              {index < steps.length - 1 && (
                <div
                  className={`mx-2 h-1 w-8 rounded sm:w-12 md:w-16 ${
                    currentStep > step.number ? "bg-amber-500" : "bg-slate-200"
                  }`}
                />
              )}
            </div>
          ))}
        </div>
        <div className="mt-2 flex justify-between text-xs text-slate-500">
          {steps.map((step) => (
            <span key={step.number} className="hidden sm:block">{step.title}</span>
          ))}
        </div>
      </div>

      <Card className="border-2 border-slate-100 shadow-lg">
        <CardContent className="p-6 md:p-8">
          {/* Step 1: Travel Dates */}
          {currentStep === 1 && (
            <div className="space-y-6">
              <div className="mb-6 flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-amber-100">
                  <Calendar className="h-6 w-6 text-amber-600" />
                </div>
                <div>
                  <h2 className="text-xl font-bold text-slate-800">Reisedaten</h2>
                  <p className="text-sm text-slate-500">Wann reisen Sie?</p>
                </div>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                <DatePickerField
                  value={data.arrivalDate}
                  onChange={(date) => updateData("arrivalDate", date)}
                  label="Anreise-Datum *"
                  placeholder="Datum wählen"
                  locale="de"
                  icon={Calendar}
                />
                <TimePickerField
                  value={data.arrivalTime}
                  onChange={(time) => updateData("arrivalTime", time)}
                  label="Anreise-Uhrzeit *"
                  placeholder="Zeit wählen"
                  locale="de"
                  icon={Clock}
                />
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                <DatePickerField
                  value={data.departureDate}
                  onChange={(date) => updateData("departureDate", date)}
                  label="Rückreise-Datum *"
                  placeholder="Datum wählen"
                  locale="de"
                  minDate={data.arrivalDate || new Date().toISOString().split("T")[0]}
                  icon={Calendar}
                />
                <TimePickerField
                  value={data.departureTime}
                  onChange={(time) => updateData("departureTime", time)}
                  label="Rückreise-Uhrzeit *"
                  placeholder="Zeit wählen"
                  locale="de"
                  icon={Clock}
                />
              </div>

              <div>
                <Label htmlFor="flightNumber">Flugnummer (optional)</Label>
                <Input
                  id="flightNumber"
                  type="text"
                  placeholder="z.B. LH1234"
                  value={data.flightNumber}
                  onChange={(e) => updateData("flightNumber", e.target.value)}
                  className="mt-2 h-12"
                />
              </div>
            </div>
          )}

          {/* Step 2: Parking Type */}
          {currentStep === 2 && (
            <div className="space-y-6">
              <div className="mb-6 flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-amber-100">
                  <Car className="h-6 w-6 text-amber-600" />
                </div>
                <div>
                  <h2 className="text-xl font-bold text-slate-800">Parkplatzart</h2>
                  <p className="text-sm text-slate-500">Wählen Sie Ihre Parkoption</p>
                </div>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                <button
                  type="button"
                  onClick={() => updateData("parkingType", "aussen")}
                  className={`rounded-xl border-2 p-6 text-left transition-all ${
                    data.parkingType === "aussen"
                      ? "border-amber-500 bg-amber-50"
                      : "border-slate-200 hover:border-slate-300"
                  }`}
                >
                  <Car className={`mb-3 h-8 w-8 ${data.parkingType === "aussen" ? "text-amber-600" : "text-slate-400"}`} />
                  <h3 className="font-bold text-slate-800">Außenstellplatz</h3>
                  <p className="mt-1 text-sm text-slate-500">Günstig parken unter freiem Himmel</p>
                </button>

                <button
                  type="button"
                  onClick={() => updateData("parkingType", "halle")}
                  className={`rounded-xl border-2 p-6 text-left transition-all ${
                    data.parkingType === "halle"
                      ? "border-amber-500 bg-amber-50"
                      : "border-slate-200 hover:border-slate-300"
                  }`}
                >
                  <Car className={`mb-3 h-8 w-8 ${data.parkingType === "halle" ? "text-amber-600" : "text-slate-400"}`} />
                  <h3 className="font-bold text-slate-800">Hallenparkplatz</h3>
                  <p className="mt-1 text-sm text-slate-500">Überdacht und geschützt parken</p>
                </button>
              </div>
            </div>
          )}

          {/* Step 3: Persons & Vehicle */}
          {currentStep === 3 && (
            <div className="space-y-6">
              <div className="mb-6 flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-amber-100">
                  <Users className="h-6 w-6 text-amber-600" />
                </div>
                <div>
                  <h2 className="text-xl font-bold text-slate-800">Personen & Fahrzeug</h2>
                  <p className="text-sm text-slate-500">Angaben zu Reisenden und Fahrzeug</p>
                </div>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <Label htmlFor="persons">Anzahl Personen *</Label>
                  <select
                    id="persons"
                    value={data.persons}
                    onChange={(e) => updateData("persons", e.target.value)}
                    className="mt-2 h-12 w-full rounded-lg border-2 border-slate-200 px-4"
                  >
                    {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((n) => (
                      <option key={n} value={n}>
                        {n} {n === 1 ? "Person" : "Personen"}
                      </option>
                    ))}
                  </select>
                </div>
                <div>
                  <Label htmlFor="vehicleType">Fahrzeugtyp (optional)</Label>
                  <Input
                    id="vehicleType"
                    type="text"
                    placeholder="z.B. VW Golf"
                    value={data.vehicleType}
                    onChange={(e) => updateData("vehicleType", e.target.value)}
                    className="mt-2 h-12"
                  />
                </div>
              </div>

              <div>
                <Label htmlFor="licensePlate">Kennzeichen (optional)</Label>
                <Input
                  id="licensePlate"
                  type="text"
                  placeholder="z.B. N-AB 1234"
                  value={data.licensePlate}
                  onChange={(e) => updateData("licensePlate", e.target.value)}
                  className="mt-2 h-12"
                />
              </div>

              <div>
                <Label htmlFor="notes">Hinweise (optional)</Label>
                <Textarea
                  id="notes"
                  placeholder="Besondere Wünsche oder Hinweise..."
                  value={data.notes}
                  onChange={(e) => updateData("notes", e.target.value)}
                  className="mt-2"
                  rows={3}
                />
              </div>
            </div>
          )}

          {/* Step 4: Customer Data */}
          {currentStep === 4 && (
            <div className="space-y-6">
              <div className="mb-6 flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-amber-100">
                  <User className="h-6 w-6 text-amber-600" />
                </div>
                <div>
                  <h2 className="text-xl font-bold text-slate-800">Kontaktdaten</h2>
                  <p className="text-sm text-slate-500">Wie können wir Sie erreichen?</p>
                </div>
              </div>

              <div>
                <Label htmlFor="name">Name *</Label>
                <Input
                  id="name"
                  type="text"
                  placeholder="Ihr vollständiger Name"
                  value={data.name}
                  onChange={(e) => updateData("name", e.target.value)}
                  className="mt-2 h-12"
                  required
                />
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <Label htmlFor="phone">Telefon *</Label>
                  <Input
                    id="phone"
                    type="tel"
                    placeholder="Ihre Telefonnummer"
                    value={data.phone}
                    onChange={(e) => updateData("phone", e.target.value)}
                    className="mt-2 h-12"
                    required
                  />
                </div>
                <div>
                  <Label htmlFor="email">E-Mail *</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="Ihre E-Mail-Adresse"
                    value={data.email}
                    onChange={(e) => updateData("email", e.target.value)}
                    className="mt-2 h-12"
                    required
                  />
                </div>
              </div>

              <div>
                <Label htmlFor="whatsapp">WhatsApp (optional)</Label>
                <Input
                  id="whatsapp"
                  type="tel"
                  placeholder="WhatsApp-Nummer falls abweichend"
                  value={data.whatsapp}
                  onChange={(e) => updateData("whatsapp", e.target.value)}
                  className="mt-2 h-12"
                />
              </div>
            </div>
          )}

          {/* Step 5: Summary */}
          {currentStep === 5 && (
            <div className="space-y-6">
              <div className="mb-6 flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-amber-100">
                  <CheckCircle2 className="h-6 w-6 text-amber-600" />
                </div>
                <div>
                  <h2 className="text-xl font-bold text-slate-800">Fast geschafft!</h2>
                  <p className="text-sm text-slate-500">Überprüfen Sie Ihre Angaben und buchen Sie auf park-express24.de</p>
                </div>
              </div>

              <div className="space-y-4 rounded-xl bg-slate-50 p-6 relative">
                <button
                  type="button"
                  onClick={() => {
                    const summary = `Parkplatz-Reservierung:
• Anreise: ${data.arrivalDate} um ${data.arrivalTime} Uhr
• Rückreise: ${data.departureDate} um ${data.departureTime} Uhr
• Parkplatz: ${data.parkingType === "aussen" ? "Außenstellplatz" : "Hallenparkplatz"}
• Personen: ${data.persons}
• Name: ${data.name}
• Telefon: ${data.phone}
• E-Mail: ${data.email}`;
                    navigator.clipboard.writeText(summary);
                    setCopied(true);
                    setTimeout(() => setCopied(false), 2000);
                  }}
                  className="absolute top-3 right-3 flex items-center gap-1.5 text-xs text-amber-600 hover:text-amber-700 font-medium"
                >
                  {copied ? <Check className="h-3.5 w-3.5" /> : <Copy className="h-3.5 w-3.5" />}
                  {copied ? "Kopiert!" : "Kopieren"}
                </button>
                <div className="flex items-start gap-3">
                  <Calendar className="mt-1 h-5 w-5 text-amber-500" />
                  <div>
                    <p className="font-semibold text-slate-800">Reisezeitraum</p>
                    <p className="text-slate-600">
                      {data.arrivalDate} um {data.arrivalTime} Uhr – {data.departureDate} um {data.departureTime} Uhr
                    </p>
                    {data.flightNumber && (
                      <p className="text-sm text-slate-500">Flugnummer: {data.flightNumber}</p>
                    )}
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Car className="mt-1 h-5 w-5 text-amber-500" />
                  <div>
                    <p className="font-semibold text-slate-800">Parkplatz</p>
                    <p className="text-slate-600">
                      {data.parkingType === "aussen" ? "Außenstellplatz" : "Hallenparkplatz"}
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Users className="mt-1 h-5 w-5 text-amber-500" />
                  <div>
                    <p className="font-semibold text-slate-800">Personen & Fahrzeug</p>
                    <p className="text-slate-600">{data.persons} Personen</p>
                    {data.vehicleType && <p className="text-sm text-slate-500">Fahrzeug: {data.vehicleType}</p>}
                    {data.licensePlate && <p className="text-sm text-slate-500">Kennzeichen: {data.licensePlate}</p>}
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <User className="mt-1 h-5 w-5 text-amber-500" />
                  <div>
                    <p className="font-semibold text-slate-800">Kontakt</p>
                    <p className="text-slate-600">{data.name}</p>
                    <p className="text-sm text-slate-500">{data.phone} • {data.email}</p>
                  </div>
                </div>

                {data.notes && (
                  <div className="border-t pt-4">
                    <p className="font-semibold text-slate-800">Hinweise</p>
                    <p className="text-slate-600">{data.notes}</p>
                  </div>
                )}
              </div>

              {/* Info about next step */}
              <div className="rounded-xl border-2 border-amber-200 bg-amber-50 p-4">
                <div className="flex items-start gap-3">
                  <AlertCircle className="h-5 w-5 text-amber-600 mt-0.5 shrink-0" />
                  <div>
                    <p className="font-medium text-amber-800">
                      Nächster Schritt: Buchung auf park-express24.de abschließen
                    </p>
                    <p className="text-sm text-amber-700 mt-1">
                      Kopieren Sie Ihre Angaben und vervollständigen Sie die Buchung auf unserer offiziellen Website.
                    </p>
                  </div>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Checkbox
                  id="privacy"
                  checked={data.acceptPrivacy}
                  onCheckedChange={(checked) => updateData("acceptPrivacy", checked as boolean)}
                />
                <Label htmlFor="privacy" className="text-sm leading-relaxed text-slate-600">
                  Ich habe die{" "}
                  <a href="/datenschutz" className="text-amber-600 underline" target="_blank">
                    Datenschutzerklärung
                  </a>{" "}
                  gelesen und verstanden. *
                </Label>
              </div>
            </div>
          )}

          {/* Navigation Buttons */}
          <div className="mt-8 flex justify-between gap-4">
            {currentStep > 1 ? (
              <Button variant="outline" onClick={prevStep} className="gap-2">
                <ArrowLeft className="h-4 w-4" />
                Zurück
              </Button>
            ) : (
              <div />
            )}

            {currentStep < 5 ? (
              <Button
                variant="cta"
                onClick={nextStep}
                disabled={
                  (currentStep === 1 && (!data.arrivalDate || !data.arrivalTime || !data.departureDate || !data.departureTime)) ||
                  (currentStep === 4 && (!data.name || !data.phone || !data.email))
                }
                className="gap-2"
              >
                Weiter
                <ArrowRight className="h-4 w-4" />
              </Button>
            ) : (
              <Button
                variant="cta"
                onClick={handleSubmit}
                disabled={!data.acceptPrivacy}
                className="gap-2"
              >
                Auf park-express24.de buchen
                <ExternalLink className="h-4 w-4" />
              </Button>
            )}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
