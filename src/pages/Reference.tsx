import { motion } from "framer-motion";
import { Layout } from "@/components/Layout";
import { Link } from "react-router-dom";
import { Star, Quote, Calendar, Users, Trophy, Camera } from "lucide-react";
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

const eventGallery = [
  {
    image: eventTournament,
    title: "TCG Community Nights",
    description: "Tedenski večeri za ljubitelje zbirateljskih iger kart.",
    category: "Dogodek",
  },
  {
    image: loungeChill,
    title: "Turnirski vikendi",
    description: "Konkurenčno igranje z atraktivnimi nagradami.",
    category: "Turnir",
  },
  {
    image: communityNight,
    title: "Pack Opening Events",
    description: "Skupinsko odpiranje novih kolekcij in delitev sreče.",
    category: "Dogodek",
  },
  {
    image: eventTournament,
    title: "Začetniški delavnice",
    description: "Uvod v TCG svet za vse, ki šele začenjajo.",
    category: "Delavnica",
  },
  {
    image: loungeChill,
    title: "League Play",
    description: "Tedenska liga s stalnimi uvrstitvami.",
    category: "Liga",
  },
  {
    image: communityNight,
    title: "Posebni dogodki",
    description: "Premiere novih setov in praznična druženja.",
    category: "Posebno",
  },
];

const testimonials = [
  {
    name: "Luka M.",
    role: "Igralec TCG",
    content:
      "Končno imamo v Mariboru prostor, kjer se lahko srečamo in igramo! Atmosfera je super, ekipa prijazna.",
    rating: 5,
  },
  {
    name: "Sara K.",
    role: "Zbirateljica",
    content:
      "Všeč mi je, da so dobrodošli tudi začetniki. Brez predsodkov, vsi te sprejmejo in pomagajo.",
    rating: 5,
  },
  {
    name: "Matej P.",
    role: "Tekmovalni igralec",
    content:
      "Odlično organizirani turnirji in redno izvajanje dogodkov. To je bilo potrebno našemu mestu!",
    rating: 5,
  },
];

const stats = [
  { icon: Calendar, value: "50+", label: "Organiziranih dogodkov" },
  { icon: Users, value: "200+", label: "Članov skupnosti" },
  { icon: Trophy, value: "30+", label: "Turnirjev" },
];

const Reference = () => {
  return (
    <Layout
      title="Reference | Rare Candy Center"
      description="Oglej si utrinke iz naših dogodkov in preberi, kaj o nas pravijo obiskovalci."
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
              Reference & projekti
            </motion.span>
            <motion.h1
              variants={fadeInUp}
              className="text-4xl md:text-5xl font-bold text-foreground mb-6"
            >
              Utrinki iz naše skupnosti
            </motion.h1>
            <motion.p
              variants={fadeInUp}
              className="text-lg md:text-xl text-muted-foreground"
            >
              Oglej si, kaj vse se dogaja v Rare Candy Centru. Od turnirjev do
              sproščenih večerov – vsak dogodek ustvarja nepozabne spomine.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-12 bg-muted/20">
        <div className="section-container">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-3 gap-6"
          >
            {stats.map((stat) => (
              <motion.div
                key={stat.label}
                variants={fadeInUp}
                className="glass-card p-6 text-center"
              >
                <stat.icon className="w-8 h-8 text-secondary mx-auto mb-3" />
                <div className="text-3xl md:text-4xl font-bold text-foreground mb-1">
                  {stat.value}
                </div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Gallery */}
      <section className="py-20 md:py-28">
        <div className="section-container">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            <motion.div variants={fadeInUp} className="text-center mb-12">
              <div className="inline-flex p-3 rounded-xl bg-primary/30 mb-4">
                <Camera className="w-6 h-6 text-gold" />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Galerija dogodkov
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Utrinki iz naših turnirjev, družabnih večerov in posebnih
                dogodkov.
              </p>
            </motion.div>

            <motion.div
              variants={staggerContainer}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            >
              {eventGallery.map((item, index) => (
                <motion.div
                  key={`${item.title}-${index}`}
                  variants={fadeInUp}
                  className="glass-card overflow-hidden card-hover group"
                >
                  <div className="aspect-[4/3] overflow-hidden relative">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <span className="absolute top-3 left-3 text-xs font-medium px-2 py-1 rounded-full bg-background/80 text-foreground">
                      {item.category}
                    </span>
                  </div>
                  <div className="p-5">
                    <h3 className="text-lg font-semibold text-foreground mb-2">
                      {item.title}
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      {item.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 md:py-28 bg-muted/20">
        <div className="section-container">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            <motion.div variants={fadeInUp} className="text-center mb-12">
              <div className="inline-flex p-3 rounded-xl bg-gradient-neon mb-4">
                <Quote className="w-6 h-6 text-foreground" />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Kaj pravijo obiskovalci
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Mnenja naše rastoče skupnosti.
              </p>
            </motion.div>

            <motion.div
              variants={staggerContainer}
              className="grid grid-cols-1 md:grid-cols-3 gap-6"
            >
              {testimonials.map((testimonial) => (
                <motion.div
                  key={testimonial.name}
                  variants={fadeInUp}
                  className="glass-card p-6"
                >
                  <div className="flex gap-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star
                        key={i}
                        className="w-4 h-4 fill-gold text-gold"
                      />
                    ))}
                  </div>
                  <p className="text-foreground mb-6 italic">
                    "{testimonial.content}"
                  </p>
                  <div>
                    <div className="font-semibold text-foreground">
                      {testimonial.name}
                    </div>
                    <div className="text-sm text-muted-foreground">
                      {testimonial.role}
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>

            <motion.p
              variants={fadeInUp}
              className="text-center text-sm text-muted-foreground/60 mt-8"
            >
              * Pričevanja so ilustrativna in temeljijo na splošnih povratnih
              informacijah.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-20 bg-gradient-card neon-glow">
        <div className="section-container text-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            <motion.h2
              variants={fadeInUp}
              className="text-2xl md:text-3xl font-bold text-foreground mb-4"
            >
              Postani del naše zgodbe
            </motion.h2>
            <motion.p
              variants={fadeInUp}
              className="text-muted-foreground mb-8 max-w-xl mx-auto"
            >
              Pridruži se naši skupnosti in ustvari svoje spomine z nami.
            </motion.p>
            <motion.div variants={fadeInUp}>
              <Link to="/kontakt" className="cta-primary inline-block">
                Kontaktiraj nas
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default Reference;
