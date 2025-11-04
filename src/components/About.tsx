import { useLanguage } from "@/contexts/LanguageContext";
import { Card } from "@/components/ui/card";
import { Code2, Rocket, Zap, Target, Users } from "lucide-react";

export function About() {
  const { t } = useLanguage();

  const highlights = [
    { icon: Code2, text: t("aboutDesc1") },
    { icon: Rocket, text: t("aboutDesc2") },
    { icon: Zap, text: t("aboutDesc3") },
    { icon: Target, text: t("aboutDesc4") },
    { icon: Users, text: t("aboutDesc5") },
  ];

  return (
    <section id="about" className="py-20">
      <div className="container">
        <h2 className="mb-12 text-center text-3xl font-bold md:text-4xl">
          {t("aboutTitle")}
        </h2>

        <div className="mx-auto max-w-4xl space-y-4">
          {highlights.map((item, index) => (
            <Card
              key={index}
              className="card-hover flex items-start gap-4 p-6"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                <item.icon className="h-6 w-6 text-primary" />
              </div>
              <p className="text-muted-foreground leading-relaxed">{item.text}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
