import React from 'react';
import '../styles/components/SkeletonDetails.css';
import '../styles/breakpoints/SkeletonDetails.css';
const SkeletonDetails = () => {
  return (
    <>
      <section className="main__CharacterContianer-Skeleton">
        <div className="Character__comeBack-Skeleton" />
        <div className="Character__img-Skeleton" />
        <section className="Character__text-Skeleton">
          <h1></h1>
          <section className="Character__textCards-Skeleton">
            <div className="Cards-Skeleton" />
            <div className="Cards-Skeleton" />
            <div className="Cards-Skeleton" />
            <div className="Cards-Skeleton" />
          </section>
        </section>
      </section>
    </>
  );
};

export default SkeletonDetails;
