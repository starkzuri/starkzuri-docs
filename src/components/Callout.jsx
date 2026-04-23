const STYLES = {
  info:    { border: "#2f7cf6", bg: "rgba(47,124,246,0.07)",  icon: "ℹ" },
  tip:     { border: "#19e87c", bg: "rgba(25,232,124,0.07)",  icon: "✦" },
  warning: { border: "#f5a623", bg: "rgba(245,166,35,0.07)",  icon: "⚠" },
  danger:  { border: "#f03a5f", bg: "rgba(240,58,95,0.07)",   icon: "✕" },
};

export default function Callout({ type = "info", children }) {
  const s = STYLES[type];
  return (
    <div style={{
      borderLeft: `2px solid ${s.border}`,
      background: s.bg,
      borderRadius: "0 8px 8px 0",
      padding: "14px 18px",
      marginBottom: 24,
      display: "flex",
      gap: 12,
      alignItems: "flex-start",
    }}>
      <span style={{ flexShrink: 0, fontSize: 14, marginTop: 1 }}>{s.icon}</span>
      <div style={{ fontSize: 14, color: "#8893b0", fontWeight: 300, lineHeight: 1.7 }}>
        {children}
      </div>
    </div>
  );
}
