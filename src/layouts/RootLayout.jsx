import Navbar from "../Components/Navbars/Navbar";
import { Outlet } from "react-router-dom";

export default function RootLayout() {
  return (
    <div className="root-layout">
      <header>
        <Navbar />
      </header>
      <main>
        <Outlet />
      </main>
    </div>
  );
}
