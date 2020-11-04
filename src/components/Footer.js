import React from 'react';
import footerLogo from '../images/logo-adalab.png';
import '../stylesheets/layout/_footer.scss';

class Footer extends React.Component {
  render() {
    return (
      <footer className="footer">
        <small className="footer__copy">Script Girls. Awesome profile-cards &copy; 2020 </small>
        <img className="footer__logo" src={footerLogo} title="Logo Adalab" alt="Logo Adalab" />
      </footer>
    );
  }
}

export default Footer;
