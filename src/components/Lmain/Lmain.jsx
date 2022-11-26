import React from 'react';
import IMG from '../../assets/img.jpg';


const LMAIN = () => {
  return (
    <div className="l-main bd-grid">
      <div className="home">
          <div className="home__information">
              <span className="home__pressent anime-text">Hello, My name is</span>
              <h1 className="home__title anime-text">John Doe</h1>
              <span className="home__skill anime-text">Web Developer</span>
              
              <div>
                  <a href="#" className="home__button anime-text">DOWNLOAD CV</a>
              </div>
          </div>

          <div className="home__img">
              <img src={IMG} alt="" />
          </div>
          
          <div className="home__social">
              <ion-icon name="logo-facebook" className="home__social-icon"></ion-icon>
              <ion-icon name="logo-instagram" className="home__social-icon"></ion-icon>
              <ion-icon name="logo-twitter" className="home__social-icon"></ion-icon>
          </div>

      </div>
    </div>
  )
}

export default LMAIN