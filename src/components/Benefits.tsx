import { Sparkles, Truck, Wrench, Users, Star, MessageCircle } from "lucide-react";

const benefits = [
  {
    icon: Sparkles,
    title: "Higienização profissional",
    description: "Limpeza completa antes da entrega e manutenção programada durante todo o período de locação.",
  },
  {
    icon: Truck,
    title: "Logística rápida e eficiente",
    description: "Frota própria garante entrega e instalação no prazo combinado, sempre pontual.",
  },
  {
    icon: Wrench,
    title: "Manutenção programada",
    description: "Visitas periódicas para higienização e reabastecimento durante o período contratado.",
  },
  {
    icon: Users,
    title: "Equipe especializada",
    description: "Profissionais treinados e preparados para atender suas necessidades com excelência.",
  },
  {
    icon: Star,
    title: "Modelos para qualquer evento",
    description: "Padrão, acessível e VIP - escolha o modelo ideal para obra, festa ou evento corporativo.",
  },
  {
    icon: MessageCircle,
    title: "Suporte direto no WhatsApp",
    description: "Atendimento rápido e personalizado para tirar dúvidas e resolver qualquer situação.",
  },
];

const Benefits = () => {
  return (
    <section id="por-que-alugar" className="section-padding bg-muted/30">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Por que alugar com a <span className="gradient-text">Soluciona?</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Mais de 10 anos de experiência oferecendo soluções completas em locação de banheiros químicos.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <div
                key={index}
                className="bg-card rounded-xl p-8 shadow-[var(--shadow-card)] card-hover animate-scale-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="w-14 h-14 rounded-lg bg-gradient-to-br from-primary to-secondary flex items-center justify-center mb-6">
                  <Icon className="w-7 h-7 text-primary-foreground" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3">
                  {benefit.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Benefits;
