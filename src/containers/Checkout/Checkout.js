import { Component } from "react";
// import { Outlet } from "react-router-dom";

import { Routes, Route } from "react-router-dom";

import withRouter from "../../hoc/withRouter/withRouter";

import CheckoutSummary from "../../components/Order/CheckoutSummary/CheckoutSummary";

import ContactData from "./ContactData/ContactData";

class Checkout extends Component {
  constructor(props) {
    super(props);

    const query = new URLSearchParams(this.props.router.location.search);

    const ingredients = {};
    let price;

    for (const [ingredient, amount] of query.entries()) {
      if (ingredient === "price") {
        price = amount;
      } else {
        ingredients[ingredient] = amount;
      }
    }

    this.state = {
      ingredients,
      price,
    };
  }

  checkoutCanceledHandler = () => {
    this.props.router.navigate("/");
  };

  checkoutContinuedHandler = () => {
    this.props.router.navigate("/checkout/contact-data");
  };

  componentDidMount = () => {
    console.log(this.props);
  };

  render() {
    return (
      <div>
        <CheckoutSummary
          ingredients={this.state.ingredients}
          checkoutCanceledHandler={this.checkoutCanceledHandler}
          checkoutContinuedHandler={this.checkoutContinuedHandler}
        />
        {/* <Outlet /> */}
        <Routes>
          <Route
            path="contact-data"
            element={
              <ContactData
                ingredients={this.state.ingredients}
                price={this.state.price}
                navigate={this.props.router.navigate}
              />
            }
          />
        </Routes>
      </div>
    );
  }
}

export default withRouter(Checkout);
