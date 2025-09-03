/* eslint-disable no-unused-vars */
import React from 'react';
import Sidebar from './components/Sidebar/Sidebar';
import Navbar from './components/Navbar/Navbar';
import { Routes, Route, Navigate } from 'react-router-dom';
import Orders from './pages/Orders/Orders.jsx';
import Add from './pages/Add/Add.jsx';
import List from './pages/List/List.jsx';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const App = () => {
  const url = "http://localhost:4000";

  return (
    <div>
      <Navbar />
      <hr />
      <div className='app-content'>
        <Sidebar />
        <Routes>
          {/* Default route redirects to /orders */}
          <Route path="/" element={<Navigate to="/orders" replace />} />

          {/* Admin pages */}
          <Route path="/add" element={<Add url={url} />} />
          <Route path="/list" element={<List url={url} />} />
          <Route path="/orders" element={<Orders url={url} />} />

          {/* Optional: catch-all route */}
          <Route path="*" element={<Navigate to="/orders" replace />} />
        </Routes>
      </div>

      <ToastContainer />
    </div>
  );
};

export default App;
