import React from 'react';
import '../styles/components/Character.css';

const Character = ({ name, image }) => {
  return (
    <>
      <section className="container__character">
        <section className="character__text">
          <h2>{name}</h2>
        </section>
        <section className="character__img">
          <img src={image} alt={name} />
        </section>
      </section>
    </>
  );
};

export default Character;
