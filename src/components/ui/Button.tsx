export default function Button({
  text,
  onClick,
  variant = "primary",
  disabled = false,
}: {
  text: string;
  onClick: () => void;
  variant?: "primary" | "secondary" | "danger";
  disabled?: boolean;
}) {
  const base = {
    fontFamily: "'Space Grotesk', 'Inter', sans-serif",
    fontSize: "14px",
    fontWeight: 600,
    letterSpacing: "0.01em",
    padding: "10px 22px",
    borderRadius: "8px",
    border: "1.5px solid transparent",
    cursor: disabled ? "not-allowed" : "pointer",
    opacity: disabled ? 0.45 : 1,
    transition:
      "transform 120ms ease, box-shadow 120ms ease, background 120ms ease",
    outline: "none",
  };

  const variants = {
    primary: {
      background: "#1F4B43",
      color: "#F4F1EA",
      border: "1.5px solid #1F4B43",
    },
    secondary: {
      background: "transparent",
      color: "#1F4B43",
      border: "1.5px solid #1F4B43",
    },
    danger: {
      background: "#B3401D",
      color: "#F4F1EA",
      border: "1.5px solid #B3401D",
    },
  };

  const style = { ...base, ...(variants[variant] || variants.primary) };

  return (
    <button
      style={style}
      onClick={disabled ? undefined : onClick}
      disabled={disabled}
      onMouseEnter={(e) => {
        if (!disabled) e.currentTarget.style.transform = "translateY(-1px)";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = "translateY(0)";
      }}
      onFocus={(e) => {
        e.currentTarget.style.boxShadow = "0 0 0 3px rgba(31,75,67,0.25)";
      }}
      onBlur={(e) => {
        e.currentTarget.style.boxShadow = "none";
      }}
    >
      {text}
    </button>
  );
}
