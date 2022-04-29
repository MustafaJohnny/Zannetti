import React from "react";
import { Link } from "react-router-dom";
import classes from "./Navigation.module.css";
import basketIcon from "../Icons/basket.svg";
import chatIcon from "../Icons/chat.svg";
import facebookIcon from "../Icons/facebook.svg";
import instaIcon from "../Icons/instagram.svg";
import logoIcon from "../Icons/mainLogo.svg";
import searchIcon from "../Icons/search.svg";
import twitterIcon from "../Icons/twitter.svg";
import userIcon from "../Icons/user.svg";
import youtubeIcon from "../Icons/youtube.svg";
import { controlActions } from "../Redux/ReduxStore";
import { useDispatch, useSelector } from "react-redux";
import { motion } from "framer-motion/dist/framer-motion";

const Navigation = () => {
  const dispatch = useDispatch();
  const basketNumber = useSelector((state) => state.controler.basketNumber);

  const showHideModal = () => {
    dispatch(controlActions.toggleModal());
  };

  const navigateToOrderPage = () => {
    dispatch(controlActions.toggleShowBasket());
  };

  return (
    <motion.section
      intial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { duration: 0.1 } }}
      className={classes.heroSection}
    >
      <header className={classes.heroHeading}>
        <a className={classes.phoneNumber} href="tel:+375 (25) 123 4567">
          +375 (25) 123 4567
        </a>
        <p className={classes.freeAdd}>
          Free BY delivery on all orders over $120
        </p>
      </header>
      <nav className={classes.navContainer}>
        <div className={classes.leftSide}>
          <img className={classes.mediaIcon} src={facebookIcon} alt="icon" />
          <img className={classes.mediaIcon} src={instaIcon} alt="icon" />
          <img className={classes.mediaIcon} src={youtubeIcon} alt="icon" />
          <img className={classes.mediaIcon} src={twitterIcon} alt="icon" />
        </div>
        <Link className={classes.logoSide} to="/home-page">
          <img className={classes.mainLogo} src={logoIcon} alt="logo" />
        </Link>
        <div className={classes.rightSide}>
          <img
            className={`${classes.navIcon} ${classes.searchIcon}`}
            src={searchIcon}
            alt="icon"
          />
          <button onClick={showHideModal} className={classes.showModalBtn}>
            <img className={classes.navIcon} src={userIcon} alt="icon" />
          </button>

          <button
            onClick={navigateToOrderPage}
            className={classes.showModalBtn}
          >
            <img className={classes.navIcon} src={basketIcon} alt="icon" />
          </button>

          <span className={classes.itemNumber}>{basketNumber}</span>
        </div>
      </nav>

      <ul className={classes.SecondNav}>
        <li>
          <button
            className={`${classes.SecondNavLinks} ${classes.showModalBtn}`}
          >
            New
          </button>
        </li>
        <li>
          <Link className={classes.SecondNavLinks} to="/men-page">
            Menswesr
          </Link>
        </li>
        <li>
          <Link className={classes.SecondNavLinks} to="/women-page">
            Womenswear
          </Link>
        </li>
        <li>
          <button
            className={`${classes.SecondNavLinks} ${classes.showModalBtn}`}
          >
            Gifts
          </button>
        </li>
        <li>
          <button
            className={`${classes.SecondNavLinks} ${classes.showModalBtn}`}
          >
            The Brand
          </button>
        </li>
      </ul>
      <span className={classes.luxiPhraseArea}>
        <p className={classes.luxiPhrase}>
          luxurious and contemporary appeal for every man and woman
        </p>
      </span>
      <button className={classes.contactNow}>
        <img className={classes.chatIcon} src={chatIcon} alt="icon" />
      </button>
    </motion.section>
  );
};

export default Navigation;
