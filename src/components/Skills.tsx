import { useLanguage } from "@/contexts/LanguageContext";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";

export function Skills() {
  const { t } = useLanguage();

  const skillCategories = [
    {
      title: t("languages"),
      skills: ["PHP", "JavaScript", "HTML5", "CSS3", "SQL", "TypeScript"],
    },
    {
      title: t("frameworks"),
      skills: ["Laravel", "Lumen", "Node.js", "Express.js", "Vue.js", "Bootstrap", "Tailwind CSS", "React"],
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
      skills: ["MySQL", "SQLite", "MongoDB", "Redis", "PostgreSQL"],
    },
    {
      title: t("cloud"),
      skills: ["AWS S3", "AWS SES", "AWS SNS", "FCM", "RabbitMQ", "WebSockets"],
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
          <div className="grid gap-6 md:grid-cols-2">
            {skillCategories.map((category, index) => (
              <Card
                key={index}
                className="card-hover p-6"
                style={{ animationDelay: `${index * 50}ms` }}
              >
                <h3 className="mb-4 text-xl font-semibold text-primary">
                  {category.title}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <Badge
                      key={skill}
                      variant="secondary"
                      className="px-3 py-1 text-sm"
                    >
                      {skill}
                    </Badge>
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
