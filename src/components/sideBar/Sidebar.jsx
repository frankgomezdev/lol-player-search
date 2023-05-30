import React, { useContext } from "react";
import "./sidebar.css";
import { Link } from "react-router-dom";
import { Context } from "../../contexts/context";

function SideBar() {

const sidebarData = useContext(Context)

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
      {sidebarData}
    </div>
  );
}

export default SideBar;
