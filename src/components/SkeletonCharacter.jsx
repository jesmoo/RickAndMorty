import React from 'react';
import '../styles/components/SkeletonCharacter.css';

const SkeletonCharacter = () => {
  return (
    <>
      <section className="container__character-skeleton">
        <section className="character__text-skeleton">
          <h2></h2>
        </section>
        <section className="character__img-skeleton">
          <div />
        </section>
      </section>
    </>
  );
};

export default SkeletonCharacter;
