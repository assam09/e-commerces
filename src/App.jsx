import { Route, Routes } from "react-router-dom";
import NavbarApp from "./Component/Navbar";
import Prodects from "./Component/Prodect";
import Cart from "./Component/Cart";
import About from "./Component/About";


function App() {
  return (
    <div className="App">
      <NavbarApp />
      <Routes>
        <Route path="/" element={<Prodects/> } />
        <Route path="Cart" element={<Cart/> } />
        <Route path="about" element={<About/> } />
      </Routes>
      </div>
    )
}

export default App;
