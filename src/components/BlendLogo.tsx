interface Props {
  showTagline?: boolean;
  className?: string;
  variant?: "default" | "light";
}

export function BlendLogo({ showTagline = true, className = "", variant = "default" }: Props) {
  const stroke = variant === "light" ? "white" : "var(--teal)";
  const text = variant === "light" ? "text-white" : "text-navy";
  const tag = variant === "light" ? "text-white/70" : "text-muted-foreground";

  return (
    <div className={`flex items-center gap-2.5 ${className}`}>
      <svg width="38" height="38" viewBox="0 0 40 40" fill="none" aria-hidden="true">
        <rect x="2" y="2" width="36" height="36" rx="9" stroke={stroke} strokeWidth="2.2" />
        <circle cx="14" cy="16" r="3.2" fill={stroke} />
        <circle cx="26" cy="16" r="3.2" fill={stroke} opacity="0.55" />
        <circle cx="20" cy="26" r="3.2" fill={stroke} />
        <path d="M14 16 L20 26 L26 16" stroke={stroke} strokeWidth="1.6" strokeLinecap="round" />
      </svg>
      <div className="flex flex-col leading-none">
        <span className={`font-display text-[1.35rem] font-extrabold tracking-tight ${text}`}>
          Blend
        </span>
        {showTagline && (
          <span className={`text-[0.65rem] font-medium tracking-wide ${tag} mt-0.5`}>
            by Scimplify
          </span>
        )}
      </div>
    </div>
  );
}
