import PageHeader from "../components/PageHeader";
import Callout from "../components/Callout";
import CodeBlock from "../components/CodeBlock";
import PrevNext from "../components/PrevNext";
import { ALL_ITEMS } from "../data/nav";

const idx = ALL_ITEMS.findIndex((i) => i.id === "markets");

const STATUSES = [
  { s: "0", l: "Pending",   c: "#f5a623", d: "Created, not yet open for trading" },
  { s: "1", l: "Active",    c: "#19e87c", d: "Open — users can buy and sell freely" },
  { s: "2", l: "Resolved",  c: "#5b9fff", d: "Outcome determined, shares redeemable" },
  { s: "3", l: "Cancelled", c: "#f03a5f", d: "Market voided — all stakes refunded" },
];

export default function Markets() {
  return (
    <div>
      <PageHeader
        title="Understanding Markets"
        subtitle="Everything you need to know about how markets are structured."
        badge="Trading"
        badgeColor="blue"
      />

      <p style={{ fontSize: 15, fontWeight: 300, color: "#8893b0", lineHeight: 1.8, marginBottom: 28 }}>
        A StarkZuri market is defined by a question, an end date, and a resolution source.
      </p>

      <h3 style={{ fontSize: 16, fontWeight: 600, marginBottom: 14, color: "#f0f2f8" }}>Market Object</h3>
      <CodeBlock>{`{
  "marketId":    "0x04a3b2c1...",
  "question":    "Will BTC exceed $100k by end of 2025?",
  "category":    "crypto",
  "status":      1,         // 0=pending 1=active 2=resolved 3=cancelled
  "yesPrice":    "0.6712",
  "noPrice":     "0.3288",
  "totalVolume": "48320.00",
  "endTime":     1767225600,
  "creator":     "0x02f9...",
  "resolver":    "0x00ab..."
}`}</CodeBlock>

      <h3 style={{ fontSize: 16, fontWeight: 600, marginBottom: 14, marginTop: 32, color: "#f0f2f8" }}>Market Statuses</h3>
      <div style={{ border: "1px solid rgba(255,255,255,0.06)", borderRadius: 10, overflow: "hidden", marginBottom: 28 }}>
        {STATUSES.map(({ s, l, c, d }, i) => (
          <div key={s} style={{ display: "grid", gridTemplateColumns: "32px 100px 1fr", gap: 16, padding: "14px 18px", borderBottom: i < 3 ? "1px solid rgba(255,255,255,0.06)" : "none", alignItems: "center" }}>
            <span style={{ fontFamily: "DM Mono, monospace", fontSize: 11, color: "#5a6380" }}>{s}</span>
            <span style={{ fontSize: 12, fontWeight: 600, color: c, background: `${c}20`, padding: "3px 8px", borderRadius: 4, textAlign: "center" }}>{l}</span>
            <span style={{ fontSize: 13, color: "#8893b0", fontWeight: 300 }}>{d}</span>
          </div>
        ))}
      </div>

      <Callout type="info">
        Prices are always between $0.01 and $0.99 while active. At resolution, winning shares become exactly $1.00.
      </Callout>

      <PrevNext prev={ALL_ITEMS[idx - 1]} next={ALL_ITEMS[idx + 1]} />
    </div>
  );
}
