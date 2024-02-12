import Breadcrumbs from "../Components/Breadcrumbs";
import Navbar from "../Components/Navbars/Navbar";
import { Outlet } from "react-router-dom";

export default function RootLayout() {
  return (
    <div className="root-layout">
      <header>
        <Navbar />
        <Breadcrumbs />
      </header>
      <main>
        <Outlet />
      </main>
    </div>
  );
}
