import { useLanguage } from "@/contexts/LanguageContext";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { MessageSquare, Truck, Megaphone, Wand2 } from "lucide-react";

export function Projects() {
  const { t, language } = useLanguage();

  const projects = [
    {
      icon: MessageSquare,
      title: language === "en" ? "Smart Chat & Ticketing System" : "نظام الدردشة والتذاكر الذكي",
      description: language === "en" 
        ? "Real-time Laravel chat widget with multi-admin support and auto-reply knowledge base"
        : "أداة دردشة Laravel في الوقت الفعلي مع دعم متعدد للمسؤولين وقاعدة معرفة للردود التلقائية",
      tech: ["Laravel", "jQuery", "Redis", "Laravel Echo", "WebSockets"],
    },
    {
      icon: Truck,
      title: language === "en" ? "Logistics Integration Service" : "خدمة التكامل اللوجستي",
      description: language === "en"
        ? "Receives, validates, and stores webhooks from multiple sales channels like Zid"
        : "يستقبل ويتحقق ويخزن webhooks من قنوات المبيعات المتعددة مثل Zid",
      tech: ["Laravel", "Queue", "Redis", "MySQL", "API Integration"],
    },
    {
      icon: Megaphone,
      title: language === "en" ? "SaaS Marketing Engine" : "محرك التسويق SaaS",
      description: language === "en"
        ? "Multi-channel campaign system supporting email, SMS, push, and WhatsApp"
        : "نظام حملات متعدد القنوات يدعم البريد الإلكتروني و SMS والإشعارات و WhatsApp",
      tech: ["Laravel", "Node.js", "FCM", "Meta API", "AWS SES"],
    },
    {
      icon: Wand2,
      title: language === "en" ? "API Automation Toolkit" : "مجموعة أتمتة API",
      description: language === "en"
        ? "Auto-generates CRUD APIs, routes, docs, and relationships based on description"
        : "يولد تلقائياً CRUD APIs والمسارات والوثائق والعلاقات بناءً على الوصف",
      tech: ["Fastify", "Redis", "OpenAI API", "Node.js", "TypeScript"],
    },
  ];

  return (
    <section id="projects" className="py-20">
      <div className="container">
        <h2 className="mb-12 text-center text-3xl font-bold md:text-4xl">
          {t("projectsTitle")}
        </h2>

        <div className="mx-auto max-w-6xl">
          <div className="grid gap-6 md:grid-cols-2">
            {projects.map((project, index) => (
              <Card
                key={index}
                className="card-hover"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardHeader>
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                    <project.icon className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className="text-xl">{project.title}</CardTitle>
                  <CardDescription className="text-base">
                    {project.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <p className="text-sm font-medium text-muted-foreground">
                      {t("techUsed")}:
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((tech) => (
                        <Badge key={tech} variant="outline">
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
  );
}
