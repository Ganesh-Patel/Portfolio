import React from "react";
import { NavLink } from "react-router-dom";
import './Apnalink.css'

function ApnaLink(props) {
  return (
    <NavLink
      className={({ isActive }) => {
        return isActive ? "isActive" : null;
      }}
      style={{ textDecoration: "none" ,fontSize:'1.5rem'}}
      to={props.href}
    >
      {props.children}
    </NavLink>
  );
}

export default ApnaLink;