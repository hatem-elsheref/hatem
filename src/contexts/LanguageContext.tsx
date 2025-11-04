import { createContext, useContext, useEffect, useState } from "react";

type Language = "en" | "ar";

type LanguageContextType = {
  language: Language;
  toggleLanguage: () => void;
  t: (key: string) => string;
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

const translations = {
  en: {
    // Navigation
    home: "Home",
    resume: "Resume",
    downloadCV: "Download CV",
    
    // Hero
    heroTitle: "Full Stack Developer",
    heroSubtitle: "Building scalable, high-performance applications with Laravel, Node.js, and Vue.js",
    heroLocation: "Based in Egypt 🇪🇬",
    viewProjects: "View Projects",
    contactMe: "Contact Me",
    
    // About
    aboutTitle: "About Me",
    aboutDesc1: "Computer Engineer with strong background in software architecture and backend systems",
    aboutDesc2: "Specialized in Laravel, Node.js, and Microservices architectures",
    aboutDesc3: "Experienced in real-time apps, API integrations, push notifications, and system automation",
    aboutDesc4: "Passionate about performance optimization, clean code, and SOLID principles",
    aboutDesc5: "Open to remote & freelance opportunities",
    
    // Skills
    skillsTitle: "Tech Stack & Skills",
    languages: "Languages",
    frameworks: "Frameworks & Libraries",
    architecture: "Architecture & Concepts",
    apis: "APIs & Communication",
    databases: "Databases",
    cloud: "Cloud Services",
    devops: "Servers & DevOps",
    tools: "Development Tools",
    
    // Projects
    projectsTitle: "Featured Projects",
    techUsed: "Tech Used",
    
    // Contact
    contactTitle: "Get In Touch",
    contactDesc: "I'm always open to collaboration, learning, and innovation. Let's build something amazing together!",
    email: "Email",
    linkedin: "LinkedIn",
    twitter: "Twitter",
    
    // Resume Page
    resumeTitle: "Professional Resume",
    printResume: "Print Resume",
    personalInfo: "Personal Information",
    professionalSummary: "Professional Summary",
    technicalSkills: "Technical Skills",
    experience: "Experience & Projects",
    education: "Education",
    
    // Fun Facts
    funFactsTitle: "Quick Facts",
    funFact1: "Constantly improving backend architecture & scalability skills",
    funFact2: "Love automating workflows and building internal tools",
    funFact3: "Exploring AI integrations and real-time analytics",
    funFact4: "Always open to collaboration, learning, and innovation",
  },
  ar: {
    // Navigation
    home: "الرئيسية",
    resume: "السيرة الذاتية",
    downloadCV: "تحميل السيرة الذاتية",
    
    // Hero
    heroTitle: "مطور Full Stack",
    heroSubtitle: "بناء تطبيقات قابلة للتوسع وعالية الأداء باستخدام Laravel و Node.js و Vue.js",
    heroLocation: "مقره في مصر 🇪🇬",
    viewProjects: "عرض المشاريع",
    contactMe: "تواصل معي",
    
    // About
    aboutTitle: "نبذة عني",
    aboutDesc1: "مهندس حاسب آلي مع خلفية قوية في هندسة البرمجيات وأنظمة Backend",
    aboutDesc2: "متخصص في Laravel و Node.js وبنية الخدمات المصغرة",
    aboutDesc3: "خبرة في التطبيقات الفورية وتكامل APIs والإشعارات وأتمتة الأنظمة",
    aboutDesc4: "شغوف بتحسين الأداء والكود النظيف ومبادئ SOLID",
    aboutDesc5: "متاح للعمل عن بُعد والمشاريع المستقلة",
    
    // Skills
    skillsTitle: "المهارات والتقنيات",
    languages: "لغات البرمجة",
    frameworks: "أطر العمل والمكتبات",
    architecture: "الهندسة المعمارية والمفاهيم",
    apis: "APIs والاتصالات",
    databases: "قواعد البيانات",
    cloud: "الخدمات السحابية",
    devops: "الخوادم و DevOps",
    tools: "أدوات التطوير",
    
    // Projects
    projectsTitle: "المشاريع المميزة",
    techUsed: "التقنيات المستخدمة",
    
    // Contact
    contactTitle: "تواصل معي",
    contactDesc: "دائماً منفتح للتعاون والتعلم والابتكار. لنبني شيئاً رائعاً معاً!",
    email: "البريد الإلكتروني",
    linkedin: "لينكد إن",
    twitter: "تويتر",
    
    // Resume Page
    resumeTitle: "السيرة الذاتية المهنية",
    printResume: "طباعة السيرة الذاتية",
    personalInfo: "المعلومات الشخصية",
    professionalSummary: "الملخص المهني",
    technicalSkills: "المهارات التقنية",
    experience: "الخبرة والمشاريع",
    education: "التعليم",
    
    // Fun Facts
    funFactsTitle: "حقائق سريعة",
    funFact1: "أحسّن باستمرار مهاراتي في بنية Backend وقابلية التوسع",
    funFact2: "أحب أتمتة سير العمل وبناء الأدوات الداخلية",
    funFact3: "أستكشف تكامل الذكاء الاصطناعي والتحليلات الفورية",
    funFact4: "دائماً منفتح للتعاون والتعلم والابتكار",
  },
};

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguage] = useState<Language>(() => {
    const stored = localStorage.getItem("language");
    return (stored as Language) || "en";
  });

  useEffect(() => {
    const root = document.documentElement;
    root.setAttribute("dir", language === "ar" ? "rtl" : "ltr");
    root.setAttribute("lang", language);
    localStorage.setItem("language", language);
  }, [language]);

  const toggleLanguage = () => {
    setLanguage((prev) => (prev === "en" ? "ar" : "en"));
  };

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations.en] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) throw new Error("useLanguage must be used within LanguageProvider");
  return context;
}
