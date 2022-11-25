import React from 'react';
import IMG from './assets/img.jpg';

const Lmain = () => {
  return (
    <div class="l-main bd-grid">
      <div class="home">
          <div class="home__information">
              <span class="home__pressent anime-text">Hello, My name is</span>
              <h1 class="home__title anime-text">John Doe</h1>
              <span class="home__skill anime-text">Web Developer</span>
              
              <div>
                  <a href="#" class="home__button anime-text">DOWNLOAD CV</a>
              </div>
          </div>

          <div class="home__img">
              <img src={IMG} alt="" />
          </div>
          
          <div class="home__social">
              <ion-icon name="logo-facebook" class="home__social-icon"></ion-icon>
              <ion-icon name="logo-instagram" class="home__social-icon"></ion-icon>
              <ion-icon name="logo-twitter" class="home__social-icon"></ion-icon>
          </div>

      </div>
    </div>
  )
}

export default Lmain