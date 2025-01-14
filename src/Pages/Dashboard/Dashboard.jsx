import React from 'react';
import { Outlet } from 'react-router-dom';
import Sidebar from '../../Components/Sidebar';

const Dashboard = () => {
  return (
    <div className="flex items-start justify-start h-screen bg-gray-100 fixed">
        <Sidebar />
      

      <main className="flex flex-col w-full sm:w-3/4 px-6 py-8">
        <Outlet />
      </main>
    </div>
  );
};

export default Dashboard;
