import { useLanguage } from "@/contexts/LanguageContext";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Mail, Linkedin, Twitter, Github } from "lucide-react";

export function Contact() {
  const { t } = useLanguage();

  const contacts = [
    {
      icon: Mail,
      label: t("email"),
      value: "hatem_mohamed_elsheref@yahoo.com",
      href: "mailto:hatem_mohamed_elsheref@yahoo.com",
    },
    {
      icon: Linkedin,
      label: t("linkedin"),
      value: "hatem-elsheref",
      href: "https://linkedin.com/in/hatem-elsheref",
    },
    {
      icon: Twitter,
      label: t("twitter"),
      value: "@hatem_elshere",
      href: "https://twitter.com/hatem_elshere",
    },
    {
      icon: Github,
      label: "GitHub",
      value: "hatem-elsheref",
      href: "https://github.com/hatem-elsheref",
    },
  ];

  return (
    <section id="contact" className="bg-muted/50 py-20">
      <div className="container">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="mb-4 text-3xl font-bold md:text-4xl">
            {t("contactTitle")}
          </h2>
          <p className="mb-12 text-lg text-muted-foreground">
            {t("contactDesc")}
          </p>

          <div className="grid gap-4 sm:grid-cols-2">
            {contacts.map((contact, index) => (
              <Card
                key={index}
                className="card-hover p-6"
                style={{ animationDelay: `${index * 50}ms` }}
              >
                <Button
                  variant="ghost"
                  className="h-auto w-full flex-col gap-3 p-4"
                  asChild
                >
                  <a href={contact.href} target="_blank" rel="noopener noreferrer">
                    <contact.icon className="h-8 w-8 text-primary" />
                    <div className="text-center">
                      <p className="font-medium">{contact.label}</p>
                      <p className="text-sm text-muted-foreground">
                        {contact.value}
                      </p>
                    </div>
                  </a>
                </Button>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
