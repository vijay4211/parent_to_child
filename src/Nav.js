import React from "react";
import { NavLink } from "react-router-dom";

function Nav() {
  return (
    <div  className="navbar">
      <ul>
        <li>
          <NavLink className={"nav_bar_link"} style={{color:"red"}} to={"/"}>Home</NavLink>
        </li>
        <li>
          <NavLink className={"nav_bar_link"} to={"/about"}>About</NavLink>
        </li>
        <li>
          <NavLink className={"nav_bar_link"} to={"/"}>Contact</NavLink>
        </li>
      </ul>
    </div>
  );
}
export default Nav;
