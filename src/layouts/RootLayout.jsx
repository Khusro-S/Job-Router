import { useState } from "react";
import Breadcrumbs from "../Components/Breadcrumbs";
import Navbar from "../Components/Navbars/Navbar";
import { Outlet } from "react-router-dom";

export default function RootLayout() {
  const [darkMode, setDarkMode] = useState(true);
  const handleMode = () => {
    setDarkMode(!darkMode);
  };
  return (
    <div className={`${darkMode ? "dark" : ""}`}>
      <div className="root-layout">
        <header>
          <Navbar />
          <Breadcrumbs mode={handleMode} />
        </header>
        <main>
          <Outlet />
        </main>
      </div>
    </div>
  );
}
