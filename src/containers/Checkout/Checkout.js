import React from "react";
import { Route } from "react-router-dom";
import CheckoutSummary from "../../components/CheckoutSummary/CheckoutSummary";
import ContactData from "./ContactData/ContactData";
import { connect } from "react-redux";

class Checkout extends React.Component {
  render() {
    return (
      this.props.ingredients && (
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
      )
    );
  }
}

const mapStateToProps = (state) => {
  return {
    ingredients: state.ingredients,
  };
};

export default connect(mapStateToProps)(Checkout);
