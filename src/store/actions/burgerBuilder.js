import * as actionTypes from "./actionTypes";
import axios from "../../axios-orders";

export const addIngredient = (ingType) => {
  return {
    type: actionTypes.ADD_INGREDIENT,
    ingType,
  };
};

export const removeIngredient = (ingType) => {
  return {
    type: actionTypes.REMOVE_INGREDIENT,
    ingType,
  };
};

export const fetchIngredientsFail = (e) => {
  return {
    type: actionTypes.FETCH_INGREDIENTS_FAIL,
  };
};

export const setIngredients = (ingredients) => {
  return {
    type: actionTypes.SET_INGREDIENTS,
    ingredients,
  };
};

export const initIngredients = () => {
  return (dispatch) => {
    axios
      .get(
        "https://react-burger-tp-default-rtdb.europe-west1.firebasedatabase.app/ingredients.json"
      )
      .then((res) => {
        dispatch(setIngredients(res.data));
      })
      .catch(() => {
        dispatch(fetchIngredientsFail());
      });
  };
};
