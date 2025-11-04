import { Download, Mail, Github, Linkedin, Twitter } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";
import { usePortfolioData } from "@/hooks/usePortfolioData";
import * as LucideIcons from "lucide-react";

export function Hero() {
  const { t } = useLanguage();
  const portfolioData = usePortfolioData();

  const handleDownloadCV = () => {
    const link = document.createElement("a");
    link.href = portfolioData.resume.cvPath;
    link.download = portfolioData.resume.cvFileName;
    link.click();
  };

  const getIcon = (iconName: string) => {
    const Icon = (LucideIcons as any)[iconName];
    return Icon || Mail;
  };

  return (
    <section className="relative overflow-hidden py-20 md:py-32">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary/20 via-background to-background" />
      
      <div className="container relative">
        <div className="mx-auto max-w-4xl text-center fade-in">
          <div className="mb-6 inline-block rounded-full bg-primary/10 px-4 py-2">
            <p className="text-sm font-medium text-primary">{portfolioData.profile.location}</p>
          </div>

          <h1 className="mb-4 text-4xl font-bold tracking-tight sm:text-6xl md:text-7xl">
            <span className="block">{portfolioData.profile.name}</span>
            <span className="block text-gradient">{portfolioData.profile.title}</span>
          </h1>

          <p className="mx-auto mb-8 max-w-2xl text-lg text-muted-foreground md:text-xl">
            {portfolioData.profile.subtitle}
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4">
            <Button size="lg" className="gap-2" onClick={handleDownloadCV}>
              <Download className="h-5 w-5" />
              {t("downloadCV")}
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="gap-2"
              onClick={() => {
                const footer = document.getElementById("contact");
                if (footer) {
                  footer.scrollIntoView({ behavior: "smooth" });
                } else {
                  window.location.href = `mailto:${portfolioData.contact.email}`;
                }
              }}
            >
              <Mail className="h-5 w-5" />
              {t("contactMe")}
            </Button>
          </div>

          <div className="mt-12 flex items-center justify-center gap-4">
            {portfolioData.contact.socialLinks.map((link, index) => {
              const Icon = getIcon(link.icon);
              return (
                <Button key={index} variant="ghost" size="icon" asChild>
                  <a href={link.href} target="_blank" rel="noopener noreferrer">
                    <Icon className="h-5 w-5" />
                  </a>
                </Button>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
