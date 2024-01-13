import React from 'react';

const Kontakt = () => {
  return (
    <section className="kontakt">
      <div className="karta-dane">
        <h4>Kontakt</h4>
        <div className="dane">
          <div className="adress">
            <p className="position">1</p>
            <div>
              <h5>Adres</h5>
              <p>Zapraszamy do naszej pracowni, zlokalizowanej przy ulicy</p>
              <strong>Kosciuszki 40 lok.15</strong>
              <strong>39-400 Tarnobrzeg</strong>
            </div>
          </div>
          <div className="numer-kontaktowy">
            <p className="position">2</p>
            <div>
              <h5>Numer Kontaktowy</h5>
              <p>Skontaktuj sie z nami pod numerem telefonu</p>
              <strong>+48 693-527-468</strong>
            </div>
          </div>
        </div>
      </div>
      <div className="obrazek-karty"></div>
    </section>
  );
};

export default Kontakt;