function toggleTheme() {
  const isDark = document.body.classList.contains("dark-mode");
  if (isDark) {
    document.body.classList.remove("dark-mode");
    document.body.classList.add("light-mode");
    localStorage.setItem("theme", "light");
  } else {
    document.body.classList.remove("light-mode");
    document.body.classList.add("dark-mode");
    localStorage.setItem("theme", "dark");
  }
}

const translations = {
  en: {
    "hero-slogan": "Stay Fit. Stay Connected.",
    "buy-btn": "Buy Now",
    "feature-heading": "Why Choose FitPulse?",
    "f1-title": "Real-time Heart Monitoring",
    "f1-text": "Track your heart rate 24/7.",
    "f2-title": "Smartphone Sync",
    "f2-text": "Get call & app alerts on your wrist.",
    "f3-title": "Fitness Tracking",
    "f3-text": "Track steps, calories & workouts.",
    "gallery-heading": "Gallery",
    "pricing-heading": "Pricing",
    "cta-text": "Ready to Elevate Your Fitness?",
    "cta-sub": "Join thousands who have transformed their lifestyle with FitPulse.",
    "cta-btn": "Join Now",
    "contact-heading": "Contact Us",
    "name-placeholder": "Your Name",
    "email-placeholder": "Email Address",
    "msg-placeholder": "Your Message",
    "send-btn": "Send",
    "footer-text": "&copy; 2025 FitPulse. All rights reserved."
  },
  hi: {
    "hero-slogan": "फिट रहें, जुड़े रहें।",
    "buy-btn": "अभी खरीदें",
    "feature-heading": "FitPulse क्यों चुनें?",
    "f1-title": "रीयल-टाइम हार्ट मॉनिटरिंग",
    "f1-text": "हर समय अपनी हार्ट रेट पर नजर रखें।",
    "f2-title": "स्मार्टफोन से कनेक्शन",
    "f2-text": "कॉल और नोटिफिकेशन सीधे बैंड पर पाएं।",
    "f3-title": "फिटनेस ट्रैकिंग",
    "f3-text": "कदम, कैलोरी और वर्कआउट ट्रैक करें सटीकता से।",
    "gallery-heading": "गैलरी",
    "pricing-heading": "मूल्य निर्धारण",
    "cta-text": "क्या आप तैयार हैं अपनी फिटनेस बढ़ाने के लिए?",
    "cta-sub": "FitPulse के साथ हज़ारों लोगों ने अपना जीवन बदला है।",
    "cta-btn": "आज ही जॉइन करें",
    "contact-heading": "संपर्क करें",
    "name-placeholder": "आपका नाम",
    "email-placeholder": "ईमेल पता",
    "msg-placeholder": "आपका संदेश",
    "send-btn": "भेजें",
    "footer-text": "&copy; 2025 FitPulse. सभी अधिकार सुरक्षित।"
  }
};

function applyLanguage(lang) {
  localStorage.setItem('lang', lang);
  for (const key in translations[lang]) {
    const el = document.getElementById(key);
    if (el) {
      if (el.tagName === "INPUT" || el.tagName === "TEXTAREA") {
        el.placeholder = translations[lang][key];
      } else {
        el.innerHTML = translations[lang][key];
      }
    }
  }
}

function toggleLanguage() {
  const current = localStorage.getItem('lang') || 'en';
  const next = current === 'en' ? 'hi' : 'en';
  applyLanguage(next);
}

// Initialize theme and language on page load
window.onload = () => {
  // Language
  const savedLang = localStorage.getItem('lang') || 'en';
  applyLanguage(savedLang);

  // Theme with OS fallback
  const savedTheme = localStorage.getItem('theme') || 
    (window.matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark');

  if (savedTheme === 'dark') {
    document.body.classList.add("dark-mode");
  } else {
    document.body.classList.add("light-mode");
  }
};
