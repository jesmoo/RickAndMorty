import React from 'react';
import Character from './Character';
import SkeletonCharacter from './SkeletonCharacter';
import title from '../assets/img/rrickandmorty.png';
import useInitialState from '../Hooks/useInitialState';
import '../styles/components/Main.css';
import '../styles/breakpoints/mainQueries.css';

const Main = () => {
  const initialState = useInitialState();
  let shortNameInitial = initialState.information;
  console.log(shortNameInitial);
  return (
    <main className="container__main">
      <section className="main__imgTitle">
        <img src={title} alt="" />
      </section>
      <section className="main__characters">
        {initialState.loading ? (
          <>
            <SkeletonCharacter />
            <SkeletonCharacter />
            <SkeletonCharacter />
            <SkeletonCharacter />
            <SkeletonCharacter />
            <SkeletonCharacter />
            <SkeletonCharacter />
            <SkeletonCharacter />
            <SkeletonCharacter />
            <SkeletonCharacter />
            <SkeletonCharacter />
            <SkeletonCharacter />
          </>
        ) : (
          initialState.information.results.map((item) => (
            <Character key={item.id} {...item} />
          ))
        )}
      </section>
    </main>
  );
};

export default Main;
