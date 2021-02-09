import React, { useState } from "react";
import Aux from "../Aux/Aux";
import Toolbar from "../../components/Navigation/Toolbar/Toolbar";
import SideDrawer from "../../components/Navigation/SideDrawer/SideDrawer";

import classes from "./Layout.module.css";

const Layout = props => {
  const [showSideDrawer, setShowSideDrawer] = useState(false);

  const closeSideDrawerHandler = () => {
    setShowSideDrawer(false);
  };

  const toggleSideDrawer = () => {
    setShowSideDrawer(prevState => !prevState);
  };

  return (
    <Aux>
      <Toolbar clickedToggle={toggleSideDrawer} />
      <SideDrawer open={showSideDrawer} closed={closeSideDrawerHandler} />
      <main className={classes.Content}>{props.children}</main>
    </Aux>
  );
};

export default Layout;
