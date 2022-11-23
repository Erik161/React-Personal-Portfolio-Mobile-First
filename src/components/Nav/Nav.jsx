import React from 'react';


const Nav = () => {
  return (
    <div className="nav bd-grid">
        <div>
            <a href="#" className="nav__logo">Logo</a>
        </div>

        <div className="nav__menu" >
            <ul className="nav__list">
                <li className="nav__item"><a href="#" className="nav__link">Home</a></li>
                <li className="nav__item"><a href="#" className="nav__link">About</a></li>
                <li className="nav__item"><a href="#" className="nav__link">Services</a></li>
                <li className="nav__item"><a href="#" className="nav__link">Blog</a></li>
                <li className="nav__item"><a href="#" className="nav__link">Contact</a></li>
            </ul>
        </div>

        <div className="nav__toggle" >
            <ion-icon name="menu"></ion-icon>
        </div>
    </div>
  )
}

export default Nav