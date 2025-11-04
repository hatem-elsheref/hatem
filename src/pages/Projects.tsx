import { useLanguage } from "@/contexts/LanguageContext";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Footer } from "@/components/Footer";
import { WhatsAppFloat } from "@/components/WhatsAppFloat";
import { usePortfolioData } from "@/hooks/usePortfolioData";
import * as LucideIcons from "lucide-react";

export default function Projects() {
  const { t, language } = useLanguage();
  const portfolioData = usePortfolioData();

  const getIcon = (iconName: string) => {
    const Icon = (LucideIcons as any)[iconName];
    return Icon || LucideIcons.Code;
  };

  const allProjects = portfolioData.allProjects.map((project) => ({
    icon: getIcon(project.icon),
    title: project.title,
    description: project.description,
    tech: project.tech,
  }));

  return (
    <div className="min-h-screen bg-background">
      <section className="py-20">
        <div className="container">
          <div className="mb-12 text-center">
            <h1 className="mb-4 text-4xl font-bold md:text-5xl">
              {language === "en" ? "All Projects" : "جميع المشاريع"}
            </h1>
            <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
              {language === "en"
                ? "Explore my portfolio of full-stack applications, microservices, and backend systems built with modern technologies."
                : "استكشف محفظتي من تطبيقات Full Stack والخدمات المصغرة وأنظمة Backend المبنية بتقنيات حديثة."}
            </p>
          </div>

          <div className="mx-auto max-w-7xl px-4 sm:px-6">
            <div className="grid gap-4 sm:gap-6 md:grid-cols-2 lg:grid-cols-3">
              {allProjects.map((project, index) => (
                <Card
                  key={index}
                  className="card-hover flex flex-col"
                  style={{ animationDelay: `${index * 50}ms` }}
                >
                  <CardHeader>
                    <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br from-primary to-accent">
                      <project.icon className="h-7 w-7 text-white" />
                    </div>
                    <CardTitle className="text-xl">{project.title}</CardTitle>
                    <CardDescription className="text-base leading-relaxed">
                      {project.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="mt-auto">
                    <div className="space-y-2">
                      <p className="text-sm font-semibold text-muted-foreground">
                        {t("techUsed")}:
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {project.tech.map((tech) => (
                          <Badge key={tech} variant="secondary" className="text-xs">
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>
      <Footer />
      <WhatsAppFloat />
    </div>
  );
}
