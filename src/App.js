import React from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import SummonerData from "./components/summonerData/SummonerData";
import Layout from "./components/Layout/Layout";
import HomePage from "./pages/HomePage";
import SummonerSearch from "./pages/SummonerPage/SummonerSearch";
import { Context } from "./contexts/context";

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/summonersearch" element={<SummonerSearch />} />
      </Routes>
    </Layout>
  );
}

export default App;
