import React from "react";
import Sidebar from "../../Sidebar/Sidebar";
import MobileSidebar from "../../Sidebar/MobileSidebar";
import SubjectCard from "../../ReviewLayout/SubjectCard";
import RecentQuizes from "../../ReviewLayout/RecentQuizes";

function ReviewCollection() {
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
      {/* Subject AddSubjectModal, SubjectCard, SubjectList */}
      <main className="w-full max-w-screen-2xl mx-auto md:py-6 p-4 overflow-x-auto">

        {/* Subject Card */}
        <div>
          <SubjectCard/>
        </div>
        <div>
          <RecentQuizes/>
        </div>
      </main>
    </div>
  );
}

export default ReviewCollection;
