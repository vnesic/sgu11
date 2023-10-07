import React from 'react';

const PictureLefttWithTextRight = ({ imageSrc, header, text }) => {
  return (
    <div style={{ display: 'flex', alignItems: 'center' }}>
      <div style={{ flex: 1 }}>
        <img src={imageSrc} alt="Picture" style={{ width: '90%' }} />
      </div>
      <div style={{ flex: 1 }}>
        <h2>{header}</h2>
        <p>{text}</p>
      </div>
    </div>
  );
};

export default PictureLefttWithTextRight;