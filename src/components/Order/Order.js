import styled from "styled-components";

import classes from "./Order.module.css";

const IngredientSpan = styled.span`
  text-transform: capitalize;
  display: inline-block;
  margin: 0 8px;
  border: 1px solid #ccc;
  padding: 5px;
`;

const Order = (props) => {
  const ingredients = Object.entries(props.ingredients).map(
    ([ingredient, amount]) => (
      <IngredientSpan key={ingredient}>
        {ingredient} ({amount})
      </IngredientSpan>
    )
  );

  return (
    <div className={classes.Order}>
      <p>Ingredients: {ingredients}</p>
      <p>
        Price: <strong>USD {Number(props.price).toFixed(2)}</strong>
      </p>
    </div>
  );
};

export default Order;
