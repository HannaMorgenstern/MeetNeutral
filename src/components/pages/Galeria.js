import React from 'react';
import '../../App.css';
import "react-slideshow-image/dist/styles.css";
import { Zoom } from "react-slideshow-image";

// style was imported in index.css
// import "react-slideshow-image/dist/styles.css";
const images = [
  'https://s3.eu-west-1.amazonaws.com/electricidad-carames.com/imagenes/Isma.png',
  'images/slide_3.jpg',
  'images/slide_7.jpg'
];
const zoomOutProperties = {
  duration: 5000,
  transitionDuration: 500,
  infinite: false,
  indicators: true,
  scale: 0.6,
  arrows: true
};

const Slideshow = () => {
  return (
    <div className="slide-container">
      <Zoom {...zoomOutProperties}>
        {images.map((each, index) => (
          <img key={index} style={{ width: "25%", innerHeight: "25%" }} src={each} />
        ))}
      </Zoom>
    </div>
  );
};

function Galeria() {
  return (
    <div className="Galeria">
      <Slideshow />
    </div>
  );
}

export default Galeria;