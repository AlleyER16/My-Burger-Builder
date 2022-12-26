import Logo from "../../Logo/Logo";
import NavigationItems from "../NavigationItems/NavigationItems";

import Backdrop from "../../UI/Backdrop/Backdrop";

import Aux from "../../../hoc/Auxiliary/Auxiliary";

import classes from "./SideDrawer.module.css";

const SideDrawer = ({ showSideDrawer, closeSideDrawerHandler }) => {
  return (
    <Aux>
      <Backdrop show={showSideDrawer} clickHandler={closeSideDrawerHandler} />
      <div
        className={[
          classes.SideDrawer,
          showSideDrawer ? classes.Open : classes.Closed,
        ].join(" ")}
      >
        <div className={classes.Logo}>
          <Logo />
        </div>
        <nav>
          <NavigationItems />
        </nav>
      </div>
    </Aux>
  );
};

export default SideDrawer;
