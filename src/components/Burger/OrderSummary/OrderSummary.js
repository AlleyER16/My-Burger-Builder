import Aux from "../../../hoc/Auxiliary/Auxiliary";

import Button from "../../UI/Button/Button";

const OrderSummary = ({
  ingredients,
  totalPrice,
  purchaseCancel,
  purchaseContinue,
}) => {
  const ingredientsSummary = Object.entries(ingredients).map(
    ([ingredient, number]) => (
      <li key={ingredient}>
        <span style={{ textTransform: "uppercase" }}>{ingredient}</span>:{" "}
        {number}
      </li>
    )
  );

  return (
    <Aux>
      <h3>Your Order</h3>
      <p>A delicious burger with the following ingredients</p>
      <ul>{ingredientsSummary}</ul>
      <p>
        <strong>Total Price:</strong> {totalPrice.toFixed(2)}
      </p>
      <p>Continue to Checkout?</p>
      <Button btnType="Danger" clickHandler={purchaseCancel}>
        CANCEL
      </Button>
      <Button btnType="Success" clickHandler={purchaseContinue}>
        CONTINUE
      </Button>
    </Aux>
  );
};

export default OrderSummary;
