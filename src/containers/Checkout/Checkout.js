import React from "react";
import { Route } from "react-router-dom";
import CheckoutSummary from "../../components/CheckoutSummary/CheckoutSummary";
import ContactData from "./ContactData/ContactData";

class Checkout extends React.Component {
  state = {
    ingredients: null,
    price: 0,
  };

  componentDidMount() {
    const ingredients = {};
    const query = new URLSearchParams(this.props.location.search);
    let price = 0;

    for (let q of query.entries()) {
      if (q[0] === "price") {
        price = +q[1];
      } else {
        ingredients[q[0]] = +q[1];
      }
    }
    this.setState({ price, ingredients });
  }

  render() {
    return (
      this.state.ingredients && (
        <section style={{ marginTop: "40px" }}>
          <CheckoutSummary
            checkoutCancel={this.props.history.goBack}
            checkoutContinue={() =>
              this.props.history.push("/checkout/contact-data")
            }
            ingredients={this.state.ingredients}
          />
          <Route
            path={`${this.props.match.path}/contact-data`}
            render={(props) => (
              <ContactData
                {...props}
                ingredients={this.state.ingredients}
                price={this.state.price}
              />
            )}
          />
        </section>
      )
    );
  }
}

export default Checkout;
