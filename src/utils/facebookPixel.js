const PIXEL_ID = "1808468869757208";

export const initFacebookPixel = () => {
  if (window.fbq) return;

  !(function (f, b, e, v, n, t, s) {
    if (f.fbq) return;
    n = f.fbq = function () {
      n.callMethod
        ? n.callMethod.apply(n, arguments)
        : n.queue.push(arguments);
    };
    if (!f._fbq) f._fbq = n;
    n.push = n;
    n.loaded = true;
    n.version = "2.0";
    n.queue = [];
    t = b.createElement(e);
    t.async = true;
    t.src = v;
    s = b.getElementsByTagName(e)[0];
    s.parentNode.insertBefore(t, s);
  })(window, document, "script", "https://connect.facebook.net/en_US/fbevents.js");

  window.fbq("init", PIXEL_ID);
};

// Função para o PageView inicial (apenas uma vez por sessão)
export const trackInitialPageView = () => {
  if (!window.fbq) return;
  window.fbq("track", "PageView");
};

// eventos personalizados
export const trackEvent = (eventName, data = {}) => {
  if (!window.fbq) return;
  window.fbq("track", eventName, data);
};


// Eventos específicos para o site da Fisioella
export const trackPageView = (pageName) => {
  trackEvent("ViewContent", {
    content_name: pageName,
    content_category: "Page View",
    content_type: "website_page",
  });
};

export const trackTreatmentView = (treatmentName) => {
  trackEvent("ViewContent", {
    content_name: treatmentName,
    content_category: "Treatment",
    content_type: "service",
    currency: "BRL",
  });
};

export const trackContactInterest = () => {
  trackEvent("InitiateCheckout", {
    content_name: "Contact Form Started",
    content_category: "Lead Generation",
    value: 100,
    currency: "BRL",
  });
};

export const trackFormSubmit = () => {
  trackEvent("Lead", {
    content_name: "Contact Form Submitted",
    content_category: "Lead Generation",
    value: 200,
    currency: "BRL",
    status: "completed",
  });
};

export const trackWhatsAppClick = () => {
  trackEvent("Contact", {
    content_name: "WhatsApp Click",
    content_category: "Communication",
    method: "whatsapp",
  });
};

export const trackTreatmentClick = (treatmentName) => {
  trackEvent("ViewContent", {
    content_name: `${treatmentName} - Saiba Mais`,
    content_category: "Treatment Interest",
    content_type: "service_detail",
  });
};

export const trackScheduleIntent = () => {
  trackEvent("Schedule", {
    content_name: "Schedule Appointment Intent",
    content_category: "Conversion Intent",
    value: 300,
    currency: "BRL",
  });
};
