import React from "react";
import "./Home.css";
import Product from "./Product";
function Home() {
  return (
    <div className="Home">
      <div className="home__container">
        <img
          className="home__image"
          src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220-.jpg"
          alt=""
        />

        <div className="home__row">
          <Product />
          {/*product*/}
        </div>

        <div className="home__row">
          {/*product*/}
          {/*product*/}
          {/*product*/}
        </div>

        <div className="home__row">{/*product*/}</div>
      </div>
    </div>
  );
}

export default Home;
