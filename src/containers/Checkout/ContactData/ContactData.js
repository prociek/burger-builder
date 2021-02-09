import React, { useState } from "react";
import { connect } from "react-redux";
import withError from "../../../hoc/withError/withError";
import axios from "../../../axios-orders";
import Button from "../../../components/IU/Button/Button";
import Spinner from "../../../components/IU/Spinner/Spinner";
import Input from "../../../components/IU/Input/Input";
import Classes from "./ContactData.module.css";
import { purchaseBurger } from "../../../store/actions";
import { checkValidation } from "../../../shared/utility";

const ContactData = props => {
  const [orderForm, setOrderForm] = useState({
    name: {
      elementType: "input",
      elementConfig: {
        type: "text",
        placeholder: "Your Name"
      },
      value: "",
      validation: {
        required: true,
        minLength: 4
      },
      isValid: false,
      touched: false
    },
    email: {
      elementType: "input",
      elementConfig: {
        type: "email",
        placeholder: "Your E-mail"
      },
      value: "",
      validation: {
        required: true,
        isEmail: true
      },
      isValid: false,
      touched: false
    },
    street: {
      elementType: "input",
      elementConfig: {
        type: "text",
        placeholder: "Your Street"
      },
      value: "",
      validation: {
        required: true
      },
      isValid: false,
      touched: false
    },
    postal: {
      elementType: "input",
      elementConfig: {
        type: "text",
        placeholder: "Your Postal"
      },
      value: "",
      validation: {
        required: true,
        minLength: 5,
        maxLength: 5
      },
      isValid: false,
      touched: false
    },
    deliveryMethod: {
      elementType: "select",
      elementConfig: {
        options: [
          { value: "fastest", display: "Fastest" },
          { value: "cheepest", display: "Cheepest" }
        ]
      },
      value: "fastest",
      validation: {
        required: true
      },
      isValid: true,
      touched: false
    }
  });
  const [formValid, setFormValid] = useState(false);

  const handleOrder = e => {
    e.preventDefault();
    let orderData = {};
    for (let name in orderForm) {
      orderData[name] = orderForm[name].value;
    }
    const order = {
      ingredients: props.ingredients,
      price: props.price,
      date: new Date(),
      userId: props.userId,
      orderData
    };
    props.onPurchaseBurger(order, props.token);
  };

  const onChangeHandler = e => {
    const newInput = {
      ...orderForm[e.target.name],
      value: e.target.value,
      isValid: checkValidation(
        e.target.value,
        orderForm[e.target.name].validation
      ),
      touched: true
    };
    const newState = { ...orderForm, [e.target.name]: newInput };

    let formIsValid = true;
    for (let name in newState) {
      formIsValid = newState[name].isValid && formIsValid;
    }

    setFormValid(formIsValid);

    setOrderForm(newState);
  };

  let form = <Spinner />;
  if (!props.loading) {
    let inputs = [];
    for (let key in orderForm) {
      inputs.push(
        <Input
          key={key}
          name={key}
          elementType={orderForm[key].elementType}
          elementConfig={orderForm[key].elementConfig}
          value={orderForm[key].value}
          isValid={!orderForm[key].isValid}
          touched={orderForm[key].touched}
          changed={onChangeHandler}
        />
      );
    }
    form = (
      <form onSubmit={handleOrder}>
        {inputs}
        <Button btnType="Success" disabled={!formValid}>
          ORDER
        </Button>
      </form>
    );
  }
  return (
    <section className={Classes.ContactData}>
      <h4>Enter your Contact Data</h4>
      {form}
    </section>
  );
};

const mapStateToProps = state => {
  return {
    ingredients: state.burger.ingredients,
    price: state.burger.totalPrice,
    loading: state.order.loading,
    token: state.user.token,
    userId: state.user.id
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onPurchaseBurger: (orderData, token) =>
      dispatch(purchaseBurger(orderData, token))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withError(ContactData, axios));
