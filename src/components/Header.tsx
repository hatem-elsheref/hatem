import { useState } from "react";
import { Moon, Sun, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useTheme } from "@/contexts/ThemeContext";
import { useLanguage } from "@/contexts/LanguageContext";
import { Link, useLocation } from "react-router-dom";

export function Header() {
  const { theme, toggleTheme } = useTheme();
  const { t } = useLanguage();
  const location = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="no-print sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <Link to="/" className="flex items-center space-x-2" onClick={() => setMobileMenuOpen(false)}>
          <span className="text-lg sm:text-xl font-bold text-gradient">Hatem Mohamed</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-4 lg:gap-6">
          <Link
            to="/"
            className={`text-sm font-medium transition-colors hover:text-primary ${
              isActive("/") ? "text-primary" : "text-muted-foreground"
            }`}
          >
            {t("home")}
          </Link>
          <Link
            to="/projects"
            className={`text-sm font-medium transition-colors hover:text-primary ${
              isActive("/projects") ? "text-primary" : "text-muted-foreground"
            }`}
          >
            {t("projects")}
          </Link>
          <Link
            to="/resume"
            className={`text-sm font-medium transition-colors hover:text-primary ${
              isActive("/resume") ? "text-primary" : "text-muted-foreground"
            }`}
          >
            {t("resume")}
          </Link>

          <div className="flex items-center gap-2">
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleTheme}
              aria-label="Toggle theme"
              className="h-9 w-9"
            >
              {theme === "light" ? (
                <Moon className="h-5 w-5" />
              ) : (
                <Sun className="h-5 w-5" />
              )}
            </Button>
          </div>
        </nav>

        {/* Mobile Menu Button */}
        <div className="flex md:hidden items-center gap-2">
          <Button
            variant="ghost"
            size="icon"
            onClick={toggleTheme}
            aria-label="Toggle theme"
            className="h-9 w-9"
          >
            {theme === "light" ? (
              <Moon className="h-5 w-5" />
            ) : (
              <Sun className="h-5 w-5" />
            )}
          </Button>
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
            className="h-9 w-9"
          >
            {mobileMenuOpen ? (
              <X className="h-5 w-5" />
            ) : (
              <Menu className="h-5 w-5" />
            )}
          </Button>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t bg-background/95 backdrop-blur">
          <nav className="container py-4 flex flex-col gap-3">
            <Link
              to="/"
              className={`text-base font-medium py-2 px-4 rounded-lg transition-colors hover:bg-muted min-h-[44px] flex items-center ${
                isActive("/") ? "text-primary bg-muted" : "text-muted-foreground"
              }`}
              onClick={() => setMobileMenuOpen(false)}
            >
              {t("home")}
            </Link>
            <Link
              to="/projects"
              className={`text-base font-medium py-2 px-4 rounded-lg transition-colors hover:bg-muted min-h-[44px] flex items-center ${
                isActive("/projects") ? "text-primary bg-muted" : "text-muted-foreground"
              }`}
              onClick={() => setMobileMenuOpen(false)}
            >
              {t("projects")}
            </Link>
            <Link
              to="/resume"
              className={`text-base font-medium py-2 px-4 rounded-lg transition-colors hover:bg-muted min-h-[44px] flex items-center ${
                isActive("/resume") ? "text-primary bg-muted" : "text-muted-foreground"
              }`}
              onClick={() => setMobileMenuOpen(false)}
            >
              {t("resume")}
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
