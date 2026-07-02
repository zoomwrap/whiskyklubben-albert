type ContentStackProps = {
  children: React.ReactNode;
  className?: string;
};

export function ContentStack({ children, className = "" }: ContentStackProps) {
  return (
    <div className={["mx-auto flex max-w-5xl flex-col gap-6", className].filter(Boolean).join(" ")}>
      {children}
    </div>
  );
}
