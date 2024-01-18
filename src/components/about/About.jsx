import React from 'react';
import './about.css';
import Image from '../../assets/avatar-2.svg';

function About() {
  return (
    <section className="about container section" id="about">
      <h2 className="section__title">About Me</h2>

      <div className="about__container grid">
        <img src={Image} alt="" className="about__img" />

        <div className="about__data grid">
          <div className="about__info">
            <p className="about__description">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos
              voluptate voluptas cumque iusto minus, quibusdam, dolorum
              voluptatum, voluptates consequuntur quae quidem. Quisquam
              voluptatem, voluptatum officia quidem fugit quibusdam
              exercitationem voluptate.
            </p>
            <a href="" className="btn">Download CV</a>
          </div>

          
        </div>
      </div>
    </section>
  );
}

export default About