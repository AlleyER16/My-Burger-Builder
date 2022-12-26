import { Component } from "react";

import axios from "../../axios-orders";

import withErrorHandler from "../../hoc/withErrorHandler/withErrorHandler";

import withRouter from "../../hoc/withRouter/withRouter";

import Aux from "../../hoc/Auxiliary/Auxiliary";

import Burger from "../../components/Burger/Burger";
import BuildControls from "../../components/Burger/BuildControls/BuildControls";
import OrderSummary from "../../components/Burger/OrderSummary/OrderSummary";

import Modal from "../../components/UI/Modal/Modal";
import Spinner from "../../components/UI/Spinner/Spinner";

const INGREDIENT_PRICES = {
  salad: 0.5,
  cheese: 0.4,
  meat: 1.3,
  bacon: 0.7,
};

class BurgerBuilder extends Component {
  state = {
    ingredients: null,
    totalPrice: 4,
    purchasable: false,
    purchasing: false,
    loading: false,
    error: false,
  };

  updatePurchaseState = () => {
    const totalIngredients = Object.values(this.state.ingredients).reduce(
      (acc, next) => acc + next,
      0
    );
    this.setState({ purchasable: totalIngredients > 0 });
  };

  addIngredientHandler = (type) => {
    this.setState(
      (prevState) => {
        return {
          // ...prevState,
          ingredients: {
            ...prevState.ingredients,
            [type]: prevState.ingredients[type] + 1,
          },
          totalPrice: prevState.totalPrice + INGREDIENT_PRICES[type],
        };
      },
      () => {
        this.updatePurchaseState();
      }
    );
  };

  removeIngredientHandler = (type) => {
    this.setState(
      (prevState) => {
        return {
          // ...prevState,
          ingredients: {
            ...prevState.ingredients,
            [type]: prevState.ingredients[type]
              ? prevState.ingredients[type] - 1
              : 0,
          },
          totalPrice: prevState.ingredients[type]
            ? prevState.totalPrice - INGREDIENT_PRICES[type]
            : prevState.totalPrice,
        };
      },
      () => {
        this.updatePurchaseState();
      }
    );
  };

  purchaseHandler = () => {
    this.setState({ purchasing: true });
  };

  purchaseCancelHandler = () => {
    this.setState({ purchasing: false });
  };

  purchaseContinueHandler = () => {
    const queryParams =
      Object.entries(this.state.ingredients)
        .map(([ingredient, number]) => {
          return `${encodeURIComponent(ingredient)}=${encodeURIComponent(
            number
          )}`;
        })
        .join("&") +
      "&price=" +
      this.state.totalPrice;
    this.props.router.navigate({
      pathname: "/checkout",
      search: `?${queryParams}`,
    });
  };

  componentDidMount = () => {
    // console.log(this.props);
    axios
      .get("/ingredients.json")
      .then((response) => {
        this.setState({ ingredients: response.data });
      })
      .catch(() => {
        this.setState({ error: true });
      });
  };

  render() {
    const disableInfo = { ...this.state.ingredients };

    for (const key in disableInfo) {
      disableInfo[key] = disableInfo[key] === 0;
    }

    let orderSummary = null;

    let burger = this.state.error ? (
      <p>Ingredients can't be loaded</p>
    ) : (
      <Spinner />
    );

    if (this.state.ingredients) {
      orderSummary = (
        <OrderSummary
          ingredients={this.state.ingredients}
          totalPrice={this.state.totalPrice}
          purchaseCancel={this.purchaseCancelHandler}
          purchaseContinue={this.purchaseContinueHandler}
        />
      );
      burger = (
        <Aux>
          <Burger ingredients={this.state.ingredients} />
          <BuildControls
            ingredientAdd={this.addIngredientHandler}
            ingredientRemove={this.removeIngredientHandler}
            disableInfo={disableInfo}
            totalPrice={this.state.totalPrice}
            purchasable={this.state.purchasable}
            order={this.purchaseHandler}
          />
        </Aux>
      );
    }

    if (this.state.loading) orderSummary = <Spinner />;

    return (
      <Aux>
        <Modal
          show={this.state.purchasing}
          modalCloseHandler={this.purchaseCancelHandler}
        >
          {orderSummary}
        </Modal>
        {burger}
      </Aux>
    );
  }
}

export default withRouter(withErrorHandler(BurgerBuilder, axios));
