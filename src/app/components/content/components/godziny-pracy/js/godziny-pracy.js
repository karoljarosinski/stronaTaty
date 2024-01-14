import React from 'react';

const GodzinyPracy = () => {
  return (
    <section className="godziny">
      <article className="godziny-content">
        <div className="details">
          <h4>Godziny pracy</h4>
          <p>Od poniedzialku do piatku:</p>
          <p>10:00-16:00</p>
          <p>Soboty:</p>
          <p>Po wczesniejszym kontakcie telefonicznym.</p>
        </div>
        <div className="dane-kontaktowe">
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
                <p><strong>ul. Kosciuszki 40 lok.15</strong></p>
                <p><strong>39-400 Tarnobrzeg</strong></p>
              </div>
            </div>
          </div>
        </div>
      </article>
    </section>
  );
};

export default GodzinyPracy;