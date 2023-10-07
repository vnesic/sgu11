import React from 'react';

const PictureRightWithTextLeftWithList = ({ imageSrc, header, text }) => {
    return (
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <div style={{ flex: 1 }}>
          <h2>{header}</h2>
          <p>{text}</p>
          <ul>
            <li>devojkama i ženama koje imaju problem sa diskushernijom </li>
            <li>osobama koje žele da regulišu trenutnu telesnu težinu </li>
            <li>onima koje žele da poboljšaju svoju celokupnu fizičku spremu (poboljšanje snage, brzine, gipkosti, koordinacije, izdržljivosti, spretnosti i dr)</li>
          </ul>
        </div>
        <div style={{ flex: 1 }}>
          <img src={imageSrc} alt="Picture" style={{ width: '90%' }} />
        </div>

      </div>
    );
  };
  
  export default PictureRightWithTextLeftWithList;