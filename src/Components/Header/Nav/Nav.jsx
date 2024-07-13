import React from "react";
import { RiHome2Line, RiInformationLine, RiProjectorLine, RiFileTextLine, RiArticleLine } from 'react-icons/ri'; 
import { AiFillBank } from "react-icons/ai";
// Import icons from react-icons
import ApnaLink from "./Apnalink/Apnalink.jsx";
import ForkBtn from "./forkBtn/ForkBtn.jsx";
import "./Nav.css"; // Ensure this import points to your CSS file

function Nav({ style }) {
  return (
    <nav style={style} className="nav-container">
      <div className="logotitle">
        <h1>GP</h1>
      </div>
      <ul className="nav-list">
        <li className="nav-item">
          <ApnaLink href="/">
            <AiFillBank className="nav-icon" /> Home
          </ApnaLink>
        </li>
        <li className="nav-item">
          <ApnaLink href="/about">
            <RiInformationLine className="nav-icon" /> About
          </ApnaLink>
        </li>
        <li className="nav-item">
          <ApnaLink href="/projects">
            <RiProjectorLine className="nav-icon" /> Projects
          </ApnaLink>
        </li>
        <li className="nav-item">
          <ApnaLink href="/resume">
            <RiFileTextLine className="nav-icon" /> Resume
          </ApnaLink>
        </li>
        <li className="nav-item">
          <ApnaLink href="/blogs">
            <RiArticleLine className="nav-icon" /> Blogs
          </ApnaLink>
        </li>
        <li className="nav-item">
          <ForkBtn />
        </li>
      </ul>
    </nav>
  );
}

export default Nav;
