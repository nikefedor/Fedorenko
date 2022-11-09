import React from "react";
import { NavLink } from "react-router-dom";
import classes from "./Nav.module.css";


const Nav = () => {
  return <nav className={classes.nav}>
    <div className={classes.item}>
      <NavLink to="/Profile"className={navData=>navData.isActive ? classes.active:classes.item}>My profile</NavLink>   
    </div>
    <div className={classes.item}>
      <NavLink to="/dialogs"className={navData=>navData.isActive ? classes.active:classes.item}>My message</NavLink>
    </div>
    <div className={classes.item}>
      <NavLink>News</NavLink>
    </div>
    <div className={classes.item}>
      <NavLink>My Music</NavLink>
    </div>
    <div className={classes.item}>
      <NavLink>Settings</NavLink>
    </div>
  </nav>
}
export default Nav;