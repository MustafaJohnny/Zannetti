import checkIcon from "../Icons/check.svg";
import truckIcon from "../Icons/truck.svg";
import { useDispatch, useSelector } from "react-redux";
import { controlActions } from "../Redux/ReduxStore";
import { useRef } from "react";
import classes from "./OrderPage.module.css";

const OrderPage = () => {
  const dispatch = useDispatch();

  const totalPrice = useSelector((state) => state.controler.totalPrice);
  const oldPrice = useSelector((state) => state.controler.totalOldPrice);
  const saleValue = useSelector((state) => state.controler.totalSale);

  const userName = useRef("");
  const userNumber = useRef("");
  const userAddress = useRef("");

  let buttonIsValid = false;

  if (totalPrice !== 0) {
    buttonIsValid = true;
  }

  const MoveUserData = () => {
    if (!userName.current.value) return;
    if (!userNumber.current.value) return;
    if (!userAddress.current.value) return;

    dispatch(
      controlActions.getUserData({
        userName: userName.current.value,
        userNumber: userNumber.current.value,
        userAddress: userAddress.current.value,
      })
    );

    dispatch(controlActions.toggleShowBasket());
    dispatch(controlActions.toggleSuccessMessage());
    dispatch(controlActions.initBasketNumber());
    dispatch(controlActions.initOrdersSummary());

    userName.current.value = "";
    userNumber.current.value = "";
    userAddress.current.value = "";
  };

  const showHideModal = () => {
    dispatch(controlActions.toggleShowBasket());
  };

  return (
    <section className={classes.heroSection}>
      <div className={classes.orderArea}>
        <div className={classes.userData}>
          <h2 className={classes.orderHeading}>Personal Data</h2>
          <label className={classes.userLabel} htmlFor="name">
            Name
          </label>
          <input
            ref={userName}
            className={classes.userInputs}
            type="text"
            id="name"
            required
          />
          <label className={classes.userLabel} htmlFor="phone">
            Phone number
          </label>
          <input
            ref={userNumber}
            className={classes.userInputs}
            type="number"
            id="phone"
            required
          />
          <label className={classes.userLabel} htmlFor="address">
            Address
          </label>
          <input
            ref={userAddress}
            className={classes.userInputs}
            type="text"
            id="address"
            required
          />
        </div>
        <div className={classes.summaryArea}>
          <h2 className={classes.orderHeading}>Order Summary</h2>
          <div className={`${classes.elementsInner} ${classes.qtyInner}`}>
            <p className={classes.summaryHeading}>Items</p>
            <span className={classes.summaryHeading}>{`${oldPrice}$`}</span>
          </div>
          <div className={classes.elementsInner}>
            <p className={classes.summaryHeading}>Sale</p>
            <span className={classes.summaryHeading}>{`-${saleValue}$`}</span>
          </div>
          <div className={`${classes.elementsInner} ${classes.totalInner}`}>
            <p className={classes.totalHeading}>Total</p>
            <span className={classes.totalHeading}>{`${totalPrice}$`}</span>
          </div>
          <div className={classes.paymentInner}>
            <img className={classes.checkIcon} src={checkIcon} alt="icon" />
            <p className={`${classes.summaryHeading} ${classes.payment}`}>
              payment upon receipt
            </p>
          </div>
          <div className={classes.paymentInner}>
            <img className={classes.checkIcon} src={truckIcon} alt="icon" />
            <p className={`${classes.summaryHeading} ${classes.payment}`}>
              delivery after two days
            </p>
          </div>
          <button
            onClick={MoveUserData}
            className={classes.orderButton}
            disabled={!buttonIsValid}
            type="submit"
          >
            ORDER
          </button>
        </div>
        <button onClick={showHideModal} className={classes.btnCloseModal}>
          &times;
        </button>
      </div>
    </section>
  );
};

export default OrderPage;
