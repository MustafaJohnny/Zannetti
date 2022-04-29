import { Link } from "react-router-dom";
import { motion } from "framer-motion/dist/framer-motion";
import manImg1 from "../Images/man1.jpg";
import manImg2 from "../Images/man2.jpg";
import manImg3 from "../Images/man3.jpg";
import Navigation from "../ElementsUI/Navigation";
import classes from "./MenPage.module.css";
import ShowButton from "../ElementsUI/ShowButton";
import { controlActions } from "../Redux/ReduxStore";
import { useDispatch } from "react-redux";

const MenPage = () => {
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
      <div className={classes.menSuits}>
        <Link className={classes.LinkStyle} to="/men-page/third-suit">
          <img
            onMouseEnter={showButtonOnEnter}
            onMouseLeave={hideButtonOnLeave}
            src={manImg1}
            alt="man"
          />
        </Link>

        <Link className={classes.LinkStyle} to="/men-page/first-suit">
          <img
            onMouseEnter={showButtonOnEnter2}
            onMouseLeave={hideButtonOnLeave2}
            src={manImg3}
            alt="man"
          />
        </Link>

        <Link className={classes.LinkStyle} to="/men-page/second-suit">
          <img
            onMouseEnter={showButtonOnEnter3}
            onMouseLeave={hideButtonOnLeave3}
            src={manImg2}
            alt="man"
          />
        </Link>
      </div>

      <div className={classes.namePriceArea}>
        <div className={classes.suitTag1}>
          <Link to="/men-page/third-suit" className={classes.suitName}>
            Men's Black Semi Plain Zigzag 3 Piece Slim Fit Sui
          </Link>

          <span className={classes.priceArea}>
            <p className={classes.salePrice}>349$</p>
            <p className={classes.price}>298$</p>
          </span>
        </div>
        <div className={classes.suitTag2}>
          <Link to="/men-page/first-suit" className={classes.suitName}>
            Men's Blue Twill Slim Zigzag Suit - Super 120s Wool
          </Link>
          <span className={classes.priceArea}>
            <p className={classes.salePrice}>732$</p>
            <p className={classes.price}>450$</p>
          </span>
        </div>
        <div className={classes.suitTag3}>
          <Link to="/men-page/second-suit" className={classes.suitNameX}>
            Men's Mid Grey Sharkskin Slim 120 Fit 3 Piece Suit
          </Link>
          <span className={classes.priceArea}>
            <p className={classes.salePrice}>537$</p>
            <p className={classes.price}>375$</p>
          </span>
        </div>
      </div>
      <ShowButton />
    </motion.section>
  );
};

export default MenPage;
