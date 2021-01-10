import React from "react";
import Aux from "../../hoc/Aux/Aux";
import Burger from "../../components/Burger/Burger";
import BuildControls from "../../components/Burger/BuildControls/BuildControls";
import Modal from "../../components/IU/Modal/Modal";
import OrderSummary from "../../components/Burger/OrderSummary/OrderSummary";
import Spinner from "../../components/IU/Spinner/Spinner";
import withError from "../../hoc/withError/withError";
import axios from "../../axios-orders";
import { connect } from "react-redux";
import {
  addIngredient,
  removeIngredient,
} from "../../store/actions/ingredients";

class BurgerBuilder extends React.Component {
  state = {
    purchasing: false,
    loading: false,
    error: false,
  };

  /*   componentDidMount() {
    axios
      .get(
        "https://react-burger-tp-default-rtdb.europe-west1.firebasedatabase.app/ingredients.json"
      )
      .then((res) => {
        this.setState({ ingredients: res.data });
      })
      .catch((err) => {
        this.setState({ error: true });
      });
  } */

  updatePurchaseState = (ingredients) => {
    const sum = Object.values(ingredients).reduce((acc, curr) => {
      return acc + curr;
    }, 0);
    return sum > 0;
  };

  purchaseHandler = () => {
    this.setState({ purchasing: true });
  };

  purchaseCancellHandler = () => {
    this.setState({ purchasing: false });
  };

  purchaseContinueHandler = () => {
    this.props.history.push("/checkout");
  };

  render() {
    const disabledInfo = { ...this.props.ingredients };
    for (let key in disabledInfo) {
      disabledInfo[key] = disabledInfo[key] <= 0;
    }

    let burger = this.state.error ? (
      <p style={{ textAlign: "center" }}>Ingredients can't be loaded!</p>
    ) : (
      <Spinner />
    );
    let orderSummary = null;

    if (this.props.ingredients) {
      burger = (
        <Aux>
          <Burger ingredients={this.props.ingredients} />
          <BuildControls
            ingredientAdded={this.props.addIngredient}
            ingredientRemove={this.props.removeIngredient}
            disabled={disabledInfo}
            price={this.props.totalPrice}
            purchasable={this.updatePurchaseState(this.props.ingredients)}
            clicked={this.purchaseHandler}
          />
        </Aux>
      );
      orderSummary = (
        <OrderSummary
          ingredients={this.props.ingredients}
          modalClosed={this.purchaseCancellHandler}
          orderContinue={this.purchaseContinueHandler}
          price={this.props.totalPrice}
        />
      );
    }

    if (this.state.loading) {
      orderSummary = <Spinner />;
    }

    return (
      <Aux>
        <Modal
          purchase={this.state.purchasing}
          modalClosed={this.purchaseCancellHandler}
        >
          {orderSummary}
        </Modal>
        {burger}
      </Aux>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    ingredients: state.ingredients,
    totalPrice: state.totalPrice,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addIngredient: (ingType) => dispatch(addIngredient(ingType)),
    removeIngredient: (ingType) => dispatch(removeIngredient(ingType)),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withError(BurgerBuilder, axios));
