import React from "react";
import ReactDOM from "react-dom";
import Flickity from "react-flickity-component";

import "../styles.css";
import "flickity/css/flickity.css";

const flickityOptions = {
  prevNextButtons: false,
  pageDots: false,
}

function Carousel() {
  return (
    <Flickity options={flickityOptions}>
      <div className="carousel-item">
        <img style={{ marginLeft: 5, marginRight: 5 }} src="http://centennialsmarciacharnizon.com.br/wp-content/uploads/2021/05/Mt_danc%CC%A7a.gif" />
      </div>
      <div className="carousel-item color-black">
        <img style={{ marginLeft: 5, marginRight: 5 }} src="http://centennialsmarciacharnizon.com.br/wp-content/uploads/2021/05/Centennials_MarciaCharnizon_Laylamontagem-1024x768.jpg" />
      </div>
      <div className="carousel-item color-black">
        <video style={{ marginLeft: 5, marginRight: 5 }} loop controls>
          <source src="http://centennialsmarciacharnizon.com.br/wp-content/uploads/2021/05/Ali_menor.mp4" type="video/mp4" />
        </video>
      </div>
    </Flickity>
  );
}

function Home() {
  return (
    <div className="App">
      <Carousel />
    </div>
  );
}

export default Home
