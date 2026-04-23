import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { NAV } from "../data/nav";

const SOCIALS = [
  { label: "𝕏",  href: "https://x.com/starkzuri" },
  { label: "tg", href: "https://t.me/starkzuri" },
  { label: "dc", href: "https://discord.gg/starkzuri" },
  { label: "gh", href: "https://github.com/starkzuri" },
];

export default function Sidebar() {
  const [searchQ, setSearchQ] = useState("");
  const navigate = useNavigate();
  const { pathname } = useLocation();

  const allItems = NAV.flatMap((g) => g.items);
  const filtered = searchQ.length > 1
    ? allItems.filter((i) => i.label.toLowerCase().includes(searchQ.toLowerCase()))
    : null;

  return (
    <aside style={{
      width: 260,
      flexShrink: 0,
      background: "#080b12",
      borderRight: "1px solid rgba(255,255,255,0.06)",
      display: "flex",
      flexDirection: "column",
      overflow: "hidden",
      height: "100vh",
      position: "sticky",
      top: 0,
    }}>
      {/* Logo */}
      <div style={{ padding: "20px 20px 16px", borderBottom: "1px solid rgba(255,255,255,0.06)", display: "flex", alignItems: "center", gap: 10, cursor: "pointer" }}
        onClick={() => navigate("/")}>
        <div style={{ width: 30, height: 30, background: "linear-gradient(135deg,#2f7cf6,#6e3cf5)", borderRadius: 8, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 14, fontWeight: 700, color: "white", flexShrink: 0 }}>
          SZ
        </div>
        <div>
          <div style={{ fontWeight: 800, fontSize: 17, letterSpacing: "-0.01em", lineHeight: 1, color: "#f0f2f8" }}>
            Stark<span style={{ color: "#5b9fff" }}>Zuri</span>
          </div>
          <div style={{ fontFamily: "DM Mono, monospace", fontSize: 9, color: "#5a6380", letterSpacing: "0.1em", textTransform: "uppercase", marginTop: 2 }}>
            Documentation
          </div>
        </div>
      </div>

      {/* Search */}
      <div style={{ padding: "12px 16px", borderBottom: "1px solid rgba(255,255,255,0.06)", position: "relative" }}>
        <svg style={{ position: "absolute", left: 26, top: "50%", transform: "translateY(-50%)", color: "#5a6380" }}
          width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <circle cx="11" cy="11" r="8" /><path d="m21 21-4.35-4.35" />
        </svg>
        <input
          value={searchQ}
          onChange={(e) => setSearchQ(e.target.value)}
          placeholder="Search docs…"
          style={{
            width: "100%",
            background: "rgba(255,255,255,0.04)",
            border: "1px solid rgba(255,255,255,0.06)",
            borderRadius: 8,
            padding: "8px 10px 8px 30px",
            fontFamily: "DM Sans, sans-serif",
            fontSize: 13,
            color: "#f0f2f8",
            outline: "none",
          }}
        />
      </div>

      {/* Nav */}
      <nav style={{ flex: 1, overflowY: "auto", padding: "8px 0 20px" }}>
        {filtered ? (
          <div style={{ padding: "8px 16px" }}>
            <div style={{ fontFamily: "DM Mono, monospace", fontSize: 10, color: "#5a6380", letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: 8 }}>
              Results
            </div>
            {filtered.length === 0 && (
              <div style={{ fontSize: 13, color: "#5a6380", padding: "8px 10px" }}>No results.</div>
            )}
            {filtered.map((item) => (
              <NavItem key={item.id} item={item} active={pathname === item.path} onNavigate={() => { navigate(item.path); setSearchQ(""); }} />
            ))}
          </div>
        ) : (
          NAV.map((group) => (
            <div key={group.group} style={{ marginBottom: 4 }}>
              <div style={{ padding: "10px 20px 6px", fontFamily: "DM Mono, monospace", fontSize: 10, color: "#5a6380", letterSpacing: "0.12em", textTransform: "uppercase", display: "flex", alignItems: "center", gap: 7 }}>
                <span style={{ fontSize: 11 }}>{group.icon}</span>
                {group.group}
              </div>
              {group.items.map((item) => (
                <NavItem key={item.id} item={item} active={pathname === item.path} onNavigate={() => navigate(item.path)} />
              ))}
            </div>
          ))
        )}
      </nav>

      {/* Socials */}
      <div style={{ padding: "12px 16px", borderTop: "1px solid rgba(255,255,255,0.06)", display: "flex", gap: 8 }}>
        {SOCIALS.map((s) => (
          <a key={s.label} href={s.href} target="_blank" rel="noreferrer"
            style={{ flex: 1, background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.06)", borderRadius: 7, padding: "7px 4px", fontFamily: "DM Mono, monospace", fontSize: 10, color: "#5a6380", textAlign: "center", textDecoration: "none", display: "block" }}>
            {s.label}
          </a>
        ))}
      </div>
    </aside>
  );
}

function NavItem({ item, active, onNavigate }) {
  return (
    <button onClick={onNavigate}
      style={{
        width: "100%",
        textAlign: "left",
        display: "block",
        background: active ? "rgba(47,124,246,0.1)" : "none",
        border: "none",
        borderLeft: active ? "2px solid #2f7cf6" : "2px solid transparent",
        padding: "8px 20px",
        fontSize: 13,
        color: active ? "#5b9fff" : "#8893b0",
        cursor: "pointer",
        fontFamily: "DM Sans, sans-serif",
        fontWeight: active ? 500 : 400,
        transition: "color 0.15s, background 0.15s",
      }}>
      {item.label}
    </button>
  );
}
