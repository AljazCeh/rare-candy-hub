import { useState } from "react";
import { motion } from "framer-motion";
import { Layout } from "@/components/Layout";
import {
  Mail,
  Phone,
  MapPin,
  Clock,
  Send,
  CheckCircle,
  AlertCircle,
} from "lucide-react";

import SectionDivider from "@/components/SectionDivider";

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

const contactInfo = [
  {
    icon: Phone,
    label: "Telefon",
    value: "+386 XX XXX XXX",
    href: "tel:+386XXXXXXXX",
  },
  {
    icon: Mail,
    label: "E-pošta",
    value: "info@rarecandycenter.si",
    href: "mailto:info@rarecandycenter.si",
  },
  {
    icon: MapPin,
    label: "Naslov",
    value: "Maribor, Slovenija",
    href: "#",
  },
  {
    icon: Clock,
    label: "Odpiralni čas",
    value: "Pon – Ned: 10:00 – 20:00",
    href: null,
  },
];

interface FormData {
  ime: string;
  email: string;
  sporocilo: string;
}

interface FormErrors {
  ime?: string;
  email?: string;
  sporocilo?: string;
}

const Kontakt = () => {
  const [formData, setFormData] = useState<FormData>({
    ime: "",
    email: "",
    sporocilo: "",
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">(
    "idle"
  );

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.ime.trim()) {
      newErrors.ime = "Ime je obvezno.";
    } else if (formData.ime.trim().length > 100) {
      newErrors.ime = "Ime mora biti krajše od 100 znakov.";
    }

    if (!formData.email.trim()) {
      newErrors.email = "E-pošta je obvezna.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Vnesite veljavno e-poštni naslov.";
    } else if (formData.email.trim().length > 255) {
      newErrors.email = "E-pošta mora biti krajša od 255 znakov.";
    }

    if (!formData.sporocilo.trim()) {
      newErrors.sporocilo = "Sporočilo je obvezno.";
    } else if (formData.sporocilo.trim().length > 1000) {
      newErrors.sporocilo = "Sporočilo mora biti krajše od 1000 znakov.";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) return;

    setIsSubmitting(true);
    setSubmitStatus("idle");

    // Placeholder for EmailJS or similar service
    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1000));
      setSubmitStatus("success");
      setFormData({ ime: "", email: "", sporocilo: "" });
    } catch {
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  return (
    <Layout
      title="Kontakt | Rare Candy Center"
      description="Kontaktiraj nas za vprašanja, rezervacije ali sodelovanje. Odgovorili ti bomo v najkrajšem možnem času."
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
              Kontakt
            </motion.span>
            <motion.h1
              variants={fadeInUp}
              className="text-4xl md:text-5xl font-bold text-foreground mb-6"
            >
              Stopimo v stik
            </motion.h1>
            <motion.p
              variants={fadeInUp}
              className="text-lg md:text-xl text-muted-foreground"
            >
              Imaš vprašanje, predlog ali želiš sodelovati z nami? Piši nam in
              odgovorili ti bomo v najkrajšem možnem času.
            </motion.p>
          </motion.div>
        </div>
      </section>
<SectionDivider />
      {/* Contact Section */}
      <section className="py-20 md:py-28 bg-muted/20">
        <div className="section-container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Form */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={staggerContainer}
            >
              <motion.div variants={fadeInUp} className="glass-card p-8">
                <h2 className="text-2xl font-bold text-foreground mb-6">
                  Pošlji sporočilo
                </h2>

                {submitStatus === "success" && (
                  <div className="flex items-center gap-3 p-4 rounded-lg bg-green-500/20 text-green-400 mb-6">
                    <CheckCircle className="w-5 h-5 shrink-0" />
                    <span>
                      Hvala za sporočilo! Odgovorili ti bomo kmalu.
                    </span>
                  </div>
                )}

                {submitStatus === "error" && (
                  <div className="flex items-center gap-3 p-4 rounded-lg bg-destructive/20 text-destructive mb-6">
                    <AlertCircle className="w-5 h-5 shrink-0" />
                    <span>Prišlo je do napake. Prosimo, poskusi znova.</span>
                  </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label
                      htmlFor="ime"
                      className="block text-sm font-medium text-foreground mb-2"
                    >
                      Ime
                    </label>
                    <input
                      type="text"
                      id="ime"
                      name="ime"
                      value={formData.ime}
                      onChange={handleChange}
                      className={`w-full px-4 py-3 rounded-lg bg-input border ${
                        errors.ime ? "border-destructive" : "border-border"
                      } text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-secondary/50 transition-all`}
                      placeholder="Tvoje ime"
                    />
                    {errors.ime && (
                      <p className="mt-2 text-sm text-destructive">
                        {errors.ime}
                      </p>
                    )}
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-foreground mb-2"
                    >
                      E-pošta
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className={`w-full px-4 py-3 rounded-lg bg-input border ${
                        errors.email ? "border-destructive" : "border-border"
                      } text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-secondary/50 transition-all`}
                      placeholder="tvoj@email.si"
                    />
                    {errors.email && (
                      <p className="mt-2 text-sm text-destructive">
                        {errors.email}
                      </p>
                    )}
                  </div>

                  <div>
                    <label
                      htmlFor="sporocilo"
                      className="block text-sm font-medium text-foreground mb-2"
                    >
                      Sporočilo
                    </label>
                    <textarea
                      id="sporocilo"
                      name="sporocilo"
                      value={formData.sporocilo}
                      onChange={handleChange}
                      rows={5}
                      className={`w-full px-4 py-3 rounded-lg bg-input border ${
                        errors.sporocilo ? "border-destructive" : "border-border"
                      } text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-secondary/50 transition-all resize-none`}
                      placeholder="Tvoje sporočilo..."
                    />
                    {errors.sporocilo && (
                      <p className="mt-2 text-sm text-destructive">
                        {errors.sporocilo}
                      </p>
                    )}
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="cta-primary w-full flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? (
                      "Pošiljam..."
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        Pošlji
                      </>
                    )}
                  </button>
                </form>
              </motion.div>
            </motion.div>

            {/* Contact Info */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={staggerContainer}
              className="space-y-6"
            >
              <motion.h2
                variants={fadeInUp}
                className="text-2xl font-bold text-foreground"
              >
                Kontaktni podatki
              </motion.h2>

              <motion.div
                variants={staggerContainer}
                className="space-y-4"
              >
                {contactInfo.map((info) => (
                  <motion.div
                    key={info.label}
                    variants={fadeInUp}
                    className="glass-card p-5 flex items-start gap-4"
                  >
                    <div className="p-2 rounded-lg bg-secondary/20 shrink-0">
                      <info.icon className="w-5 h-5 text-secondary" />
                    </div>
                    <div>
                      <div className="text-sm text-muted-foreground mb-1">
                        {info.label}
                      </div>
                      {info.href ? (
                        <a
                          href={info.href}
                          className="text-foreground font-medium hover:text-secondary transition-colors"
                        >
                          {info.value}
                        </a>
                      ) : (
                        <span className="text-foreground font-medium">
                          {info.value}
                        </span>
                      )}
                    </div>
                  </motion.div>
                ))}
              </motion.div>

              {/* Map Placeholder */}
              <motion.div
                variants={fadeInUp}
                className="glass-card p-6 mt-8"
              >
                <h3 className="text-lg font-semibold text-foreground mb-4">
                  Lokacija
                </h3>
                <div className="aspect-video rounded-lg bg-muted/50 flex items-center justify-center border border-border/50">
                  <div className="text-center text-muted-foreground">
                    <MapPin className="w-8 h-8 mx-auto mb-2" />
                    <p className="text-sm">
                      Zemljevid bo prikazan, ko bo naslov potrjen.
                    </p>
                  </div>
                </div>
              </motion.div>

              {/* Business Info */}
              <motion.div
                variants={fadeInUp}
                className="glass-card p-6"
              >
                <h3 className="text-lg font-semibold text-foreground mb-3">
                  Podatki o podjetju
                </h3>
                <ul className="text-sm text-muted-foreground space-y-2">
                  <li>
                    <strong className="text-foreground">Podjetje:</strong>{" "}
                    Delta9 Factory, Bogdan Knez s.p.
                  </li>
                  <li>
                    <strong className="text-foreground">Projekt:</strong>{" "}
                    Rare Candy Center – Play & Chill
                  </li>
                  <li>
                    <strong className="text-foreground">Mesto:</strong> Maribor,
                    Slovenija
                  </li>
                </ul>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>
      <SectionDivider />
    </Layout>
  );
};

export default Kontakt;
