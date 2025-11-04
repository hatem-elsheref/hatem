import { useLanguage } from "@/contexts/LanguageContext";
import { motion } from "framer-motion";
import { Code2, Rocket, Zap, Target, Briefcase } from "lucide-react";
import { usePortfolioData } from "@/hooks/usePortfolioData";
import * as LucideIcons from "lucide-react";

export function About() {
  const { t, language } = useLanguage();
  const portfolioData = usePortfolioData();

  const stats = [
    portfolioData.stats.years,
    portfolioData.stats.projects,
    portfolioData.stats.technologies,
  ];

  const getIcon = (iconName: string) => {
    const Icon = (LucideIcons as any)[iconName];
    return Icon || Code2;
  };

  const expertise = portfolioData.coreExpertise.map((item) => ({
    icon: getIcon(item.icon),
    title: item.title,
    description: item.description,
  }));

  return (
    <section id="about" className="relative py-24 bg-gradient-to-b from-background via-background to-muted/30">
      <div className="container">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
              {t("aboutTitle")}
            </span>
          </h2>
        </motion.div>

        <div className="max-w-6xl mx-auto">
          {/* Professional Summary - Separate Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-8 px-4 sm:px-0"
          >
            <div className="bg-card rounded-2xl shadow-lg border border-border p-6 sm:p-8 md:p-10">
              <div className="flex items-start gap-4 mb-6">
                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-primary">
                  <Briefcase className="h-7 w-7 text-white" />
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-foreground mb-2">
                    {language === "en" ? "Professional Summary" : "الملخص المهني"}
                  </h3>
                  <div className="h-1 w-16 bg-primary rounded-full"></div>
                </div>
              </div>
              <p className="text-base md:text-lg leading-relaxed text-muted-foreground">
                {portfolioData.professionalSummary}
              </p>
            </div>
          </motion.div>

          {/* Stats - Separate Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 mb-8 px-4 sm:px-0">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
                className="bg-card rounded-xl shadow-lg border border-border p-8 text-center hover:border-primary/50 hover:shadow-xl transition-all duration-300"
              >
                <div className="text-5xl md:text-6xl font-bold text-primary mb-2">
                  {stat.value}
                </div>
                <div className="text-lg font-semibold text-foreground mb-1">
                  {stat.label}
                </div>
                <div className="text-sm text-muted-foreground">
                  {stat.sublabel}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Expertise - Separate Cards */}
          <div>
            <h3 className="text-2xl font-bold text-center text-foreground mb-8">
              {language === "en" ? "Core Expertise" : "الخبرات الأساسية"}
            </h3>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
              {expertise.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.5 + index * 0.1 }}
                  className="bg-card rounded-xl border border-border/50 p-6 hover:border-primary/50 hover:shadow-lg transition-all duration-300"
                >
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                    <item.icon className="h-6 w-6 text-primary" />
                  </div>
                  <h4 className="text-base font-bold text-foreground mb-3">
                    {item.title}
                  </h4>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {item.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
