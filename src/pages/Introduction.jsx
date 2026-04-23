import PageHeader from "../components/PageHeader";
import Callout from "../components/Callout";
import PrevNext from "../components/PrevNext";
import { ALL_ITEMS } from "../data/nav";

const idx = ALL_ITEMS.findIndex((i) => i.id === "introduction");

export default function Introduction() {
  return (
    <div>
      <PageHeader
        title="Introduction"
        subtitle="Welcome to StarkZuri — the on-chain social prediction market."
        badge="Overview"
        badgeColor="blue"
      />

      <p style={{ fontSize: 16, fontWeight: 300, color: "#8893b0", lineHeight: 1.8, marginBottom: 32 }}>
        StarkZuri is a decentralised prediction market built on{" "}
        <strong style={{ color: "#f0f2f8" }}>StarkNet</strong>. Anyone can create a market around
        any real-world question, trade YES or NO shares, and earn when their prediction is correct.
        Everything settles on-chain — transparent, permissionless, and instant.
      </p>

      <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 12, marginBottom: 40 }}>
        {[
          { icon: "🔗", title: "On-Chain",       desc: "All trades and resolutions settle on StarkNet L2" },
          { icon: "⚡", title: "Real-Time",      desc: "Prices update instantly as trades execute" },
          { icon: "🌐", title: "Permissionless", desc: "Anyone can create or trade any market" },
        ].map((f) => (
          <div key={f.title} style={{ background: "#0d1220", border: "1px solid rgba(255,255,255,0.06)", borderRadius: 12, padding: "20px 18px" }}>
            <div style={{ fontSize: 24, marginBottom: 10 }}>{f.icon}</div>
            <div style={{ fontSize: 14, fontWeight: 600, marginBottom: 6, color: "#f0f2f8" }}>{f.title}</div>
            <div style={{ fontSize: 13, color: "#8893b0", fontWeight: 300, lineHeight: 1.6 }}>{f.desc}</div>
          </div>
        ))}
      </div>

      <h3 style={{ fontSize: 18, fontWeight: 600, marginBottom: 16, color: "#f0f2f8" }}>How it works</h3>
      <div style={{ display: "flex", flexDirection: "column", border: "1px solid rgba(255,255,255,0.06)", borderRadius: 12, overflow: "hidden", marginBottom: 32 }}>
        {[
          { n: "01", t: "Discover or create a market", d: "Browse live markets or create your own around any verifiable question." },
          { n: "02", t: "Buy YES or NO shares",        d: "Each share costs between $0.01 and $0.99, reflecting market probability." },
          { n: "03", t: "Track price movement",        d: "Prices shift in real-time as other traders take positions." },
          { n: "04", t: "Collect $1.00 if correct",   d: "Winning shares resolve at exactly $1.00. Losing shares resolve at $0." },
        ].map((s, i) => (
          <div key={s.n} style={{ display: "flex", gap: 20, padding: "18px 20px", borderBottom: i < 3 ? "1px solid rgba(255,255,255,0.06)" : "none", alignItems: "flex-start" }}>
            <span style={{ fontFamily: "DM Mono, monospace", fontSize: 11, color: "#5b9fff", letterSpacing: "0.1em", paddingTop: 2, flexShrink: 0 }}>{s.n}</span>
            <div>
              <div style={{ fontSize: 14, fontWeight: 600, marginBottom: 4, color: "#f0f2f8" }}>{s.t}</div>
              <div style={{ fontSize: 13, color: "#8893b0", fontWeight: 300, lineHeight: 1.6 }}>{s.d}</div>
            </div>
          </div>
        ))}
      </div>

      <Callout type="info">
        StarkZuri uses an automated market maker (AMM) model — no order book needed. Prices are
        determined algorithmically based on the ratio of YES/NO shares outstanding.
      </Callout>

      <PrevNext prev={ALL_ITEMS[idx - 1]} next={ALL_ITEMS[idx + 1]} />
    </div>
  );
}
