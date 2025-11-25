import { MapPin, Mail, Phone, Instagram } from "lucide-react";

const Footer = () => {
  return (
    <footer id="contato" className="bg-foreground text-background py-16">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
                <span className="text-xl font-bold text-primary-foreground">S</span>
              </div>
              <div className="flex flex-col">
                <span className="text-lg font-bold">Soluciona</span>
                <span className="text-xs opacity-80">Locação</span>
              </div>
            </div>
            <p className="text-sm opacity-80">
              Soluções práticas em locação de banheiros químicos para obras e eventos em Apucarana e região.
            </p>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-bold mb-4">Contato</h3>
            <div className="space-y-3">
              <a
                href="https://wa.me/5543999818024"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-sm opacity-80 hover:opacity-100 transition-opacity"
              >
                <Phone className="w-4 h-4" />
                <span>(43) 99981-8024</span>
              </a>
              <a
                href="mailto:solucionalocacoes@gmail.com"
                className="flex items-center gap-3 text-sm opacity-80 hover:opacity-100 transition-opacity"
              >
                <Mail className="w-4 h-4" />
                <span>solucionalocacoes@gmail.com</span>
              </a>
              <a
                href="https://www.instagram.com/soluciona_locacao/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-sm opacity-80 hover:opacity-100 transition-opacity"
              >
                <Instagram className="w-4 h-4" />
                <span>@soluciona_locacao</span>
              </a>
            </div>
          </div>

          {/* Address */}
          <div>
            <h3 className="text-lg font-bold mb-4">Endereço</h3>
            <div className="flex items-start gap-3 text-sm opacity-80">
              <MapPin className="w-4 h-4 flex-shrink-0 mt-1" />
              <div>
                <p>R. Caviuna, 486</p>
                <p>Apucarana - PR</p>
                <p>CEP 86803-380</p>
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-bold mb-4">Serviços</h3>
            <ul className="space-y-2 text-sm opacity-80">
              <li>Locação para obras</li>
              <li>Locação para eventos</li>
              <li>Banheiro acessível PcD</li>
              <li>Banheiro VIP</li>
              <li>Manutenção programada</li>
              <li>Entrega e instalação</li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-background/20">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm opacity-80">
            <p>© 2025 Soluciona Locação - Unidade Apucarana. Todos os direitos reservados.</p>
            <p>CNPJ: 54.767.838/0001-34</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
