import PageHeader from "../components/PageHeader";
import PrevNext from "../components/PrevNext";
import { ALL_ITEMS } from "../data/nav";

const idx = ALL_ITEMS.findIndex((i) => i.id === "concepts");

const CONCEPTS = [
  {
    title: "Prediction Markets",
    body: "A prediction market is a contract that pays $1 if a specific event occurs, and $0 if it does not. The current price of a YES share (e.g. $0.67) represents the market's implied probability (67%) that the event will happen.",
  },
  {
    title: "YES & NO Shares",
    body: "Every market has two complementary assets: YES shares and NO shares. Their prices always sum to $1.00. If YES = $0.72, then NO = $0.28. Buying YES bets the event happens; buying NO bets it doesn't.",
  },
  {
    title: "Automated Market Maker (AMM)",
    body: "StarkZuri uses a constant-product AMM to price shares. There's no order book — the smart contract always provides liquidity and adjusts prices based on supply and demand. You can always buy or sell instantly.",
  },
  {
    title: "Resolution",
    body: "When a market's end date arrives, the outcome is determined by a trusted resolver (oracle or admin). Winning shares are redeemed for $1.00 each; losing shares expire worthless.",
  },
  {
    title: "Liquidity",
    body: "Market creators seed initial liquidity to bootstrap the market. Liquidity providers earn a small fee on every trade. More liquidity = tighter spreads = better prices for traders.",
  },
];

export default function CoreConcepts() {
  return (
    <div>
      <PageHeader
        title="Core Concepts"
        subtitle="The ideas behind how StarkZuri markets work."
        badge="Concepts"
        badgeColor="purple"
      />

      {CONCEPTS.map(({ title, body }) => (
        <div key={title} style={{ marginBottom: 36 }}>
          <h3 style={{ fontSize: 16, fontWeight: 600, marginBottom: 10, color: "#f0f2f8" }}>{title}</h3>
          <p style={{ fontSize: 14, color: "#8893b0", fontWeight: 300, lineHeight: 1.8 }}>{body}</p>
        </div>
      ))}

      <PrevNext prev={ALL_ITEMS[idx - 1]} next={ALL_ITEMS[idx + 1]} />
    </div>
  );
}
