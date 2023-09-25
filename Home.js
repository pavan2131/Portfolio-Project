import React from 'react';
import MainMenu from './MainMenu';
import Feed from './Feed';
import '../styles/Layout.css';

const Home = () => {
  return (
    <div className="homeContainer">
      <div className="mainMenuContainer">
        <MainMenu />
      </div>
      <div className="feedContainer">
        <Feed />
      </div>
    </div>
  );
};

export default Home;

