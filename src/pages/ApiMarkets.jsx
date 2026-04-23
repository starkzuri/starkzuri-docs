import PageHeader from "../components/PageHeader";
import CodeBlock from "../components/CodeBlock";
import PrevNext from "../components/PrevNext";
import { ALL_ITEMS } from "../data/nav";

const idx = ALL_ITEMS.findIndex((i) => i.id === "api-markets");

const PARAMS = [
  { p: "category", t: "string", d: "Filter by category (crypto, sports, politics…)" },
  { p: "sort",     t: "string", d: "trending | volume | newest | ending_soon" },
  { p: "limit",    t: "number", d: "Results per page. Max 100. Default 20." },
  { p: "offset",   t: "number", d: "Pagination offset. Default 0." },
  { p: "search",   t: "string", d: "Full-text search on market question." },
  { p: "status",   t: "number", d: "0=pending 1=active 2=resolved 3=cancelled" },
];

export default function ApiMarkets() {
  return (
    <div>
      <PageHeader
        title="Markets Endpoints"
        subtitle="Fetch and filter market data from the API."
        badge="API"
        badgeColor="amber"
      />

      <h3 style={{ fontSize: 16, fontWeight: 600, marginBottom: 8, color: "#f0f2f8" }}>GET /markets</h3>
      <p style={{ fontSize: 14, color: "#8893b0", fontWeight: 300, lineHeight: 1.7, marginBottom: 20 }}>
        Returns a paginated list of markets. Supports filtering, sorting, and search.
      </p>

      <h4 style={{ fontSize: 12, fontWeight: 600, color: "#5a6380", letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: 10 }}>Query Parameters</h4>
      <div style={{ border: "1px solid rgba(255,255,255,0.06)", borderRadius: 10, overflow: "hidden", marginBottom: 28 }}>
        {PARAMS.map(({ p, t, d }, i) => (
          <div key={p} style={{ display: "grid", gridTemplateColumns: "130px 70px 1fr", gap: 12, padding: "12px 16px", borderBottom: i < PARAMS.length - 1 ? "1px solid rgba(255,255,255,0.06)" : "none" }}>
            <span style={{ fontFamily: "DM Mono, monospace", fontSize: 12, color: "#5b9fff" }}>{p}</span>
            <span style={{ fontFamily: "DM Mono, monospace", fontSize: 11, color: "#f5a623", background: "rgba(245,166,35,0.08)", padding: "2px 7px", borderRadius: 4, alignSelf: "start", textAlign: "center" }}>{t}</span>
            <span style={{ fontSize: 13, color: "#8893b0", fontWeight: 300 }}>{d}</span>
          </div>
        ))}
      </div>

      <h4 style={{ fontSize: 12, fontWeight: 600, color: "#5a6380", letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: 10 }}>Example Request</h4>
      <CodeBlock>{`curl "https://api.starkzuri.com/v1/markets?category=crypto&sort=trending&limit=5"`}</CodeBlock>

      <h4 style={{ fontSize: 12, fontWeight: 600, color: "#5a6380", letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: 10 }}>Example Response</h4>
      <CodeBlock>{`{
  "data": [
    {
      "marketId": "0x04a3...",
      "question": "Will BTC exceed $100k by end of 2025?",
      "yesPrice": "0.6712",
      "noPrice": "0.3288",
      "totalVolume": "48320.00",
      "status": 1
    }
  ],
  "total": 142,
  "limit": 5,
  "offset": 0
}`}</CodeBlock>

      <PrevNext prev={ALL_ITEMS[idx - 1]} next={ALL_ITEMS[idx + 1]} />
    </div>
  );
}
