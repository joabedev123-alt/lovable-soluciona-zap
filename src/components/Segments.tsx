import { Building2, PartyPopper, Music, Store, Tractor, Trophy } from "lucide-react";

const segments = [
  {
    icon: Building2,
    title: "Obras e Construção Civil",
    description: "Solução ideal para canteiros de obras com grande fluxo de trabalhadores.",
  },
  {
    icon: PartyPopper,
    title: "Festas e Eventos ao ar livre",
    description: "Perfeito para casamentos, aniversários e eventos particulares.",
  },
  {
    icon: Music,
    title: "Shows e Festivais",
    description: "Estrutura completa para eventos de grande porte e shows musicais.",
  },
  {
    icon: Store,
    title: "Feiras e Exposições",
    description: "Ideal para feiras comerciais, exposições e eventos empresariais.",
  },
  {
    icon: Tractor,
    title: "Propriedades rurais",
    description: "Solução prática para fazendas, sítios e eventos no campo.",
  },
  {
    icon: Trophy,
    title: "Eventos esportivos",
    description: "Estrutura adequada para competições, torneios e eventos esportivos.",
  },
];

const Segments = () => {
  return (
    <section id="segmentos" className="section-padding bg-background">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Segmentos <span className="gradient-text">atendidos</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Atendemos diversos tipos de eventos e situações com soluções personalizadas.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {segments.map((segment, index) => {
            const Icon = segment.icon;
            return (
              <div
                key={index}
                className="group bg-card rounded-xl p-8 shadow-[var(--shadow-card)] card-hover text-center animate-scale-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="w-20 h-20 mx-auto rounded-full bg-gradient-to-br from-primary/10 to-secondary/10 flex items-center justify-center mb-6 group-hover:from-primary/20 group-hover:to-secondary/20 transition-all duration-300">
                  <Icon className="w-10 h-10 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3">
                  {segment.title}
                </h3>
                <p className="text-muted-foreground">
                  {segment.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Segments;
