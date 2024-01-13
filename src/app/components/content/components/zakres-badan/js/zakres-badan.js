import React from 'react';

const ZakresBadan = () => {
  return (
    <section className="zakres-badan">
      <div className="obrazek-karty"></div>
      <div className="zakres-badan-content">
        <div className="zakres-badan-title">
          <h2>Zakres badan</h2>
          <h3>Badania psychologiczne</h3>
        </div>
        <div className="oferta">
          <article className="kierowcy">
            <div className="samochod image"></div>
            <h4>Kierowcow</h4>
            <ul>
              <li>zawodowych</li>
              <li>skierowanych przez Staroste</li>
            </ul>
          </article>
          <article className="instruktorzy">
            <div className="elki image"></div>
            <h4>Instruktorow nauki jazdy i egzaminatorow</h4>
          </article>
          <article className="koparki">
            <div className="koparka image"></div>
            <h4>Operatorow maszyn</h4>
          </article>
          <article className="inne-zawody">
            <div className="inne image"></div>
            <h4>Inne zawody</h4>
          </article>
          <article className="bron">
            <div className="obraz-bron image"></div>
            <h4>Pozwolenia na bron</h4>
          </article>
        </div>
      </div>
    </section>
  );
};

export default ZakresBadan;