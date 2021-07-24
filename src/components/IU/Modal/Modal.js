import React from "react";
import Auxiliary from "../../../hoc/Auxiliary/Auxiliary";
import Backdrop from "../Backdrop/Backdrop";

import classes from "./Modal.module.css";

const Modal = React.memo(
  props => (
    <Auxiliary>
      <Backdrop show={props.purchase} clicked={props.modalClosed} />
      <div
        className={classes.Modal}
        style={{
          transform: props.purchase ? "translateY(0)" : "translateY(-100vh)",
          opacity: props.purchase ? "1" : "0"
        }}
      >
        {props.children}
      </div>
    </Auxiliary>
  ),
  (prevProps, nextProps) =>
    prevProps.purchase === nextProps.purchase &&
    prevProps.children === nextProps.children
);

export default Modal;
