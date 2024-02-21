import Home from "./Components/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Products from "./Components/Products";
import Services from "./Components/Services";
import SignUp from "./Components/SignUp";
import "./App.css";

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route exact path="/" element={<Home />}>
            {" "}
          </Route>
          <Route exact path="/products" element={<Products />}>
            {" "}
          </Route>
          <Route exact path="/services" element={<Services />}>
            {" "}
          </Route>
          <Route exact path="/sign-up" element={<SignUp />}>
            {" "}
          </Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
