import React from "react";
import { connect } from "react-redux";
import withError from "../../../hoc/withError/withError";
import axios from "../../../axios-orders";
import Button from "../../../components/IU/Button/Button";
import Spinner from "../../../components/IU/Spinner/Spinner";
import Input from "../../../components/IU/Input/Input";

import Classes from "./ContactData.module.css";
import { purchaseBurger } from "../../../store/actions";

class ContactData extends React.Component {
  state = {
    orderForm: {
      name: {
        elementType: "input",
        elementConfig: {
          type: "text",
          placeholder: "Your Name",
        },
        value: "",
        validation: {
          required: true,
          minLength: 4,
        },
        isValid: false,
        touched: false,
      },
      email: {
        elementType: "input",
        elementConfig: {
          type: "email",
          placeholder: "Your E-mail",
        },
        value: "",
        validation: {
          required: true,
        },
        isValid: false,
        touched: false,
      },
      street: {
        elementType: "input",
        elementConfig: {
          type: "text",
          placeholder: "Your Street",
        },
        value: "",
        validation: {
          required: true,
        },
        isValid: false,
        touched: false,
      },
      postal: {
        elementType: "input",
        elementConfig: {
          type: "text",
          placeholder: "Your Postal",
        },
        value: "",
        validation: {
          required: true,
          minLength: 5,
          maxLength: 5,
        },
        isValid: false,
        touched: false,
      },
      deliveryMethod: {
        elementType: "select",
        elementConfig: {
          options: [
            { value: "fastest", display: "Fastest" },
            { value: "cheepest", display: "Cheepest" },
          ],
        },
        value: "fastest",
        validation: {
          required: true,
        },
        isValid: true,
        touched: false,
      },
    },
    formValid: false,
  };

  handleOrder = (e) => {
    e.preventDefault();
    let orderData = {};
    for (let name in this.state.orderForm) {
      orderData[name] = this.state.orderForm[name].value;
    }
    const order = {
      ingredients: this.props.ingredients,
      price: this.props.price,
      date: new Date(),
      orderData,
    };
    this.props.onPurchaseBurger(order);
  };

  onChangeHandler = (e) => {
    const newInput = { ...this.state.orderForm[e.target.name] };
    newInput.value = e.target.value;
    newInput.isValid = this.checkValidation(
      newInput.value,
      newInput.validation
    );
    newInput.touched = true;
    const newState = { ...this.state.orderForm, [e.target.name]: newInput };

    let formValid = true;
    for (let name in newState) {
      formValid = newState[name].isValid && formValid;
    }

    this.setState({
      orderForm: newState,
      formValid,
    });
  };

  checkValidation(value, rules) {
    let isValid = true;

    if (rules.required) {
      isValid = value.trim() !== "" && isValid;
    }

    if (rules.minLength) {
      isValid = value.trim().length >= rules.minLength && isValid;
    }

    if (rules.maxLength) {
      isValid = value.trim().length <= rules.maxLength && isValid;
    }

    return isValid;
  }

  render() {
    let form = <Spinner />;
    if (!this.props.loading) {
      let inputs = [];
      for (let key in this.state.orderForm) {
        inputs.push(
          <Input
            key={key}
            name={key}
            elementType={this.state.orderForm[key].elementType}
            elementConfig={this.state.orderForm[key].elementConfig}
            value={this.state.orderForm[key].value}
            isValid={!this.state.orderForm[key].isValid}
            touched={this.state.orderForm[key].touched}
            changed={this.onChangeHandler}
          />
        );
      }
      form = (
        <form onSubmit={this.handleOrder}>
          {inputs}
          <Button btnType="Success" disabled={!this.state.formValid}>
            ORDER
          </Button>
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

const mapStateToProps = (state) => {
  return {
    ingredients: state.burger.ingredients,
    price: state.burger.totalPrice,
    loading: state.order.loading,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onPurchaseBurger: (orderData) => dispatch(purchaseBurger(orderData)),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withError(ContactData, axios));
