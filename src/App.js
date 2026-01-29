import { Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import Home from "./pages/Home";
import React from "react";
import Contacts from "./pages/Contacts";

function App() {
  return (
    <Header>
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contacts" element={<Contacts />} />
        </Routes>
      </main>
    </Header>
  );
}

export default App;
