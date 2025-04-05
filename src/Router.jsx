import React from "react";
import { Routes, Route } from "react-router-dom";
import App from "./App";
import Dashboard from "./scenes/dashboard";
import ChatPage from "./scenes/chat";

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<App />}>
        <Route index element={<Dashboard />} />
        <Route path="chat" element={<ChatPage />} />
        {/* Add other routes here */}
      </Route>
    </Routes>
  );
};

export default Router;
