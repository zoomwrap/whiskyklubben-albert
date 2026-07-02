type PageShellProps = {
  children: React.ReactNode;
  variant?: "light" | "hero" | "review";
  className?: string;
};

const variants = {
  light: "bg-stone-50 px-6 py-16 text-stone-900",
  hero: "flex items-center justify-center bg-[radial-gradient(circle_at_top,rgba(245,158,11,0.2),transparent_45%),linear-gradient(135deg,#fff7ed_0%,#fef3c7_50%,#f5f5f4_100%)] px-6 py-16 text-stone-900",
  review: "bg-stone-800 px-4 py-10",
};

export function PageShell({
  children,
  variant = "light",
  className = "",
}: PageShellProps) {
  return (
    <main className={["min-h-screen", variants[variant], className].filter(Boolean).join(" ")}>
      {children}
    </main>
  );
}
