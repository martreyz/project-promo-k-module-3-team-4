import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../images/logo-awesome-profile-cards.svg';
import '../stylesheets/layout/Homepage.scss';

class Landing extends React.Component {
  render() {
    return (
      <main className="main">
        <img className="main__logo" src={logo} alt="Logo de la página" title="Logo de la página" />
        <h1 className="main__title">Crea tu tarjeta de visita</h1>
        <p className="main__text">Crea mejores contactos profesionales de forma fácil y cómoda</p>
        <div className="main__icons">
          <div className="main__icons__item">
            <i className="far fa-object-ungroup main__icons__item__logo"></i>
            <p className="main__icons__item__text">Diseña</p>
          </div>
          <div className="main__icons__item">
            <i className="far fa-keyboard main__icons__item__logo"></i>
            <p className="main__icons__item__text">Rellena</p>
          </div>
          <div className="main__icons__item">
            <i className="fas fa-share-alt main__icons__item__logo"></i>
            <p className="main__icons__item__text">Comparte</p>
          </div>
        </div>
        <Link to="/card">
          <button className="uppercase links main__button">Comenzar</button>
        </Link>
      </main>
    );
  }
}
export default Landing;
