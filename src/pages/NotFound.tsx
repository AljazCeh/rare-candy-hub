import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Layout } from "@/components/Layout";
import { Home, ArrowLeft } from "lucide-react";

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

const NotFound = () => {
  return (
    <Layout
      title="404 – Stran ni najdena | Rare Candy Center"
      description="Stran, ki jo iščeš, ne obstaja. Vrni se na domačo stran."
    >
      <section className="min-h-screen flex items-center justify-center pt-20">
        <div className="section-container">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="text-center max-w-xl mx-auto"
          >
            <motion.div
              variants={fadeInUp}
              className="text-8xl md:text-9xl font-bold gradient-text mb-6"
            >
              404
            </motion.div>
            <motion.h1
              variants={fadeInUp}
              className="text-2xl md:text-3xl font-bold text-foreground mb-4"
            >
              Ojej, ta stran ne obstaja
            </motion.h1>
            <motion.p
              variants={fadeInUp}
              className="text-muted-foreground mb-8"
            >
              Izgleda, da si zašel na napačno mesto. Ne skrbi, vrni se na
              domačo stran in nadaljuj z raziskovanjem.
            </motion.p>
            <motion.div
              variants={fadeInUp}
              className="flex flex-col sm:flex-row justify-center gap-4"
            >
              <Link
                to="/"
                className="cta-primary inline-flex items-center justify-center gap-2"
              >
                <Home className="w-4 h-4" />
                Na domačo stran
              </Link>
              <button
                onClick={() => window.history.back()}
                className="cta-secondary inline-flex items-center justify-center gap-2"
              >
                <ArrowLeft className="w-4 h-4" />
                Nazaj
              </button>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default NotFound;
