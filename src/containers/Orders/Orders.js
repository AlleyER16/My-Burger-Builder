import { Component } from "react";

import withErrorHandler from "../../hoc/withErrorHandler/withErrorHandler";

import Order from "../../components/Order/Order";

import Spinner from "../../components/UI/Spinner/Spinner";

import axios from "../../axios-orders";

class Orders extends Component {
  state = {
    orders: [],
    loading: true,
  };

  componentDidMount() {
    axios
      .get("/orders.json")
      .then((response) => {
        const orders = Object.entries(response.data).map(([id, order]) => {
          order.id = id;
          return order;
        });
        this.setState({ orders, loading: false });
      })
      .catch(() => {
        this.setState({ loading: false });
      });
  }

  render() {
    let orders = <Spinner />;

    if (!this.state.loading)
      orders = this.state.orders.map((order) => (
        <Order key={order.id} {...order} />
      ));

    return <div>{orders}</div>;
  }
}

export default withErrorHandler(Orders, axios);
