import React from "react";
import Auxiliary from "../../../hoc/Auxiliary/Auxiliary";
import Button from "../../UI/Button/Button";

const orderSummary = props => {
  const ingredientSummary = Object.keys(props.ingredients).map(ingrKey => {
    return (
      <li key={ingrKey}>
        <span style={{ textTransform: "capitalize" }}>{ingrKey}</span>:
        {props.ingredients[ingrKey]}
      </li>
    );
  });

  return (
    <Auxiliary>
      <h3>Your Order</h3>
      <p>A delicious burger with the following ingredients: </p>
      <ul>{ingredientSummary}</ul>
      <p>
        <strong>Total Price: {props.price.toFixed(2)}€</strong>
      </p>
      <p>Continue to Checkout?</p>
      <Button clicked={props.purchaseCanceled} btnType="Danger">
        CANCEL
      </Button>
      <Button clicked={props.purchaseContinued} btnType="Success">
        CONTINUE
      </Button>
    </Auxiliary>
  );
};

export default orderSummary;
