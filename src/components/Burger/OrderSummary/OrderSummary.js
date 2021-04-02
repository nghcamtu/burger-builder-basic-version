import React from 'react';
import Aux from './../../../hoc/Auxiliary';
import Button from './../../UI/Button/Button';

const orderSummary=(props_para)=>{
    const ingredientSummary= Object.keys(props_para.ingredients)
    .map(igKey =>{ 
        return (<li key={igKey}> <span style={ {textTransform: 'capitalize'} }>{igKey}: </span>   { props_para.ingredients[igKey] } </li> )
    });

    return (
 
        <Aux>
            <h3>Your Order</h3>
            <p>A delicious burger with the following ingredients: </p>
            <ul>
                {ingredientSummary}
            </ul>
            <p><strong>TOTAL PRICE: {props_para.price} VND</strong></p>
            <p>Continue to checkout? </p>
            <Button btnType="Danger" clicked= {props_para.purchaseCanceled}>CANCEL</Button>
            <Button btnType="Success" clicked={props_para.purchaseContinue}>CONTINUE</Button>
        </Aux>
    );
};
export default orderSummary;