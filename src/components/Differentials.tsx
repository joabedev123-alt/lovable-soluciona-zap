import { CheckCircle } from "lucide-react";

const differentials = [
  "Frota própria e rápida",
  "Equipamentos regulamentados",
  "Atendimento humanizado",
  "Suporte durante toda a locação",
  "Normas de higiene e segurança",
  "Experiência profissional na região",
];

const Differentials = () => {
  return (
    <section className="section-padding bg-gradient-to-br from-primary/5 via-secondary/5 to-primary/5">
      <div className="container-custom">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12 animate-fade-in-up">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Diferenciais da <span className="gradient-text">Soluciona</span>
            </h2>
            <p className="text-lg text-muted-foreground">
              O que nos torna a melhor escolha em Apucarana e região.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {differentials.map((differential, index) => (
              <div
                key={index}
                className="flex items-center gap-4 bg-card rounded-lg p-6 shadow-[var(--shadow-card)] card-hover animate-scale-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center flex-shrink-0">
                  <CheckCircle className="w-6 h-6 text-primary-foreground" />
                </div>
                <span className="text-lg font-semibold text-foreground">
                  {differential}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Differentials;
