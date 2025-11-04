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
    // In production with base path, we need to use the full path
    // In development, files from public folder are served from root
    const basePath = import.meta.env.BASE_URL || '/';
    const pdfPath = `${basePath}${portfolioData.resume.cvPath.replace(/^\//, '')}`;
    link.href = pdfPath;
    link.download = portfolioData.resume.cvFileName;
    link.target = '_blank';
    document.body.appendChild(link);
    link.click();
    // Clean up after a short delay
    setTimeout(() => {
      document.body.removeChild(link);
    }, 100);
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

          <h1 className="mb-4 text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl">
            <span className="block">{portfolioData.profile.name}</span>
            <span className="block text-gradient">{portfolioData.profile.title}</span>
          </h1>

          <p className="mx-auto mb-8 max-w-2xl text-base text-muted-foreground sm:text-lg md:text-xl px-4">
            {portfolioData.profile.subtitle}
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 px-4">
            <Button size="lg" className="gap-2 w-full sm:w-auto min-h-[44px]" onClick={handleDownloadCV}>
              <Download className="h-5 w-5" />
              {t("downloadCV")}
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="gap-2 w-full sm:w-auto min-h-[44px]"
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

          <div className="mt-12 flex items-center justify-center gap-3 sm:gap-4">
            {portfolioData.contact.socialLinks.map((link, index) => {
              const Icon = getIcon(link.icon);
              return (
                <Button key={index} variant="ghost" size="icon" className="h-11 w-11" asChild>
                  <a href={link.href} target="_blank" rel="noopener noreferrer" className="touch-manipulation">
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
