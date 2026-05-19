import React from "react";
import { Route, Routes } from "react-router-dom";

import TopBar from "./TopBar";
import Apps from "./Apps";
import Funds from "./Funds";
import Holdings from "./Holdings";
import Orders from "./Orders";
import Positions from "./Positions";
import Summary from "./Summary";
import WatchList from "./WatchList";
import { GeneralContextProvider } from "./GeneralContext";

import "../dashboard.css";

const Dashboard = () => {
  return (
    // GeneralContextProvider wraps the ENTIRE dashboard so
    // BuyWindow context is available to all children
    <GeneralContextProvider>
      <div className="dashboard">

        {/* TopBar is INSIDE .dashboard so .dashboard .topbar-container CSS applies */}
        <TopBar />

        {/* Flex row: watchlist (left) + main content (right) */}
        <div className="dashboard-body">

          <div className="dashboard-left">
            <WatchList />
          </div>

          <div className="dashboard-right">
            <Routes>
              <Route index element={<Summary />} />
              <Route path="orders" element={<Orders />} />
              <Route path="holdings" element={<Holdings />} />
              <Route path="positions" element={<Positions />} />
              <Route path="funds" element={<Funds />} />
              <Route path="apps" element={<Apps />} />
            </Routes>
          </div>

        </div>
      </div>
    </GeneralContextProvider>
  );
};

export default Dashboard;