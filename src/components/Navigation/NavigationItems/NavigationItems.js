import React from "react";
import { connect } from "react-redux";
import NavigationItem from "./NavigationItem/NavigationItem";

import classes from "./NavigationItems.module.css";

export const NavigationItems = props => (
  <ul className={classes.NavigationItems}>
    <NavigationItem link="/">Burger Builder</NavigationItem>
    {props.isAuth && <NavigationItem link="/orders">Orders</NavigationItem>}
    {props.isAuth ? (
      <NavigationItem link="/logout">Log out</NavigationItem>
    ) : (
      <NavigationItem link="/auth">Log in</NavigationItem>
    )}
  </ul>
);

const mapStateToProps = state => {
  return {
    isAuth: state.user.token != null
  };
};

export default connect(mapStateToProps)(NavigationItems);
