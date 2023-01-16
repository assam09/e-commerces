import { Route, Routes } from "react-router-dom";
import NavbarApp from "./Component/Navbar";
import Prodects from "./Component/Prodect";
import Cart from "./Component/Cart";
import About from "./Component/About";
import SideBar from "./Component/SideBar/SideBar";

function App() {
  return (
    <div className="App">
      <div className="container-fluid d-flex">
        <div className="sideBar">
          <SideBar></SideBar>
        </div>
        <div className="mainContent">
          <NavbarApp />
          <Routes>
            <Route path="/" element={<Prodects />} />
            <Route path="Cart" element={<Cart />} />
            <Route path="about" element={<About />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;
