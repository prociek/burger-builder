import React from "react";
import { Route, Redirect } from "react-router-dom";
import CheckoutSummary from "../../components/CheckoutSummary/CheckoutSummary";
import ContactData from "./ContactData/ContactData";
import { connect } from "react-redux";

const Checkout = props => {
  return props.ingredients && !props.purchased ? (
    <section style={{ marginTop: "40px" }}>
      <CheckoutSummary
        checkoutCancel={props.history.goBack}
        checkoutContinue={() => props.history.push("/checkout/contact-data")}
        ingredients={props.ingredients}
      />
      <Route
        path={`${props.match.path}/contact-data`}
        component={ContactData}
      />
    </section>
  ) : (
    <Redirect to="/" />
  );
};

const mapStateToProps = state => {
  return {
    ingredients: state.burger.ingredients,
    purchased: state.order.purchased
  };
};

export default connect(mapStateToProps)(Checkout);
