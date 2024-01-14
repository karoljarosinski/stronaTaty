import React from 'react';
import Zoom from 'react-medium-image-zoom'
import 'react-medium-image-zoom/dist/styles.css'

const Mapa = () => {
  return (
    <section className="location">
      <div className="karta-mapy">
        <div className="mapa">
          <h5>Mapa</h5>
          <div className="pictures">
            <a
              href="https://www.google.pl/maps/place/Jarosi%C5%84ski+Miros%C5%82aw.+Pracownia+us%C5%82ug+psychologicznych/@50.5706543,21.6664107,17z/data=!3m1!4b1!4m6!3m5!1s0x473d49f54e6722cb:0xd1f2a324223ad7de!8m2!3d50.5706509!4d21.6689856!16s%2Fg%2F1ptyfv78l?entry=ttu"
              target="_blank"
              rel="noreferrer noopener">
              <img src={require("../../../../../assets/images/map.png")} alt="mapa dojazdu" className="mapa-dojazdu"/>
            </a>
            <Zoom>
              <img src={require("../../../../../assets/images/entrance.png")} alt="mapa dojazdu" className="wejscie"/>
            </Zoom>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Mapa;