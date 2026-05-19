import { HelmetProvider } from "react-helmet-async";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Routes, Route } from "react-router-dom";

import Index from "./pages/Index";
import ONas from "./pages/ONas";
import Storitve from "./pages/Storitve";
import Kontakt from "./pages/Kontakt";
import NotFound from "./pages/NotFound";
import ScrollToTop from "./components/ScrollToTop";
import SiteUnavailable from "./components/SiteUnavailable";
import { SITE_DISABLED } from "./config/siteStatus";

const queryClient = new QueryClient();

// React fallback: ko je SITE_DISABLED === 1, se na vseh poteh prikaže
// SiteUnavailable. Na Vercelu to dopolnjuje middleware.ts, ki vrne HTTP 503
// še preden se React aplikacija naloži – ta fallback pokriva lokalni razvoj.
const App = () => {
  if (SITE_DISABLED === 1) {
    return <SiteUnavailable />;
  }

  return (
    <HelmetProvider>
      <QueryClientProvider client={queryClient}>
        <TooltipProvider>
          <Toaster />
          <Sonner />
            <ScrollToTop />
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/o-nas" element={<ONas />} />
            <Route path="/storitve" element={<Storitve />} />
            <Route path="/kontakt" element={<Kontakt />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </TooltipProvider>
      </QueryClientProvider>
    </HelmetProvider>
  );
};

export default App;
