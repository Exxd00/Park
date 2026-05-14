"use client";

import { useState, useRef, useEffect } from "react";
import { ChevronLeft, ChevronRight, ChevronDown, Calendar, Clock } from "lucide-react";

// Mini Calendar Component
export function MiniCalendar({
  selectedDate,
  onSelectDate,
  onClose,
  locale = "de",
  minDate
}: {
  selectedDate: string;
  onSelectDate: (date: string) => void;
  onClose: () => void;
  locale?: "de" | "en";
  minDate?: string;
}) {
  const today = new Date();
  const [currentMonth, setCurrentMonth] = useState(() => {
    if (selectedDate) {
      return new Date(selectedDate).getMonth();
    }
    return today.getMonth();
  });
  const [currentYear, setCurrentYear] = useState(() => {
    if (selectedDate) {
      return new Date(selectedDate).getFullYear();
    }
    return today.getFullYear();
  });

  const monthNames = locale === "de"
    ? ["Januar", "Februar", "März", "April", "Mai", "Juni", "Juli", "August", "September", "Oktober", "November", "Dezember"]
    : ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

  const dayNames = locale === "de"
    ? ["Mo", "Di", "Mi", "Do", "Fr", "Sa", "So"]
    : ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

  const getDaysInMonth = (month: number, year: number) => {
    return new Date(year, month + 1, 0).getDate();
  };

  const getFirstDayOfMonth = (month: number, year: number) => {
    const day = new Date(year, month, 1).getDay();
    return day === 0 ? 6 : day - 1;
  };

  const handlePrevMonth = () => {
    if (currentMonth === 0) {
      setCurrentMonth(11);
      setCurrentYear(currentYear - 1);
    } else {
      setCurrentMonth(currentMonth - 1);
    }
  };

  const handleNextMonth = () => {
    if (currentMonth === 11) {
      setCurrentMonth(0);
      setCurrentYear(currentYear + 1);
    } else {
      setCurrentMonth(currentMonth + 1);
    }
  };

  const daysInMonth = getDaysInMonth(currentMonth, currentYear);
  const firstDay = getFirstDayOfMonth(currentMonth, currentYear);
  const days = [];

  for (let i = 0; i < firstDay; i++) {
    days.push(<div key={`empty-${i}`} className="w-8 h-8" />);
  }

  const minDateObj = minDate ? new Date(minDate) : new Date(today.toISOString().split("T")[0]);

  for (let day = 1; day <= daysInMonth; day++) {
    const date = new Date(currentYear, currentMonth, day);
    const dateStr = date.toISOString().split("T")[0];
    const isToday = dateStr === today.toISOString().split("T")[0];
    const isSelected = dateStr === selectedDate;
    const isPast = date < minDateObj;

    days.push(
      <button
        key={day}
        type="button"
        disabled={isPast}
        onClick={() => {
          onSelectDate(dateStr);
          onClose();
        }}
        className={`w-8 h-8 rounded-full text-sm font-medium transition-all ${
          isSelected
            ? "bg-amber-500 text-white"
            : isToday
            ? "bg-amber-100 text-amber-800 hover:bg-amber-200"
            : isPast
            ? "text-slate-300 cursor-not-allowed"
            : "hover:bg-slate-100 text-slate-700"
        }`}
      >
        {day}
      </button>
    );
  }

  return (
    <div className="p-3">
      <div className="flex items-center justify-between mb-3">
        <button
          type="button"
          onClick={handlePrevMonth}
          className="p-1 rounded-lg hover:bg-slate-100"
        >
          <ChevronLeft className="h-4 w-4 text-slate-600" />
        </button>
        <span className="text-sm font-semibold text-slate-800">
          {monthNames[currentMonth]} {currentYear}
        </span>
        <button
          type="button"
          onClick={handleNextMonth}
          className="p-1 rounded-lg hover:bg-slate-100"
        >
          <ChevronRight className="h-4 w-4 text-slate-600" />
        </button>
      </div>

      <div className="grid grid-cols-7 gap-1 mb-2">
        {dayNames.map((name) => (
          <div key={name} className="w-8 h-6 flex items-center justify-center text-xs text-slate-400 font-medium">
            {name}
          </div>
        ))}
      </div>

      <div className="grid grid-cols-7 gap-1">
        {days}
      </div>
    </div>
  );
}

// Time Picker Component
export function TimePicker({
  selectedTime,
  onSelectTime,
  onClose,
  locale = "de"
}: {
  selectedTime: string;
  onSelectTime: (time: string) => void;
  onClose: () => void;
  locale?: "de" | "en";
}) {
  const [selectedHour, setSelectedHour] = useState(selectedTime ? selectedTime.split(":")[0] : "06");
  const [selectedMinute, setSelectedMinute] = useState(selectedTime ? selectedTime.split(":")[1] : "00");

  const hours = Array.from({ length: 24 }, (_, i) => i.toString().padStart(2, "0"));
  const minutes = Array.from({ length: 12 }, (_, i) => (i * 5).toString().padStart(2, "0"));

  const handleConfirm = () => {
    onSelectTime(`${selectedHour}:${selectedMinute}`);
    onClose();
  };

  return (
    <div className="p-3">
      <div className="text-center mb-3">
        <span className="text-2xl font-bold text-slate-800">
          {selectedHour}:{selectedMinute}
        </span>
      </div>

      <div className="flex gap-2 mb-3">
        <div className="flex-1">
          <p className="text-xs text-slate-500 text-center mb-1">
            {locale === "de" ? "Stunde" : "Hour"}
          </p>
          <div className="h-32 overflow-y-auto border border-slate-200 rounded-lg">
            {hours.map((hour) => (
              <button
                key={hour}
                type="button"
                onClick={() => setSelectedHour(hour)}
                className={`w-full py-1.5 text-sm font-medium transition-all ${
                  selectedHour === hour
                    ? "bg-amber-500 text-white"
                    : "hover:bg-slate-50 text-slate-700"
                }`}
              >
                {hour}
              </button>
            ))}
          </div>
        </div>

        <div className="flex-1">
          <p className="text-xs text-slate-500 text-center mb-1">
            {locale === "de" ? "Minute" : "Minute"}
          </p>
          <div className="h-32 overflow-y-auto border border-slate-200 rounded-lg">
            {minutes.map((minute) => (
              <button
                key={minute}
                type="button"
                onClick={() => setSelectedMinute(minute)}
                className={`w-full py-1.5 text-sm font-medium transition-all ${
                  selectedMinute === minute
                    ? "bg-amber-500 text-white"
                    : "hover:bg-slate-50 text-slate-700"
                }`}
              >
                {minute}
              </button>
            ))}
          </div>
        </div>
      </div>

      <button
        type="button"
        onClick={handleConfirm}
        className="w-full py-2 bg-amber-500 text-white rounded-lg font-medium hover:bg-amber-600 transition-colors"
      >
        {locale === "de" ? "Bestätigen" : "Confirm"}
      </button>
    </div>
  );
}

// Date Picker Field Component
export function DatePickerField({
  value,
  onChange,
  label,
  placeholder,
  locale = "de",
  minDate,
  icon: Icon = Calendar
}: {
  value: string;
  onChange: (date: string) => void;
  label?: string;
  placeholder?: string;
  locale?: "de" | "en";
  minDate?: string;
  icon?: React.ComponentType<{ className?: string }>;
}) {
  const [showPicker, setShowPicker] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        setShowPicker(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const formatDisplayDate = (dateStr: string) => {
    if (!dateStr) return "";
    const date = new Date(dateStr);
    return date.toLocaleDateString(locale === "de" ? "de-DE" : "en-US", {
      day: "2-digit",
      month: "2-digit",
      year: "2-digit"
    });
  };

  return (
    <div className="relative" ref={ref}>
      {label && (
        <label className="text-xs sm:text-sm text-slate-700 mb-1.5 flex items-center gap-1.5 font-medium">
          <Icon className="h-3.5 w-3.5 text-amber-500" />
          {label}
        </label>
      )}
      <button
        type="button"
        onClick={() => setShowPicker(!showPicker)}
        className={`w-full h-11 sm:h-12 px-3 rounded-xl border-2 text-left text-sm transition-all flex items-center justify-between ${
          value
            ? "border-amber-400 bg-amber-50 text-slate-800"
            : "border-slate-200 bg-slate-50 text-slate-400 hover:border-slate-300"
        }`}
      >
        <span>{value ? formatDisplayDate(value) : (placeholder || (locale === "de" ? "Datum wählen" : "Select date"))}</span>
        <ChevronDown className={`h-4 w-4 transition-transform ${showPicker ? "rotate-180" : ""}`} />
      </button>

      {showPicker && (
        <div className="absolute top-full left-0 mt-2 bg-white rounded-xl shadow-2xl border border-slate-200 z-50 overflow-hidden">
          <MiniCalendar
            selectedDate={value}
            onSelectDate={onChange}
            onClose={() => setShowPicker(false)}
            locale={locale}
            minDate={minDate}
          />
        </div>
      )}
    </div>
  );
}

// Time Picker Field Component
export function TimePickerField({
  value,
  onChange,
  label,
  placeholder,
  locale = "de",
  icon: Icon = Clock
}: {
  value: string;
  onChange: (time: string) => void;
  label?: string;
  placeholder?: string;
  locale?: "de" | "en";
  icon?: React.ComponentType<{ className?: string }>;
}) {
  const [showPicker, setShowPicker] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        setShowPicker(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="relative" ref={ref}>
      {label && (
        <label className="text-xs sm:text-sm text-slate-700 mb-1.5 flex items-center gap-1.5 font-medium">
          <Icon className="h-3.5 w-3.5 text-amber-500" />
          {label}
        </label>
      )}
      <button
        type="button"
        onClick={() => setShowPicker(!showPicker)}
        className={`w-full h-11 sm:h-12 px-3 rounded-xl border-2 text-left text-sm transition-all flex items-center justify-between ${
          value
            ? "border-amber-400 bg-amber-50 text-slate-800"
            : "border-slate-200 bg-slate-50 text-slate-400 hover:border-slate-300"
        }`}
      >
        <span>{value || (placeholder || (locale === "de" ? "Zeit wählen" : "Select time"))}</span>
        <ChevronDown className={`h-4 w-4 transition-transform ${showPicker ? "rotate-180" : ""}`} />
      </button>

      {showPicker && (
        <div className="absolute top-full left-0 right-0 mt-2 bg-white rounded-xl shadow-2xl border border-slate-200 z-50 overflow-hidden">
          <TimePicker
            selectedTime={value}
            onSelectTime={onChange}
            onClose={() => setShowPicker(false)}
            locale={locale}
          />
        </div>
      )}
    </div>
  );
}
