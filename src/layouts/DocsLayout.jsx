import { useRef, useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import Topbar from "../components/Topbar";

export default function DocsLayout() {
  const contentRef = useRef(null);
  const { pathname } = useLocation();

  // Scroll to top on route change
  useEffect(() => {
    if (contentRef.current) contentRef.current.scrollTop = 0;
  }, [pathname]);

  return (
    <div style={{ display: "flex", height: "100vh", overflow: "hidden", background: "#040507", color: "#f0f2f8", fontFamily: "DM Sans, sans-serif" }}>
      <Sidebar />

      <main ref={contentRef} style={{ flex: 1, overflowY: "auto", display: "flex", flexDirection: "column" }}>
        <Topbar />
        <div style={{ flex: 1, maxWidth: 780, width: "100%", margin: "0 auto", padding: "52px 40px 80px" }}>
          <Outlet />
        </div>
      </main>
    </div>
  );
}
