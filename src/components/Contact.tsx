import { useLanguage } from "@/contexts/LanguageContext";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Mail, Linkedin, Twitter, Github, MessageCircle, Send } from "lucide-react";
import { motion } from "framer-motion";

export function Contact() {
  const { t } = useLanguage();

  const contacts = [
    {
      icon: Mail,
      label: t("email"),
      value: "hatem_mohamed_elsheref@yahoo.com",
      href: "mailto:hatem_mohamed_elsheref@yahoo.com",
      color: "from-red-500/10 to-pink-500/10",
      iconColor: "text-red-500",
    },
    {
      icon: Linkedin,
      label: t("linkedin"),
      value: "hatem-elsheref",
      href: "https://linkedin.com/in/hatem-elsheref",
      color: "from-blue-500/10 to-cyan-500/10",
      iconColor: "text-blue-500",
    },
    {
      icon: Twitter,
      label: t("twitter"),
      value: "@hatem_elshere",
      href: "https://twitter.com/hatem_elshere",
      color: "from-sky-500/10 to-blue-500/10",
      iconColor: "text-sky-500",
    },
    {
      icon: Github,
      label: "GitHub",
      value: "hatem-elsheref",
      href: "https://github.com/hatem-elsheref",
      color: "from-gray-500/10 to-slate-500/10",
      iconColor: "text-gray-700 dark:text-gray-300",
    },
  ];

  return (
    <section id="contact" className="relative overflow-hidden bg-gradient-to-b from-muted/50 via-background to-background py-20">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-accent/5 rounded-full blur-3xl"></div>
      </div>

      <div className="container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-4xl text-center mb-12"
        >
          <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-1.5">
            <MessageCircle className="h-4 w-4 text-primary" />
            <span className="text-sm font-medium text-primary">Let's Connect</span>
          </div>
          <h2 className="mb-4 text-3xl font-bold md:text-4xl">
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              {t("contactTitle")}
            </span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {t("contactDesc")}
          </p>
        </motion.div>

        <div className="mx-auto max-w-4xl">
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {contacts.map((contact, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="group relative h-full overflow-hidden border-2 border-border/50 bg-card transition-all duration-300 hover:border-primary/50 hover:shadow-xl hover:-translate-y-1">
                  {/* Gradient overlay */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${contact.color} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}></div>
                  
                  <Button
                    variant="ghost"
                    className="h-auto w-full flex-col gap-4 p-6 relative"
                    asChild
                  >
                    <a href={contact.href} target="_blank" rel="noopener noreferrer">
                      <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br from-primary/10 to-accent/10 border border-primary/20 shadow-lg group-hover:scale-110 group-hover:from-primary/20 group-hover:to-accent/20 transition-all duration-300">
                        <contact.icon className={`h-7 w-7 ${contact.iconColor} transition-colors`} />
                      </div>
                      <div className="text-center">
                        <p className="font-semibold text-foreground group-hover:text-primary transition-colors">
                          {contact.label}
                        </p>
                        <p className="text-sm text-muted-foreground mt-1 break-all">
                          {contact.value}
                        </p>
                      </div>
                      <Send className="h-4 w-4 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity duration-300 absolute top-3 right-3" />
                    </a>
                  </Button>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
