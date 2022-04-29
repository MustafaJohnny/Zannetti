import classes from "./ShowButton.module.css";
import { controlActions } from "../Redux/ReduxStore";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { useNavigate, useLocation } from "react-router-dom";

const ShowButton = () => {
  const dispatch = useDispatch();
  const showButton1 = useSelector((state) => state.controler.showFirstButton);
  const showButton2 = useSelector((state) => state.controler.showSecondButton);
  const showButton3 = useSelector((state) => state.controler.showThirdButton);
  const navigate = useNavigate();
  const location = useLocation();
  const urlPath = location.pathname;

  const firstButtonNavigate = () => {
    if (urlPath === "/women-page") navigate(`${urlPath}/first-shirt`);
    if (urlPath === "/men-page") navigate(`${urlPath}/third-suit`);
  };

  const secondButtonNavigate = () => {
    if (urlPath === "/women-page") navigate(`${urlPath}/second-shirt`);
    if (urlPath === "/men-page") navigate(`${urlPath}/first-suit`);
  };

  const thirdButtonNavigate = () => {
    if (urlPath === "/women-page") navigate(`${urlPath}/third-shirt`);
    if (urlPath === "/men-page") navigate(`${urlPath}/second-suit`);
  };

  const showButtonOnEnter1 = () => {
    dispatch(controlActions.toggleShowButton1());
  };

  const showButtonOnEnter2 = () => {
    dispatch(controlActions.toggleShowButton2());
  };

  const showButtonOnEnter3 = () => {
    dispatch(controlActions.toggleShowButton3());
  };

  return (
    <div>
      {showButton1 && (
        <button
          onClick={firstButtonNavigate}
          onMouseEnter={showButtonOnEnter1}
          className={classes.lookButton}
          type="button"
        >
          Show details
        </button>
      )}
      {showButton2 && (
        <button
          onClick={secondButtonNavigate}
          onMouseEnter={showButtonOnEnter2}
          className={`${classes.lookButton} ${classes.lookButton2}`}
          type="button"
        >
          Show details
        </button>
      )}
      {showButton3 && (
        <button
          onClick={thirdButtonNavigate}
          onMouseEnter={showButtonOnEnter3}
          className={`${classes.lookButton} ${classes.lookButton3}`}
          type="button"
        >
          Show details
        </button>
      )}
    </div>
  );
};

export default ShowButton;
