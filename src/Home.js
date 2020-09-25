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
          <Product
            title="The lean start up"
            price={29.99}
            image="https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._AC_SY400_.jpg"
            rating={5}
          />
          <Product
            id="12345"
            title="GTX 3080 Graphics card"
            price={359.99}
            image="https://i.redd.it/dmd6lf9jdr851.jpg"
            rating={4}
          />
          {/*product*/}
        </div>

        <div className="home__row">
          <Product
            id="42553"
            title="RipTide Surfboard"
            price={199.99}
            image="https://www.riptidewatersports.com/wp-content/uploads/surf-board-e1560545921742-1024x461.jpg"
            rating={5}
          />
          <Product
            id="52342"
            title="Nike Metcon 5s"
            price={129.99}
            image="https://www.roguefitness.com/media/catalog/product/cache/1/rogue_header_2015/750x/472321edac810f9b2465a359d8cdc0b5/a/q/aq1189-002-h.jpg"
            rating={5}
          />
          <Product
            id="463453"
            title="Blue Eyes White Dragon"
            price={999.99}
            image="https://d1rw89lz12ur5s.cloudfront.net/photo/collectorscache/file/763621/LCKC-EN001D.jpg?1520537161"
            rating={5}
          />
        </div>

        <div className="home__row">
          <Product
            id="463453"
            title="Patrick Star Sticker"
            price={1.99}
            image="data:image/jpeg;base64,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"
            rating={5}
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
