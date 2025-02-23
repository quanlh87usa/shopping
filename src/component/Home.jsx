import React from "react";
import Products from "./Products";

function Home() {
  return (
    <div className="hero">
        <div className="card bg-dark text-white border-0">
            <img className="card-img" height="550px" src="/assets/bg.jpg" alt="Background" />
            <div className="card-img-overlay d-flex flex-col justify-items-center">
                <div className="container">
                  <h5 className="card-title display-5 fw-border mb-0">NEW SEASON ARRIVALS</h5>
                  <p className="card-text lead fs-2">
                    CHECK OUT ALL THE TRENDS
                  </p>
                </div>
            </div>
        </div>
      <Products />
    </div>
  );
}

export default Home;
