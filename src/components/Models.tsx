import { Button } from "@/components/ui/button";
import { CheckCircle, MessageCircle } from "lucide-react";

const models = [
  {
    name: "Modelo Padrão",
    description: "Para obras e eventos de grande fluxo",
    features: [
      "Estrutura resistente e durável",
      "Capacidade adequada para alto fluxo",
      "Ventilação natural",
      "Fácil instalação",
      "Manutenção programada incluída",
    ],
    whatsappText: "Gostaria%20de%20solicitar%20o%20modelo%20Padrão",
  },
  {
    name: "Modelo Acessível",
    description: "Para pessoas com mobilidade reduzida",
    features: [
      "Conforme normas de acessibilidade",
      "Espaço interno ampliado",
      "Barras de apoio",
      "Rampa de acesso",
      "Adequado para PcD",
    ],
    highlighted: true,
    whatsappText: "Gostaria%20de%20orçamento%20do%20modelo%20Acessível",
  },
  {
    name: "Modelo VIP",
    description: "Ideal para eventos corporativos e áreas VIP",
    features: [
      "Acabamento superior",
      "Espelho e pia interna",
      "Iluminação interna",
      "Ventilação aprimorada",
      "Acabamento premium",
    ],
    whatsappText: "Gostaria%20de%20saber%20valores%20do%20modelo%20VIP",
  },
];

const Models = () => {
  const baseWhatsappLink = "https://wa.me/5543999818024?text=";

  return (
    <section id="modelos" className="section-padding bg-background">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Modelos de <span className="gradient-text">Banheiros Químicos</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Escolha o modelo ideal para sua necessidade. Todos com higienização profissional.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {models.map((model, index) => (
            <div
              key={index}
              className={`relative bg-card rounded-2xl p-8 shadow-[var(--shadow-card)] card-hover animate-scale-in ${
                model.highlighted ? "ring-2 ring-primary" : ""
              }`}
              style={{ animationDelay: `${index * 150}ms` }}
            >
              {model.highlighted && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gradient-to-r from-primary to-secondary text-primary-foreground text-sm font-bold px-4 py-2 rounded-full shadow-lg">
                  Mais Procurado
                </div>
              )}

              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold text-foreground mb-2">
                  {model.name}
                </h3>
                <p className="text-muted-foreground">
                  {model.description}
                </p>
              </div>

              <div className="space-y-4 mb-8">
                {model.features.map((feature, featureIndex) => (
                  <div key={featureIndex} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                    <span className="text-foreground">{feature}</span>
                  </div>
                ))}
              </div>

              <a
                href={`${baseWhatsappLink}${model.whatsappText}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button
                  className={`w-full gap-2 ${
                    model.highlighted
                      ? "bg-primary hover:bg-primary/90"
                      : "bg-secondary hover:bg-secondary/90"
                  }`}
                >
                  <MessageCircle className="w-4 h-4" />
                  Solicitar este modelo
                </Button>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Models;
