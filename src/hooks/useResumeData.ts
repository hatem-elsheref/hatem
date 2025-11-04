import { useMemo } from "react";
import resumeData from "@/data/resume.json";
import { useLanguage } from "@/contexts/LanguageContext";

export function useResumeData() {
  const { language } = useLanguage();

  return useMemo(() => {
    const lang = language as "en" | "ar";
    
    return {
      header: {
        ...resumeData.header,
        title: resumeData.header[`title${lang === "en" ? "En" : "Ar"}`],
        location: resumeData.header[`location${lang === "en" ? "En" : "Ar"}`],
      },
      professionalSummary: resumeData.professionalSummary[lang],
      technicalSkills: {
        languages: {
          title: resumeData.technicalSkills.languages[lang],
          skills: resumeData.technicalSkills.languages.skills,
        },
        backendFrameworks: {
          title: resumeData.technicalSkills.backendFrameworks[lang],
          skills: resumeData.technicalSkills.backendFrameworks.skills,
        },
        frontendFrameworks: {
          title: resumeData.technicalSkills.frontendFrameworks[lang],
          skills: resumeData.technicalSkills.frontendFrameworks.skills,
        },
        databases: {
          title: resumeData.technicalSkills.databases[lang],
          skills: resumeData.technicalSkills.databases.skills,
        },
        cloudDevops: {
          title: resumeData.technicalSkills.cloudDevops[lang],
          skills: resumeData.technicalSkills.cloudDevops.skills,
        },
        architecture: {
          title: resumeData.technicalSkills.architecture[lang],
          skills: resumeData.technicalSkills.architecture.skills,
        },
      },
      featuredProjects: resumeData.featuredProjects.map((project) => ({
        title: project[`title${lang === "en" ? "En" : "Ar"}`],
        subtitle: project[`subtitle${lang === "en" ? "En" : "Ar"}`],
        year: project.year,
        techStack: project.techStack,
        achievements: project.achievements.map((achievement) => achievement[lang]),
      })),
      education: resumeData.education?.map((edu) => ({
        degree: edu[`degree${lang === "en" ? "En" : "Ar"}`],
        institution: edu[`institution${lang === "en" ? "En" : "Ar"}`],
        location: edu[`location${lang === "en" ? "En" : "Ar"}`],
        period: edu[`period${lang === "en" ? "En" : "Ar"}`],
        details: edu[`details${lang === "en" ? "En" : "Ar"}`],
      })) || [],
      coreCompetencies: resumeData.coreCompetencies.map((comp) => comp[lang]),
      certificates: resumeData.certificates?.map((cert) => ({
        title: cert[`title${lang === "en" ? "En" : "Ar"}`],
        issuer: cert[`issuer${lang === "en" ? "En" : "Ar"}`],
        date: cert[`date${lang === "en" ? "En" : "Ar"}`],
        credentialId: cert.credentialId,
        credentialUrl: cert.credentialUrl,
      })) || [],
    };
  }, [language]);
}

