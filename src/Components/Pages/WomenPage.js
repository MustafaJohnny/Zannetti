import womanImg1 from "../Images/woman1.jpg";
import womanImg2 from "../Images/woman2.jpg";
import womanImg3 from "../Images/woman3.jpg";
import Navigation from "../ElementsUI/Navigation";
import classes from "./WomenPage.module.css";
import ShowButton from "../ElementsUI/ShowButton";
import { controlActions } from "../Redux/ReduxStore";
import { motion } from "framer-motion/dist/framer-motion";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";

const WomenPage = () => {
  const dispatch = useDispatch();

  const showButtonOnEnter = () => {
    dispatch(controlActions.toggleShowButton1());
  };

  const hideButtonOnLeave = () => {
    dispatch(controlActions.toggleHideButton1());
  };

  const showButtonOnEnter2 = () => {
    dispatch(controlActions.toggleShowButton2());
  };

  const hideButtonOnLeave2 = () => {
    dispatch(controlActions.toggleHideButton2());
  };

  const showButtonOnEnter3 = () => {
    dispatch(controlActions.toggleShowButton3());
  };

  const hideButtonOnLeave3 = () => {
    dispatch(controlActions.toggleHideButton3());
  };

  return (
    <motion.section
      intial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { duration: 0.3 } }}
      className={classes.heroSection}
    >
      <Navigation />
      <div className={classes.womenSuits}>
        <Link className={classes.LinkStyle} to="/women-page/first-shirt">
          <img
            onMouseEnter={showButtonOnEnter}
            onMouseLeave={hideButtonOnLeave}
            src={womanImg3}
            alt="women"
          />
        </Link>
        <Link className={classes.LinkStyle} to="/women-page/second-shirt">
          <img
            onMouseEnter={showButtonOnEnter2}
            onMouseLeave={hideButtonOnLeave2}
            src={womanImg2}
            alt="women"
          />
        </Link>
        <Link className={classes.LinkStyle} to="/women-page/third-shirt">
          <img
            onMouseEnter={showButtonOnEnter3}
            onMouseLeave={hideButtonOnLeave3}
            src={womanImg1}
            alt="women"
          />
        </Link>
      </div>

      <div className={classes.namePriceArea}>
        <div className={classes.suitTag1}>
          <Link to="/women-page/first-shirt" className={classes.suitNameX}>
            Women's Navy & Pink Paisley Print Kossi fit Blouse
          </Link>

          <span className={classes.priceArea}>
            <p className={classes.salePrice}>329$</p>
            <p className={classes.price}>238$</p>
          </span>
        </div>
        <div className={classes.suitTag2}>
          <Link to="/women-page/second-shirt" className={classes.suitName}>
            Women's Gold & White Stripe Relaxed Fit Luxury
          </Link>
          <span className={classes.priceArea}>
            <p className={classes.salePrice}>632$</p>
            <p className={classes.price}>499$</p>
          </span>
        </div>
        <div className={classes.suitTag2}>
          <Link to="/women-page/third-shirt" className={classes.suitName}>
            Women's White Twill Fitted Executive Shirt Single
          </Link>
          <span className={classes.priceArea}>
            <p className={classes.salePrice}>837$</p>
            <p className={classes.price}>765$</p>
          </span>
        </div>
      </div>
      <ShowButton />
    </motion.section>
  );
};

export default WomenPage;
