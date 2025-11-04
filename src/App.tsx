import React from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { ThemeProvider } from "@/contexts/ThemeContext";
import { LanguageProvider } from "@/contexts/LanguageContext";
import { Header } from "@/components/Header";
import Index from "./pages/Index";
import Projects from "./pages/Projects";
import Resume from "./pages/Resume";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

// Handle GitHub Pages 404 redirect
function Redirect({ to }: { to: string }) {
  const location = useLocation();
  React.useEffect(() => {
    if (location.pathname.includes('?/')) {
      const path = location.pathname.split('?/')[1]?.replace(/~and~/g, '&');
      window.history.replaceState({}, '', path || '/');
      window.location.reload();
    }
  }, [location, to]);
  return null;
}

const App = () => (
  <QueryClientProvider client={queryClient}>
    <ThemeProvider>
      <LanguageProvider>
        <TooltipProvider>
          <Toaster />
          <Sonner />
          <BrowserRouter basename="/hatem-code">
            <Redirect to="/" />
            <Header />
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/resume" element={<Resume />} />
              {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
              <Route path="*" element={<NotFound />} />
            </Routes>
          </BrowserRouter>
        </TooltipProvider>
      </LanguageProvider>
    </ThemeProvider>
  </QueryClientProvider>
);

export default App;
