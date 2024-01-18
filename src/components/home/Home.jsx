import React from 'react';
import './home.css';
import Me from '../../assets/avatar-1.svg';
import HeaderSocials from './HeaderSocials';
import ScrollDown from './ScrollDown';
import Navbar from './Navbar';
function Home() {
  return (
    <section className="home" id="home">
      <div className="home__container container grid">
        <div className="home_image_wrapper">
          <img src={Me} alt="avatar" className="home__img" />
        </div>
        <div className="home__content">
          <span className="home__small">Hi,</span>
          <h1 className="home__title">
            <span>My name is </span> Pawan <br />I am a{" "}
            <span>
              <i>front-end Developer</i>
            </span>
          </h1>
          <HeaderSocials />

          <div className="home__btn btn">
            <a href="#">
              Hire Me
            </a>
          </div>
        </div>
        <ScrollDown />
      </div>

      <Navbar />
    </section>
  );
}

export default Home