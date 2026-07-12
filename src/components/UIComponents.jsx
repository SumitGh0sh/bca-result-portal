import React from "react";

export const Pill = ({ children, color = "#f59e0b", style = {} }) => (
  <span style={{
    display: "inline-flex",
    alignItems: "center",
    padding: "2px 8px",
    borderRadius: "9999px",
    fontSize: 11,
    fontWeight: 600,
    letterSpacing: ".02em",
    background: color + "15",
    border: `1px solid ${color}30`,
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
      boxShadow: "0 1px 3px 0 rgba(0, 0, 0, 0.05), 0 1px 2px -1px rgba(0, 0, 0, 0.05)",
      overflow: "hidden",
      ...style
    }}
    {...props}
  >
    {children}
  </div>
);

export const Label = ({ children, theme, style = {} }) => (
  <label style={{
    display: "block",
    fontSize: 12,
    fontWeight: 600,
    color: theme.muted,
    marginBottom: 6,
    textTransform: "uppercase",
    letterSpacing: ".05em",
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
      padding: "10px 14px",
      background: theme.surface,
      border: `1px solid ${theme.border}`,
      borderRadius: 8,
      color: theme.text,
      fontSize: 14,
      outline: "none",
      boxSizing: "border-box",
      fontFamily: "inherit",
      transition: "all 0.2s ease",
      ...style
    }}
    {...props}
  />
);

export const Select = ({ theme, children, style = {}, className = "shadcn-select", ...props }) => (
  <select
    className={className}
    style={{
      padding: "10px 14px",
      background: theme.surface,
      border: `1px solid ${theme.border}`,
      borderRadius: 8,
      color: theme.text,
      fontSize: 14,
      outline: "none",
      cursor: "pointer",
      fontFamily: "inherit",
      boxSizing: "border-box",
      transition: "all 0.2s ease",
      ...style
    }}
    {...props}
  >
    {children}
  </select>
);

export const Button = ({ theme, children, variant = "primary", style = {}, ...props }) => {
  let bg = theme.gold;
  let fg = theme.bg === "#090514" ? "#090514" : "#ffffff";
  let border = `1px solid ${theme.gold}`;

  if (variant === "secondary") {
    bg = theme.raised;
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
        e.currentTarget.style.filter = "brightness(1.05)";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.filter = "none";
      }}
      style={{
        padding: "10px 16px",
        borderRadius: 8,
        border,
        background: bg,
        color: fg,
        fontSize: 13,
        fontWeight: 600,
        cursor: "pointer",
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        gap: 8,
        fontFamily: "inherit",
        transition: "all 0.2s ease",
        ...style
      }}
      {...props}
    >
      {children}
    </button>
  );
};