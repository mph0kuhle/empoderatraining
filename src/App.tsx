// App.tsx - Updated with all required routes

import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "@/components/theme-provider";

// --- Page Imports ---
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import LearnershipsPage from './pages/LearnershipsPage';
import SLPPage from './pages/SLPPage';
import MasterclassesPage from './pages/MasterclassesPage';
import ProgramDetail from './pages/ProgramDetail';

const queryClient = new QueryClient();

const App = () => (
  <ThemeProvider defaultTheme="light">
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />

            {/* CORE PROGRAMME ROUTES */}
            <Route path="/learnerships" element={<LearnershipsPage />} />
            <Route path="/short-programmes" element={<SLPPage />} />
            <Route path="/masterclasses" element={<MasterclassesPage />} />

            {/* DYNAMIC DETAIL ROUTES */}
            <Route path="/learnerships/:slug" element={<ProgramDetail />} />
            <Route path="/slps/:slug" element={<ProgramDetail />} />
            <Route path="/masterclasses/:slug" element={<ProgramDetail />} />

            {/* UTILITY ROUTES (placeholder uses ProgramDetail) */}
            <Route path="/contact" element={<ProgramDetail />} />
            <Route path="/quote" element={<ProgramDetail />} />

            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  </ThemeProvider>
);

export default App;