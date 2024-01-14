import React from 'react';
import ZakresBadan from "../components/zakres-badan/js/zakres-badan";
import Kontakt from "../components/kontakt/js/kontakt";
import GodzinyPracy from "../components/godziny-pracy/js/godziny-pracy";

const Content = () => {
  return (
    <main className={'main'}>
      <ZakresBadan></ZakresBadan>
      <GodzinyPracy></GodzinyPracy>
      <Kontakt></Kontakt>
    </main>
  );
};

export default Content;