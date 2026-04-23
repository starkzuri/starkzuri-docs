import PageHeader from "../components/PageHeader";
import Callout from "../components/Callout";
import CodeBlock from "../components/CodeBlock";
import PrevNext from "../components/PrevNext";
import { ALL_ITEMS } from "../data/nav";

const idx = ALL_ITEMS.findIndex((i) => i.id === "buying");

export default function BuyingShares() {
  return (
    <div>
      <PageHeader
        title="Buying Shares"
        subtitle="How to open a position in any market."
        badge="Trading"
        badgeColor="blue"
      />

      <p style={{ fontSize: 15, fontWeight: 300, color: "#8893b0", lineHeight: 1.8, marginBottom: 28 }}>
        Buying shares is the primary way to express a prediction. You spend USDC and receive YES or
        NO shares. The number of shares depends on the current price.
      </p>

      <h3 style={{ fontSize: 16, fontWeight: 600, marginBottom: 14, color: "#f0f2f8" }}>Price Formula</h3>
      <div style={{ background: "#0d1220", border: "1px solid rgba(255,255,255,0.06)", borderRadius: 10, padding: 20, marginBottom: 28, fontFamily: "DM Mono, monospace", fontSize: 15, textAlign: "center", color: "#f0f2f8" }}>
        shares = amount / price
      </div>

      <p style={{ fontSize: 14, color: "#8893b0", fontWeight: 300, lineHeight: 1.7, marginBottom: 28 }}>
        If YES is priced at <code style={{ fontFamily: "DM Mono", background: "rgba(47,124,246,0.1)", color: "#5b9fff", padding: "2px 6px", borderRadius: 4 }}>$0.67</code>,
        a <code style={{ fontFamily: "DM Mono", background: "rgba(47,124,246,0.1)", color: "#5b9fff", padding: "2px 6px", borderRadius: 4 }}>$10</code> purchase
        gets you ~14.93 YES shares worth <strong style={{ color: "#f0f2f8" }}>$14.93</strong> if it resolves YES.
      </p>

      <h3 style={{ fontSize: 16, fontWeight: 600, marginBottom: 14, color: "#f0f2f8" }}>SDK Example</h3>
      <CodeBlock>{`import { StarkZuri } from '@starkzuri/sdk';

const client = new StarkZuri({ provider, account });

const tx = await client.buyShares({
  marketId: '0x04a3b2c1...',
  side:     'YES',            // or 'NO'
  amount:   parseUnits('10', 6), // $10 USDC
  slippage: 0.01,             // 1% max slippage
});

await tx.wait();`}</CodeBlock>

      <Callout type="warning">
        Always set a slippage tolerance. High-volume markets can move price between submission and confirmation.
      </Callout>

      <PrevNext prev={ALL_ITEMS[idx - 1]} next={ALL_ITEMS[idx + 1]} />
    </div>
  );
}
