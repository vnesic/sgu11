import React from 'react';
import './list.css';


const List = () => {
  const items = [
    'prevencija od povreda u svim fizičkim radnjama', 
    'uticaj na ispravljanje telesnih deformiteta', 
    'održavanje i povećavanje pokretljivosti zglobova', 
    'opuštanje i oporavak mišića, pomaže smanjenju upale mišića i utiče na popuštanje grčeva u mišićima',
    'smanjenje bolova u leđima usled sedentarnog načina života', 
    'velika uloga vežbi rastezanja je kod osoba koje boluju od artritisa smanjujući ukočenost mišića i ligamenata statičnog zgloba', 
    'aktuelna istraživanja pokazuju da osobe koje imaju dijabetes tip 2 ili su pod visokim rizikom za ovu bolest, mogu doprineti kontroli nivoa glukoze u krvi tako što če se redovno rastezati 30 do 40min.'];

  return (
    <div>
      <ul className="list-container">
        {items.map((item, index) => 
        (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default List;
