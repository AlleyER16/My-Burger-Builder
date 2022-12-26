import classes from "./BuildControl.module.css";

const BuildControl = ({ label, ingredientAdd, ingredientRemove, disabled }) => {
  return (
    <div className={classes.BuildControl}>
      <div className={classes.Label}>{label}</div>
      <button
        className={classes.Less}
        onClick={ingredientRemove}
        disabled={disabled}
      >
        Less
      </button>
      <button className={classes.More} onClick={ingredientAdd}>
        More
      </button>
    </div>
  );
};

export default BuildControl;
