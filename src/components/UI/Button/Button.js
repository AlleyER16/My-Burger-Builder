import classes from "./Button.module.css";

const Button = ({ btnType, clickHandler, children }) => (
  <button
    className={[classes.Button, classes[btnType]].join(" ")}
    onClick={clickHandler}
  >
    {children}
  </button>
);

export default Button;
