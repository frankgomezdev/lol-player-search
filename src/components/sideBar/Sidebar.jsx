import React, { useContext } from "react";
import "./sidebar.css";
import { Link } from "react-router-dom";
import { CurrentSummonerContext } from "../../App";
// import { Context } from "../../contexts/context";

function SideBar() {

// const sidebarData = useContext(Context)
const {
  currentSommoner
} = useContext(CurrentSummonerContext);

  return (
    <div className="sidebar">
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/summonersearch">Player Search</Link>
        </li>
        <li>
          <Link to="/componentlist">Component List</Link>
        </li>
      </ul>
      {currentSommoner && <div><h2>Sommoner: {currentSommoner.name}</h2></div>}
    </div>
  );
}

export default SideBar;
