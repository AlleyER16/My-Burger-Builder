import { Component } from "react";

import Aux from "../Auxiliary/Auxiliary";

import Toolbar from "../../components/Navigation/Toolbar/Toolbar";
import SideDrawer from "../../components/Navigation/SideDrawer/SideDrawer";

import classes from "./Layout.module.css";

class Layout extends Component {
  state = {
    showSideDrawer: false,
  };

  openSideDrawer = () => {
    this.setState({ showSideDrawer: true });
  };

  closeSideDrawer = () => {
    this.setState({ showSideDrawer: false });
  };

  render() {
    return (
      <Aux>
        <Toolbar openSideDrawerHandler={this.openSideDrawer} />
        <SideDrawer
          showSideDrawer={this.state.showSideDrawer}
          closeSideDrawerHandler={this.closeSideDrawer}
        />
        <main className={classes.Content}>{this.props.children}</main>
      </Aux>
    );
  }
}

export default Layout;
