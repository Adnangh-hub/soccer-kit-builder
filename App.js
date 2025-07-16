import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import KitBuilder from "./components/KitBuilder";
import CartPage from "./pages/CartPage";
import './i18n';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<KitBuilder />} />
        <Route path="/cart" element={<CartPage />} />
      </Routes>
    </Router>
  );
}

export default App;