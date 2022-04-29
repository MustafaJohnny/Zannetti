import suitImg1 from "../Images/firstSuit.jpg";
import suitImg2 from "../Images/firstSuit2.jpg";
import NavigationVer2 from "../ElementsUI/NavigationVer2";
import classes from "./FirstSuitPage.module.css";
import useSelectedLogic from "../CustomHooks/use-selected-logic";
import { motion } from "framer-motion/dist/framer-motion";

const FirstSuitPage = () => {
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
            Men's Solid Blue Slim Zigzag Suit 120s Wool
          </p>
          <span className={classes.codeArea}>
            <p className={classes.suitCode}>
              Item code: <span className={classes.code}>UC20XZHST</span>
            </p>
            <p className={classes.saleOff}>25% off</p>
          </span>

          <p className={classes.suitBref}>Navy, Plain, Slim Fit</p>

          <span className={classes.suitPriceArea}>
            <p className={classes.salePrice}>$732</p>
            <p className={classes.price}>$450</p>
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
            <div
              onClick={() => toggleSizeClass("42 (EU 52)")}
              className={`${classes.size} ${
                selectedSize === "42 (EU 52)" ? classes.selectedOne : ""
              }`}
            >
              42 (EU 52)
            </div>
            <div
              onClick={() => toggleSizeClass("44 (EU 54)")}
              className={`${classes.size} ${
                selectedSize === "44 (EU 54)" ? classes.selectedOne : ""
              }`}
            >
              44 (EU 54)
            </div>
            <div
              onClick={() => toggleSizeClass("46 (EU 56)")}
              className={`${classes.size} ${
                selectedSize === "46 (EU 56)" ? classes.selectedOne : ""
              }`}
            >
              46 (EU 56)
            </div>
            <div
              onClick={() => toggleSizeClass("48 (EU 58)")}
              className={`${classes.size} ${
                selectedSize === "48 (EU 58)" ? classes.selectedOne : ""
              }`}
            >
              48 (EU 58)
            </div>
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
              onClick={() => updateSummary(450, 732)}
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

export default FirstSuitPage;
