import Burger from "../../Burger/Burger";
import Button from "../../UI/Button/Button";

import classes from "./CheckoutSummary.module.css";

const CheckoutSummary = ({
  ingredients,
  checkoutCanceledHandler,
  checkoutContinuedHandler,
}) => {
  return (
    <div className={classes.CheckoutSummary}>
      <h1>We hope it tastes well</h1>
      <div>
        <Burger ingredients={ingredients} />
      </div>
      <Button btnType="Danger" clickHandler={checkoutCanceledHandler}>
        Cancel
      </Button>
      <Button btnType="Success" clickHandler={checkoutContinuedHandler}>
        Continue
      </Button>
    </div>
  );
};

export default CheckoutSummary;
