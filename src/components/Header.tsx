import { Button } from "@/components/ui/button";
import { MessageCircle } from "lucide-react";
import { useState, useEffect } from "react";
import logoSoluciona from "@/assets/logo-soluciona.jpg";

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
            <div className="flex items-center">
              <img 
                src={logoSoluciona} 
                alt="Soluciona Locação" 
                className="h-14 w-auto"
              />
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
        className="fixed bottom-6 right-6 z-50 bg-[#25D366] hover:bg-[#20BA5A] text-white w-14 h-14 rounded-full shadow-lg flex items-center justify-center transition-all duration-300 hover:scale-110 hover:shadow-xl"
        aria-label="Falar no WhatsApp"
      >
        <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
        </svg>
      </a>
    </>
  );
};

export default Header;
