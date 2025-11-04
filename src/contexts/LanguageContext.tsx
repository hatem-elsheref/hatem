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
    about: "About",
    skills: "Skills",
    projects: "Projects",
    resume: "Resume",
    contact: "Contact",
    timeline: "Timeline",
    downloadCV: "Download CV",
    
    // Hero
    heroTitle: "Full Stack Developer",
    heroSubtitle: "Building scalable, high-performance applications with Laravel, Node.js, and Vue.js",
    heroLocation: "Based in Egypt 🇪🇬",
    viewProjects: "View Projects",
    contactMe: "Contact Me",
    
    // About
    aboutTitle: "About Me",
    aboutSummary: "Software Engineer and Full Stack Web Developer with 3+ years of experience, specializing in PHP, Laravel, and MySQL. Proficient in object-oriented programming (OOP), MVC, and HMVC architectures, and skilled in applying SOLID principles and design patterns to develop scalable and maintainable backend systems. Experienced in building dynamic web applications, integrating third-party APIs, and designing efficient database structures. Adept at delivering end-to-end solutions for diverse projects, ensuring high performance and robust functionality. Strong time management and problem-solving skills, able to prioritize tasks efficiently and overcome complex technical challenges.",
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
    allProjects: "View All Projects",
    techUsed: "Technologies Used",
    projectDetails: "Project Details",
    
    // Contact
    contactTitle: "Get In Touch",
    contactDesc: "I'm always open to collaboration, learning, and innovation. Let's build something amazing together!",
    email: "Email",
    linkedin: "LinkedIn",
    twitter: "Twitter",
    
    // Timeline
    timelineTitle: "Experience & Education",
    timelineDesc: "My professional journey and educational background",
    
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
    about: "نبذة",
    skills: "المهارات",
    projects: "المشاريع",
    resume: "السيرة الذاتية",
    contact: "تواصل",
    timeline: "الخط الزمني",
    downloadCV: "تحميل السيرة الذاتية",
    
    // Hero
    heroTitle: "مطور Full Stack",
    heroSubtitle: "بناء تطبيقات قابلة للتوسع وعالية الأداء باستخدام Laravel و Node.js و Vue.js",
    heroLocation: "مقره في مصر 🇪🇬",
    viewProjects: "عرض المشاريع",
    contactMe: "تواصل معي",
    
    // About
    aboutTitle: "نبذة عني",
    aboutSummary: "مهندس برمجيات ومطور ويب Full Stack مع أكثر من 3 سنوات من الخبرة، متخصص في PHP و Laravel و MySQL. متمكن من البرمجة الكائنية (OOP) وبنى MVC و HMVC، وماهر في تطبيق مبادئ SOLID وأنماط التصميم لتطوير أنظمة Backend قابلة للتوسع والصيانة. خبرة في بناء تطبيقات الويب الديناميكية وتكامل APIs الخارجية وتصميم هياكل قواعد البيانات الفعالة. ماهر في تقديم حلول شاملة لمشاريع متنوعة، ضماناً للأداء العالي والوظائف القوية. مهارات قوية في إدارة الوقت وحل المشاكل، قادر على ترتيب الأولويات بكفاءة والتغلب على التحديات التقنية المعقدة.",
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
    allProjects: "عرض جميع المشاريع",
    techUsed: "التقنيات المستخدمة",
    projectDetails: "تفاصيل المشروع",
    
    // Contact
    contactTitle: "تواصل معي",
    contactDesc: "دائماً منفتح للتعاون والتعلم والابتكار. لنبني شيئاً رائعاً معاً!",
    email: "البريد الإلكتروني",
    linkedin: "لينكد إن",
    twitter: "تويتر",
    
    // Timeline
    timelineTitle: "الخبرة والتعليم",
    timelineDesc: "رحلتي المهنية والخلفية التعليمية",
    
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
  const [language, setLanguage] = useState<Language>("en");

  useEffect(() => {
    // Force English language and LTR direction
    const root = document.documentElement;
    root.setAttribute("dir", "ltr");
    root.setAttribute("lang", "en");
    localStorage.setItem("language", "en");
  }, []);

  const toggleLanguage = () => {
    // Disabled - language locked to English
    // setLanguage((prev) => (prev === "en" ? "ar" : "en"));
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
