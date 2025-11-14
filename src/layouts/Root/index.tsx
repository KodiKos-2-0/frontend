import { Footer, Header, Sidebar } from "@/components";
import { Outlet } from "react-router-dom";

export function Layout() {
  return (
    <div className="flex h-screen bg-gray-50 border-2">
      <Sidebar />
      <div className="flex-1 flex flex-col">
        <Header />
        <Outlet />
        <Footer />
      </div>
    </div>
  );
}
