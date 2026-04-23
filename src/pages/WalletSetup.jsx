import PageHeader from "../components/PageHeader";
import Callout from "../components/Callout";
import PrevNext from "../components/PrevNext";
import { ALL_ITEMS } from "../data/nav";

const idx = ALL_ITEMS.findIndex((i) => i.id === "wallet");

const WALLETS = [
  { name: "Argent X", type: "Browser Extension", url: "https://www.argent.xyz/argent-x/", desc: "The most popular StarkNet wallet. Clean UI, great DeFi support." },
  { name: "Braavos",  type: "Mobile & Browser",  url: "https://braavos.app",               desc: "Feature-rich wallet with hardware signer support." },
];

export default function WalletSetup() {
  return (
    <div>
      <PageHeader
        title="Wallet Setup"
        subtitle="Connect a StarkNet wallet to start trading."
        badge="On-Chain"
        badgeColor="purple"
      />

      <p style={{ fontSize: 15, fontWeight: 300, color: "#8893b0", lineHeight: 1.8, marginBottom: 28 }}>
        StarkZuri supports any StarkNet-compatible wallet. We recommend Argent X for browser and Braavos for mobile.
      </p>

      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12, marginBottom: 32 }}>
        {WALLETS.map((w) => (
          <div key={w.name} style={{ background: "#0d1220", border: "1px solid rgba(255,255,255,0.06)", borderRadius: 12, padding: 22 }}>
            <div style={{ fontSize: 16, fontWeight: 600, marginBottom: 4, color: "#f0f2f8" }}>{w.name}</div>
            <div style={{ fontFamily: "DM Mono, monospace", fontSize: 10, color: "#5a6380", letterSpacing: "0.08em", marginBottom: 12 }}>{w.type}</div>
            <div style={{ fontSize: 13, color: "#8893b0", fontWeight: 300, lineHeight: 1.6, marginBottom: 16 }}>{w.desc}</div>
            <a href={w.url} target="_blank" rel="noreferrer" style={{ fontSize: 12, fontWeight: 600, color: "#5b9fff" }}>Install →</a>
          </div>
        ))}
      </div>

      <Callout type="tip">
        After installing, bridge ETH or STRK from Ethereum mainnet via the{" "}
        <a href="https://starkgate.starknet.io" target="_blank" rel="noreferrer" style={{ color: "#5b9fff" }}>StarkGate bridge</a>.
      </Callout>

      <PrevNext prev={ALL_ITEMS[idx - 1]} next={ALL_ITEMS[idx + 1]} />
    </div>
  );
}
