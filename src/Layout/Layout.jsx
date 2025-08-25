import React, { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../components/Share/Navbar";
import Footer from "../components/Share/Footer";
import { DarkModeContext } from "../utils/context/DarkModeContext";
const Layout = () => {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    if (darkMode) {
      document.body.classList.add("dark-mode");
    } else {
      document.body.classList.remove("dark-mode");
    }
  }, [darkMode]);
  return (
    <DarkModeContext.Provider value={{ darkMode, setDarkMode }}>
      <Navbar />
      <Outlet />
      <Footer />
    </DarkModeContext.Provider>
  );
};

export default Layout;
