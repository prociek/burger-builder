import React from "react";

import Aux from "../../../hoc/Auxiliary/Auxiliary";
import Button from "../../IU/Button/Button";

const orderSummary = props => {
  const ingredientSummary = Object.keys(props.ingredients).map(ingKey => {
    return (
      <li key={ingKey}>
        <span style={{ textTransform: "capitalize" }}>{ingKey}</span>:{" "}
        {props.ingredients[ingKey]}
      </li>
    );
  });

  return (
    <Aux>
      <h3>Your Order</h3>
      <p>A delicious burger with the following ingredients:</p>
      <ul style={{ listStyle: "none" }}>{ingredientSummary}</ul>
      <p>
        <strong>Current price: {props.price.toFixed(2)}</strong>
      </p>
      <p>Continue to checkout?</p>
      <Button clicked={props.modalClosed} btnType="Danger">
        CANCEL
      </Button>
      <Button clicked={props.orderContinue} btnType="Success">
        CONTINUE
      </Button>
    </Aux>
  );
};

export default orderSummary;
