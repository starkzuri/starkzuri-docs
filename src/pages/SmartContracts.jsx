import PageHeader from "../components/PageHeader";
import Callout from "../components/Callout";
import CodeBlock from "../components/CodeBlock";
import PrevNext from "../components/PrevNext";
import { ALL_ITEMS } from "../data/nav";

const idx = ALL_ITEMS.findIndex((i) => i.id === "contracts");

const ADDRESSES = [
  { name: "MarketFactory",           addr: "0x049f2b3c1d4a7e8f..." },
  { name: "Market (implementation)", addr: "0x023d7e9a1b5c4f08..." },
  { name: "Treasury",                addr: "0x071a4b2c9e3d6f05..." },
  { name: "Oracle",                  addr: "0x038f1e5a7c2d9b04..." },
];

export default function SmartContracts() {
  return (
    <div>
      <PageHeader
        title="Smart Contracts"
        subtitle="The on-chain architecture powering StarkZuri."
        badge="On-Chain"
        badgeColor="purple"
      />

      <p style={{ fontSize: 15, fontWeight: 300, color: "#8893b0", lineHeight: 1.8, marginBottom: 28 }}>
        StarkZuri is built on Cairo smart contracts deployed to StarkNet mainnet. All market creation,
        trading, and resolution is executed on-chain.
      </p>

      <h3 style={{ fontSize: 16, fontWeight: 600, marginBottom: 14, color: "#f0f2f8" }}>Contract Addresses</h3>
      <div style={{ display: "flex", flexDirection: "column", gap: 10, marginBottom: 28 }}>
        {ADDRESSES.map(({ name, addr }) => (
          <div key={name} style={{ background: "#0d1220", border: "1px solid rgba(255,255,255,0.06)", borderRadius: 10, padding: "14px 18px", display: "flex", alignItems: "center", justifyContent: "space-between", gap: 16 }}>
            <span style={{ fontSize: 13, fontWeight: 500, color: "#f0f2f8" }}>{name}</span>
            <span style={{ fontFamily: "DM Mono, monospace", fontSize: 12, color: "#5b9fff" }}>{addr}</span>
          </div>
        ))}
      </div>

      <Callout type="warning">
        Always verify contract addresses on StarkScan before interacting directly. Never use addresses from unofficial sources.
      </Callout>

      <h3 style={{ fontSize: 16, fontWeight: 600, marginBottom: 14, marginTop: 32, color: "#f0f2f8" }}>Key Functions</h3>
      <CodeBlock>{`// Create a new market
fn create_market(question: felt252, end_time: u64) -> u256

// Buy YES or NO shares
fn buy_shares(market_id: u256, side: u8, amount: u256)

// Sell shares back to the AMM
fn sell_shares(market_id: u256, side: u8, shares: u256)

// Redeem winning shares after resolution
fn redeem(market_id: u256)`}</CodeBlock>

      <PrevNext prev={ALL_ITEMS[idx - 1]} next={ALL_ITEMS[idx + 1]} />
    </div>
  );
}
