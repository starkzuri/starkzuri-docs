import BadgePill from "./BadgePill";

export default function PageHeader({ title, subtitle, badge, badgeColor }) {
  return (
    <div style={{ marginBottom: 36 }}>
      <BadgePill label={badge} color={badgeColor} />
      <h1 style={{
        fontSize: 48,
        fontWeight: 800,
        letterSpacing: "-0.03em",
        lineHeight: 1.1,
        marginTop: 14,
        marginBottom: 10,
        color: "#f0f2f8",
      }}>
        {title}
      </h1>
      <p style={{ fontSize: 16, fontWeight: 300, color: "#8893b0", lineHeight: 1.7 }}>
        {subtitle}
      </p>
      <div style={{
        height: 1,
        background: "linear-gradient(90deg, rgba(255,255,255,0.11), transparent)",
        marginTop: 28,
      }} />
    </div>
  );
}
