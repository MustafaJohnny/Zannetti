import suitImg1 from "../Images/thirdSuit.jpg";
import suitImg2 from "../Images/thirdSuit2.jpg";
import NavigationVer2 from "../ElementsUI/NavigationVer2";
import classes from "./ThirdSuitPage.module.css";
import useSelectedLogic from "../CustomHooks/use-selected-logic";
import { motion } from "framer-motion/dist/framer-motion";

const ThirdSuitPage = () => {
  const {
    toggleLengthClass,
    selectedLength,
    toggleSizeClass,
    selectedSize,
    quanNum,
    incressQuanNum,
    decreaseQuanNum,
    buttonIsValid,
    updateSummary,
  } = useSelectedLogic();

  return (
    <motion.section
      intial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { duration: 0.3 } }}
      className={classes.heroSection}
    >
      <NavigationVer2 />
      <div className={classes.suitDetailsArea}>
        <div className={classes.imagesArea}>
          <img src={suitImg2} alt="man" />
          <img src={suitImg1} alt="man" />
        </div>
        <div className={classes.optionsArea}>
          <p className={classes.SuitName}>
            Men's Black Semi Plain Zigzag 1 Piece Slim Fit Sui
          </p>
          <span className={classes.codeArea}>
            <p className={classes.suitCode}>
              Item code: <span className={classes.code}>LF56BCZSAL</span>
            </p>
            <p className={classes.saleOff}>25% off</p>
          </span>

          <p className={classes.suitBref}>
            Black, Checked, Sexy, Plain, Slim Fitt
          </p>

          <span className={classes.suitPriceArea}>
            <p className={classes.salePrice}>$537</p>
            <p className={classes.price}>$375</p>
          </span>

          <p className={classes.colorHeading}>Length</p>

          <span className={classes.lengthSizes}>
            <div
              onClick={() => toggleLengthClass("Short")}
              className={`${classes.size} ${
                selectedLength === "Short" ? classes.selectedOne : ""
              }`}
            >
              Short
            </div>
            <div
              onClick={() => toggleLengthClass("Regular")}
              className={`${classes.size} ${
                selectedLength === "Regular" ? classes.selectedOne : ""
              }`}
            >
              Regular
            </div>
            <div
              onClick={() => toggleLengthClass("Long")}
              className={`${classes.size} ${
                selectedLength === "Long" ? classes.selectedOne : ""
              }`}
            >
              Long
            </div>
          </span>

          <p className={classes.sizeHeading}>Suit Size</p>

          <span className={classes.suitSizes}>
            <div
              onClick={() => toggleSizeClass("36 (EU 46)")}
              className={`${classes.size} ${
                selectedSize === "36 (EU 46)" ? classes.selectedOne : ""
              }`}
            >
              36 (EU 46)
            </div>
            <div
              onClick={() => toggleSizeClass("38 (EU 48)")}
              className={`${classes.size} ${
                selectedSize === "38 (EU 48)" ? classes.selectedOne : ""
              }`}
            >
              38 (EU 48)
            </div>
            <div
              onClick={() => toggleSizeClass("40 (EU 50)")}
              className={`${classes.size} ${
                selectedSize === "40 (EU 50)" ? classes.selectedOne : ""
              }`}
            >
              40 (EU 50)
            </div>
            <div className={`${classes.size} ${classes.solid}`}>42 (EU 52)</div>
            <div className={`${classes.size} ${classes.solid}`}>44 (EU 54)</div>
            <div
              onClick={() => toggleSizeClass("46 (EU 56)")}
              className={`${classes.size} ${
                selectedSize === "46 (EU 56)" ? classes.selectedOne : ""
              }`}
            >
              46 (EU 56)
            </div>
            <div className={`${classes.size} ${classes.solid}`}>48 (EU 58)</div>
          </span>

          <p className={classes.quantityHeading}>Quantity :</p>

          <span className={classes.quantityCounter}>
            <button
              onClick={decreaseQuanNum}
              className={classes.quanButton}
              type="button"
            >
              -
            </button>
            <span className={classes.quanNum}>{quanNum}</span>
            <button
              onClick={incressQuanNum}
              className={classes.quanButton}
              type="button"
            >
              +
            </button>
          </span>

          <div className={classes.innerAddButton}>
            <button
              onClick={() => updateSummary(298, 349)}
              disabled={!buttonIsValid}
              className={classes.addCartButton}
              type="submit"
            >
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default ThirdSuitPage;
