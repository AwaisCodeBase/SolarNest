import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "./components/Footer/Footer.jsx";
import Navbar from "./components/Navbar/Navbar.jsx";
import WhatsApp from "./components/WhatsApp/WhatsApp.jsx";

function Layout() {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
      <WhatsApp />
    </>
  );
}

export default Layout;
