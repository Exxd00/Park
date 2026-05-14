// ===========================================
// نظام التتبع الذكي - Smart Tracking System
// ===========================================

// أسماء الأحداث الواضحة - Clear Event Names
export type TrackingEventName =
  // أحداث الاتصال - Contact Events
  | 'WHATSAPP_BESTAETIGT'           // تأكيد الواتساب - WhatsApp Confirmed
  | 'ANRUF_BESTAETIGT'              // تأكيد الاتصال - Call Confirmed
  | 'KARTE_GEOEFFNET'               // فتح الخرائط - Maps Opened

  // أحداث النموذج - Form Events
  | 'FORMULAR_GESTARTET'            // بدأ ملء النموذج - Form Started
  | 'FORMULAR_ABGESCHLOSSEN'        // أكمل النموذج - Form Completed
  | 'FORMULAR_ABGESENDET'           // أرسل النموذج - Form Submitted

  // أحداث الروابط الخارجية - External Link Events
  | 'EXTERNE_SEITE_GEOEFFNET'       // فتح موقع خارجي - External Site Opened
  | 'BUCHUNGSSEITE_GEOEFFNET'       // فتح صفحة الحجز - Booking Page Opened

  // أحداث التنقل - Navigation Events
  | 'SEITE_BESUCHT'                 // زار صفحة - Page Visited
  | 'CTA_GEKLICKT'                  // نقر على CTA - CTA Clicked

  // أحداث المحتوى - Content Events
  | 'FAQ_GEOEFFNET'                 // فتح سؤال - FAQ Opened
  | 'ZEITPLANER_BENUTZT'            // استخدم مخطط الوقت - Time Planner Used
  | 'PREISRECHNER_BENUTZT';         // استخدم حاسبة الأسعار - Price Calculator Used

// معلومات الحدث - Event Parameters
interface EventParams {
  [key: string]: string | number | boolean | undefined;
  seite?: string;          // الصفحة - Page
  quelle?: string;         // المصدر - Source
  ziel?: string;           // الهدف - Target
  wert?: number;           // القيمة - Value
  kategorie?: string;      // الفئة - Category
}

// تعريف النافذة - Window Declaration
declare global {
  interface Window {
    gtag?: (
      command: 'event',
      eventName: string,
      eventParams?: EventParams
    ) => void;
    dataLayer?: unknown[];
  }
}

// ===========================================
// الدالة الرئيسية للتتبع - Main Tracking Function
// ===========================================
export function trackEvent(eventName: TrackingEventName, params?: EventParams): void {
  const eventData = {
    event_name: eventName,
    timestamp: new Date().toISOString(),
    page_url: typeof window !== 'undefined' ? window.location.pathname : '',
    ...params
  };

  // سجل في وضع التطوير - Log in development
  if (process.env.NODE_ENV === 'development') {
    console.log('📊 تتبع الحدث / Track Event:', eventName, eventData);
  }

  // أرسل إلى GA4 - Send to GA4
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', eventName, eventData);
  }

  // أرسل إلى dataLayer لـ GTM - Push to dataLayer for GTM
  if (typeof window !== 'undefined' && window.dataLayer) {
    window.dataLayer.push({
      event: eventName,
      ...eventData
    });
  }

  // احفظ في localStorage للتحليل - Save to localStorage for analysis
  saveEventToLocalStorage(eventName, eventData);
}

// ===========================================
// حفظ الأحداث محلياً - Save Events Locally
// ===========================================
function saveEventToLocalStorage(eventName: string, eventData: EventParams): void {
  if (typeof window === 'undefined') return;

  try {
    const storageKey = 'pe24_events';
    const existing = localStorage.getItem(storageKey);
    const events = existing ? JSON.parse(existing) : [];

    events.push({
      name: eventName,
      data: eventData,
      time: Date.now()
    });

    // احتفظ بآخر 100 حدث فقط - Keep only last 100 events
    if (events.length > 100) {
      events.shift();
    }

    localStorage.setItem(storageKey, JSON.stringify(events));
  } catch {
    // تجاهل أخطاء localStorage
  }
}

// ===========================================
// دوال التأكيد - Confirmation Functions
// ===========================================

/**
 * تأكيد قبل فتح WhatsApp
 * Confirmation before opening WhatsApp
 */
export function confirmAndTrackWhatsApp(
  phoneNumber: string,
  message: string = '',
  source: string = 'unknown'
): boolean {
  const confirmed = window.confirm(
    '📱 WhatsApp öffnen?\n\nSie werden zu WhatsApp weitergeleitet, um uns zu kontaktieren.\n\nMöchten Sie fortfahren?'
  );

  if (confirmed) {
    trackEvent('WHATSAPP_BESTAETIGT', {
      quelle: source,
      ziel: phoneNumber
    });

    const whatsappUrl = `https://wa.me/${phoneNumber.replace(/[^0-9]/g, '')}${message ? `?text=${encodeURIComponent(message)}` : ''}`;
    window.open(whatsappUrl, '_blank');
  }

  return confirmed;
}

/**
 * تأكيد قبل الاتصال
 * Confirmation before calling
 */
export function confirmAndTrackCall(
  phoneNumber: string,
  source: string = 'unknown'
): boolean {
  const confirmed = window.confirm(
    '📞 Anrufen?\n\nSie werden verbunden mit:\n' + phoneNumber + '\n\nMöchten Sie jetzt anrufen?'
  );

  if (confirmed) {
    trackEvent('ANRUF_BESTAETIGT', {
      quelle: source,
      ziel: phoneNumber
    });

    window.location.href = `tel:${phoneNumber.replace(/[^0-9+]/g, '')}`;
  }

  return confirmed;
}

/**
 * تتبع فتح الخرائط
 * Track maps opening
 */
export function trackAndOpenMaps(
  mapsUrl: string,
  source: string = 'unknown'
): void {
  trackEvent('KARTE_GEOEFFNET', {
    quelle: source,
    ziel: mapsUrl
  });

  window.open(mapsUrl, '_blank');
}

/**
 * تتبع فتح موقع خارجي
 * Track external site opening
 */
export function trackAndOpenExternalSite(
  url: string,
  siteName: string,
  source: string = 'unknown'
): void {
  trackEvent('EXTERNE_SEITE_GEOEFFNET', {
    quelle: source,
    ziel: url,
    kategorie: siteName
  });

  window.open(url, '_blank');
}

/**
 * تتبع فتح صفحة الحجز
 * Track booking page opening
 */
export function trackAndOpenBookingPage(
  bookingUrl: string,
  source: string = 'unknown'
): void {
  trackEvent('BUCHUNGSSEITE_GEOEFFNET', {
    quelle: source,
    ziel: bookingUrl,
    wert: 1  // قيمة عالية - High value event
  });

  window.open(bookingUrl, '_blank');
}

// ===========================================
// دوال تتبع النموذج - Form Tracking Functions
// ===========================================

export function trackFormStarted(formName: string): void {
  trackEvent('FORMULAR_GESTARTET', {
    kategorie: formName
  });
}

export function trackFormCompleted(formName: string): void {
  trackEvent('FORMULAR_ABGESCHLOSSEN', {
    kategorie: formName,
    wert: 1
  });
}

export function trackFormSubmitted(formName: string): void {
  trackEvent('FORMULAR_ABGESENDET', {
    kategorie: formName,
    wert: 2  // أعلى قيمة - Highest value
  });
}

// ===========================================
// دوال تتبع أخرى - Other Tracking Functions
// ===========================================

export function trackPageVisit(pageName: string): void {
  trackEvent('SEITE_BESUCHT', {
    seite: pageName
  });
}

export function trackCtaClick(ctaName: string, location: string): void {
  trackEvent('CTA_GEKLICKT', {
    kategorie: ctaName,
    quelle: location
  });
}

export function trackFaqOpened(question: string): void {
  trackEvent('FAQ_GEOEFFNET', {
    kategorie: question
  });
}

export function trackTimePlannerUsed(): void {
  trackEvent('ZEITPLANER_BENUTZT', {
    wert: 1
  });
}

export function trackPriceCalculatorUsed(duration: string, price: number): void {
  trackEvent('PREISRECHNER_BENUTZT', {
    kategorie: duration,
    wert: price
  });
}

// ===========================================
// دالة الحصول على الإحصائيات - Get Statistics
// ===========================================
export function getTrackingStats(): {
  totalEvents: number;
  eventCounts: Record<string, number>;
  recentEvents: Array<{ name: string; time: number }>;
} {
  if (typeof window === 'undefined') {
    return { totalEvents: 0, eventCounts: {}, recentEvents: [] };
  }

  try {
    const storageKey = 'pe24_events';
    const existing = localStorage.getItem(storageKey);
    const events = existing ? JSON.parse(existing) : [];

    const eventCounts: Record<string, number> = {};
    for (const event of events) {
      eventCounts[event.name] = (eventCounts[event.name] || 0) + 1;
    }

    return {
      totalEvents: events.length,
      eventCounts,
      recentEvents: events.slice(-10).map((e: { name: string; time: number }) => ({
        name: e.name,
        time: e.time
      }))
    };
  } catch {
    return { totalEvents: 0, eventCounts: {}, recentEvents: [] };
  }
}
