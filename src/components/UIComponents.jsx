
export const Pill = ({ children, color = "#5e6ad2", style = {} }) => (
  <span style={{
    display: "inline-flex",
    alignItems: "center",
    padding: "3px 10px",
    borderRadius: "9999px",
    fontSize: 11,
    fontWeight: 600,
    letterSpacing: "0.02em",
    background: color + "12",
    border: `1px solid ${color}25`,
    color,
    ...style
  }}>
    {children}
  </span>
);

export const Card = ({ children, theme, style = {}, className = "", ...props }) => (
  <div
    className={`animate-fade-in ${className}`}
    style={{
      background: theme.surface,
      border: `1px solid ${theme.border}`,
      borderRadius: 12,
      transition: "all 0.25s cubic-bezier(0.16, 1, 0.3, 1)",
      ...style
    }}
    onMouseEnter={(e) => {
      e.currentTarget.style.borderColor = theme.borderHi;
      e.currentTarget.style.background = theme.raised;
    }}
    onMouseLeave={(e) => {
      e.currentTarget.style.borderColor = theme.border;
      e.currentTarget.style.background = theme.surface;
    }}
    {...props}
  >
    {children}
  </div>
);

export const Label = ({ children, theme, style = {} }) => (
  <label style={{
    display: "block",
    fontSize: 11,
    fontWeight: 600,
    color: theme.muted,
    marginBottom: 6,
    textTransform: "uppercase",
    letterSpacing: "0.05em",
    ...style
  }}>
    {children}
  </label>
);

export const Input = ({ theme, style = {}, className = "shadcn-input", ...props }) => (
  <input
    className={className}
    style={{
      width: "100%",
      padding: "8px 12px",
      background: theme.surface,
      border: `1px solid ${theme.border}`,
      borderRadius: 8,
      color: theme.text,
      fontSize: 13,
      outline: "none",
      boxSizing: "border-box",
      fontFamily: "inherit",
      transition: "all 0.2s cubic-bezier(0.16, 1, 0.3, 1)",
      ...style
    }}
    {...props}
  />
);

export const Select = ({ theme, children, style = {}, className = "shadcn-select", ...props }) => (
  <select
    className={className}
    style={{
      padding: "8px 12px",
      background: theme.surface,
      border: `1px solid ${theme.border}`,
      borderRadius: 8,
      color: theme.text,
      fontSize: 13,
      outline: "none",
      cursor: "pointer",
      fontFamily: "inherit",
      boxSizing: "border-box",
      transition: "all 0.2s cubic-bezier(0.16, 1, 0.3, 1)",
      ...style
    }}
    {...props}
  >
    {children}
  </select>
);

export const Button = ({ theme, children, variant = "primary", style = {}, ...props }) => {
  let bg = theme.gold; // Lavender Accent
  let fg = "#ffffff";
  let border = "1px solid transparent";

  if (variant === "secondary") {
    bg = theme.surface;
    fg = theme.text;
    border = `1px solid ${theme.border}`;
  } else if (variant === "outline") {
    bg = "transparent";
    fg = theme.text;
    border = `1px solid ${theme.border}`;
  } else if (variant === "ghost") {
    bg = "transparent";
    fg = theme.muted;
    border = "1px solid transparent";
  }

  return (
    <button
      onMouseEnter={(e) => {
        if (variant === "primary") {
          e.currentTarget.style.background = theme.goldDim; // hover state (#828fff)
        } else if (variant === "secondary" || variant === "outline") {
          e.currentTarget.style.background = theme.raised;
          e.currentTarget.style.borderColor = theme.borderHi;
        } else if (variant === "ghost") {
          e.currentTarget.style.background = theme.raised;
          e.currentTarget.style.color = theme.text;
        }
      }}
      onMouseLeave={(e) => {
        if (variant === "primary") {
          e.currentTarget.style.background = theme.gold;
        } else if (variant === "secondary") {
          e.currentTarget.style.background = theme.surface;
          e.currentTarget.style.borderColor = theme.border;
        } else if (variant === "outline") {
          e.currentTarget.style.background = "transparent";
          e.currentTarget.style.borderColor = theme.border;
        } else if (variant === "ghost") {
          e.currentTarget.style.background = "transparent";
          e.currentTarget.style.color = theme.muted;
        }
      }}
      style={{
        padding: "8px 14px",
        borderRadius: 8,
        border,
        background: bg,
        color: fg,
        fontSize: 13,
        fontWeight: 500,
        cursor: "pointer",
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        gap: 6,
        fontFamily: "inherit",
        transition: "all 0.2s cubic-bezier(0.16, 1, 0.3, 1)",
        ...style
      }}
      {...props}
    >
      {children}
    </button>
  );
};