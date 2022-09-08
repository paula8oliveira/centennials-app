import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Flickity from 'react-flickity-component'
import "flickity/css/flickity.css"

const flickityOptions = {
  prevNextButtons: false,
  pageDots: false,
}

function Carousel() {
  return (
    <Flickity options={flickityOptions}>
      <div className="carousel-item">
        <picture>
          <source
              srcSet="/mt_danca.gif"
              type="image/webp"
          />
          <img
              src="/mt_danca.gif"
              alt=""
          />
        </picture>
      </div>
      <div className="carousel-item color-black">
        <picture>
          <source
              srcSet="/laylamontagem.jpeg"
              type="image/webp"
          />
          <img
              src="/laylamontagem.jpeg"
              alt=""
          />
        </picture>
      </div>
      <div className="carousel-item color-black">
        <video style={{ marginLeft: 5, marginRight: 5 }} loop controls>
          <source src="http://centennialsmarciacharnizon.com.br/wp-content/uploads/2021/05/Ali_menor.mp4" type="video/mp4" />
        </video>
      </div>
    </Flickity>
  );
}

export default function Home() {
  return (
    <div>
      <Carousel />
    </div>
  )
}
