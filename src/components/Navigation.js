import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import { ScNav } from "./scParts";
import { ProductContext } from "../contexts/ProductContext";



const Navigation = () => {

    const { cart } = useContext(ProductContext);

  return (
    <ScNav>
      <nav className="content">
        <NavLink to="/">Products</NavLink>
        <NavLink to="/cart">
          Cart <span>{cart.length}</span>
        </NavLink>
      </nav>
    </ScNav>
  );
};

export default Navigation;
