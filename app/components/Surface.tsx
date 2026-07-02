type SurfaceProps = {
  children: React.ReactNode;
  className?: string;
  tone?: "light" | "dark";
};

const tones = {
  light: "border-stone-200 bg-white text-stone-900",
  dark: "border-stone-200 bg-stone-950 text-stone-100",
};

export function Surface({ children, className = "", tone = "light" }: SurfaceProps) {
  return (
    <section className={["rounded-4xl border p-8 shadow-xl", tones[tone], className].filter(Boolean).join(" ")}>
      {children}
    </section>
  );
}
