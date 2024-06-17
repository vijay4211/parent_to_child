import React from "react";
import { NavLink } from "react-router-dom";

function Nav() {
  return (
    <div  className="navbar">
      <ul>
        <li>
          <NavLink to={"/"} style={({isActive})=>{return{color: isActive ? "skyblue" :""}}} className={"nav_bar_link"}>Home</NavLink>
        </li>
        <li>
          <NavLink  to={"/about"} style={({isActive})=>{return{color: isActive ? "skyblue" :""}}} className={"nav_bar_link"}>About</NavLink>
        </li>
        <li>
          <NavLink  to={"/contact"} style={({isActive})=>{return{color: isActive ? "skyblue" :""}}} className={"nav_bar_link"}>Contact</NavLink>
        </li>
      </ul>
    </div>
  );
}
export default Nav;
