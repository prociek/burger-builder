import * as actionTypes from "./actionTypes";

export const addIngredient = ingType => {
  return {
    type: actionTypes.ADD_INGREDIENT,
    ingType
  };
};

export const removeIngredient = ingType => {
  return {
    type: actionTypes.REMOVE_INGREDIENT,
    ingType
  };
};

export const fetchIngredientsFail = e => {
  return {
    type: actionTypes.FETCH_INGREDIENTS_FAIL
  };
};

export const setIngredients = ingredients => {
  return {
    type: actionTypes.SET_INGREDIENTS,
    ingredients
  };
};

export const initIngredients = () => {
  return {
    type: actionTypes.INIT_INGREDIENTS
  };
};
