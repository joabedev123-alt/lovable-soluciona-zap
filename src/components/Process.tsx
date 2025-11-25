import { MessageCircle, ClipboardList, Truck, Wrench, Package } from "lucide-react";
import { Button } from "@/components/ui/button";

const steps = [
  {
    icon: MessageCircle,
    title: "Chame no WhatsApp",
    description: "Entre em contato conosco pelo WhatsApp e conte suas necessidades.",
  },
  {
    icon: ClipboardList,
    title: "Recomendamos o melhor modelo",
    description: "Nossa equipe sugere o modelo ideal e a quantidade necessária.",
  },
  {
    icon: Truck,
    title: "Entrega e instalação",
    description: "Levamos até seu local e instalamos tudo pronto para uso.",
  },
  {
    icon: Wrench,
    title: "Manutenção durante o período",
    description: "Fazemos limpeza e manutenção programada conforme combinado.",
  },
  {
    icon: Package,
    title: "Retirada após o uso",
    description: "Ao fim do período, retiramos os banheiros do local.",
  },
];

const Process = () => {
  const whatsappLink = "https://wa.me/5543999818024?text=Olá!%20Gostaria%20de%20solicitar%20um%20orçamento%20rápido.";

  return (
    <section id="como-funciona" className="section-padding bg-gradient-to-br from-muted/50 via-background to-muted/30">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Como funciona o <span className="gradient-text">processo</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Processo simples e rápido do primeiro contato até a retirada dos equipamentos.
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          <div className="relative">
            {/* Connection line - hidden on mobile */}
            <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-primary via-secondary to-primary -translate-x-1/2" />

            <div className="space-y-12">
              {steps.map((step, index) => {
                const Icon = step.icon;
                const isEven = index % 2 === 0;

                return (
                  <div
                    key={index}
                    className={`relative flex items-center gap-8 ${
                      isEven ? "lg:flex-row" : "lg:flex-row-reverse"
                    } animate-fade-in-up`}
                    style={{ animationDelay: `${index * 150}ms` }}
                  >
                    {/* Content */}
                    <div className={`flex-1 ${isEven ? "lg:text-right" : "lg:text-left"}`}>
                      <div className="bg-card rounded-xl p-6 shadow-[var(--shadow-card)] card-hover">
                        <div className={`flex items-center gap-4 mb-4 ${isEven ? "lg:flex-row-reverse" : ""}`}>
                          <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center flex-shrink-0">
                            <Icon className="w-6 h-6 text-primary-foreground" />
                          </div>
                          <h3 className="text-xl font-bold text-foreground">
                            {step.title}
                          </h3>
                        </div>
                        <p className="text-muted-foreground">
                          {step.description}
                        </p>
                      </div>
                    </div>

                    {/* Step number - centered */}
                    <div className="hidden lg:flex absolute left-1/2 -translate-x-1/2 w-16 h-16 rounded-full bg-gradient-to-br from-primary to-secondary items-center justify-center shadow-lg z-10">
                      <span className="text-2xl font-bold text-primary-foreground">
                        {index + 1}
                      </span>
                    </div>

                    {/* Spacer for layout */}
                    <div className="hidden lg:block flex-1" />
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-16 animate-fade-in-up">
          <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
            <Button
              size="lg"
              className="bg-secondary hover:bg-secondary/90 text-secondary-foreground text-lg px-8 py-6 gap-3 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
            >
              <MessageCircle className="w-5 h-5" />
              Solicitar orçamento rápido
            </Button>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Process;
