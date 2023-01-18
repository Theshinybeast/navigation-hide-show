import React from "react";
import classnames from "classnames";

import NavbarItem from "./NavbarItem";

import navbarData from "./navbarData";

const Navbar = ({ visible }) => (
  <nav
    className={classnames("navbar", {
      "navbar--hidden": !visible
    })}
  >
    <a href="/" style={{ textDecoration: "none" }}>
      <h3 style={{ color: "#323330" }}>GHOSH</h3>
    </a>
    <div>
      {navbarData.map(({ link, label }) => (
        <NavbarItem link={link} label={label} classNames={[]} />
      ))}
    </div>
  </nav>
);

export default Navbar;
