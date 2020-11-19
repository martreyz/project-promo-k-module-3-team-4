import React from 'react';
import footerLogo from '../images/logo-adalab.png';
import '../stylesheets/layout/Footer.scss';

class Footer extends React.Component {
  render() {
    return (
      <footer className="footer">
        <small className="footer__copy">
          Skrip-tonitas. Awesome profile-cards &copy; 2020{' '}
        </small>
        <img
          className="footer__logo"
          src={footerLogo}
          title="Logo Adalab"
          alt="Logo Adalab"
        />
      </footer>
    );
  }
}

export default Footer;
