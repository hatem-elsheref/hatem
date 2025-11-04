import { useLanguage } from "@/contexts/LanguageContext";
import { Heart } from "lucide-react";

export function Footer() {
  const { language } = useLanguage();
  const year = new Date().getFullYear();

  return (
    <footer className="border-t py-8">
      <div className="container">
        <div className="flex flex-col items-center justify-center gap-2 text-center">
          <p className="flex items-center gap-2 text-sm text-muted-foreground">
            {language === "en" ? (
              <>
                Built with <Heart className="h-4 w-4 fill-primary text-primary" /> by Hatem Mohamed
              </>
            ) : (
              <>
                صُنع بـ <Heart className="h-4 w-4 fill-primary text-primary" /> بواسطة حاتم محمد
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
