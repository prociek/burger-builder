import React from "react";
import { Route, Redirect } from "react-router-dom";
import CheckoutSummary from "../../components/CheckoutSummary/CheckoutSummary";
import ContactData from "./ContactData/ContactData";
import { connect } from "react-redux";

class Checkout extends React.Component {
  render() {
    return this.props.ingredients && !this.props.purchased ? (
      <section style={{ marginTop: "40px" }}>
        <CheckoutSummary
          checkoutCancel={this.props.history.goBack}
          checkoutContinue={() =>
            this.props.history.push("/checkout/contact-data")
          }
          ingredients={this.props.ingredients}
        />
        <Route
          path={`${this.props.match.path}/contact-data`}
          component={ContactData}
        />
      </section>
    ) : (
      <Redirect to="/" />
    );
  }
}

const mapStateToProps = (state) => {
  return {
    ingredients: state.burger.ingredients,
    purchased: state.order.purchased,
  };
};

export default connect(mapStateToProps)(Checkout);
