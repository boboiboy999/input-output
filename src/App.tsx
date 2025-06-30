
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Upload from "./pages/Upload";
import AnalysisInitial from "./pages/AnalysisInitial";
import AnalysisMultiplier from "./pages/AnalysisMultiplier";
import AnalysisShock from "./pages/AnalysisShock";
import AnalysisFinal from "./pages/AnalysisFinal";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/upload" element={<Upload />} />
          <Route path="/analysis-initial" element={<AnalysisInitial />} />
          <Route path="/analysis-multiplier" element={<AnalysisMultiplier />} />
          <Route path="/analysis-shock" element={<AnalysisShock />} />
          <Route path="/analysis-final" element={<AnalysisFinal />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
