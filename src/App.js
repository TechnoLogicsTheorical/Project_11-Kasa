import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home.jsx";
import Appartment from "./pages/Appartment.jsx";
import PageNotFound from "./pages/PageNotFound.jsx";
import About from "./pages/About.jsx";

import Header from "./components/generics/Header/comp.jsx";
import Footer from "./components/generics/Footer/comp.jsx";

function App() {
  return (
      <BrowserRouter>
          <div className='App-Content'>
              <Header />
                  <Routes>
                      <Route path="/" element={<Home />} />
                      <Route path="/appartment/:id" element={<Appartment />} />
                      <Route path="/about" element={<About />} />
                      <Route path="*" element={<PageNotFound />} />
                  </Routes>
              <Footer />
          </div>
      </BrowserRouter>
  );
}

export default App;
