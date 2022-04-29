import react from "react";
import { React, Suspense } from "react";
import { useSelector } from "react-redux";
import LoadingSpinner from "./Components/ElementsUI/LoadingSpinner";
import ShowCartModal from "./Components/ElementsUI/ShowCartModal";
import OrderPage from "./Components/Pages/OrderPage";
import SuccessModal from "./Components/ElementsUI/SuccessModal";
import SignUp from "./Components/ElementsUI/SignUp";
import Overlay from "./Components/ElementsUI/Overlay";
import AnimatedRoutes from "./Components/Animations/AnimatedRoutes";

function App() {
  const showSignUp = useSelector((state) => state.controler.showModal);
  const showCart = useSelector((state) => state.controler.showCartModal);
  const showBasket = useSelector((state) => state.controler.showBasket);
  const showMessage = useSelector(
    (state) => state.controler.showSuccessMessage
  );

  return (
    <react.Fragment>
      <Suspense fallback={<LoadingSpinner />}>
        {showSignUp && <Overlay />}
        {showSignUp && <SignUp />}
        {showCart && <Overlay />}
        {showCart && <ShowCartModal />}
        {showBasket && <Overlay />}
        {showBasket && <OrderPage />}
        {showMessage && <Overlay />}
        {showMessage && <SuccessModal />}
        <AnimatedRoutes />
      </Suspense>
    </react.Fragment>
  );
}

export default App;
