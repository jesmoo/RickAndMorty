import React from 'react';
import { Link } from 'react-router-dom';
import icon404 from '../assets/icons/fourohfour.svg';
import '../styles/components/NotFound.css';
const Notfound = () => {
  return (
    <main className="svgcontainer">
      <div className="subcont">
        <div className="topconvo">
          <Link to="/" className="Character__comeBack" />
          <span>!@#$</span>
          <br />
          your portal gun must be busted...
        </div>
        <img className="icon404" src={icon404} alt="404" />
        <div className="bottomconvo">Page not found. Wubba Lubba Dub Dub.</div>
      </div>
    </main>
  );
};

export default Notfound;
