import {  Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import Home from "./pages/Home";
import Contacts from "./pages/Contacts";

function App() {
  return (
    <>
        <Header />
        <main>
          <Routes>
            <Route path="/medical" element={<Home />} />
            <Route path="/contacts" element={<Contacts />} />
          </Routes>
        </main>
    </>
  );
}

export default App;