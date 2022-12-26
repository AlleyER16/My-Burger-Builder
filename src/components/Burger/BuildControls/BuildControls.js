import BuildControl from "./BuildControl/BuildControl";

import classes from "./BuildControls.module.css";

const controls = [
  { label: "Salad", type: "salad" },
  { label: "Bacon", type: "bacon" },
  { label: "Cheese", type: "cheese" },
  { label: "Meat", type: "meat" },
];

const BuildControls = ({
  ingredientAdd,
  ingredientRemove,
  disableInfo,
  totalPrice,
  purchasable,
  order,
}) => {
  return (
    <div className={classes.BuildControls}>
      <p>
        Current Price: <strong>{totalPrice.toFixed(2)}</strong>
      </p>
      {controls.map(({ label, type }) => (
        <BuildControl
          key={label}
          label={label}
          ingredientAdd={() => ingredientAdd(type)}
          ingredientRemove={() => ingredientRemove(type)}
          disabled={disableInfo[type]}
        />
      ))}
      <button
        className={classes.OrderButton}
        disabled={!purchasable}
        onClick={order}
      >
        ORDER NOW
      </button>
    </div>
  );
};

export default BuildControls;
