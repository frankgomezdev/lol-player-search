import React from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import HomePage from "./pages/HomePage";
import SummonerSearch from "./pages/SummonerPage/SummonerSearch";


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
