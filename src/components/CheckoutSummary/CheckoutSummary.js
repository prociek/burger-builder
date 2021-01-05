import React from "react";
import Burger from "../Burger/Burger";
import Button from "../IU/Button/Button";

import classes from "./CheckoutSummary.module.css";

const CheckoutSummary = ({ ingredients, checkoutCancel, checkoutContinue }) => {
  return (
    <div className={classes.CheckoutSummary}>
      <h1>We hope it tastes well!</h1>
      <Burger ingredients={ingredients} />
      <Button clicked={checkoutCancel} btnType="Danger">
        CANCEL
      </Button>
      <Button clicked={checkoutContinue} btnType="Success">
        CONTINUE
      </Button>
    </div>
  );
};

export default CheckoutSummary;
