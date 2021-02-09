import React, { useState, useEffect, useCallback } from "react";
import Aux from "../../hoc/Aux/Aux";
import Burger from "../../components/Burger/Burger";
import BuildControls from "../../components/Burger/BuildControls/BuildControls";
import Modal from "../../components/IU/Modal/Modal";
import OrderSummary from "../../components/Burger/OrderSummary/OrderSummary";
import Spinner from "../../components/IU/Spinner/Spinner";
import withError from "../../hoc/withError/withError";
import axios from "../../axios-orders";
import { useDispatch, useSelector } from "react-redux";
import {
  addIngredient,
  initIngredients,
  removeIngredient,
  purchaseInit,
  setAuthRedirectPath
} from "../../store/actions";

export const BurgerBuilder = props => {
  const [purchasing, setPurchasing] = useState(false);

  const dispatch = useDispatch();

  const onAddIngredient = ingType => dispatch(addIngredient(ingType));
  const onRemoveIngredient = ingType => dispatch(removeIngredient(ingType));
  const onInitIngredients = useCallback(() => dispatch(initIngredients()), [
    dispatch
  ]);
  const onPurchaseInit = () => dispatch(purchaseInit());
  const onSetAuthRedirectPath = path => dispatch(setAuthRedirectPath(path));

  const { ingredients, totalPrice, error } = useSelector(state => state.burger);
  const isAuth = useSelector(state => state.user.token != null);

  useEffect(() => {
    onInitIngredients();
  }, [onInitIngredients]);

  const updatePurchaseState = ingredients => {
    const sum = Object.values(ingredients).reduce((acc, curr) => {
      return acc + curr;
    }, 0);
    return sum > 0;
  };

  const purchaseHandler = () => {
    if (isAuth) {
      setPurchasing(true);
    } else {
      onSetAuthRedirectPath("/checkout");
      props.history.push("auth");
    }
  };

  const purchaseCancellHandler = () => {
    setPurchasing(false);
  };

  const purchaseContinueHandler = () => {
    onPurchaseInit();
    props.history.push("/checkout");
  };

  const disabledInfo = { ...ingredients };
  for (let key in disabledInfo) {
    disabledInfo[key] = disabledInfo[key] <= 0;
  }

  let burger = error ? (
    <p style={{ textAlign: "center" }}>Ingredients can't be loaded!</p>
  ) : (
    <Spinner />
  );
  let orderSummary = null;

  if (ingredients) {
    burger = (
      <Aux>
        <Burger ingredients={ingredients} />
        <BuildControls
          ingredientAdded={onAddIngredient}
          ingredientRemove={onRemoveIngredient}
          disabled={disabledInfo}
          price={totalPrice}
          purchasable={updatePurchaseState(ingredients)}
          clicked={purchaseHandler}
          isAuth={isAuth}
        />
      </Aux>
    );
    orderSummary = (
      <OrderSummary
        ingredients={ingredients}
        modalClosed={purchaseCancellHandler}
        orderContinue={purchaseContinueHandler}
        price={totalPrice}
      />
    );
  }

  return (
    <Aux>
      <Modal purchase={purchasing} modalClosed={purchaseCancellHandler}>
        {orderSummary}
      </Modal>
      {burger}
    </Aux>
  );
};

export default withError(BurgerBuilder, axios);
