import React from "react";
import { Routes, Route } from "react-router-dom";

import "./scss/app.scss";
import Header from "./components/Header";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import ShopingCard from "./pages/ShopingCart";

function App() {
  return (
    <>
      <div className="wrapper">
        <Header />
        <div className="content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/cart" element={<ShopingCard />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
          {/* <NotFound /> */}
        </div>
      </div>
    </>
  );
}

export default App;
