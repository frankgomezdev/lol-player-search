import React, { createContext, useContext, useState } from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import HomePage from "./pages/HomePage";
import SummonerSearch from "./pages/SummonerPage/SummonerSearch";
import ComponentListPage from "./pages/ComponentListPage/ComponentList";

// export const CurrentSummonerContext = createContext(null);
export const CurrentSummonerContext = createContext(null);

function App() {
  const [summonerData, setSummonerData] = useState(null);

  return (
    <CurrentSummonerContext.Provider value={{
      summonerData,
      setSummonerData
    }}>
      <Layout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/summonersearch" element={<SummonerSearch />} />
          <Route path="/componentlist" element={<ComponentListPage />} />
        </Routes>
      </Layout>
    </CurrentSummonerContext.Provider>
  );
}

export default App;
