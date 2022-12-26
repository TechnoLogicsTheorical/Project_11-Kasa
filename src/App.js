import Header from "./components/generics/Header/comp.jsx";
import Footer from "./components/generics/Footer/comp.jsx";

import Home from "./pages/Home.jsx";
import Apartment from "./pages/Apartment.jsx";
import PageNotFound from "./pages/PageNotFound.jsx";
import About from "./pages/About.jsx";

import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
      <BrowserRouter>
          <div className='App-Content'>
              <Header />
                  <Routes>
                      <Route path="/" element={<Home />} />
                      <Route path="/apartment/:id" element={<Apartment />} />
                      <Route path="/about" element={<About />} />
                      <Route path="*" element={<PageNotFound />} />
                  </Routes>
              <Footer />
          </div>
      </BrowserRouter>
  );
}

export default App;
