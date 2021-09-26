import React from 'react';

const Character = ({ name }) => {
  return (
    <>
      <section className="container__character">
        <section className="character__text">
          <h2>{name}</h2>
        </section>
        <section className="character__img">
          <img src="" alt="" />
        </section>
      </section>
    </>
  );
};

export default Character;
