import { NavLink } from "react-router-dom";
import { useSidebar } from "../../app/SidebarContext";
import "./Sidebar.css";

export default function Sidebar() {
  const { collapsed, setCollapsed } = useSidebar();

  return (
    <aside className={`sidebar ${collapsed ? "is-collapsed" : ""}`}>
      <div className="sidebar-top">
        <div className="brand">{collapsed ? "SRT" : "SRT Engine"}</div>
        <button
          className="collapse-btn"
          onClick={() => setCollapsed(!collapsed)}
          aria-label="Toggle sidebar"
          title="Toggle sidebar"
        >
          {collapsed ? ">" : "<"}
        </button>
      </div>

      <nav className="nav">
        <NavLink to="/" end className={({ isActive }) => (isActive ? "active" : "")}>
          Home
        </NavLink>
        <NavLink to="/about" className={({ isActive }) => (isActive ? "active" : "")}>
          About
        </NavLink>
      </nav>

      <div className="sidebar-footer">
        {collapsed ? "v0.1" : "SRT Engine • v0.1"}
      </div>
    </aside>
  );
}
