import { Button } from "@/components/ui/button";
import { MessageCircle } from "lucide-react";

const FinalCTA = () => {
  const whatsappLink = "https://wa.me/5543999818024?text=Olá!%20Estou%20pronto%20para%20garantir%20banheiros%20químicos%20com%20entrega%20rápida!";

  return (
    <section className="section-padding bg-gradient-to-br from-primary via-primary/90 to-secondary relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute inset-0 bg-grid-white/10" />
      <div className="absolute top-10 right-10 w-64 h-64 bg-white/10 rounded-full blur-3xl" />
      <div className="absolute bottom-10 left-10 w-96 h-96 bg-secondary/20 rounded-full blur-3xl" />

      <div className="container-custom relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-8 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground">
            Pronto para garantir banheiros químicos com entrega rápida?
          </h2>
          
          <p className="text-xl md:text-2xl text-primary-foreground/90">
            Clique abaixo e fale com nossa equipe agora mesmo.
          </p>

          <div className="pt-6">
            <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
              <Button
                size="lg"
                className="bg-secondary hover:bg-secondary/90 text-secondary-foreground text-xl px-12 py-8 gap-4 shadow-2xl hover:shadow-3xl transition-all duration-300 hover:scale-110 animate-pulse"
              >
                <MessageCircle className="w-7 h-7" />
                👉 Falar no WhatsApp
              </Button>
            </a>
          </div>

          <p className="text-primary-foreground/80 text-sm">
            Atendimento rápido e personalizado • Orçamento sem compromisso
          </p>
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;
