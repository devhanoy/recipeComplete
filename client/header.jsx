import React from "react";
import PropTypes from "prop-types";

import { Link } from "react-router-dom";

const links1 = [
  {
    path: "/addRecipe",
    name: "Ajout de recette"
  },
  {
    path: "/recipesList",
    name: "Liste de recettes"
  }
];

const links2 = [
  {
    path: "/category/add",
    name: "Ajout de catégorie"
  },
  {
    path: "/categories",
    name: "Liste de catégories"
  },
  {
    path: "/addProduct",
    name: "Ajout de produits"
  },
  {
    path: "/products",
    name: "Liste des produits"
  }
];

const DropDownLink = ({ links }) => (
  <li className="dropdown">
    <a href="javascript:void(0)" className="dropbtn">
      Recettes
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
  links: PropTypes.array
};

export const Header = () => (
  <nav className="top-menu">
    <ul>
      <DropDownLink links={links1} />
      <DropDownLink links={links2} />
    </ul>
  </nav>
);
