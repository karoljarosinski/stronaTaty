import React from 'react';
import Zoom from 'react-medium-image-zoom'
import 'react-medium-image-zoom/dist/styles.css'

const Kontakt = () => {
  return (
    <section className="kontakt">
      <div className="karta-dane">
        <h4>Kontakt</h4>
        <div className="dane">
          <div className="numer-kontaktowy">
            <p className="position">1</p>
            <div>
              <h5>Numer telefonu</h5>
              <strong>+48 693-527-468</strong>
            </div>
          </div>
          <div className="adress">
            <p className="position">2</p>
            <div>
              <h5>Adres</h5>
              <strong>ul. Kosciuszki 40 lok.15</strong>
              <strong>39-400 Tarnobrzeg</strong>
            </div>
          </div>
        </div>
        <div className="mapa">
          <div>
            <p className="position">3</p>
            <h5>Mapa</h5>
          </div>
          <div className="pictures">
            <Zoom>
              <img src={require("../../../../../assets/images/map.png")} alt="mapa dojazdu" className="mapa-dojazdu"/>
            </Zoom>
            <Zoom>
              <img src={require("../../../../../assets/images/entrance.png")} alt="mapa dojazdu" className="wejscie"/>
            </Zoom>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Kontakt;