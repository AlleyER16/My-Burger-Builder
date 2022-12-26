import classes from "./Burger.module.css";

import BurgerIngredient from "./BurgerIngredient/BurgerIngredient";

const Burger = ({ ingredients }) => {
  let ingredientsResolved = [];

  for (const [ingredient, amount] of Object.entries(ingredients)) {
    for (let i = 0; i < amount; i++) {
      ingredientsResolved.push(
        <BurgerIngredient key={ingredient + i} type={ingredient} />
      );
    }
  }

  if (!ingredientsResolved.length) {
    ingredientsResolved = <p>Please start adding ingredients</p>;
  }

  return (
    <div className={classes.Burger}>
      <BurgerIngredient type="bread-top" />
      {ingredientsResolved}
      <BurgerIngredient type="bread-bottom" />
    </div>
  );
};

//   const transformedIngredients = Object.keys(ingredients)
//     .map((ingredient) => {
//       return [...Array(ingredients[ingredient])].map((_, index) => {
//         return <BurgerIngredient key={ingredient + index} type={ingredient} />;
//       });
//     })
//     .reduce((arr, el) => {
//       return arr.concat(el);
//     }, []);

//   console.log(transformedIngredients);

export default Burger;
