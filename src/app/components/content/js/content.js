import React from 'react';
import ZakresBadan from "../components/zakres-badan/js/zakres-badan";
import Mapa from "../components/kontakt/js/mapa";
import GodzinyPracy from "../components/godziny-pracy/js/godziny-pracy";

const Content = () => {
  return (
    <main className={'main'}>
      <ZakresBadan></ZakresBadan>
      <GodzinyPracy></GodzinyPracy>
      <Mapa></Mapa>
    </main>
  );
};

export default Content;