interface HeaderProps {
  title: string;
  subtitle?: string;
}

export function Header({ title, subtitle }: HeaderProps) {
  return (
    <div className="mb-6">
      <h1 className="text-2xl font-bold text-black mb-1">{title}</h1>
      {subtitle && <p className="text-sm text-neutral-600">{subtitle}</p>}
    </div>
  );
}
