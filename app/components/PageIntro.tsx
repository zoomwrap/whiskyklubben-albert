type PageIntroProps = {
  eyebrow: string;
  title: string;
  children: React.ReactNode;
  titleClassName?: string;
};

export function PageIntro({
  eyebrow,
  title,
  children,
  titleClassName = "text-4xl",
}: PageIntroProps) {
  return (
    <>
      <p className="text-sm font-semibold uppercase tracking-[0.3em] text-amber-700">
        {eyebrow}
      </p>
      <h1 className={["mt-3 font-semibold", titleClassName].join(" ")}>{title}</h1>
      <p className="mt-4 text-lg leading-8 text-stone-700">{children}</p>
    </>
  );
}
