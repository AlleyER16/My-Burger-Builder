import classes from "./DrawerToggle.module.css";

const DrawerToggle = ({ openSideDrawerHandler }) => {
  return (
    <div className={classes.DrawerToggle} onClick={openSideDrawerHandler}>
      <div></div>
      <div></div>
      <div></div>
    </div>
  );
};

export default DrawerToggle;
