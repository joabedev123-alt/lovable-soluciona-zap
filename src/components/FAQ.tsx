import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "Quantos banheiros preciso para meu evento?",
    answer: "Depende do número de pessoas e duração do evento. Nossa equipe faz uma recomendação personalizada considerando o tipo de evento, quantidade de participantes e tempo de duração. Entre em contato pelo WhatsApp para uma consultoria gratuita.",
  },
  {
    question: "Vocês fazem limpeza durante a locação?",
    answer: "Sim! Oferecemos manutenção programada incluída no serviço. Fazemos visitas periódicas para higienização, reabastecimento e verificação do equipamento, garantindo que tudo esteja sempre em perfeitas condições.",
  },
  {
    question: "Entrega e retirada já estão inclusas?",
    answer: "Sim, tanto a entrega quanto a instalação e posterior retirada dos banheiros químicos já estão inclusas no valor da locação. Nossa equipe cuida de todo o processo para sua comodidade.",
  },
  {
    question: "Vocês atendem municípios da região?",
    answer: "Sim! Atendemos Apucarana e toda a região. Entre em contato pelo WhatsApp informando sua localização para confirmarmos o atendimento e combinarmos os detalhes.",
  },
  {
    question: "Quanto tempo leva para entregar?",
    answer: "Trabalhamos com agilidade e frota própria. Dependendo da disponibilidade e da sua localização, podemos realizar a entrega no mesmo dia ou em até 24 horas. Entre em contato para verificarmos a disponibilidade.",
  },
  {
    question: "O banheiro já vem pronto para uso?",
    answer: "Sim! Todos os banheiros são entregues completamente higienizados, abastecidos com produtos necessários e prontos para uso imediato após a instalação no local.",
  },
];

const FAQ = () => {
  return (
    <section id="faq" className="section-padding bg-muted/30">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Perguntas <span className="gradient-text">Frequentes</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Tire suas dúvidas sobre nossos serviços de locação.
          </p>
        </div>

        <div className="max-w-3xl mx-auto animate-scale-in">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="bg-card rounded-lg px-6 shadow-[var(--shadow-card)] border-none"
              >
                <AccordionTrigger className="text-left hover:no-underline py-6">
                  <span className="text-lg font-semibold text-foreground pr-4">
                    {faq.question}
                  </span>
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-6">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
