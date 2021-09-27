import React, { useEffect, useState } from 'react';
import useOneData from '../Hooks/useOneData';
import title from '../assets/img/rrickandmorty.png';

const CharacterDetails = (props) => {
  const id = props.match.params.id;
  const initialState = useOneData(id);
  console.log(initialState);

  return (
    <main className="container__main">
      <section className="main__imgTitle">
        <img src={title} alt="" />
      </section>
      {initialState && initialState.loading ? (
        <h1>Holisss</h1>
      ) : (
        <h1>{initialState.information.name}</h1>
      )}
    </main>
  );
};

export default CharacterDetails;
