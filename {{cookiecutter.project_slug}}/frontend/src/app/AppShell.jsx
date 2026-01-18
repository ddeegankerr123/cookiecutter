import "./AppShell.css";
import Sidebar from "../components/Sidebar/Sidebar";
import { SidebarProvider } from "./SidebarContext";

export default function AppShell({ children }) {
  return (
    <SidebarProvider>
      <div className="app">
        <Sidebar />
        <main className="app-main">
          <div className="page-surface">{children}</div>
        </main>
      </div>
    </SidebarProvider>
  );
}
