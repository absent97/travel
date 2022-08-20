import { BrowserRouter, Routes, Route } from "react-router-dom";

import { Navbar } from "./components/Navbar";
import { Home } from "./components/pages/Home";
import { Products } from "./components/pages/Products";
import { SignUp } from "./components/pages/SignUp";
import { Services } from "./components/pages/Services";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/products" element={<Products />} />
        <Route exact path="/sign-up" element={<SignUp />} />
        <Route exact path="/services" element={<Services />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
