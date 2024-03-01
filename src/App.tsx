import { useEffect } from "react";
import {
  Routes,
  Route,
  useNavigationType,
  useLocation,
} from "react-router-dom";
import IPhoneSE from "./pages/IPhoneSE";
import MobileResponsive from "./pages/MobileResponsive";
import ShoppingLandingPageFinal from "./pages/ShoppingLandingPageFinal";
import FiinishStoreSetUp from "./pages/FiinishStoreSetUp";
import TrangChWeb from "./pages/TrangChWeb";

function App() {
  const action = useNavigationType();
  const location = useLocation();
  const pathname = location.pathname;

  useEffect(() => {
    if (action !== "POP") {
      window.scrollTo(0, 0);
    }
  }, [action, pathname]);

  useEffect(() => {
    let title = "";
    let metaDescription = "";

    switch (pathname) {
      case "/":
        title = "";
        metaDescription = "";
        break;
      case "/mobile-responsive":
        title = "";
        metaDescription = "";
        break;
      case "/shoppinglandingpagefinal":
        title = "";
        metaDescription = "";
        break;
      case "/fiinish-store-set-up":
        title = "";
        metaDescription = "";
        break;
      case "/trang-ch-web":
        title = "";
        metaDescription = "";
        break;
    }

    if (title) {
      document.title = title;
    }

    if (metaDescription) {
      const metaDescriptionTag: HTMLMetaElement | null = document.querySelector(
        'head > meta[name="description"]'
      );
      if (metaDescriptionTag) {
        metaDescriptionTag.content = metaDescription;
      }
    }
  }, [pathname]);

  return (
    <Routes>
      <Route path="/" element={<IPhoneSE />} />
      <Route path="/mobile-responsive" element={<MobileResponsive />} />
      <Route
        path="/shoppinglandingpagefinal"
        element={<ShoppingLandingPageFinal />}
      />
      <Route path="/fiinish-store-set-up" element={<FiinishStoreSetUp />} />
      <Route path="/trang-ch-web" element={<TrangChWeb />} />
    </Routes>
  );
}
export default App;
