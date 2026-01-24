import { Routes, Route } from "react-router-dom";
import Layout from "./layout/Layout.jsx";
import Home from "./pages/Home.jsx";
import Serviços from "./pages/Serviços.jsx";
import FisioPelvica from "./pages/FisioPelvica.jsx";
import Radio from "./pages/Radio.jsx";
import Drenagem from "./pages/Denagem.jsx";
import Sobre from "./pages/Sobre.jsx";
import { useEffect, Suspense } from "react";
import {
  initFacebookPixel,
  trackInitialPageView,
} from "./utils/facebookPixel.js";
import ScrollToTop from "./components/ScrollToTop";
import Loading from "./components/Loading";

function App() {
  useEffect(() => {
    initFacebookPixel();
    trackInitialPageView();
  }, []);

  return (
    <>
      <ScrollToTop />
      <Suspense fallback={<Loading />}>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="serviços" element={<Serviços />} />
            <Route path="fisiopelvica" element={<FisioPelvica />} />
            <Route path="radiofrequencia" element={<Radio />} />
            <Route path="drenagemlinfatica" element={<Drenagem />} />
            <Route path="sobre" element={<Sobre />} />
          </Route>
        </Routes>
      </Suspense>
    </>
  );
}

export default App;
