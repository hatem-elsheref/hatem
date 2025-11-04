import { useLanguage } from "@/contexts/LanguageContext";
import { motion } from "framer-motion";
import { Briefcase, GraduationCap, Calendar, MapPin } from "lucide-react";
import { usePortfolioData } from "@/hooks/usePortfolioData";

export function Timeline() {
  const { t, language } = useLanguage();
  const portfolioData = usePortfolioData();

  const experiences = portfolioData.timeline.experience;
  const education = portfolioData.timeline.education;

  return (
    <section id="timeline" className="relative overflow-hidden bg-gradient-to-b from-background via-muted/30 to-background py-20">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-accent/5 rounded-full blur-3xl"></div>
      </div>

      <div className="container relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12 text-center"
        >
          <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-1.5">
            <Calendar className="h-4 w-4 text-primary" />
            <span className="text-sm font-medium text-primary">{portfolioData.timeline.header.badge}</span>
          </div>
          <h2 className="mb-4 text-3xl font-bold md:text-4xl">
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              {portfolioData.timeline.header.title}
            </span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            {portfolioData.timeline.header.description}
          </p>
        </motion.div>

        {/* Two Column Timeline */}
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-8 lg:grid-cols-2">
            {/* Education Timeline - Left Column */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <div className="mb-6 flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-accent/10 border border-accent/20">
                  <GraduationCap className="h-5 w-5 text-accent" />
                </div>
                <h3 className="text-xl font-bold text-foreground">
                  {language === "en" ? "Education" : "التعليم"}
                </h3>
              </div>

              <div className="relative pl-8">
                {/* Timeline line */}
                <div className="absolute left-3 top-0 bottom-0 w-0.5 bg-gradient-to-b from-accent via-accent/50 to-accent"></div>

                {/* Education items */}
                <div className="space-y-6">
                  {education.map((item, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                      className="relative"
                    >
                      {/* Timeline dot */}
                      <div className="absolute left-0 top-2 flex h-6 w-6 items-center justify-center -translate-x-[13px]">
                        <div className="h-4 w-4 rounded-full border-4 border-background bg-accent"></div>
                      </div>

                      {/* Content card */}
                      <div className="group relative overflow-hidden rounded-xl border border-border/50 bg-card p-5 transition-all duration-300 hover:border-accent/50 hover:shadow-lg ml-4">
                        <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                        <div className="relative">
                          <h4 className="mb-2 text-base font-bold text-foreground group-hover:text-accent transition-colors">
                            {item.title}
                          </h4>
                          <p className="mb-2 text-sm font-semibold text-accent">
                            {item.institution}
                          </p>

                          <div className="mb-3 flex flex-wrap items-center gap-3 text-xs text-muted-foreground">
                            <div className="flex items-center gap-1">
                              <MapPin className="h-3 w-3" />
                              <span>{item.location}</span>
                            </div>
                            <div className="flex items-center gap-1">
                              <Calendar className="h-3 w-3" />
                              <span>{item.period}</span>
                            </div>
                          </div>

                          <p className="text-xs leading-relaxed text-muted-foreground">
                            {item.description}
                          </p>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Work Experience Timeline - Right Column */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <div className="mb-6 flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 border border-primary/20">
                  <Briefcase className="h-5 w-5 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-foreground">
                  {language === "en" ? "Work Experience" : "الخبرة العملية"}
                </h3>
              </div>

              <div className="relative pl-8">
                {/* Timeline line */}
                <div className="absolute left-3 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-primary/50 to-primary"></div>

                {/* Experience items */}
                <div className="space-y-6">
                  {experiences.map((item, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                      className="relative"
                    >
                      {/* Timeline dot */}
                      <div className="absolute left-0 top-2 flex h-6 w-6 items-center justify-center -translate-x-[13px]">
                        <div className="h-4 w-4 rounded-full border-4 border-background bg-primary"></div>
                      </div>

                      {/* Content card */}
                      <div className="group relative overflow-hidden rounded-xl border border-border/50 bg-card p-5 transition-all duration-300 hover:border-primary/50 hover:shadow-lg ml-4">
                        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                        <div className="relative">
                          <h4 className="mb-2 text-base font-bold text-foreground group-hover:text-primary transition-colors">
                            {item.title}
                          </h4>
                          <p className="mb-2 text-sm font-semibold text-primary">
                            {item.company}
                          </p>

                          <div className="mb-3 flex flex-wrap items-center gap-3 text-xs text-muted-foreground">
                            <div className="flex items-center gap-1">
                              <MapPin className="h-3 w-3" />
                              <span>{item.location}</span>
                            </div>
                            <div className="flex items-center gap-1">
                              <Calendar className="h-3 w-3" />
                              <span>{item.period}</span>
                            </div>
                          </div>

                          {item.points && item.points.length > 0 ? (
                            <ul className="list-none space-y-1.5 text-xs leading-relaxed text-muted-foreground">
                              {item.points.map((point: string, pointIndex: number) => (
                                <li key={pointIndex} className="flex items-start gap-2">
                                  <span className="text-primary mt-1 shrink-0 font-bold">•</span>
                                  <span>{point}</span>
                                </li>
                              ))}
                            </ul>
                          ) : null}
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
