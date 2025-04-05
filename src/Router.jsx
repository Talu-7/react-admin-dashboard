import React from "react";
import { Routes, Route } from "react-router-dom";
import ChatPage from "./scenes/chat";
import Dashboard from "./scenes/dashboard"; // or your actual dashboard
// import other pages as needed

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route path="/chat" element={<ChatPage />} />
      {/* Add more routes as needed */}
    </Routes>
  );
};

export default Router;
