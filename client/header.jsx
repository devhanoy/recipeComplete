import React from "react";
import PropTypes from "prop-types";

import { Link } from "react-router-dom";

import "./header.less";
import "./other.less";

const params = require("./header-data.json");

const DropDownLink = ({ title, links }) => (
  <li className="dropdown">
    <a href="javascript:void(0)" className="dropbtn">
      {title}
    </a>
    <div className="dropdown-content">
      {links.map(({ path, name }) => (
        <Link key={path} to={path}>
          {name}
        </Link>
      ))}
    </div>
  </li>
);

DropDownLink.propTypes = {
  links: PropTypes.array,
  title: PropTypes.string
};

export const Header = () => (
  <nav className="top-menu">
    <ul>
      {params.map(({ title, links }) => (
        <DropDownLink key={title} links={links} title={title} />
      ))}
    </ul>
  </nav>
);
