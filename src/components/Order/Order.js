import React from "react";

import classes from "./Order.module.css";

const order = ({ price, ingredients }) => {
  const ingrList = [];
  for (let key in ingredients) {
    ingrList.push(
      <span
        key={key}
        className={classes.Ingredient}
      >{`${key} (${ingredients[key]})`}</span>
    );
  }

  return (
    <article className={classes.Order}>
      <div>Ingredients: {ingrList}</div>
      <span>
        Price: <strong>{parseFloat(price).toFixed(2)} $</strong>
      </span>
    </article>
  );
};

export default order;
