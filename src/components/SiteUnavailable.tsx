import { motion } from "framer-motion";

const SiteUnavailable = () => {
  return (
    <div
      className="relative min-h-screen flex items-center justify-center px-4 overflow-hidden"
      style={{ background: "linear-gradient(135deg, hsl(280, 55%, 18%) 0%, hsl(0, 0%, 6%) 100%)" }}
    >
      {/* Decorative blurred glow blobs */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full blur-3xl opacity-20"
          style={{ background: "hsl(324, 53%, 48%)" }}
        />
        <div
          className="absolute top-1/4 right-1/4 w-64 h-64 rounded-full blur-3xl opacity-10"
          style={{ background: "hsl(280, 55%, 50%)" }}
        />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 28 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.65, ease: "easeOut" }}
        className="relative text-center max-w-lg w-full"
      >
        {/* Brand */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.15, duration: 0.5 }}
          className="mb-10"
        >
          <span
            className="text-xl md:text-2xl font-bold"
            style={{ color: "hsl(0, 0%, 100%)" }}
          >
            Rare Candy Center
          </span>
          <span
            className="ml-2 text-xs font-normal"
            style={{ color: "rgba(255,255,255,0.45)" }}
          >
            Play &amp; Chill
          </span>
        </motion.div>

        {/* Neon divider */}
        <motion.div
          initial={{ scaleX: 0, opacity: 0 }}
          animate={{ scaleX: 1, opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.55, ease: "easeOut" }}
          className="h-px w-14 mx-auto mb-10 rounded-full"
          style={{ background: "linear-gradient(90deg, hsl(324, 53%, 48%) 0%, hsl(280, 55%, 45%) 100%)" }}
        />

        {/* Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.55 }}
          className="text-2xl md:text-3xl lg:text-4xl font-bold mb-5 leading-tight"
          style={{ color: "hsl(0, 0%, 100%)" }}
        >
          Spletna stran trenutno ni na voljo
        </motion.h1>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.55, duration: 0.5 }}
          className="text-base md:text-lg"
          style={{ color: "rgba(255,255,255,0.55)" }}
        >
          Za več informacij se obrnite na lastnika spletne strani.
        </motion.p>
      </motion.div>
    </div>
  );
};

export default SiteUnavailable;
