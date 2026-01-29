import { motion } from "framer-motion";
import { Layout } from "@/components/Layout";
import { Link } from "react-router-dom";
import {
  Trophy,
  Sofa,
  Users,
  HelpCircle,
  ShoppingBag,
  Calendar,
  Gamepad2,
  Sparkles,
} from "lucide-react";

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

const services = [
  {
    icon: Trophy,
    title: "Organizirano igranje in turnirji",
    description:
      "Redno organiziramo turnirje za različne TCG igre z nagradami in priznanji. Ne glede na tvojo raven izkušenj, boš našel tekmo po svoji meri.",
    features: [
      "Tedenski turnirji",
      "Različni formati",
      "Nagrade za zmagovalce",
      "Prijazno vzdušje",
    ],
  },
  {
    icon: Sofa,
    title: "Play & Chill Lounge",
    description:
      "Udoben prostor za sproščeno igranje brez pritiska tekmovanja. Pridi, sedi, igraj in uživaj v družbi somišljenikov.",
    features: [
      "Udobne sedežne garniture",
      "Mize za igranje",
      "Sproščeno vzdušje",
      "Pijača in prigrizki",
    ],
  },
  {
    icon: Users,
    title: "Skupnostni dogodki",
    description:
      "Organiziramo raznovrstne dogodke, ki povezujejo skupnost – od pack openingov do tematskih večerov in družabnih srečanj.",
    features: [
      "Pack opening večeri",
      "Tematski dogodki",
      "Novinke in premiere",
      "Družabna srečanja",
    ],
  },
  {
    icon: HelpCircle,
    title: "Svetovanje in pomoč",
    description:
      "Ne veš, kje začeti? Naša ekipa ti pomaga pri izbiri pravih kart, razumevanju pravil in razvoju tvoje strategije.",
    features: [
      "Pomoč začetnikom",
      "Gradnja kolodov",
      "Nasveti za zbiratelje",
      "Ocena vrednosti",
    ],
  },
  {
    icon: ShoppingBag,
    title: "Prodaja TCG izdelkov",
    badge: "Kmalu / po dogovoru",
    description:
      "Spletna trgovina je v pripravi. Za zdaj ponujamo omejeno prodajo po predhodnem dogovoru. Kontaktiraj nas za povpraševanje.",
    features: [
      "Booster paketi",
      "Posamezne karte",
      "Dodatki za igro",
      "Zbirateljski predmeti",
    ],
  },
  {
    icon: Calendar,
    title: "Najem prostora",
    description:
      "Imaš idejo za lasten dogodek? Prostor lahko najameš za zasebne turnirje, rojstnodnevne zabave ali druženja.",
    features: [
      "Zasebni dogodki",
      "Rojstnodnevne zabave",
      "Korporativni teambuilding",
      "Prilagodljivi paketi",
    ],
  },
];

const Storitve = () => {
  return (
    <Layout
      title="Storitve | Rare Candy Center"
      description="Oglej si vse storitve, ki jih ponujamo – od turnirjev in igranja do svetovanja in skupnostnih dogodkov."
    >
      {/* Hero */}
      <section className="pt-32 pb-20 md:pt-40 md:pb-28">
        <div className="section-container">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="max-w-3xl"
          >
            <motion.span
              variants={fadeInUp}
              className="inline-block text-secondary font-medium mb-4"
            >
              Storitve
            </motion.span>
            <motion.h1
              variants={fadeInUp}
              className="text-4xl md:text-5xl font-bold text-foreground mb-6"
            >
              Vse, kar potrebuješ za TCG izkušnjo
            </motion.h1>
            <motion.p
              variants={fadeInUp}
              className="text-lg md:text-xl text-muted-foreground"
            >
              Od organiziranega igranja in turnirjev do sproščenega druženja v
              našem loungeu. Odkrivaj, kaj vse ponujamo.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 md:py-28 bg-muted/20">
        <div className="section-container">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid grid-cols-1 lg:grid-cols-2 gap-8"
          >
            {services.map((service) => (
              <motion.div
                key={service.title}
                variants={fadeInUp}
                className="glass-card p-8 card-hover"
              >
                <div className="flex items-start gap-4 mb-6">
                  <div className="p-3 rounded-xl bg-gradient-neon shrink-0">
                    <service.icon className="w-6 h-6 text-foreground" />
                  </div>
                  <div>
                    <div className="flex items-center gap-3 flex-wrap">
                      <h3 className="text-xl font-bold text-foreground">
                        {service.title}
                      </h3>
                      {service.badge && (
                        <span className="text-xs font-medium px-2 py-1 rounded-full bg-gold/20 text-gold">
                          {service.badge}
                        </span>
                      )}
                    </div>
                  </div>
                </div>
                <p className="text-muted-foreground mb-6">
                  {service.description}
                </p>
                <ul className="grid grid-cols-2 gap-2">
                  {service.features.map((feature) => (
                    <li
                      key={feature}
                      className="flex items-center gap-2 text-sm text-muted-foreground"
                    >
                      <Sparkles className="w-4 h-4 text-secondary shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Gaming Space Preview */}
      <section className="py-20 md:py-28">
        <div className="section-container">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="text-center max-w-3xl mx-auto"
          >
            <motion.div
              variants={fadeInUp}
              className="inline-flex p-4 rounded-2xl bg-primary/30 mb-6"
            >
              <Gamepad2 className="w-8 h-8 text-gold" />
            </motion.div>
            <motion.h2
              variants={fadeInUp}
              className="text-3xl md:text-4xl font-bold text-foreground mb-6"
            >
              Prostor, ki te navdihuje
            </motion.h2>
            <motion.p
              variants={fadeInUp}
              className="text-muted-foreground text-lg mb-8"
            >
              Rare Candy Center ni le še en lokal za igranje kart. Je sodoben,
              urejen prostor z ambient osvetlitvijo, udobnim pohištvom in vsem,
              kar potrebuješ za nepozabno igro.
            </motion.p>
            <motion.div variants={fadeInUp}>
              <Link to="/kontakt" className="cta-primary inline-block">
                Rezerviraj svoj termin
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-20 bg-gradient-card neon-glow">
        <div className="section-container">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="text-center"
          >
            <motion.h2
              variants={fadeInUp}
              className="text-2xl md:text-3xl font-bold text-foreground mb-4"
            >
              Želiš termin ali imaš vprašanje?
            </motion.h2>
            <motion.p
              variants={fadeInUp}
              className="text-muted-foreground mb-8 max-w-xl mx-auto"
            >
              Piši nam in skupaj najdemo idealno rešitev zate. Veselimo se tvoje
              pošte!
            </motion.p>
            <motion.div
              variants={fadeInUp}
              className="flex flex-col sm:flex-row justify-center gap-4"
            >
              <Link to="/kontakt" className="cta-primary">
                Kontaktiraj nas
              </Link>
              <Link to="/kontakt" className="cta-secondary">
                Pridobi ponudbo
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default Storitve;
