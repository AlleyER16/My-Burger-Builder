import classes from "./Backdrop.module.css";

const Backdrop = ({ show, clickHandler }) =>
  show ? <div className={classes.Backdrop} onClick={clickHandler}></div> : null;

export default Backdrop;
