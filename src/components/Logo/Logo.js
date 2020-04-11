import React from "react";
import BurgerLogo from "../../assets/images/Burger-Logo.png";
import classes from "./Logo.module.css";

const logo = props => (
  <div className={classes.Logo}>
    <img style={props.height} src={BurgerLogo} alt="Burger Logo" />
  </div>
);

export default logo;
