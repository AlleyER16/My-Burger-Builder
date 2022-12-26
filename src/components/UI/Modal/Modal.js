import classes from "./Modal.module.css";

import Aux from "../../../hoc/Auxiliary/Auxiliary";

import Backdrop from "../Backdrop/Backdrop";
import { Component } from "react";

// const Modal = ({ show, modalCloseHandler, children }) => (
//   <Aux>
//     <Backdrop show={show} clickHandler={modalCloseHandler} />
//     <div
//       className={classes.Modal}
//       style={{
//         transform: show ? "translateY(0)" : "translateY(-100vh)",
//         opacity: show ? "1" : "0",
//       }}
//     >
//       {children}
//     </div>
//   </Aux>
// );

// Optimized with should component update
// Note: its update also controls the update of it's child component
// so they are optimized to not get updated too depending on the condition
class Modal extends Component {
  // componentWillUpdate is deprecated
  //   componentWillUpdate() {
  //     console.log("[Modal.js] component will update");
  //   }

  shouldComponentUpdate(nextProps, _) {
    return (
      nextProps.show !== this.props.show ||
      nextProps.children !== this.props.children
    );
  }

  render() {
    return (
      <Aux>
        <Backdrop
          show={this.props.show}
          clickHandler={this.props.modalCloseHandler}
        />
        <div
          className={classes.Modal}
          style={{
            transform: this.props.show ? "translateY(0)" : "translateY(-100vh)",
            opacity: this.props.show ? "1" : "0",
          }}
        >
          {this.props.children}
        </div>
      </Aux>
    );
  }
}

export default Modal;
