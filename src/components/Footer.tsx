import { useLanguage } from "@/contexts/LanguageContext";
import { Heart, Mail, Linkedin, Twitter, Github } from "lucide-react";
import { Link } from "react-router-dom";
import { usePortfolioData } from "@/hooks/usePortfolioData";
import * as LucideIcons from "lucide-react";

export function Footer() {
  const { language, t } = useLanguage();
  const portfolioData = usePortfolioData();
  const year = new Date().getFullYear();

  const getIcon = (iconName: string) => {
    const Icon = (LucideIcons as any)[iconName];
    return Icon || Mail;
  };

  const socialLinks = portfolioData.contact.socialLinks.map((link) => ({
    icon: getIcon(link.icon),
    label: link.label,
    href: link.href,
  }));

  return (
    <footer id="contact" className="no-print border-t bg-muted/30 py-12">
      <div className="container">
        <div className="grid gap-8 md:grid-cols-3 mb-8">
          {/* About */}
          <div>
            <h3 className="mb-4 text-lg font-bold text-foreground">
              {language === "en" ? "About" : "نبذة"}
            </h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              {portfolioData.footer.description}
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="mb-4 text-lg font-bold text-foreground">
              {language === "en" ? "Quick Links" : "روابط سريعة"}
            </h3>
            <nav className="flex flex-col gap-2">
              <Link
                to="/"
                className="text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                {t("home")}
              </Link>
              <a
                href="#about"
                className="text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                {t("about")}
              </a>
              <a
                href="#skills"
                className="text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                {t("skills")}
              </a>
              <a
                href="#projects"
                className="text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                {t("projects")}
              </a>
            </nav>
          </div>

          {/* Contact */}
          <div>
            <h3 className="mb-4 text-lg font-bold text-foreground">
              {t("contactTitle")}
            </h3>
            <div className="flex flex-col gap-3">
              <a
                href={`mailto:${portfolioData.contact.email}`}
                className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                <Mail className="h-4 w-4" />
                <span>{portfolioData.contact.email}</span>
              </a>
              <div className="flex items-center gap-3">
                {socialLinks.map((link, index) => (
                  <a
                    key={index}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex h-9 w-9 items-center justify-center rounded-lg border border-border/50 bg-background hover:border-primary/50 hover:bg-primary/5 transition-all duration-300"
                    aria-label={link.label}
                  >
                    <link.icon className="h-4 w-4 text-muted-foreground hover:text-primary transition-colors" />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t pt-8 flex flex-col items-center justify-center gap-2 text-center">
          <p className="flex items-center gap-2 text-sm text-muted-foreground">
            {language === "en" ? (
              <>
                Built with <Heart className="h-4 w-4 fill-primary text-primary" /> by {portfolioData.footer.copyrightName}
              </>
            ) : (
              <>
                صُنع بـ <Heart className="h-4 w-4 fill-primary text-primary" /> بواسطة {portfolioData.footer.copyrightName}
              </>
            )}
          </p>
          <p className="text-xs text-muted-foreground">
            © {year} {language === "en" ? "All rights reserved" : "جميع الحقوق محفوظة"}
          </p>
        </div>
      </div>
    </footer>
  );
}
