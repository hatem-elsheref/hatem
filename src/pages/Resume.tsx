import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Printer, Download } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { ResumeEnglish } from "@/components/ResumeEnglish";
import { ResumeArabic } from "@/components/ResumeArabic";

export default function Resume() {
  const { language, t } = useLanguage();
  const handlePrint = () => {
    window.print();
  };

  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = "/cv.pdf";
    link.download = "Hatem_Mohamed_CV.pdf";
    link.click();
  };

  return (
    <div className="min-h-screen bg-background">
      <div className="no-print sticky top-16 z-40 border-b bg-background/95 backdrop-blur">
        <div className="container flex h-16 items-center justify-between">
          <h1 className="text-xl font-bold">{t("resumeTitle")}</h1>
          <div className="flex gap-2">
            <Button onClick={handlePrint} variant="outline" className="gap-2">
              <Printer className="h-4 w-4" />
              {t("printResume")}
            </Button>
            <Button onClick={handleDownload} className="gap-2">
              <Download className="h-4 w-4" />
              {t("downloadCV")}
            </Button>
          </div>
        </div>
      </div>

      <div className="container py-12">
        <div className="mx-auto max-w-4xl">
          <Card className="resume-paper p-8 md:p-12">
            {language === "en" ? <ResumeEnglish /> : <ResumeArabic />}
          </Card>
        </div>
      </div>

      <style>{`
        @media print {
          .no-print {
            display: none !important;
          }
          
          .resume-paper {
            box-shadow: none !important;
            border: none !important;
            margin: 0 !important;
            padding: 1rem !important;
          }

          body {
            print-color-adjust: exact;
            -webkit-print-color-adjust: exact;
          }
        }
      `}</style>
    </div>
  );
}
