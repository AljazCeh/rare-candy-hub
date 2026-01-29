import { Link } from "react-router-dom";
import { Facebook, Instagram, MessageCircle } from "lucide-react";

const footerLinks = [
  { href: "/", label: "Domov" },
  { href: "/o-nas", label: "O nas" },
  { href: "/storitve", label: "Storitve" },
  { href: "/reference", label: "Reference" },
  { href: "/kontakt", label: "Kontakt" },
];

const socialLinks = [
  { href: "#", icon: Facebook, label: "Facebook" },
  { href: "#", icon: Instagram, label: "Instagram" },
  { href: "#", icon: MessageCircle, label: "Discord" },
];

export const Footer = () => {
  return (
    <footer className="bg-muted/30 border-t border-border/50">
      <div className="section-container py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <Link to="/" className="inline-block mb-4">
              <span className="text-xl font-bold text-foreground">
                Rare Candy Center
              </span>
              <span className="block text-sm text-muted-foreground">
                Play & Chill
              </span>
            </Link>
            <p className="text-muted-foreground text-sm max-w-md mb-6">
              Tvoj TCG center v Mariboru. Prostor za vse ljubitelje zbirateljskih
              iger kart – od začetnikov do veteranov. Pridruži se naši skupnosti!
            </p>
            <div className="flex gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  className="p-2 rounded-lg bg-muted/50 text-muted-foreground hover:text-secondary hover:bg-muted transition-colors"
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Povezave</h4>
            <ul className="space-y-3">
              {footerLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    to={link.href}
                    className="text-sm text-muted-foreground hover:text-secondary transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Info */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Kontakt</h4>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li>
                <span className="block text-foreground font-medium">
                  Delta9 Factory
                </span>
                Bogdan Knez s.p.
              </li>
              <li>Maribor, Slovenija</li>
              <li>
                <span className="block text-foreground font-medium mt-4">
                  Odpiralni čas
                </span>
                Pon – Ned: 10:00 – 20:00
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-12 pt-8 border-t border-border/50 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Rare Candy Center. Vse pravice pridržane.
          </p>
          <p className="text-xs text-muted-foreground/60">
            Projekt Delta9 Factory, Bogdan Knez s.p.
          </p>
        </div>
      </div>
    </footer>
  );
};
