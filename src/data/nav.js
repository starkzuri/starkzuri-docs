export const NAV = [
  {
    group: "Getting Started",
    icon: "🚀",
    items: [
      { id: "introduction",  label: "Introduction",  path: "/docs/introduction" },
      { id: "quickstart",    label: "Quick Start",   path: "/docs/quickstart" },
      { id: "concepts",      label: "Core Concepts", path: "/docs/concepts" },
    ],
  },
  {
    group: "Trading",
    icon: "📈",
    items: [
      { id: "markets",    label: "Understanding Markets", path: "/docs/markets" },
      { id: "buying",     label: "Buying Shares",         path: "/docs/buying" },
      { id: "selling",    label: "Selling & Exiting",     path: "/docs/selling" },
      { id: "resolution", label: "Market Resolution",     path: "/docs/resolution" },
    ],
  },
  {
    group: "Creating Markets",
    icon: "✦",
    items: [
      { id: "create-market", label: "Create a Market",  path: "/docs/create-market" },
      { id: "market-rules",  label: "Market Rules",     path: "/docs/market-rules" },
      { id: "liquidity",     label: "Adding Liquidity", path: "/docs/liquidity" },
    ],
  },
  {
    group: "API Reference",
    icon: "⚡",
    items: [
      { id: "api-overview", label: "Overview",           path: "/docs/api-overview" },
      { id: "api-markets",  label: "Markets Endpoints",  path: "/docs/api-markets" },
      { id: "api-trades",   label: "Trades Endpoints",   path: "/docs/api-trades" },
      { id: "api-auth",     label: "Authentication",     path: "/docs/api-auth" },
    ],
  },
  {
    group: "On-Chain",
    icon: "⛓",
    items: [
      { id: "contracts", label: "Smart Contracts",    path: "/docs/contracts" },
      { id: "starknet",  label: "StarkNet Integration",path: "/docs/starknet" },
      { id: "wallet",    label: "Wallet Setup",        path: "/docs/wallet" },
    ],
  },
];

export const ALL_ITEMS = NAV.flatMap((g) => g.items);
