import { useLanguage } from "@/contexts/LanguageContext";
import { Card } from "@/components/ui/card";
import { SkillIcon } from "./SkillIcon";

export function Skills() {
  const { t } = useLanguage();

  const skillCategories = [
    {
      title: t("languages"),
      skills: ["PHP", "JavaScript", "TypeScript", "HTML5", "CSS3", "SQL"],
    },
    {
      title: t("frameworks"),
      skills: ["Laravel", "Lumen", "Node.js", "Express.js", "Vue.js", "React", "Bootstrap", "Tailwind CSS"],
    },
    {
      title: t("architecture"),
      skills: ["MVC", "Microservices", "SOLID Principles", "Design Patterns", "OOP", "Data Structures & Algorithms"],
    },
    {
      title: t("apis"),
      skills: ["RESTful API", "WebSockets", "GraphQL", "Swagger", "Postman"],
    },
    {
      title: t("databases"),
      skills: ["MySQL", "PostgreSQL", "MongoDB", "Redis", "SQLite"],
    },
    {
      title: t("cloud"),
      skills: ["AWS S3", "AWS SES", "AWS SNS", "FCM", "RabbitMQ"],
    },
    {
      title: t("devops"),
      skills: ["Ubuntu", "Linux", "Nginx", "Apache", "Docker", "GitHub Actions", "CI/CD"],
    },
    {
      title: t("tools"),
      skills: ["VS Code", "Sublime Text", "Git", "GitHub", "Composer", "npm", "Webpack", "Vite"],
    },
  ];

  return (
    <section id="skills" className="bg-muted/50 py-20">
      <div className="container">
        <h2 className="mb-12 text-center text-3xl font-bold md:text-4xl">
          {t("skillsTitle")}
        </h2>

        <div className="mx-auto max-w-6xl">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {skillCategories.map((category, index) => (
              <Card
                key={index}
                className="card-hover p-6"
                style={{ animationDelay: `${index * 50}ms` }}
              >
                <h3 className="mb-4 text-lg font-semibold text-primary">
                  {category.title}
                </h3>
                <div className="space-y-3">
                  {category.skills.map((skill) => (
                    <div
                      key={skill}
                      className="flex items-center gap-3 rounded-lg bg-background/60 p-2 transition-colors hover:bg-background"
                    >
                      <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-md bg-primary/10">
                        <SkillIcon name={skill} className="h-4 w-4 text-primary" />
                      </div>
                      <span className="text-sm font-medium">{skill}</span>
                    </div>
                  ))}
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
