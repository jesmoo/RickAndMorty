import React from 'react';
import { Link } from 'react-router-dom';

import '../styles/components/Character.css';

const Character = ({ id, name, image }) => {
  return (
    <>
      <Link
        to={`/details/${id}`}
        title={`${name} details`}
        className="container__character"
      >
        <section className="character__text">
          <h2>{name}</h2>
        </section>
        <section className="character__img">
          <img src={image} alt={name} />
        </section>
      </Link>
    </>
  );
};

export default Character;
