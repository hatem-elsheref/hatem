import { useMemo } from "react";
import portfolioData from "@/data/portfolio.json";
import { useLanguage } from "@/contexts/LanguageContext";

export function usePortfolioData() {
  const { language } = useLanguage();

  return useMemo(() => {
    const lang = language as "en" | "ar";
    
    return {
      profile: {
        ...portfolioData.profile,
        location: portfolioData.profile[`location${lang === "en" ? "En" : "Ar"}`],
      },
      professionalSummary: portfolioData.professionalSummary[lang],
      stats: {
        years: {
          value: portfolioData.stats.years.value,
          label: portfolioData.stats.years[`label${lang === "en" ? "En" : "Ar"}`],
          sublabel: portfolioData.stats.years[`sublabel${lang === "en" ? "En" : "Ar"}`],
        },
        projects: {
          value: portfolioData.stats.projects.value,
          label: portfolioData.stats.projects[`label${lang === "en" ? "En" : "Ar"}`],
          sublabel: portfolioData.stats.projects[`sublabel${lang === "en" ? "En" : "Ar"}`],
        },
        technologies: {
          value: portfolioData.stats.technologies.value,
          label: portfolioData.stats.technologies[`label${lang === "en" ? "En" : "Ar"}`],
          sublabel: portfolioData.stats.technologies[`sublabel${lang === "en" ? "En" : "Ar"}`],
        },
      },
      coreExpertise: portfolioData.coreExpertise.map((item) => ({
        icon: item.icon,
        title: item[`title${lang === "en" ? "En" : "Ar"}`],
        description: item[`description${lang === "en" ? "En" : "Ar"}`],
      })),
      featuredProjects: portfolioData.featuredProjects.map((project) => ({
        icon: project.icon,
        title: project[`title${lang === "en" ? "En" : "Ar"}`],
        description: project[`description${lang === "en" ? "En" : "Ar"}`],
        year: project.year,
        tech: project.tech,
      })),
      allProjects: portfolioData.allProjects?.map((project) => ({
        icon: project.icon,
        title: project[`title${lang === "en" ? "En" : "Ar"}`],
        description: project[`description${lang === "en" ? "En" : "Ar"}`],
        year: project.year,
        tech: project.tech,
      })) || [],
      timeline: {
        experience: portfolioData.timeline.experience.map((exp) => ({
          title: exp[`title${lang === "en" ? "En" : "Ar"}`],
          company: exp[`company${lang === "en" ? "En" : "Ar"}`],
          location: exp[`location${lang === "en" ? "En" : "Ar"}`],
          period: exp[`period${lang === "en" ? "En" : "Ar"}`],
          points: exp[`points${lang === "en" ? "En" : "Ar"}`] || [],
        })),
        education: portfolioData.timeline.education.map((edu) => ({
          title: edu[`title${lang === "en" ? "En" : "Ar"}`],
          institution: edu[`institution${lang === "en" ? "En" : "Ar"}`],
          location: edu[`location${lang === "en" ? "En" : "Ar"}`],
          period: edu[`period${lang === "en" ? "En" : "Ar"}`],
          description: edu[`description${lang === "en" ? "En" : "Ar"}`],
        })),
        header: {
          badge: portfolioData.timeline.header[`badge${lang === "en" ? "En" : "Ar"}`],
          title: portfolioData.timeline.header[`title${lang === "en" ? "En" : "Ar"}`],
          description: portfolioData.timeline.header[`description${lang === "en" ? "En" : "Ar"}`],
        },
      },
      contact: portfolioData.contact,
      footer: {
        description: portfolioData.footer[`description${lang === "en" ? "En" : "Ar"}`],
        copyrightName: portfolioData.footer[`copyrightName${lang === "en" ? "En" : "Ar"}`],
      },
      resume: portfolioData.resume,
    };
  }, [language]);
}

