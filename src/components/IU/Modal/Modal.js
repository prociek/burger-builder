import React from "react";
import Aux from "../../../hoc/Aux/Aux";
import Backdrop from "../Backdrop/Backdrop";

import classes from "./Modal.module.css";

class Modal extends React.Component {
  /*     componentDidUpdate() {
        console.log('modal has updated');
    } */

  shouldComponentUpdate(nextProps, nextState) {
    return (
      nextProps.purchase !== this.props.purchase ||
      nextProps.children !== this.props.children
    );
  }

  render() {
    return (
      <Aux>
        <Backdrop show={this.props.purchase} clicked={this.props.modalClosed} />
        <div
          className={classes.Modal}
          style={{
            transform: this.props.purchase
              ? "translateY(0)"
              : "translateY(-100vh)",
            opacity: this.props.purchase ? "1" : "0",
          }}
        >
          {this.props.children}
        </div>
      </Aux>
    );
  }
}

export default Modal;
