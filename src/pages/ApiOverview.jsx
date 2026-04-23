import PageHeader from "../components/PageHeader";
import CodeBlock from "../components/CodeBlock";
import PrevNext from "../components/PrevNext";
import { ALL_ITEMS } from "../data/nav";

const idx = ALL_ITEMS.findIndex((i) => i.id === "api-overview");

const ENDPOINTS = [
  { m: "GET", e: "/markets",                  d: "List all markets" },
  { m: "GET", e: "/markets/:id",              d: "Get a single market" },
  { m: "GET", e: "/markets/:id/trades",       d: "Trade history for a market" },
  { m: "GET", e: "/users/:address/portfolio", d: "User positions & PnL" },
  { m: "GET", e: "/stats",                    d: "Platform-wide statistics" },
];

export default function ApiOverview() {
  return (
    <div>
      <PageHeader
        title="API Overview"
        subtitle="Programmatic access to StarkZuri markets and data."
        badge="API"
        badgeColor="amber"
      />

      <p style={{ fontSize: 15, fontWeight: 300, color: "#8893b0", lineHeight: 1.8, marginBottom: 28 }}>
        The StarkZuri REST API provides read access to market data, trade history, and user portfolios.
        Write operations go directly through StarkNet smart contracts.
      </p>

      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12, marginBottom: 32 }}>
        <div style={{ background: "#0d1220", border: "1px solid rgba(255,255,255,0.06)", borderRadius: 10, padding: 18 }}>
          <div style={{ fontFamily: "DM Mono, monospace", fontSize: 11, color: "#5a6380", letterSpacing: "0.1em", marginBottom: 8 }}>BASE URL</div>
          <div style={{ fontFamily: "DM Mono, monospace", fontSize: 13, color: "#5b9fff" }}>https://api.starkzuri.com/v1</div>
        </div>
        <div style={{ background: "#0d1220", border: "1px solid rgba(255,255,255,0.06)", borderRadius: 10, padding: 18 }}>
          <div style={{ fontFamily: "DM Mono, monospace", fontSize: 11, color: "#5a6380", letterSpacing: "0.1em", marginBottom: 8 }}>FORMAT</div>
          <div style={{ fontFamily: "DM Mono, monospace", fontSize: 13, color: "#19e87c" }}>JSON · REST</div>
        </div>
      </div>

      <h3 style={{ fontSize: 16, fontWeight: 600, marginBottom: 14, color: "#f0f2f8" }}>Authentication</h3>
      <p style={{ fontSize: 14, color: "#8893b0", fontWeight: 300, lineHeight: 1.7, marginBottom: 16 }}>
        Public endpoints require no auth. Protected endpoints use an API key in the header:
      </p>
      <CodeBlock>{`Authorization: Bearer sk_live_your_api_key`}</CodeBlock>

      <h3 style={{ fontSize: 16, fontWeight: 600, marginBottom: 14, marginTop: 28, color: "#f0f2f8" }}>Endpoints</h3>
      <div style={{ border: "1px solid rgba(255,255,255,0.06)", borderRadius: 10, overflow: "hidden" }}>
        {ENDPOINTS.map(({ m, e, d }, i) => (
          <div key={e} style={{ display: "grid", gridTemplateColumns: "56px 1fr 1fr", gap: 16, padding: "13px 18px", borderBottom: i < ENDPOINTS.length - 1 ? "1px solid rgba(255,255,255,0.06)" : "none", alignItems: "center" }}>
            <span style={{ fontFamily: "DM Mono, monospace", fontSize: 11, fontWeight: 500, color: "#19e87c", background: "rgba(25,232,124,0.08)", padding: "3px 7px", borderRadius: 4, textAlign: "center" }}>{m}</span>
            <span style={{ fontFamily: "DM Mono, monospace", fontSize: 12, color: "#5b9fff" }}>{e}</span>
            <span style={{ fontSize: 13, color: "#8893b0", fontWeight: 300 }}>{d}</span>
          </div>
        ))}
      </div>

      <PrevNext prev={ALL_ITEMS[idx - 1]} next={ALL_ITEMS[idx + 1]} />
    </div>
  );
}
