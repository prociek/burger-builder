import React from "react";
import axios from "../../../axios-orders";
import Button from "../../../components/IU/Button/Button";
import Spinner from "../../../components/IU/Spinner/Spinner";
import Classes from "./ContactData.module.css";

class ContactData extends React.Component {
  state = {
    name: "",
    email: "",
    street: "",
    postal: "",
    loading: false,
  };

  handleOrder = (e) => {
    e.preventDefault();
    this.setState({ loading: true });
    const order = {
      ingredients: this.props.ingredients,
      price: this.props.price,
      deliveryMethod: "fastest",
      customer: {
        name: "Tomasz Procko",
        adress: {
          street: "Teststreet 33",
          zipCode: "53322",
          city: "Testcity",
        },
      },
      date: new Date(),
    };

    axios
      .post("/orders.json", order)
      .then((data) => {
        this.setState({ loading: false });
        this.props.history.push("/");
      })
      .catch((err) => {
        console.log(err);
        this.setState({ loading: false });
      });
  };

  render() {
    let form = <Spinner />;
    if (!this.state.loading) {
      form = (
        <form onSubmit={this.handleOrder}>
          <input type="text" name="name" placeholder="Your name" />
          <input type="email" name="email" placeholder="Your email" />
          <input type="text" name="street" placeholder="Your street" />
          <input type="text" name="postal" placeholder="Your postal" />
          <Button btnType="Success">ORDER</Button>
        </form>
      );
    }
    return (
      <div className={Classes.ContactData}>
        <h4>Enter your Contact Data</h4>
        {form}
      </div>
    );
  }
}

export default ContactData;
