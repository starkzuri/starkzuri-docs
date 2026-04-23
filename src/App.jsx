import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import DocsLayout from "./layouts/DocsLayout";

// Pages
import Introduction   from "./pages/Introduction";
import QuickStart     from "./pages/QuickStart";
import CoreConcepts   from "./pages/CoreConcepts";
import Markets        from "./pages/Markets";
import BuyingShares   from "./pages/BuyingShares";
import ApiOverview    from "./pages/ApiOverview";
import ApiMarkets     from "./pages/ApiMarkets";
import SmartContracts from "./pages/SmartContracts";
import WalletSetup    from "./pages/WalletSetup";
import ComingSoon     from "./pages/ComingSoon";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Redirect root to first doc page */}
        <Route path="/" element={<Navigate to="/docs/introduction" replace />} />

        <Route path="/docs" element={<DocsLayout />}>
          {/* Getting Started */}
          <Route path="introduction"  element={<Introduction />} />
          <Route path="quickstart"    element={<QuickStart />} />
          <Route path="concepts"      element={<CoreConcepts />} />

          {/* Trading */}
          <Route path="markets"    element={<Markets />} />
          <Route path="buying"     element={<BuyingShares />} />
          <Route path="selling"    element={<ComingSoon />} />
          <Route path="resolution" element={<ComingSoon />} />

          {/* Creating Markets */}
          <Route path="create-market" element={<ComingSoon />} />
          <Route path="market-rules"  element={<ComingSoon />} />
          <Route path="liquidity"     element={<ComingSoon />} />

          {/* API Reference */}
          <Route path="api-overview" element={<ApiOverview />} />
          <Route path="api-markets"  element={<ApiMarkets />} />
          <Route path="api-trades"   element={<ComingSoon />} />
          <Route path="api-auth"     element={<ComingSoon />} />

          {/* On-Chain */}
          <Route path="contracts" element={<SmartContracts />} />
          <Route path="starknet"  element={<ComingSoon />} />
          <Route path="wallet"    element={<WalletSetup />} />

          {/* Catch-all */}
          <Route path="*" element={<ComingSoon />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
