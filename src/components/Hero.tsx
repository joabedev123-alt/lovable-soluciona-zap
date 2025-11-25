import { Button } from "@/components/ui/button";
import { CheckCircle, MessageCircle, ArrowRight } from "lucide-react";

const Hero = () => {
  const whatsappLink = "https://wa.me/5543999818024?text=Olá!%20Gostaria%20de%20alugar%20banheiros%20químicos.";

  const scrollToModelos = () => {
    const element = document.getElementById("modelos");
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <section
      id="inicio"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20"
    >
      {/* Background with gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background to-secondary/10" />
      
      {/* Animated background shapes */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-secondary/10 rounded-full blur-3xl animate-pulse delay-1000" />
      </div>

      <div className="container-custom relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-8 py-20 animate-fade-in-up">
          {/* Main heading */}
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-foreground leading-tight">
            Banheiros químicos para{" "}
            <span className="gradient-text">obras e eventos</span> com entrega
            rápida em Apucarana
          </h1>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto">
            Soluções práticas, higienizadas e com manutenção programada para
            obras, festas, feiras e grandes eventos.
          </p>

          {/* Benefits list */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-2xl mx-auto text-left mt-8">
            {[
              "Entrega e instalação rápida",
              "Higienização profissional",
              "Atendimento imediato pelo WhatsApp",
              "Modelos padrão, acessível e VIP",
            ].map((benefit, index) => (
              <div
                key={index}
                className="flex items-center gap-3 animate-fade-in-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CheckCircle className="w-6 h-6 text-secondary flex-shrink-0" />
                <span className="text-foreground font-medium">{benefit}</span>
              </div>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-12">
            <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
              <Button
                size="lg"
                className="bg-secondary hover:bg-secondary/90 text-secondary-foreground text-lg px-8 py-6 gap-3 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
              >
                <MessageCircle className="w-5 h-5" />
                Alugar agora pelo WhatsApp
              </Button>
            </a>

            <Button
              size="lg"
              variant="outline"
              onClick={scrollToModelos}
              className="text-lg px-8 py-6 gap-3 border-2 hover:bg-muted transition-all duration-300"
            >
              Conhecer os modelos
              <ArrowRight className="w-5 h-5" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
