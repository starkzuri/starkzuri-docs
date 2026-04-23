import { useNavigate } from "react-router-dom";

export default function PrevNext({ prev, next }) {
  const navigate = useNavigate();

  const btnStyle = (align) => ({
    background: "#0d1220",
    border: "1px solid rgba(255,255,255,0.06)",
    borderRadius: 12,
    padding: "16px 20px",
    cursor: "pointer",
    textAlign: align,
    color: "#f0f2f8",
    fontFamily: "DM Sans, sans-serif",
    transition: "border-color 0.2s, background 0.2s",
    width: "100%",
  });

  return (
    <div style={{
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      gap: 12,
      marginTop: 56,
      paddingTop: 28,
      borderTop: "1px solid rgba(255,255,255,0.06)",
    }}>
      {prev ? (
        <button onClick={() => navigate(prev.path)} style={btnStyle("left")}>
          <div style={{ fontFamily: "DM Mono, monospace", fontSize: 10, color: "#5a6380", letterSpacing: "0.1em", marginBottom: 6 }}>← PREVIOUS</div>
          <div style={{ fontSize: 14, fontWeight: 500 }}>{prev.label}</div>
        </button>
      ) : <div />}

      {next ? (
        <button onClick={() => navigate(next.path)} style={btnStyle("right")}>
          <div style={{ fontFamily: "DM Mono, monospace", fontSize: 10, color: "#5a6380", letterSpacing: "0.1em", marginBottom: 6 }}>NEXT →</div>
          <div style={{ fontSize: 14, fontWeight: 500 }}>{next.label}</div>
        </button>
      ) : <div />}
    </div>
  );
}
