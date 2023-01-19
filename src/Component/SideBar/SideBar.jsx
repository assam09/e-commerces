import React, { useState } from "react";
import "./SideBar.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

import HomeIcon from "@mui/icons-material/Home";
import {
  ArrowForwardIos,
  ArrowRight,
  ArrowRightAltSharp,
  ArrowRightSharp,
  DeleteOutlined,
} from "@mui/icons-material";

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
          <h2>Logo Brand</h2>
        </div>
      </header>

      {/* page select */}
      <section className="d-flex align-items-center">
        <HomeIcon></HomeIcon>
        <span>Main Page</span>
        <ArrowForwardIos></ArrowForwardIos>
        <span>Category</span>
      </section>

      {/* price section */}
      <section className="price">
        <p>Price</p>

        <div className="setPrice">
          <div className="rangeSlider">
            <div class="range-slider">
              <span class="range-selected"></span>
            </div>
            <div class="range-input">
              <input
                type="range"
                class="min"
                name="firstPrice"
                min="0"
                max="1000"
                value="300"
                step="10"
                onChange={(e) =>
                  setPrice({ ...price, [e.target.name]: e.target.value })
                }
              />
              <input
                type="range"
                class="max"
                name="lastPrice"
                min="0"
                max="1000"
                value="700"
                step="10"
                onChange={(e) =>
                  setPrice({ ...price, [e.target.name]: e.target.value })
                }
              />
            </div>
            <div class="range-price">
              <label for="min">Min</label>
              <input type="number" name="min" value={price.firstPrice} />
              <label for="max">Max</label>
              <input type="number" name="max" value={price.lastPrice} />
            </div>
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
                Category
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
                    Sports
                  </label>
                </div>
                <div class="form-check">
                  <input
                    class="form-check-input"
                    type="checkbox"
                    value=""
                    id=""
                  />
                  <label class="form-check-label" for="">
                    Electronics
                  </label>
                </div>
                <div class="form-check">
                  <input
                    class="form-check-input"
                    type="checkbox"
                    value=""
                    id=""
                  />
                  <label class="form-check-label" for="">
                    Fashion
                  </label>
                </div>
                <div class="form-check">
                  <input
                    class="form-check-input"
                    type="checkbox"
                    value=""
                    id=""
                  />
                  <label class="form-check-label" for="">
                    Mens
                  </label>
                </div>
                <div class="form-check">
                  <input
                    class="form-check-input"
                    type="checkbox"
                    value=""
                    id=""
                  />
                  <label class="form-check-label" for="">
                    Womens
                  </label>
                </div>
                <div class="form-check">
                  <input
                    class="form-check-input"
                    type="checkbox"
                    value=""
                    id=""
                  />
                  <label class="form-check-label" for="">
                    Kids
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
