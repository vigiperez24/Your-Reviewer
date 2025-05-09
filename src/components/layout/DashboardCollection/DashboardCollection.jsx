// src/components/layout/DashboardLayout.jsx
import React from "react";
import Sidebar from "../../Sidebar/Sidebar";
import MobileSidebar from "../../Sidebar/MobileSidebar";
import QuickStats from "../../DashboardLayout/QuickStats";
import Badges from "../../DashboardLayout/Badges";
import RecentActivity from "../../DashboardLayout/RecentActivity";

import { Link} from "react-router-dom";
function DashboardLayout() {
  return (
    <div className="flex flex-col md:flex-row h-screen w-full relative">
      {/* Sidebar for desktop */}
      <aside className="hidden md:block">
        <Sidebar />
      </aside>

      {/* Sidebar for mobile */}
      <div className="block md:hidden">
        <MobileSidebar />
      </div>

      {/* Main Content Area */}
      <main className=" w-full max-w-screen-2xl mx-auto md:py-4 p-4 overflow-x-auto">
        <div className="flex flex-col gap-4 py-4">
          <h1 className="text-2xl md:text-4xl font-semibold">
            Hi Vigi Perez, Ready to review?
          </h1>
          {/* Dashboard Title / Button */}
          <div className="flex justify-between items-center">
            <h1 className="text-2xl font-medium">Dashboard</h1>
            <Link className="bg-buttonBg text-white px-4 py-2 rounded w-fit"  to="/Review">
                Create New Quiz

            </Link>
          </div>
        </div>
        {/* Dashboard Section */}
        <div className="flex flex-col gap-4">
          {/* QuickStats */}
          <div>
            <QuickStats />
          </div>
          <div>
            <Badges />
          </div>
          <div>
            <RecentActivity />
          </div>
        </div>
      </main>
    </div>
  );
}

export default DashboardLayout;
