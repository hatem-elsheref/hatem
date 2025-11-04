import { useLanguage } from "@/contexts/LanguageContext";
import { SkillIcon } from "./SkillIcon";
import { motion } from "framer-motion";

export function Skills() {
  const { t } = useLanguage();

  const skillCategories = [
    {
      title: t("languages"),
      skills: ["PHP", "JavaScript", "HTML5", "CSS3", "SQL"],
      icon: "💻",
      description: "Programming languages I use daily",
    },
    {
      title: t("frameworks"),
      skills: ["Laravel", "Lumen", "Node.js", "Express.js", "Vue.js", "Bootstrap", "Tailwind CSS"],
      icon: "⚡",
      description: "Frameworks and libraries for building applications",
    },
    {
      title: t("architecture"),
      skills: ["MVC", "Microservices", "SOLID Principles", "Design Patterns", "OOP", "Data Structures & Algorithms"],
      icon: "🏗️",
      description: "Architecture patterns and design principles",
    },
    {
      title: t("apis"),
      skills: ["RESTful API", "WebSockets", "GraphQL", "Swagger", "Postman"],
      icon: "🔌",
      description: "API development and integration tools",
    },
    {
      title: t("databases"),
      skills: ["MySQL", "MongoDB", "Redis", "SQLite"],
      icon: "🗄️",
      description: "Database technologies I work with",
    },
    {
      title: t("cloud"),
      skills: ["AWS S3", "AWS SES", "AWS SNS", "FCM", "RabbitMQ"],
      icon: "☁️",
      description: "Cloud services and messaging systems",
    },
    {
      title: t("devops"),
      skills: ["Ubuntu", "Linux", "Nginx", "Apache", "Docker", "GitHub Actions", "CI/CD"],
      icon: "🚀",
      description: "DevOps tools and server management",
    },
    {
      title: t("tools"),
      skills: ["VS Code", "Sublime Text", "Git", "GitHub", "Composer", "npm"],
      icon: "🛠️",
      description: "Development tools I use",
    },
  ];

  return (
    <section id="skills" className="relative overflow-hidden bg-gradient-to-b from-background via-muted/30 to-background py-20">
      {/* Subtle background gradient */}
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
          <h2 className="mb-4 text-4xl font-bold md:text-5xl">
            <span className="bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent animate-gradient">
              {t("skillsTitle")}
            </span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A comprehensive toolkit of modern technologies I use to build exceptional digital experiences
          </p>
        </motion.div>

        {/* Skills Grid - Simple and Clean */}
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="grid gap-4 sm:gap-6 md:grid-cols-2 lg:grid-cols-4">
            {skillCategories.map((category, categoryIndex) => (
              <motion.div
                key={categoryIndex}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: categoryIndex * 0.1 }}
                className="group relative rounded-2xl border border-border/50 bg-card p-6 transition-all duration-300 hover:border-primary/50 hover:shadow-lg hover:-translate-y-1"
              >
                {/* Category Header */}
                <div className="mb-4">
                  <div className="mb-3 flex items-center gap-3">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-gradient-to-br from-primary/10 to-accent/10 border border-primary/20 text-xl shadow-sm group-hover:scale-110 transition-transform duration-300">
                      {category.icon}
                    </div>
                    <h3 className="text-sm font-bold text-foreground group-hover:text-primary transition-colors leading-tight flex-1 min-w-0">
                      <span className="break-words">{category.title}</span>
                    </h3>
                  </div>
                  <p className="text-xs text-muted-foreground leading-relaxed line-clamp-2">{category.description}</p>
                </div>

                {/* Skills List - Simple and Clean */}
                <div className="space-y-2">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.div
                      key={skill}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: (categoryIndex * 0.1) + (skillIndex * 0.05) }}
                      className="flex items-center gap-3 rounded-lg bg-muted/30 p-2.5 hover:bg-muted/50 transition-colors group/skill overflow-hidden"
                    >
                      <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-background border border-border/50 group-hover/skill:border-primary/30 transition-colors flex-shrink-0">
                        <SkillIcon name={skill} className="h-5 w-5" />
                      </div>
                      <span className="text-sm font-medium text-foreground group-hover/skill:text-primary transition-colors whitespace-nowrap overflow-hidden text-ellipsis min-w-0 flex-1">
                        {skill}
                      </span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
