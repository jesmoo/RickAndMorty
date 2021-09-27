import React, { useEffect, useState } from 'react';
import useOneData from '../Hooks/useOneData';
import CardList from '../components/DetailsList';

import title from '../assets/img/rrickandmorty.png';
import planet from '../assets/icons/planeta.svg';
import play from '../assets/icons/reproductor-de-video.svg';
import species from '../assets/icons/Species.svg';
import pulse from '../assets/icons/pulse.svg';

import '../styles/components/CharacterDetails.css';
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
        <section className="main__CharacterContianer">
          <img
            className="Character__img"
            src={initialState.information.image}
            alt={initialState.information.name}
          />
          <section className="Character__text">
            <h1>{`Hi i am ${initialState.information.name}`}</h1>
            <section className="Character__textCards">
              <CardList
                name={initialState.information.origin.name}
                subtitle="origin"
                imgURL={planet}
                alt="Planet"
              />
              <CardList
                name={initialState.information.episode.length}
                subtitle="episode"
                imgURL={play}
                alt="Episodes"
              />
              <CardList
                name={initialState.information.species}
                subtitle="species"
                imgURL={species}
                alt="Species"
              />
              <CardList
                name={initialState.information.status}
                subtitle="status"
                imgURL={pulse}
                alt={`Is ${initialState.information.status}`}
              />
            </section>
          </section>
        </section>
      )}
    </main>
  );
};

export default CharacterDetails;
