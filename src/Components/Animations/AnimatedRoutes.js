import react from "react";
import { React } from "react";
import { AnimatePresence } from "framer-motion/dist/framer-motion";
import { Route, Routes, Navigate, useLocation } from "react-router-dom";
import HeroPage from "../Pages/HeroPage";

const WomenPage = react.lazy(() => import("../Pages/WomenPage"));

const MenPage = react.lazy(() => import("../Pages/MenPage"));

const ThirdSuitPage = react.lazy(() => import("../SuitPages/ThirdSuitPage"));

const SecondSuitPage = react.lazy(() => import("../SuitPages/SecondSuitPage"));

const FirstSuitPage = react.lazy(() => import("../SuitPages/FirstSuitPage"));

const FirstShirtPage = react.lazy(() => import("../SuitPages/FirstShirtPage"));

const SecondShirtPage = react.lazy(() =>
  import("../SuitPages/SecondShirtPage")
);

const ThirdShirtPage = react.lazy(() => import("../SuitPages/ThirdShirtPage"));

const AnimatedRoutes = () => {
  const location = useLocation();

  return (
    <AnimatePresence>
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Navigate replace to="/home-page" />} />
        <Route path="/home-page" element={<HeroPage />} />
        <Route path="/men-page" element={<MenPage />} />
        <Route path="/men-page/first-suit" element={<FirstSuitPage />} />
        <Route path="/men-page/second-suit" element={<SecondSuitPage />} />
        <Route path="/men-page/third-suit" element={<ThirdSuitPage />} />
        <Route path="/women-page" element={<WomenPage />} />
        <Route path="/women-page/first-shirt" element={<FirstShirtPage />} />
        <Route path="/women-page/second-shirt" element={<SecondShirtPage />} />
        <Route path="/women-page/third-shirt" element={<ThirdShirtPage />} />
      </Routes>
    </AnimatePresence>
  );
};

export default AnimatedRoutes;
