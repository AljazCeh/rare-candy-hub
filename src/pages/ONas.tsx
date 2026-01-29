import { motion } from "framer-motion";
import { Layout } from "@/components/Layout";
import { Link } from "react-router-dom";
import { Users, Heart, Target, Shield, Sparkles, Award } from "lucide-react";

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

const values = [
  {
    icon: Heart,
    title: "Strast do TCG",
    description:
      "Naša ljubezen do zbirateljskih iger kart je temelj vsega, kar počnemo.",
  },
  {
    icon: Users,
    title: "Skupnost",
    description:
      "Gradimo prostor, kjer se igralci povezujejo in rastejo skupaj.",
  },
  {
    icon: Shield,
    title: "Varnost",
    description:
      "Ustvarjamo vključujoče okolje, kjer so vsi dobrodošli.",
  },
  {
    icon: Target,
    title: "Kakovost",
    description:
      "Prizadevamo si za profesionalno organizacijo in vrhunsko izkušnjo.",
  },
];

const timeline = [
  {
    year: "2023",
    title: "Ideja se rodi",
    description:
      "Skupina TCG navdušencev v Mariboru spozna, da mestu manjka pravi prostor za skupnost.",
  },
  {
    year: "2024",
    title: "Rare Candy Center nastaja",
    description:
      "Začnemo z načrtovanjem prostora in gradnjo skupnosti okoli projekta.",
  },
  {
    year: "2025",
    title: "Odprtje vrat",
    description:
      "Rare Candy Center – Play & Chill odpre svoja vrata mariborski TCG skupnosti.",
  },
];

const ONas = () => {
  return (
    <Layout
      title="O nas | Rare Candy Center"
      description="Spoznaj ekipo za Rare Candy Center – TCG navdušence, ki gradijo prostor za skupnost v Mariboru."
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
              O nas
            </motion.span>
            <motion.h1
              variants={fadeInUp}
              className="text-4xl md:text-5xl font-bold text-foreground mb-6"
            >
              Ekipa TCG navdušencev
            </motion.h1>
            <motion.p
              variants={fadeInUp}
              className="text-lg md:text-xl text-muted-foreground"
            >
              Za Rare Candy Center stoji skupina predanih ljubiteljev TCG iger,
              ki so se povezali z enim ciljem: ustvariti prostor v Mariboru,
              kjer lahko skupnost raste, se uči in skupaj uživa v igri.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Story */}
      <section className="py-20 md:py-28 bg-muted/20">
        <div className="section-container">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            <motion.div variants={fadeInUp} className="max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6 text-center">
                Naša zgodba
              </h2>
              <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                Rare Candy Center je nastal iz preprostega spoznanja: Maribor
                potrebuje več kot le trgovino z kartami. Potrebuje prostor, kjer
                se lahko igralci srečajo, učijo drug od drugega in gradijo
                prijateljstva skozi skupno strast.
              </p>
              <p className="text-muted-foreground text-lg leading-relaxed">
                Ime smo izbrali z mislijo na tiste trenutke v igri, ko pravilna
                karta spremeni vse – kot "Rare Candy" v Pokémonu. Želimo biti
                tisti pospeševalec za lokalno TCG skupnost.
              </p>
            </motion.div>

            {/* Mission Card */}
            <motion.div
              variants={fadeInUp}
              className="glass-card p-8 md:p-12 max-w-4xl mx-auto"
            >
              <div className="flex flex-col md:flex-row items-start gap-6">
                <div className="p-4 rounded-xl bg-gradient-neon shrink-0">
                  <Sparkles className="w-8 h-8 text-foreground" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-foreground mb-4">
                    Naše poslanstvo
                  </h3>
                  <p className="text-muted-foreground text-lg">
                    Ustvariti najlepši prostor za TCG skupnost v Sloveniji –
                    prostor, ki združuje igralce vseh starosti in ravni
                    izkušenj. Prostor, kjer se začetniki počutijo dobrodošle,
                    veterani pa najdejo izzive in nove prijatelje.
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Values */}
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
              Naše vrednote
            </motion.h2>
            <motion.p
              variants={fadeInUp}
              className="text-muted-foreground text-center mb-12 max-w-2xl mx-auto"
            >
              Principi, ki nas vodijo pri vsem, kar počnemo.
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
                  <div className="inline-flex p-3 rounded-xl bg-primary/30 mb-4">
                    <value.icon className="w-6 h-6 text-gold" />
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

      {/* Timeline */}
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
              className="text-3xl md:text-4xl font-bold text-foreground text-center mb-12"
            >
              Kako je nastalo
            </motion.h2>

            <motion.div
              variants={staggerContainer}
              className="max-w-3xl mx-auto"
            >
              {timeline.map((item, index) => (
                <motion.div
                  key={item.year}
                  variants={fadeInUp}
                  className="relative pl-8 pb-12 last:pb-0 border-l-2 border-secondary/30"
                >
                  <div className="absolute left-0 top-0 w-4 h-4 rounded-full bg-secondary -translate-x-[9px]" />
                  <span className="inline-block text-secondary font-bold text-lg mb-2">
                    {item.year}
                  </span>
                  <h3 className="text-xl font-semibold text-foreground mb-2">
                    {item.title}
                  </h3>
                  <p className="text-muted-foreground">{item.description}</p>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Team Card */}
      <section className="py-20 md:py-28">
        <div className="section-container">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="glass-card p-8 md:p-12 max-w-4xl mx-auto text-center"
          >
            <motion.div
              variants={fadeInUp}
              className="inline-flex p-4 rounded-xl bg-gradient-neon mb-6"
            >
              <Award className="w-8 h-8 text-foreground" />
            </motion.div>
            <motion.h2
              variants={fadeInUp}
              className="text-3xl font-bold text-foreground mb-4"
            >
              Delta9 Factory
            </motion.h2>
            <motion.p
              variants={fadeInUp}
              className="text-muted-foreground text-lg mb-6"
            >
              Rare Candy Center je projekt podjetja Delta9 Factory, Bogdan Knez
              s.p. Z več letnimi izkušnjami v organizaciji dogodkov in strasti
              do TCG kulture gradimo prostor, ki si ga skupnost zasluži.
            </motion.p>
            <motion.div variants={fadeInUp}>
              <Link to="/kontakt" className="cta-primary inline-block">
                Spoznaj nas osebno
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default ONas;
