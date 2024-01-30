import React from 'react';

const WorkingHours = () => {
  return (
    <section className="hours">
      <article className="hours-content">
        <div className="details">
          <h4>Godziny pracy</h4>
          <p>Od poniedziałku do piątku:</p>
          <p>10:00 - 16:00</p>
          <p>Soboty:</p>
          <p>Po wcześniejszym uzgodnieniu telefonicznym.</p>
        </div>
        <div className="contact-details">
          <h4>Kontakt</h4>
          <div className="contact-data">
            <div className="phone-number">
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
                <p>
                  <strong>ul. Kościuszki 40 lok.15</strong>
                </p>
                <p>
                  <strong>39-400 Tarnobrzeg</strong>
                </p>
              </div>
            </div>
          </div>
        </div>
      </article>
    </section>
  );
};

export default WorkingHours;
