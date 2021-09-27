import React from 'react';

const DetailsList = ({ name, subtitle, imgURL, alt }) => {
  return (
    <>
      <section className="Cards" title={subtitle}>
        <section className="Cards__text">
          <p className="Cards__subtext">{name}</p>
          <p className="Cards__subtitle">{subtitle}</p>
        </section>
        <section className="Cards__img">
          <img src={imgURL} alt={alt} />
        </section>
      </section>
    </>
  );
};

export default DetailsList;
