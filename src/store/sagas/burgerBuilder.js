import { put } from "redux-saga/effects";

import * as actions from "../actions";
import axios from "../../axios-orders";

export function* initIngredientsSaga(action) {
  try {
    const res = yield axios.get(
      "https://react-burger-tp-default-rtdb.europe-west1.firebasedatabase.app/ingredients.json"
    );
    yield put(actions.setIngredients(res.data));
  } catch (err) {
    yield put(actions.fetchIngredientsFail());
  }
}
