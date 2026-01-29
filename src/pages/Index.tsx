import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Layout } from "@/components/Layout";
import {
  Gamepad2,
  Trophy,
  Sofa,
  Users,
  Heart,
  Shield,
  Calendar,
  Star,
  ShoppingBag,
  Clock,
  MapPin,
  ArrowRight,
} from "lucide-react";
import heroBackground from "@/assets/hero-background.jpg";
import eventTournament from "@/assets/event-tournament.jpg";
import loungeChill from "@/assets/lounge-chill.jpg";
import communityNight from "@/assets/community-night.jpg";

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

const highlights = [
  { icon: Gamepad2, title: "Urejen igralni prostor" },
  { icon: Trophy, title: "Turnirji in dogodki" },
  { icon: Sofa, title: "Play & Chill lounge" },
];

const values = [
  {
    icon: Users,
    title: "Močna skupnost",
    description: "Postani del rastoče TCG skupnosti v Mariboru.",
  },
  {
    icon: Heart,
    title: "Prijazno in varno okolje",
    description: "Prostor, kjer so dobrodošli vsi – začetniki in veterani.",
  },
  {
    icon: Calendar,
    title: "Redna organizacija dogodkov",
    description: "Turnirji, druženja in posebni dogodki vsak teden.",
  },
  {
    icon: Star,
    title: "Profesionalen odnos",
    description: "Strokovno svetovanje in pomoč pri razvoju kolekcije.",
  },
];

const services = [
  {
    icon: Trophy,
    title: "Igranje in turnirji",
    description: "Organizirani turnirji in prosto igranje za vse ravni.",
  },
  {
    icon: Sofa,
    title: "Play & Chill Lounge",
    description: "Udoben prostor za sproščeno igranje in druženje.",
  },
  {
    icon: Users,
    title: "Skupnostni dogodki",
    description: "Pack openingi, družabni večeri in tematski dogodki.",
  },
  {
    icon: Shield,
    title: "Svetovanje",
    description: "Pomoč začetnikom in nasvet za razvoj vaše kolekcije.",
  },
];

const events = [
  {
    image: eventTournament,
    title: "TCG Community Nights",
    description: "Tedenski večeri za ljubitelje TCG iger.",
  },
  {
    image: loungeChill,
    title: "Turnirski vikendi",
    description: "Konkurenčno igranje z nagradami.",
  },
  {
    image: communityNight,
    title: "Pack Opening Events",
    description: "Skupinsko odpiranje novih kolekcij.",
  },
];

const Index = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center pt-20">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${heroBackground})` }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-background/90 via-background/70 to-background" />
        </div>

        <div className="section-container relative z-10">
  <motion.div
    initial="hidden"
    animate="visible"
    variants={staggerContainer}
    className="max-w-4xl text-white"
  >
   <motion.h1
  variants={fadeInUp}
  className="relative inline-block text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight text-white"
>
  Tvoj TCG center v Mariboru –{" "}
  <span className="text-secondary">
    igraj, zbiraj in uživaj.
  </span>
</motion.h1>

    <motion.p
      variants={fadeInUp}
      className="text-xl md:text-2xl text-white/90 mb-4"
    >
      Za vse, ki želijo več kot le trgovino s kartami: prostor za igro,
      skupnost in doživetje.
    </motion.p>

    <motion.p
      variants={fadeInUp}
      className="text-base md:text-lg text-white/70 mb-8 max-w-2xl"
    >
      Rare Candy Center je sodoben prostor za vse ljubitelje TCG iger v
      Mariboru. Ne glede na to, ali si izkušen igralec ali šele
      začenjaš, te čaka prijazna skupnost, urejen igralni prostor in
      redno organizirani dogodki.
    </motion.p>

    <motion.div
      variants={fadeInUp}
      className="flex flex-col sm:flex-row gap-4 mb-12"
    >
      <Link to="/kontakt" className="cta-primary text-center">
        Kontaktiraj nas
      </Link>
      <Link to="/o-nas" className="cta-secondary text-center">
        Pridruži se skupnosti
      </Link>
            </motion.div>

            {/* Highlights */}
            <motion.div
              variants={staggerContainer}
              className="grid grid-cols-1 sm:grid-cols-3 gap-4"
            >
              {highlights.map((item) => (
                <motion.div
                  key={item.title}
                  variants={fadeInUp}
                  className="glass-card p-4 flex items-center gap-3 card-hover"
                >
                  <div className="p-2 rounded-lg bg-secondary/20">
                    <item.icon className="w-6 h-6 text-secondary" />
                  </div>
                  <span className="font-medium text-foreground">
                    {item.title}
                  </span>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Why Rare Candy Center */}
      <section className="py-20 md:py-28">
        <div className="section-container">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            <motion.h2
              variants={fadeInUp}
              className="text-3xl md:text-4xl font-bold text-foreground text-center mb-4"
            >
              Zakaj Rare Candy Center?
            </motion.h2>
            <motion.p
              variants={fadeInUp}
              className="text-muted-foreground text-center mb-12 max-w-2xl mx-auto"
            >
              Več kot le prostor za igranje – smo skupnost, ki živi za TCG
              kulturo.
            </motion.p>

            <motion.div
              variants={staggerContainer}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
            >
              {values.map((value) => (
                <motion.div
                  key={value.title}
                  variants={fadeInUp}
                  className="glass-card p-6 text-center card-hover"
                >
                  <div className="inline-flex p-3 rounded-xl bg-gradient-neon mb-4">
                    <value.icon className="w-6 h-6 text-foreground" />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">
                    {value.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {value.description}
                  </p>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-20 md:py-28 bg-muted/20">
        <div className="section-container">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            <motion.h2
              variants={fadeInUp}
              className="text-3xl md:text-4xl font-bold text-foreground text-center mb-4"
            >
              Kaj ponujamo
            </motion.h2>
            <motion.p
              variants={fadeInUp}
              className="text-muted-foreground text-center mb-12 max-w-2xl mx-auto"
            >
              Vse, kar potrebuješ za popolno TCG izkušnjo.
            </motion.p>

            <motion.div
              variants={staggerContainer}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8"
            >
              {services.map((service) => (
                <motion.div
                  key={service.title}
                  variants={fadeInUp}
                  className="glass-card p-6 card-hover"
                >
                  <div className="p-3 rounded-lg bg-primary/30 inline-block mb-4">
                    <service.icon className="w-6 h-6 text-gold" />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">
                    {service.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {service.description}
                  </p>
                </motion.div>
              ))}
            </motion.div>

            <motion.div variants={fadeInUp} className="text-center">
              <Link
                to="/storitve"
                className="inline-flex items-center gap-2 text-secondary font-medium hover:gap-3 transition-all"
              >
                Oglej si vse storitve
                <ArrowRight className="w-4 h-4" />
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Events Section */}
      <section className="py-20 md:py-28">
        <div className="section-container">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            <motion.h2
              variants={fadeInUp}
              className="text-3xl md:text-4xl font-bold text-foreground text-center mb-4"
            >
              Dogodki & Utrinki
            </motion.h2>
            <motion.p
              variants={fadeInUp}
              className="text-muted-foreground text-center mb-12 max-w-2xl mx-auto"
            >
              Redno organiziramo dogodke za skupnost. Spremljaj nas na družbenih
              omrežjih za najnovejše termine!
            </motion.p>

            <motion.div
              variants={staggerContainer}
              className="grid grid-cols-1 md:grid-cols-3 gap-6"
            >
              {events.map((event) => (
                <motion.div
                  key={event.title}
                  variants={fadeInUp}
                  className="glass-card overflow-hidden card-hover group"
                >
                  <div className="aspect-video overflow-hidden">
                    <img
                      src={event.image}
                      alt={event.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-5">
                    <h3 className="text-lg font-semibold text-foreground mb-2">
                      {event.title}
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      {event.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Store Coming Soon */}
      <section className="py-20 md:py-28 bg-muted/20">
        <div className="section-container">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="text-center max-w-2xl mx-auto"
          >
            <motion.div
              variants={fadeInUp}
              className="inline-flex p-4 rounded-2xl bg-primary/30 mb-6"
            >
              <ShoppingBag className="w-8 h-8 text-gold" />
            </motion.div>
            <motion.h2
              variants={fadeInUp}
              className="text-3xl md:text-4xl font-bold text-foreground mb-4"
            >
              Trgovina – kmalu
            </motion.h2>
            <motion.p
              variants={fadeInUp}
              className="text-muted-foreground mb-6"
            >
              Spletna trgovina z TCG izdelki je v pripravi. Za zdaj nas lahko
              kontaktiraš za povpraševanje o izdelkih ali nas obiskaš po
              predhodnem dogovoru.
            </motion.p>
            <motion.div variants={fadeInUp}>
              <Link to="/kontakt" className="cta-primary inline-block">
                Pošlji povpraševanje
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Contact Strip */}
      <section className="py-16 md:py-20 bg-gradient-card neon-glow">
        <div className="section-container">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="flex flex-col lg:flex-row items-center justify-between gap-8"
          >
            <motion.div variants={fadeInUp}>
              <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
                Pripravljeni na igro?
              </h2>
              <div className="flex flex-col sm:flex-row gap-4 text-muted-foreground">
                <div className="flex items-center gap-2">
                  <Clock className="w-5 h-5 text-secondary" />
                  <span>Pon – Ned: 10:00 – 20:00</span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="w-5 h-5 text-secondary" />
                  <span>Maribor, Slovenija</span>
                </div>
              </div>
            </motion.div>

            <motion.div
              variants={fadeInUp}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Link to="/kontakt" className="cta-primary text-center">
                Kontaktiraj nas
              </Link>
              <Link
                to="/kontakt"
                className="cta-secondary text-center"
              >
                Pridobi ponudbo
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
