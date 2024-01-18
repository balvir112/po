import React from 'react'
import './home.css'

const HeaderSocials = () => {
  return (
    <div className="home__socials">
      <a
        href="https://www.instagram.com/"
        className="home__socials-link"
        target="_blank"
      >
        <i class="fa-brands fa-instagram"></i>
      </a>

      <a
        href="https://www.twitter.com/"
        className="home__socials-link"
        target="_blank"
      >
        <i class="fa-brands fa-twitter"></i>
      </a>

      <a
        href="https://github.com/pawanbondre67"
        className="home__socials-link"
        target="_blank"
      >
        <i class="fa-brands fa-github"></i>
      </a>

      <a
        href="https://www.behance.com/"
        className="home__socials-link"
        target="_blank"
      >
        <i class="fa-brands fa-behance"></i>
      </a>

      <a
        href="https://www.dribble.com/"
        className="home__socials-link"
        target="_blank"
      >
        <i class="fa-brands fa-dribble"></i>
      </a>

     
    </div>
  );
}

export default HeaderSocials