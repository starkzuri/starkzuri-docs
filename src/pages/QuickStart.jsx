import PageHeader from "../components/PageHeader";
import Callout from "../components/Callout";
import CodeBlock from "../components/CodeBlock";
import Step from "../components/Step";
import PrevNext from "../components/PrevNext";
import { ALL_ITEMS } from "../data/nav";

const idx = ALL_ITEMS.findIndex((i) => i.id === "quickstart");

export default function QuickStart() {
  return (
    <div>
      <PageHeader
        title="Quick Start"
        subtitle="Go from zero to your first trade in under 5 minutes."
        badge="Getting Started"
        badgeColor="green"
      />

      <h3 style={{ fontSize: 16, fontWeight: 600, marginBottom: 16, color: "#f0f2f8" }}>Prerequisites</h3>
      <ul style={{ paddingLeft: 20, marginBottom: 28, display: "flex", flexDirection: "column", gap: 8 }}>
        {[
          "A StarkNet-compatible wallet (Argent X or Braavos)",
          "Some ETH or STRK on StarkNet for gas",
          "A funded account on app.starkzuri.com",
        ].map((item) => (
          <li key={item} style={{ fontSize: 14, color: "#8893b0", fontWeight: 300, lineHeight: 1.6 }}>{item}</li>
        ))}
      </ul>

      <Step n={1} title="Connect your wallet">
        <p style={{ fontSize: 14, color: "#8893b0", fontWeight: 300, lineHeight: 1.7, marginBottom: 12 }}>
          Visit <a href="https://app.starkzuri.com" style={{ color: "#5b9fff" }}>app.starkzuri.com</a> and
          click <strong style={{ color: "#f0f2f8" }}>Connect Wallet</strong>. Select Argent X or Braavos.
        </p>
        <Callout type="tip">Make sure you're on StarkNet mainnet, not a testnet.</Callout>
      </Step>

      <Step n={2} title="Browse markets">
        <p style={{ fontSize: 14, color: "#8893b0", fontWeight: 300, lineHeight: 1.7 }}>
          Use the market feed to find an event you want to trade. Filter by Crypto, Sports, Politics, Tech, and more.
        </p>
      </Step>

      <Step n={3} title="Place your first trade">
        <p style={{ fontSize: 14, color: "#8893b0", fontWeight: 300, lineHeight: 1.7, marginBottom: 12 }}>
          Click a market, choose YES or NO, enter your stake, and confirm in your wallet.
        </p>
        <CodeBlock>{`// Example: buying $10 of YES shares
const trade = await starkzuri.buyShares({
  marketId: "0x04a3...",
  side: "YES",
  amount: 10_000_000, // USDC (6 decimals)
});`}</CodeBlock>
      </Step>

      <Step n={4} title="Wait for resolution">
        <p style={{ fontSize: 14, color: "#8893b0", fontWeight: 300, lineHeight: 1.7 }}>
          When the event resolves, winning shares become redeemable for $1.00 each.
          Head to <strong style={{ color: "#f0f2f8" }}>Portfolio → Claim</strong> to collect.
        </p>
      </Step>

      <PrevNext prev={ALL_ITEMS[idx - 1]} next={ALL_ITEMS[idx + 1]} />
    </div>
  );
}
