import { useEffect, useState } from "react";
import Breadcrumbs from "../Components/Breadcrumbs";
import Navbar from "../Components/Navbars/Navbar";
import { Outlet } from "react-router-dom";

export default function RootLayout() {
  const storedDarkMode = localStorage.getItem("darkMode");
  const [darkMode, setDarkMode] = useState(
    storedDarkMode ? JSON.parse(storedDarkMode) : true
  );

  const handleMode = () => {
    const newDarkMode = !darkMode;
    setDarkMode(newDarkMode);
    localStorage.setItem("darkMode", JSON.stringify(newDarkMode));
  };

  useEffect(() => {
    const handleStorageChange = (e) => {
      e.key === "darkMode" && setDarkMode(JSON.parse(e.newValue));
    };
    window.addEventListener("storage", handleStorageChange);
    return () => {
      window.removeEventListener("storage", handleStorageChange);
    };
  }, []);

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
