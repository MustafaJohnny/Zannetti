import React from "react";
import classes from "./ShowCartModal.module.css";
import { controlActions } from "../Redux/ReduxStore";
import { useDispatch } from "react-redux";

const ShowCartModal = () => {
  const dispatch = useDispatch();

  const showHideCartModal = () => {
    dispatch(controlActions.toggleShowCart());
  };

  const showBasketHideCart = () => {
    dispatch(controlActions.toggleShowCart());
    dispatch(controlActions.toggleShowBasket());
  };

  return (
    <div className={classes.modal}>
      <span className={classes.cartMessage}>
        <p className={classes.theMessage}>
          You added an item to your shooping cart
        </p>
      </span>
      <div className={classes.buttonsArea}>
        <button onClick={showHideCartModal} className={classes.btn}>
          Continue Shopping
        </button>
        <button onClick={showBasketHideCart} className={classes.btn}>
          View Cart &rarr;
        </button>
      </div>
    </div>
  );
};

export default ShowCartModal;
