import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useState } from "react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <h1 className="text-2xl font-bold bg-gradient-primary bg-clip-text text-transparent">
              Versyl
            </h1>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <button
                onClick={() => scrollToSection('services')}
                className="text-foreground hover:text-primary transition-colors"
              >
                Services
              </button>
              <button
                onClick={() => scrollToSection('subscription')}
                className="text-foreground hover:text-primary transition-colors"
              >
                Plans
              </button>
              <button
                onClick={() => scrollToSection('prizes')}
                className="text-foreground hover:text-primary transition-colors"
              >
                Our Prizes
              </button>
              <button
                onClick={() => scrollToSection('clients')}
                className="text-foreground hover:text-primary transition-colors"
              >
                Clients
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className="text-foreground hover:text-primary transition-colors"
              >
                Contact
              </button>
            </div>
          </nav>

          {/* CTA Button - Desktop */}
          <div className="hidden md:block">
            <Button 
              variant="hero" 
              onClick={() => scrollToSection('contact')}
              className="animate-glow-pulse"
            >
              Get Started
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 rounded-md text-foreground hover:text-primary hover:bg-muted"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden animate-fade-in">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-background border-t border-border">
              <button
                onClick={() => scrollToSection('services')}
                className="block px-3 py-2 text-base font-medium text-foreground hover:text-primary hover:bg-muted rounded-md w-full text-left"
              >
                Services
              </button>
              <button
                onClick={() => scrollToSection('subscription')}
                className="block px-3 py-2 text-base font-medium text-foreground hover:text-primary hover:bg-muted rounded-md w-full text-left"
              >
                Plans
              </button>
              <button
                onClick={() => scrollToSection('prizes')}
                className="block px-3 py-2 text-base font-medium text-foreground hover:text-primary hover:bg-muted rounded-md w-full text-left"
              >
                Our Prizes
              </button>
              <button
                onClick={() => scrollToSection('clients')}
                className="block px-3 py-2 text-base font-medium text-foreground hover:text-primary hover:bg-muted rounded-md w-full text-left"
              >
                Clients
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className="block px-3 py-2 text-base font-medium text-foreground hover:text-primary hover:bg-muted rounded-md w-full text-left"
              >
                Contact
              </button>
              <div className="pt-4">
                <Button 
                  variant="hero" 
                  className="w-full"
                  onClick={() => scrollToSection('contact')}
                >
                  Get Started
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;