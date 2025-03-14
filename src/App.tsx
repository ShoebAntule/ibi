import { Toaster } from "./components/ui/toaster";
import { Toaster as Sonner } from "./components/ui/sonner";
import { TooltipProvider } from "./components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import AboutUs from "./pages/AboutUs"; // Updated to use AboutUs component
import Contact from "./pages/Contact"; // Import Contact component
import Services from "./pages/Services";
import Career from "./pages/Career"; // Import Career component
import NotFound from "./pages/NotFound";
import './styles/global.css'; // Import the global CSS

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <div className="App">
          <main className="pt-16"> {/* Add padding-top to account for fixed header */}
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/services" element={<Services />} />
              <Route path="/about" element={<AboutUs />} /> {/* Updated to use AboutUs component */}
              <Route path="/contact" element={<Contact />} /> {/* Route for Contact page */}
              <Route path="*" element={<NotFound />} /> {/* Catch-all 404 page */}
              <Route path="/Career" element={<Career />} /> {/* Route for Career page */}
            </Routes>
          </main>
        </div>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
