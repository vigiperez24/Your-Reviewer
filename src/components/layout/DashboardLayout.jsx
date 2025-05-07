// src/components/layout/DashboardLayout.jsx
import React from 'react';
import Sidebar from '../Sidebar/Sidebar';

function DashboardLayout() {
  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content Area */}
      <main className="flex-1 p-6 bg-gray-100 overflow-auto">
        <h1 className="text-2xl font-bold">Welcome</h1>
        <p>This is the main content area.</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio atque ipsum aspernatur a minima. Pariatur alias rem porro cupiditate magni tenetur, laborum facere fugiat hic ex molestias saepe velit eligendi.</p>
      </main>
    </div>
  );
}

export default DashboardLayout;