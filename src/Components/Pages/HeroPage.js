import React from "react";
import { motion } from "framer-motion/dist/framer-motion";
import { Link } from "react-router-dom";
import womenHero from "../Images/heroWomen.jpg";
import manHero from "../Images/heroMan.jpg";
import Navigation from "../ElementsUI/Navigation";
import classes from "./HeroPage.module.css";

const HeroPage = () => {
  return (
    <motion.section
      intial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { duration: 0.3 } }}
      className={classes.heroSection}
    >
      <Navigation />
      <div className={classes.heroImages}>
        <img src={manHero} alt="men" />
        <img src={womenHero} alt="women" />
      </div>

      <div className={classes.shopNowArea}>
        <div className={`${classes.shopLinksArea} ${classes.menPosition}`}>
          <Link className={classes.shopBigLinks} to="/men-page">
            Menswear
          </Link>
          <Link className={classes.shopSmallLinks} to="/men-page">
            Shop Now
          </Link>
        </div>
        <div className={`${classes.shopLinksArea} ${classes.womenPosition}`}>
          <Link className={classes.shopBigLinks} to="/women-page">
            Womenswear
          </Link>
          <Link className={classes.shopSmallLinks} to="/women-page">
            Shop Now
          </Link>
        </div>
      </div>
      <footer>Designed © 2022 By Mustafa Johnny</footer>
    </motion.section>
  );
};

export default HeroPage;
