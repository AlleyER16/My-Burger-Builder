import { NavLink } from "react-router-dom";

import classes from "./NavigationItem.module.css";

const NavigationItem = ({ link, active, children }) => (
  <li className={classes.NavigationItem}>
    <NavLink
      to={link}
      className={({ isActive }) => (isActive ? classes.active : null)}
      end
    >
      {children}
    </NavLink>
  </li>
);

export default NavigationItem;
