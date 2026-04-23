const COLORS = {
  blue:   { bg: "rgba(47,124,246,0.1)",  color: "#5b9fff" },
  green:  { bg: "rgba(25,232,124,0.1)",  color: "#19e87c" },
  amber:  { bg: "rgba(245,166,35,0.1)",  color: "#f5a623" },
  purple: { bg: "rgba(110,60,245,0.12)", color: "#a78bfa" },
  red:    { bg: "rgba(240,58,95,0.1)",   color: "#f03a5f" },
};

export default function BadgePill({ label, color = "blue" }) {
  const c = COLORS[color] || COLORS.blue;
  return (
    <span style={{
      fontFamily: "DM Mono, monospace",
      fontSize: 10,
      fontWeight: 500,
      letterSpacing: "0.1em",
      textTransform: "uppercase",
      padding: "4px 10px",
      borderRadius: 6,
      background: c.bg,
      color: c.color,
    }}>
      {label}
    </span>
  );
}
