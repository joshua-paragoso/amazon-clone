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
          
        </div>
      </div>
    </div>
  );
}

export default Home;
