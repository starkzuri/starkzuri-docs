export default function CodeBlock({ children }) {
  return (
    <pre style={{
      fontFamily: "DM Mono, monospace",
      fontSize: 13,
      lineHeight: 1.7,
      background: "#050810",
      border: "1px solid rgba(255,255,255,0.06)",
      borderRadius: 10,
      padding: 20,
      overflowX: "auto",
      color: "#c9d1e0",
      marginBottom: 24,
    }}>
      <code>{children}</code>
    </pre>
  );
}
