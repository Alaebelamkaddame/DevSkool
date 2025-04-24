// DashboardLayout.jsx
import React from 'react';
import { Outlet } from 'react-router-dom';
import DashobardSideBar from '../Dashboard/DashobardSideBar';

function DashboardLayout() {
  return (
    <div className="flex h-screen w-screen overflow-hidden">
      <DashobardSideBar />
      <main className="flex-1 overflow-y-auto  p-4">
        <Outlet />
      </main>
    </div>
  );
}

export default DashboardLayout;
