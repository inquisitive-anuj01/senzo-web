import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Header from "./components/Layout/Header.jsx";
import Home from "./components/Layout/Home";
import Footer from "./components/Layout/Footer";
import AdhesiveCoverage from "./Tools/AdhesiveCoverage.jsx";
import JointFillersCoverage from "./Tools/JointFillersCoverage.jsx";
import AdhesiveRecommender from "./Tools/AdhesiveRecommender.jsx";
import JointFillersVisuals from "./Tools/JointFillersVisuals.jsx";
import ScrollToTop from "./components/Extra/ScrollToTop.jsx";
import AboutUs from "./components/Pages/AboutUs.jsx";
import ProductDetail from "./components/Pages/ProductDetail.jsx";
import TileAdhesive from "./components/Pages/TileAdhesive.jsx";
import EpoxyGrout from "./components/Pages/EpoxyGrout.jsx";
import OtherProducts from "./components/Pages/OtherProducts.jsx";
import PrivacyPolicy from "./components/Extra/PrivacyPolicy.jsx";
import TermsAndConditions from "./components/Extra/TermsAndConditions.jsx";

function App() {
  return (
    <div className="min-h-screen bg-gray-50 text-black">
      <Router>
        <ScrollToTop />
        <Header />
        <main className="pt-24">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route
              path="/tools/adhesive-coverage"
              element={<AdhesiveCoverage />}
            />
            <Route
              path="/tools/joint-filler-coverage"
              element={<JointFillersCoverage />}
            />
            <Route
              path="/tools/tile-adhesive-recommender"
              element={<AdhesiveRecommender />}
            />
            <Route
              path="/tools/tile-joint-filler-visualizer"
              element={<JointFillersVisuals />}
            />

            <Route path="/products/:slug" element={<ProductDetail />} />
            <Route path="/category/tile-adhesive" element={<TileAdhesive />} />
            <Route path="/category/epoxy-grout" element={<EpoxyGrout />} />
            <Route
              path="/category/other-products"
              element={<OtherProducts />}
            />

            <Route path="/about" element={<AboutUs />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            <Route path="/terms-and-conditions" element={<TermsAndConditions />} />

            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </main>
        <Footer />
      </Router>
    </div>
  );
}
export default App;
