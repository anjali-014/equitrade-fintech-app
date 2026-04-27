import React from "react";
import { Outlet } from "react-router-dom";

import Navbar from "./landing_page/Navbar";
 import Footer from "./landing_page/Footer";

const Layout = () => {
  return (
    <div className="layout">
      <Navbar />

      <main className="main-content">
        <Outlet />
      </main>

      <Footer />
    </div>
  );
};

export default Layout;