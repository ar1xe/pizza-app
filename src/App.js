import React, { createContext, useState } from "react";
import { Routes, Route } from "react-router-dom";

import "./scss/app.scss";
import Header from "./components/Header";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import ShopingCard from "./pages/ShopingCart";

// @ts-ignore
export const AppContext = React.createContext();

function App() {
  const [searchValue, setSearchValue] = useState("");
  return (
    <>
      <div className="wrapper">
        <AppContext.Provider value={{ searchValue, setSearchValue }}>
          <Header />
          <div className="content">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/cart" element={<ShopingCard />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </div>
        </AppContext.Provider>
      </div>
    </>
  );
}

export default App;
