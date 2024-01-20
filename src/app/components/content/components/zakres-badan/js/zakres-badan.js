import React from 'react';
import Article from '../../articles/js/article';

const ZakresBadan = () => {
  return (
    <section className="zakres-badan">
      <div className="zakres-badan-content">
        <div className="zakres-badan-title">
          <h2>Zakres działalności</h2>
          <h3>Badania psychologiczne</h3>
        </div>
        <div className="oferta">
          <Article
            article_class={'kierowcy'}
            image_class={'samochod'}
            text={'Kierowców'}
          >
            <ul>
              <li>zawodowych</li>
              <li>skierowanych przez Starostę</li>
            </ul>
          </Article>
          <Article
            article_class={'instruktorzy'}
            image_class={'elki'}
            text={'Instruktorów nauki jazdy i egzaminatorow'}
          ></Article>
          <Article
            article_class={'koparki'}
            image_class={'koparka'}
            text={'Operatorów maszyn w ramach medycyny pracy'}
          ></Article>
          <Article
            article_class={'bron'}
            image_class={'obraz-bron'}
            text={'Pozwolenia na broń'}
          ></Article>
          <Article
            article_class={'inne-zawody'}
            image_class={'inne'}
            text={'Pomoc i wsparcie psychologiczne'}
          ></Article>
        </div>
      </div>
    </section>
  );
};

export default ZakresBadan;
