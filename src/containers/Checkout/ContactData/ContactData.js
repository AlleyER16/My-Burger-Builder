import { Component } from "react";

import withErrorHandler from "../../../hoc/withErrorHandler/withErrorHandler";

import Button from "../../../components/UI/Button/Button";
import Spinner from "../../../components/UI/Spinner/Spinner";

import axios from "../../../axios-orders";

import classes from "./ContactData.module.css";

class ContactData extends Component {
  state = {
    name: "",
    email: "",
    address: {
      street: "",
      postalCode: "",
    },

    loading: false,
  };

  orderHandler = (e) => {
    e.preventDefault();

    this.setState({ loading: true });

    const order = {
      ingredients: this.props.ingredients,
      price: this.props.price,
      customer: {
        name: "Rehoboth Micah-Daniels",
        address: {
          street: "No 2, Ojokondo street",
          zipCode: "200213",
          country: "Nigeria",
        },
        email: "rehobothmicahdaniels@gmail.com",
      },
      deliveryMethod: "fastest",
    };
    axios
      .post("/orders.json", order)
      .then((response) => {
        this.props.navigate("/");
      })
      .catch((err) => {
        // console.log(err)
      })
      .finally(() => {
        this.setState({ loading: false });
      });
  };

  render() {
    let form = (
      <form>
        <input
          className={classes.Input}
          type="text"
          name="name"
          placeholder="Your name"
        />
        <input
          className={classes.Input}
          type="email"
          name="email"
          placeholder="Your Mail"
        />
        <input
          className={classes.Input}
          type="text"
          name="street"
          placeholder="Street"
        />
        <input
          className={classes.Input}
          type="text"
          name="postal"
          placeholder="Postal Code"
        />
        <Button btnType="Success" clickHandler={this.orderHandler}>
          Order
        </Button>
      </form>
    );

    if (this.state.loading) form = <Spinner />;

    return (
      <div className={classes.ContactData}>
        <h4>Enter your contact data</h4>
        {form}
      </div>
    );
  }
}

export default withErrorHandler(ContactData, axios);
