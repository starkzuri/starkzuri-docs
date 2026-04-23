import PageHeader from "../components/PageHeader";
import PrevNext from "../components/PrevNext";
import { ALL_ITEMS } from "../data/nav";
import { useLocation } from "react-router-dom";

export default function ComingSoon() {
  const { pathname } = useLocation();
  const item = ALL_ITEMS.find((i) => i.path === pathname);
  const idx = ALL_ITEMS.findIndex((i) => i.path === pathname);

  return (
    <div>
      <PageHeader
        title={item?.label || "Coming Soon"}
        subtitle="This page is currently being written."
        badge="Docs"
        badgeColor="blue"
      />
      <div style={{ padding: "60px 0", textAlign: "center" }}>
        <div style={{ fontSize: 40, marginBottom: 16 }}>📄</div>
        <div style={{ fontSize: 16, color: "#8893b0", fontWeight: 300 }}>This page is coming soon.</div>
      </div>
      <PrevNext prev={ALL_ITEMS[idx - 1]} next={ALL_ITEMS[idx + 1]} />
    </div>
  );
}
