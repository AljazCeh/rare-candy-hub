export default function SectionDivider() {
  return (
    <div className="relative h-12 md:h-16 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#3A0F4A]/30 to-transparent" />
      <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 h-px bg-gradient-to-r from-transparent via-[#C03B9B]/40 to-transparent" />
    </div>
  );
}

