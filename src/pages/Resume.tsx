import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Printer, Download, FileDown } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { ResumeEnglish } from "@/components/ResumeEnglish";
import { ResumeArabic } from "@/components/ResumeArabic";
import { Footer } from "@/components/Footer";
import { WhatsAppFloat } from "@/components/WhatsAppFloat";

export default function Resume() {
  const { language, t } = useLanguage();
  
  const handlePrintToPDF = () => {
    // Hide non-printable elements
    const noPrintElements = document.querySelectorAll('.no-print');
    noPrintElements.forEach(el => {
      (el as HTMLElement).style.display = 'none';
    });
    
    // Print (user can choose "Save as PDF" in print dialog)
    window.print();
    
    // Restore elements after a delay
    setTimeout(() => {
      noPrintElements.forEach(el => {
        (el as HTMLElement).style.display = '';
      });
    }, 1000);
  };

  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = "/Hatem__Mohamed__Elsheref__CV.pdf";
    link.download = "Hatem__Mohamed__Elsheref__CV.pdf";
    link.click();
  };

  return (
    <div className="min-h-screen bg-background">
      <div className="no-print sticky top-16 z-40 border-b bg-background/95 backdrop-blur">
        <div className="container flex h-16 items-center justify-between">
          <h1 className="text-xl font-bold">{t("resumeTitle")}</h1>
          <div className="flex gap-2">
            <Button onClick={handlePrintToPDF} variant="outline" className="gap-2">
              <FileDown className="h-4 w-4" />
              Print to PDF
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
          @page {
            size: A4;
            margin: 0.5in;
          }

          * {
            -webkit-print-color-adjust: exact !important;
            print-color-adjust: exact !important;
            color-adjust: exact !important;
          }

          body {
            background: white !important;
            color: black !important;
          }

          .no-print,
          header,
          nav,
          footer,
          .whatsapp-float {
            display: none !important;
          }
          
          .resume-paper {
            box-shadow: none !important;
            border: none !important;
            margin: 0 !important;
            padding: 0 !important;
            background: white !important;
          }

          .resume-content {
            color: black !important;
          }

          .resume-content * {
            color: black !important;
            border-color: black !important;
          }

          .resume-content h1,
          .resume-content h2,
          .resume-content h3 {
            color: black !important;
          }

          a {
            color: black !important;
            text-decoration: underline !important;
          }
        }

        @media screen {
          .resume-content {
            color: black;
          }
        }
      `}</style>
      <Footer />
      <WhatsAppFloat />
    </div>
  );
}
