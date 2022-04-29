import { useState } from "react";
import { controlActions } from "../Redux/ReduxStore";
import { useDispatch } from "react-redux";

const useSelectedLogic = () => {
  const [selectedLength, setSelectedLength] = useState();
  const [selectedSize, setSelectedSize] = useState();
  const [quanNum, SetQuanNum] = useState(1);

  const incressQuanNum = () => {
    if (quanNum === 4) return;
    SetQuanNum(quanNum + 1);
  };

  const decreaseQuanNum = () => {
    if (quanNum === 1) return;
    SetQuanNum(quanNum - 1);
  };

  const toggleSizeClass = (selected) => {
    setSelectedSize(selected);
  };

  const toggleLengthClass = (selected) => {
    setSelectedLength(selected);
  };

  let buttonIsValid = false;

  if (selectedLength && selectedSize) {
    buttonIsValid = true;
  }

  const dispatch = useDispatch();

  const updateSummary = (price, oldPrice) => {
    const thePrice = quanNum * price;
    const theOldPrice = quanNum * oldPrice;
    const theSaleValue = theOldPrice - thePrice;
    dispatch(controlActions.updateTotalPrice(thePrice));
    dispatch(controlActions.updateOldPrice(theOldPrice));
    dispatch(controlActions.updateSalePrice(theSaleValue));
    dispatch(controlActions.updateBasketNumber(quanNum));
    dispatch(controlActions.toggleShowCart());
    setSelectedLength(null);
    setSelectedSize(null);
    SetQuanNum(1);
  };

  return {
    selectedLength,
    setSelectedLength,
    selectedSize,
    setSelectedSize,
    quanNum,
    SetQuanNum,
    incressQuanNum,
    decreaseQuanNum,
    toggleSizeClass,
    toggleLengthClass,
    buttonIsValid,
    updateSummary,
  };
};

export default useSelectedLogic;
