import React from 'react';
import Article from '../../articles/js/article';

const Scope = () => {
  return (
    <section className="scope">
      <div className="scope-content">
        <div className="scope-title">
          <h2>Zakres działalności</h2>
          <h3>Badania psychologiczne</h3>
        </div>
        <div className="offer">
          <Article
            article_class={'drivers'}
            image_class={'car'}
            text={'Kierowców'}
          >
            <ul>
              <li>zawodowych</li>
              <li>skierowanych przez Starostę</li>
            </ul>
          </Article>
          <Article
            article_class={'driving-instructor'}
            image_class={'driving-car'}
            text={'Instruktorów nauki jazdy i egzaminatorow'}
          ></Article>
          <Article
            article_class={'machines'}
            image_class={'excavator'}
            text={'Operatorów maszyn w ramach medycyny pracy'}
          ></Article>
          <Article
            article_class={'gun'}
            image_class={'pistol-picture'}
            text={'Pozwolenia na broń'}
          ></Article>
          <Article
            article_class={'other-jobs'}
            image_class={'other'}
            text={'Pomoc i wsparcie psychologiczne'}
          ></Article>
        </div>
      </div>
    </section>
  );
};

export default Scope;
