import { Button } from "@/components/ui/button";
import { MessageCircle } from "lucide-react";
import { useState, useEffect } from "react";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const whatsappLink = "https://wa.me/5543999818024?text=Olá!%20Gostaria%20de%20solicitar%20um%20orçamento%20para%20locação%20de%20banheiros%20químicos.";

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-background/95 backdrop-blur-md shadow-md"
            : "bg-transparent"
        }`}
      >
        <div className="container-custom">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <div className="flex items-center gap-2">
              <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
                <span className="text-2xl font-bold text-primary-foreground">S</span>
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-bold text-foreground">Soluciona</span>
                <span className="text-xs text-muted-foreground">Locação</span>
              </div>
            </div>

            {/* Navigation - Hidden on mobile */}
            <nav className="hidden lg:flex items-center gap-8">
              <button
                onClick={() => scrollToSection("inicio")}
                className="text-sm font-medium text-foreground hover:text-primary transition-colors"
              >
                Início
              </button>
              <button
                onClick={() => scrollToSection("por-que-alugar")}
                className="text-sm font-medium text-foreground hover:text-primary transition-colors"
              >
                Por que Alugar
              </button>
              <button
                onClick={() => scrollToSection("segmentos")}
                className="text-sm font-medium text-foreground hover:text-primary transition-colors"
              >
                Segmentos
              </button>
              <button
                onClick={() => scrollToSection("como-funciona")}
                className="text-sm font-medium text-foreground hover:text-primary transition-colors"
              >
                Como Funciona
              </button>
              <button
                onClick={() => scrollToSection("modelos")}
                className="text-sm font-medium text-foreground hover:text-primary transition-colors"
              >
                Modelos
              </button>
              <button
                onClick={() => scrollToSection("faq")}
                className="text-sm font-medium text-foreground hover:text-primary transition-colors"
              >
                FAQ
              </button>
              <button
                onClick={() => scrollToSection("contato")}
                className="text-sm font-medium text-foreground hover:text-primary transition-colors"
              >
                Contato
              </button>
            </nav>

            {/* CTA Button */}
            <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
              <Button className="bg-secondary hover:bg-secondary/90 text-secondary-foreground gap-2">
                <MessageCircle className="w-4 h-4" />
                <span className="hidden md:inline">Solicitar Orçamento</span>
                <span className="md:hidden">Orçamento</span>
              </Button>
            </a>
          </div>
        </div>
      </header>

      {/* Floating WhatsApp Button */}
      <a
        href={whatsappLink}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 bg-secondary hover:bg-secondary/90 text-secondary-foreground w-14 h-14 rounded-full shadow-lg flex items-center justify-center transition-all duration-300 hover:scale-110 hover:shadow-xl"
        aria-label="Falar no WhatsApp"
      >
        <MessageCircle className="w-6 h-6" />
      </a>
    </>
  );
};

export default Header;
