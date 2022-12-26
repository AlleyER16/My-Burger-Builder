import React, { Component } from "react";

import { Routes, Route } from "react-router-dom";

import Layout from "./hoc/Layout/Layout";

import BurgerBuilder from "./containers/BurgerBuilder/BurgerBuilder";
import Checkout from "./containers/Checkout/Checkout";
// import ContactData from "./containers/Checkout/ContactData/ContactData";
import Orders from "./containers/Orders/Orders";

class App extends Component {
  render() {
    return (
      <Layout>
        <Routes>
          <Route path="/" element={<BurgerBuilder />} />
          {/* <Route path="/checkout/*" element={<Checkout />}>
            <Route path="contact-data" element={<ContactData />} />
          </Route> */}
          <Route path="/checkout/*" element={<Checkout />} />
          <Route path="/orders" element={<Orders />}></Route>
        </Routes>
      </Layout>
    );
  }
}

export default App;
