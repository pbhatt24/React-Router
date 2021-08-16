import React from "react";
import { Link } from "react-router-dom";
export default function Nav() {
  return (
    <div>
      {/* navigatin */}
      <nav>
        <ul className="ul_style">
          <li>
            {/* nav links */}
            <Link to="/">Home</Link>
          </li>
          <li>
            {/* nav links */}
            <Link to="/about">About</Link>
          </li>
          <li>
            {/* nav links */}
            <Link to="/contact">Contact</Link>
          </li>
          <li>
            {/* nav links */}
            <Link to="/project">Project</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}
