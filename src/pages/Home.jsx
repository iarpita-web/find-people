import React from 'react';
import Navbar from '../components/Navbar';
import SearchBox from '../components/SearchBox';
import downloadImage from '../components/download.jpg';
import './Home.css';

const Home = () => {
  return (
    <div className="home">
      <Navbar />
      <main className="home-main">
        <div className="home-content">
          <div className="logo-section">
            <div className="main-logo-container">
              <img src={downloadImage} alt="Girman" className="main-logo-image" />
              <h1 className="home-title">Girman</h1>
            </div>
          </div>
          <div className="search-section">
            <SearchBox placeholder="Search" />
          </div>
        </div>
      </main>
    </div>
  );
};

export default Home;