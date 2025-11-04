import { Download, Mail, Github, Linkedin, Twitter } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";

export function Hero() {
  const { t } = useLanguage();

  const handleDownloadCV = () => {
    // This will be linked to the uploaded CV file
    const link = document.createElement("a");
    link.href = "/cv.pdf"; // User will upload this
    link.download = "Hatem_Mohamed_CV.pdf";
    link.click();
  };

  return (
    <section className="relative overflow-hidden py-20 md:py-32">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary/20 via-background to-background" />
      
      <div className="container relative">
        <div className="mx-auto max-w-4xl text-center fade-in">
          <div className="mb-6 inline-block rounded-full bg-primary/10 px-4 py-2">
            <p className="text-sm font-medium text-primary">{t("heroLocation")}</p>
          </div>

          <h1 className="mb-4 text-4xl font-bold tracking-tight sm:text-6xl md:text-7xl">
            <span className="block">Hatem Mohamed</span>
            <span className="block text-gradient">{t("heroTitle")}</span>
          </h1>

          <p className="mx-auto mb-8 max-w-2xl text-lg text-muted-foreground md:text-xl">
            {t("heroSubtitle")}
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4">
            <Button size="lg" className="gap-2" onClick={handleDownloadCV}>
              <Download className="h-5 w-5" />
              {t("downloadCV")}
            </Button>
            <Button size="lg" variant="outline" className="gap-2" asChild>
              <a href="#contact">
                <Mail className="h-5 w-5" />
                {t("contactMe")}
              </a>
            </Button>
          </div>

          <div className="mt-12 flex items-center justify-center gap-4">
            <Button variant="ghost" size="icon" asChild>
              <a href="https://github.com/hatem-elsheref" target="_blank" rel="noopener noreferrer">
                <Github className="h-5 w-5" />
              </a>
            </Button>
            <Button variant="ghost" size="icon" asChild>
              <a href="https://linkedin.com/in/hatem-elsheref" target="_blank" rel="noopener noreferrer">
                <Linkedin className="h-5 w-5" />
              </a>
            </Button>
            <Button variant="ghost" size="icon" asChild>
              <a href="https://twitter.com/hatem_elshere" target="_blank" rel="noopener noreferrer">
                <Twitter className="h-5 w-5" />
              </a>
            </Button>
            <Button variant="ghost" size="icon" asChild>
              <a href="mailto:hatem_mohamed_elsheref@yahoo.com">
                <Mail className="h-5 w-5" />
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
