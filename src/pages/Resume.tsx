import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Printer, Download, FileDown } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { usePortfolioData } from "@/hooks/usePortfolioData";
import { ResumeEnglish } from "@/components/ResumeEnglish";
import { ResumeArabic } from "@/components/ResumeArabic";
import { Footer } from "@/components/Footer";
import { WhatsAppFloat } from "@/components/WhatsAppFloat";

export default function Resume() {
  const { language, t } = useLanguage();
  const portfolioData = usePortfolioData();
  
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

  return (
    <div className="min-h-screen bg-background">
      <div className="no-print sticky top-16 z-40 border-b bg-background/95 backdrop-blur">
        <div className="container flex flex-col sm:flex-row h-auto sm:h-16 items-start sm:items-center justify-between gap-3 sm:gap-0 py-3 sm:py-0">
          <h1 className="text-lg sm:text-xl font-bold">{t("resumeTitle")}</h1>
          <div className="flex flex-col sm:flex-row gap-2 w-full sm:w-auto">
            <Button onClick={handlePrintToPDF} variant="outline" className="gap-2 w-full sm:w-auto min-h-[44px]">
              <FileDown className="h-4 w-4" />
              <span className="hidden sm:inline">Print to PDF</span>
              <span className="sm:hidden">Print</span>
            </Button>
            <Button onClick={handleDownload} className="gap-2 w-full sm:w-auto min-h-[44px]">
              <Download className="h-4 w-4" />
              {t("downloadCV")}
            </Button>
          </div>
        </div>
      </div>

      <div className="container py-6 sm:py-12 px-4 sm:px-6">
        <div className="mx-auto max-w-4xl">
          <Card className="resume-paper p-4 sm:p-6 md:p-8 lg:p-12">
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
