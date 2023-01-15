import React from "react";
import "./SideBar.css";

import HomeIcon from "@mui/icons-material/Home";

export default function SideBar() {
  return (
    <aside>
      <header>
        <div className="logo d-flex">
          <HomeIcon></HomeIcon>
          <h2>Logo Brand</h2>
        </div>
        <div className="price">
          <p>Price</p>

          <div className="setPrice d-flex flex-wrap">
            <span className="startPrice btn btn-light">From 200$</span>
            <span className="endPrice btn btn-light">UpTo 200$</span>
          </div>

          <div className="priceRange">
            <input type="range" name="startPrice" id="" min={"1"} max={"100"} />
            <input type="range" name="endPrice" id="" min={"1"} max={"100"} />
          </div>
        </div>
      </header>
    </aside>
  );
}
