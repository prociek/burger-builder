import React from 'react';

import classes from './Burger.module.css';
import BurgerIngredient from './BurgerIngredient/BurgerIngredient';
    
const burger = props => {
    let ingredientsArr = Object.keys(props.ingredients)
        .map(ingKey => {
            return [...Array(props.ingredients[ingKey])].map((_, i) => {
                return <BurgerIngredient key={ingKey + i} type={ingKey}/>
            })
        }).reduce((acc, curr) => {
            return acc.concat(curr);
        }, []);
    if (ingredientsArr.length === 0) {
        ingredientsArr = <p>Please start adding ingredients!</p>
    }

    return (
        <div className={classes.Burger}>
            <BurgerIngredient type='bread-top' />
            {ingredientsArr}
            <BurgerIngredient type='bread-bottom' />
        </div>
    );
};
    
export default burger;