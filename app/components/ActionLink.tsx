import Link from "next/link";

type ActionLinkProps = {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "admin";
};

const variants = {
  primary: "bg-stone-950 text-white hover:bg-stone-800",
  secondary: "border border-stone-300 text-stone-800 hover:border-amber-400 hover:text-amber-700",
  admin: "border border-amber-300 text-amber-700 hover:bg-amber-50",
};

export function ActionLink({
  href,
  children,
  variant = "secondary",
}: ActionLinkProps) {
  return (
    <Link
      href={href}
      className={["rounded-full px-5 py-3 text-sm font-semibold transition", variants[variant]].join(" ")}
    >
      {children}
    </Link>
  );
}
