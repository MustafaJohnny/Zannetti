import { controlActions } from "../Redux/ReduxStore";
import { useDispatch } from "react-redux";
import classes from "./SignUp.module.css";

const SignUp = () => {
  const dispatch = useDispatch();

  const showHideModal = () => {
    dispatch(controlActions.toggleModal());
  };

  return (
    <div className={`${classes.modal} ${classes.openModal}`}>
      <button onClick={showHideModal} className={classes.btnCloseModal}>
        &times;
      </button>
      <h2 className={classes.modalHeader}>
        Sign Up Now And Get Your Discount in
        <span className={classes.highlight}> 24 Hours</span>
      </h2>
      <form className={classes.modalForm}>
        <label>First Name :</label>
        <input type="text" />
        <label>Last Name :</label>
        <input type="text" />
        <label>Email Address :</label>
        <input type="email" />
        <button onClick={showHideModal} className={classes.btn}>
          Next step &rarr;
        </button>
      </form>
    </div>
  );
};

export default SignUp;
