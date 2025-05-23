import React from "react";
import Sidebar from "../Sidebar/Sidebar.jsx";
import MobileSidebar from "../Sidebar/MobileSidebar.jsx";
import BarChartHIstory from "../HistoryLayout/BarChartHIstory.jsx";

import LastQuizTake from "./LastQuizTake.jsx";

function HistoryCollection() {
  return (
    <div className="flex flex-col md:flex-row h-screen w-full relatives">
      {/* Sidebar for Desktop */}
      <aside className="hidden md:block z-50">
        <Sidebar />
      </aside>

      {/* Sidebar for Mobile View */}
      <div className="block md:hidden">
        <MobileSidebar />
      </div>
      {/* Main Container History */}
      <main className="w-full max-w-screen-2xl mx-auto md:py-6 p-4 overflow-x-auto">
        {/* Container of two Graph */}
        <div className=" grid grid-cols-1 md:grid-cols-2 gap-5">
          {/* PieChartlastQuiz */}
          <div>
            <BarChartHIstory />
          </div>
          {/* BarCharts */}
          <div>
            <LastQuizTake />
          </div>
        </div>
      </main>
    </div>
  );
}

export default HistoryCollection;
