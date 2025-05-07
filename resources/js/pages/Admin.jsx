import "../../css/admin.css";
import HeaderAdmin from "../components/Header-Admin";
import Sidebar from "../components/Sidebar";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Outlet,
} from "react-router-dom";
import { useState } from "react";
import AdminNotification from "../components/AdminNotification";

export default function Admin() {
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };

  return (
    <>
      <AdminNotification />
      <HeaderAdmin toggleSidebar={toggleSidebar} />
      <Sidebar isOpen={isSidebarOpen} />
      <div className={`main-content ${isSidebarOpen ? "main--open" : ""}`}>
        <Outlet />
      </div>
    </>
  );
}
