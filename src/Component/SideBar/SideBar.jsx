import React, { useState } from "react";
import "./SideBar.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

import HomeIcon from "@mui/icons-material/Home";
import { DeleteOutlined } from "@mui/icons-material";

export default function SideBar() {
  //changing the price
  const [price, setPrice] = useState({
    firstPrice: 1,
    lastPrice: 1,
  });

  return (
    <aside>
      <header>
        <div className="logo d-flex">
          <HomeIcon></HomeIcon>
          <h2>Logo Brand</h2>
        </div>
      </header>

      {/* price section */}
      <section className="price">
        <p>Price</p>

        <div className="setPrice">
          <div className="mb-3 firstPrice d-flex align-items-center flex-wrap">
            <input
              type="range"
              name="firstPrice"
              id=""
              min={"1"}
              max={"100"}
              onChange={(e) =>
                setPrice({ ...price, [e.target.name]: e.target.value })
              }
            />
            <span className="mx-2 startPrice btn btn-light">
              From {price.firstPrice}$
            </span>
          </div>

          <div className="mb-3 lastPrice d-flex align-items-center flex-wrap">
            <input
              type="range"
              name="lastPrice"
              id=""
              min={price.firstPrice}
              max={"5000"}
              step={"1"}
              onChange={(e) =>
                setPrice({ ...price, [e.target.name]: e.target.value })
              }
            />
            <span className="mx-2 endPrice btn btn-light">
              UpTo {price.lastPrice}$
            </span>
          </div>
        </div>
      </section>

      {/* category section */}
      <section className="categorySelections">
        {/* Theme select */}
        <div className="accordion" id="themeAccordion">
          <div className="accordion-item">
            <h2 className="accordion-header" id="themeHeading">
              <button
                className="accordion-button"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#theme"
                aria-expanded="true"
                aria-controls="theme"
              >
                Theme
              </button>
            </h2>
            <div
              id="theme"
              className="accordion-collapse collapse"
              aria-labelledby="themeHeading"
              data-bs-parent="#themeAccordion"
            >
              <div class="accordion-body">
                <div class="form-check">
                  <input
                    class="form-check-input"
                    type="checkbox"
                    value=""
                    id=""
                  />
                  <label class="form-check-label" for="">
                    Default checkbox
                  </label>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* age select */}
        <div className="accordion" id="ageAccordion">
          <div className="accordion-item">
            <h2 className="accordion-header" id="ageHeading">
              <button
                className="accordion-button"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#age"
                aria-expanded="true"
                aria-controls="age"
              >
                Age
              </button>
            </h2>
            <div
              id="age"
              className="accordion-collapse collapse"
              aria-labelledby="ageHeading"
              data-bs-parent="#ageAccordion"
            >
              <div class="accordion-body">
                <div className="form-check">
                  <input
                    type="radio"
                    name="age"
                    id=""
                    className="form-check-input"
                  />
                  <label htmlFor="">1 year</label>
                </div>
                {[...Array(5).keys()].map((val) => {
                  return (
                    <div className="form-check">
                      <input
                        type="radio"
                        name="age"
                        className="form-check-input"
                      />
                      <label htmlFor="">Up To {(val + 1) * 5} Year</label>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>

        {/* Brand select */}
        <div className="accordion" id="brandAccordion">
          <div className="accordion-item">
            <h2 className="accordion-header" id="brandHeading">
              <button
                className="accordion-button"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#brand"
                aria-expanded="true"
                aria-controls="brand"
              >
                Brand
              </button>
            </h2>
            <div
              id="brand"
              className="accordion-collapse collapse"
              aria-labelledby="brandHeading"
              data-bs-parent="#brandAccordion"
            >
              <div class="accordion-body">
                {[...Array(5).keys()].map((val) => {
                  return (
                    <div className="form-check">
                      <input type="check-box" className="form-check-input" />
                      <label htmlFor="check-box">Brand {val + 1}</label>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>

        {/* Characters */}
        <div className="accordion" id="charactersAccordion">
          <div className="accordion-item">
            <h2 className="accordion-header" id="charactersHeading">
              <button
                className="accordion-button"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#characters"
                aria-expanded="true"
                aria-controls="characters"
              >
                Characters
              </button>
            </h2>
            <div
              id="characters"
              className="accordion-collapse collapse"
              aria-labelledby="charactersHeading"
              data-bs-parent="#charactersAccordion"
            >
              <div class="accordion-body">
                This is the first item's accordion body.
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer>
        <div className="applyChanges d-flex justify-content-between align-items-center">
          <button className="btn btn-danger">Apply Filter</button>
          <button className="btn btn-light">
            <DeleteOutlined titleAccess="Reset Changes"></DeleteOutlined>
          </button>
        </div>
      </footer>
    </aside>
  );
}
