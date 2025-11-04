import { useResumeData } from "@/hooks/useResumeData";

export function ResumeArabic() {
  const resumeData = useResumeData();

  return (
    <div className="resume-content" dir="rtl">
      {/* Header */}
      <div className="mb-8 border-b-2 border-black pb-4 text-right">
        <h1 className="mb-2 text-4xl font-bold text-black">{resumeData.header.name}</h1>
        <p className="mb-4 text-xl font-semibold text-black">{resumeData.header.title}</p>
        <div className="grid gap-2 text-sm text-black sm:grid-cols-2">
          <div className="flex items-center justify-end gap-2">
            <span>{resumeData.header.location}</span>
          </div>
          <div className="flex items-center justify-end gap-2">
            <span>{resumeData.header.email}</span>
          </div>
          <div className="flex items-center justify-end gap-2">
            <span>{resumeData.header.linkedin}</span>
          </div>
          <div className="flex items-center justify-end gap-2">
            <span>{resumeData.header.github}</span>
          </div>
        </div>
      </div>

      {/* Professional Summary */}
      <section className="mb-8" dir="rtl">
        <div className="mb-4 border-b border-black pb-2 text-right">
          <h2 className="text-xl font-bold text-black uppercase">الملخص المهني</h2>
        </div>
        <p className="text-right leading-relaxed text-black text-sm">
          {resumeData.professionalSummary}
        </p>
      </section>

      {/* Technical Skills */}
      <section className="mb-8" dir="rtl">
        <div className="mb-4 border-b border-black pb-2 text-right">
          <h2 className="text-xl font-bold text-black uppercase">المهارات التقنية</h2>
        </div>
        <div className="space-y-2">
          <div className="p-2 text-right">
            <h3 className="mb-1 font-semibold text-black text-sm">{resumeData.technicalSkills.languages.title}:</h3>
            <p className="text-black text-sm">{resumeData.technicalSkills.languages.skills.join("، ")}</p>
          </div>
          <div className="p-2 text-right">
            <h3 className="mb-1 font-semibold text-black text-sm">{resumeData.technicalSkills.backendFrameworks.title}:</h3>
            <p className="text-black text-sm">{resumeData.technicalSkills.backendFrameworks.skills.join("، ")}</p>
          </div>
          <div className="p-2 text-right">
            <h3 className="mb-1 font-semibold text-black text-sm">{resumeData.technicalSkills.frontendFrameworks.title}:</h3>
            <p className="text-black text-sm">{resumeData.technicalSkills.frontendFrameworks.skills.join("، ")}</p>
          </div>
          <div className="p-2 text-right">
            <h3 className="mb-1 font-semibold text-black text-sm">{resumeData.technicalSkills.databases.title}:</h3>
            <p className="text-black text-sm">{resumeData.technicalSkills.databases.skills.join("، ")}</p>
          </div>
          <div className="p-2 text-right">
            <h3 className="mb-1 font-semibold text-black text-sm">{resumeData.technicalSkills.cloudDevops.title}:</h3>
            <p className="text-black text-sm">{resumeData.technicalSkills.cloudDevops.skills.join("، ")}</p>
          </div>
          <div className="p-2 text-right">
            <h3 className="mb-1 font-semibold text-black text-sm">{resumeData.technicalSkills.architecture.title}:</h3>
            <p className="text-black text-sm">
              {resumeData.technicalSkills.architecture.skills.join("، ")}
            </p>
          </div>
        </div>
      </section>

      {/* Experience & Projects */}
      <section className="mb-8" dir="rtl">
        <div className="mb-4 border-b border-black pb-2 text-right">
          <h2 className="text-xl font-bold text-black uppercase">المشاريع المميزة والخبرة</h2>
        </div>
        <div className="space-y-4">
          {resumeData.featuredProjects.map((project, index) => (
            <div key={index} className="border-r-2 border-black pr-4 pb-4 text-right">
              <div className="flex items-center justify-between mb-2">
                <h3 className="text-base font-bold text-black">
                  {project.title}
                </h3>
                <span className="text-xs font-semibold text-black">{project.year}</span>
              </div>
              <p className="mb-2 text-sm italic text-black">{project.subtitle}</p>
              <ul className="mb-2 list-inside space-y-1 text-sm text-black">
                {project.achievements.map((achievement, idx) => (
                  <li key={idx}>• {achievement}</li>
                ))}
              </ul>
              <p className="text-xs font-semibold text-black">
                التقنيات المستخدمة: {project.techStack}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Education */}
      <section className="mb-8" dir="rtl">
        <div className="mb-4 border-b border-black pb-2 text-right">
          <h2 className="text-xl font-bold text-black uppercase">التعليم</h2>
        </div>
        <div className="space-y-3">
          {resumeData.education.map((edu, index) => (
            <div key={index} className="pb-3 border-b border-gray-300 last:border-0 text-right">
              <div className="flex items-start justify-between mb-2">
                <div className="flex-1">
                  <h3 className="mb-1 text-base font-bold text-black">{edu.degree}</h3>
                  <p className="text-sm font-semibold text-black mb-1">{edu.institution}</p>
                  <div className="flex flex-wrap items-center justify-end gap-3 text-xs text-black mb-2">
                    <span>{edu.location}</span>
                    <span>•</span>
                    <span>{edu.period}</span>
                  </div>
                  <p className="text-sm text-black">{edu.details}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Key Strengths */}
      <section dir="rtl">
        <div className="mb-4 border-b border-black pb-2 text-right">
          <h2 className="text-xl font-bold text-black uppercase">الكفاءات الأساسية</h2>
        </div>
        <div className="grid gap-2 sm:grid-cols-2">
          {resumeData.coreCompetencies.map((competency, index) => (
            <div key={index} className="flex items-start justify-end gap-2 p-2 text-right">
              <p className="text-sm text-black">{competency}</p>
              <div className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-black" />
            </div>
          ))}
        </div>
      </section>

      {/* Certificates */}
      {resumeData.certificates && resumeData.certificates.length > 0 && (
        <section className="mb-8" dir="rtl">
          <div className="mb-4 border-b border-black pb-2 text-right">
            <h2 className="text-xl font-bold text-black uppercase">الشهادات والاعتمادات</h2>
          </div>
          <div className="space-y-2">
            {resumeData.certificates.map((cert, index) => (
              <div key={index} className="border-r-2 border-black pr-4 pb-2 text-right">
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <h3 className="text-base font-bold mb-1 text-black">
                      {cert.title}
                    </h3>
                    <p className="text-sm font-semibold text-black mb-1">
                      {cert.issuer}
                    </p>
                    {cert.credentialId && (
                      <p className="text-xs text-black mb-1">
                        رقم الشهادة: {cert.credentialId}
                      </p>
                    )}
                  </div>
                  <span className="text-xs font-semibold text-black ml-4">
                    {cert.date}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </section>
      )}
    </div>
  );
}
