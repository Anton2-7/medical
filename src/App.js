import { Routes, Route } from "react-router-dom";
import "./App.css";
import Header from "./components/Header/Header";
import Home from "./pages/Home";
import React from "react";
import Dashboard from "./pages/Dashboard";
import Contacts from "./pages/Contacts";

function App() {
  return (
    <Header>
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/contacts" element={<Contacts />} />
        </Routes>
      </main>
    </Header>
  );
}

export default App;
