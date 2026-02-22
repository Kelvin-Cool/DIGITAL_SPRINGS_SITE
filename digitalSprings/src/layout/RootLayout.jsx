import React from 'react';
import { Outlet } from 'react-router-dom';
import NavBar from '../Pages/NavBar';

export default function RootLayout() {
  return (
    <div className="root-layout">
      <header>
        <NavBar />
      </header>
      <main>
        <Outlet />
      </main>
    </div>
  );
}