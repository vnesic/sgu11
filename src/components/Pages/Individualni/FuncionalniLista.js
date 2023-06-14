import React from 'react';

const FuncionalniLista = () => {
  const lines = [
    'devojkama i ženama koje imaju problem sa diskushernijom',
    'osobama koje žele da regulišu trenutnu telesnu težinu',
    'onima koje žele da poboljšaju svoju celokupnu fizičku spremu (poboljšanje snage, brzine, gipkosti, koordinacije, izdržljivosti, spretnosti i dr)'
  ];

  const listItems = lines.map((line, index) => (
    <li key={index}>{line}</li>
  ));

  return (
    <div>
      <h1>List Example</h1>
      <ul>{listItems}</ul>
    </div>
  );
};

export default FuncionalniLista;
