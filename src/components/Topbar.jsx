import { useLocation } from "react-router-dom";
import { NAV, ALL_ITEMS } from "../data/nav";

export default function Topbar() {
  const { pathname } = useLocation();

  const currentItem = ALL_ITEMS.find((i) => i.path === pathname);
  const currentGroup = NAV.find((g) => g.items.find((i) => i.path === pathname));

  return (
    <div style={{
      position: "sticky",
      top: 0,
      background: "rgba(4,5,7,0.92)",
      backdropFilter: "blur(16px)",
      borderBottom: "1px solid rgba(255,255,255,0.06)",
      padding: "0 40px",
      height: 52,
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      zIndex: 5,
      flexShrink: 0,
    }}>
      {/* Breadcrumb */}
      <div style={{ display: "flex", alignItems: "center", gap: 6, fontFamily: "DM Mono, monospace", fontSize: 11, color: "#5a6380" }}>
        {currentGroup?.group}
        {currentItem && (
          <>
            <span style={{ color: "rgba(255,255,255,0.11)" }}>›</span>
            <span style={{ color: "#8893b0" }}>{currentItem.label}</span>
          </>
        )}
      </div>

      {/* Launch link */}
      <a href="https://app.starkzuri.com" target="_blank" rel="noreferrer"
        style={{ fontFamily: "DM Mono, monospace", fontSize: 11, color: "#5b9fff", textDecoration: "none", display: "flex", alignItems: "center", gap: 5 }}>
        Launch App
        <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6" />
          <polyline points="15 3 21 3 21 9" />
          <line x1="10" y1="14" x2="21" y2="3" />
        </svg>
      </a>
    </div>
  );
}
