export default function Step({ n, title, children }) {
  return (
    <div style={{ marginBottom: 28 }}>
      <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 14 }}>
        <div style={{
          width: 28, height: 28,
          borderRadius: 8,
          background: "#2f7cf6",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontFamily: "DM Mono, monospace",
          fontSize: 12,
          fontWeight: 500,
          color: "white",
          flexShrink: 0,
        }}>
          {n}
        </div>
        <h3 style={{ fontSize: 15, fontWeight: 600, color: "#f0f2f8" }}>{title}</h3>
      </div>
      <div style={{ paddingLeft: 40 }}>{children}</div>
    </div>
  );
}
