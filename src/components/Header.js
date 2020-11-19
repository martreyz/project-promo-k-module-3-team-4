import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../images/logo-awesome-profile-cards.svg';
import '../stylesheets/layout/Header.scss';

class Header extends React.Component {
  render() {
    return (
      <header className="header">
        <Link to="/">
          <img
            src={logo}
            alt="Logo de la página"
            title="Logo de la página"
            className="header__img"
          />
        </Link>
      </header>
    );
  }
}

export default Header;
