import React from "react";
import classes from "./SuccessModal.module.css";
import { controlActions } from "../Redux/ReduxStore";
import { useSelector, useDispatch } from "react-redux";

const SuccessModal = () => {
  const dispatch = useDispatch();

  const userName = useSelector((state) => state.controler.userName);
  const userNumber = useSelector((state) => state.controler.userNumber);
  const userAddress = useSelector((state) => state.controler.userAddress);

  const hideSuccessMessage = () => {
    dispatch(controlActions.toggleSuccessMessage());
  };

  return (
    <div className={classes.modal}>
      <div className={classes.SuccessMessageArea}>
        <p className={classes.theMessage}>
          <span className={classes.userName}>{userName}</span> your order will
          be delivered to the address:{" "}
          <span className={classes.address}>{userAddress}</span> in 4 working
          days, we will contact you soon At
          <span className={classes.userName}>{userNumber}</span> for the
          delivery time details. Thank you
        </p>
      </div>
      <div className={classes.buttonArea}>
        <button onClick={hideSuccessMessage} className={classes.btn}>
          Continue Shopping &rarr;
        </button>
      </div>
    </div>
  );
};

export default SuccessModal;
