import React from 'react';
import footerLogo from '../images/logo-adalab.png';
import '../stylesheets/App.scss';
import Header from "./Header";

class App extends React.Component {
  // constructor(props) {
  //   super(props);
  // }

  render() {
    return (
      <>
        <Header />
        <main className="main-aplication">
          <section className="preview">
            <div className="preview-button-div">
              <button className="preview__button js__btn-reset">
                <i className="far fa-trash-alt preview__button--trash"></i>
                <p className="preview__button--text">Reset</p>
              </button>
            </div>
            <div className="preview__card js-preview__card">
              <div className="preview__card--text js-preview__card--text">
                <h3 className="text-name js__preview-name js-text-name">
                  Nombre Apellido
                </h3>
                <h4 className="text-work js__preview-job js-text-work">
                  Front-end developer
                </h4>
              </div>
              <div className="profile__image preview__card--img js__profile-image"></div>
              <nav>
                <ul className="preview__card--nav">
                  <li>
                    <a
                      href="/"
                      className="icons js__preview-phone js-icons"
                      target="blank"
                    >
                      <i className="fas fa-mobile-alt"></i>
                    </a>
                  </li>
                  <li>
                    <a
                      href="/"
                      className="icons js__preview-mail js-icons"
                      target="blank"
                    >
                      <i className="far fa-envelope"></i>
                    </a>
                  </li>
                  <li>
                    <a
                      href="/"
                      className="icons js__preview-linkedin js-icons"
                      target="blank"
                    >
                      <i className="fab fa-linkedin-in"></i>
                    </a>
                  </li>
                  <li>
                    <a
                      href="/"
                      className="icons js__preview-github js-icons"
                      target="blank"
                    >
                      <i className="fab fa-github-alt"></i>
                    </a>
                  </li>
                </ul>
              </nav>
            </div>
          </section>
          <section className="main-aplication__section">
            <section className="design">
              <div className="design__title js-collapsable-title">
                <div className="design__title--container">
                  <i className="far fa-object-ungroup design-icon"></i>
                  <h2 className="design__title--container--text">Diseña</h2>
                </div>
                <i className="fa fa-chevron-up design__title--arrow js-fa-chevron-up"></i>
              </div>
              <form
                className="design__form js-design__form"
                action=""
                method="post"
              >
                <p className="design__form--label uppercase">Colores</p>

                <div className="design__container__options">
                  <label
                    htmlFor="cold"
                    className="design__container__options__cold"
                  >
                    <input
                      type="radio"
                      id="cold"
                      name="palette"
                      value="cold"
                      checked
                      className="js-inputCold"
                    />
                    <div className="palette-cold">
                      <span className="a js-paletteColdA"></span>
                      <span className="b js-paletteColdB"></span>
                      <span className="c js-paletteColdC"></span>
                    </div>
                  </label>
                  <label
                    htmlFor="warm"
                    className="design__container__options__warm warm"
                  >
                    <input
                      id="warm"
                      type="radio"
                      name="palette"
                      value="warm"
                      className="js-inputWarm"
                    />
                    <div className="palette-warm">
                      <span className="a js-paletteWarmA"></span>
                      <span className="b js-paletteWarmB"></span>
                      <span className="c js-paletteWarmC"></span>
                    </div>
                  </label>
                  <label
                    htmlFor="medium"
                    className="design__container__options__medium"
                  >
                    <input
                      id="medium"
                      type="radio"
                      name="palette"
                      value="medium"
                      className="js-inputMedium"
                    />
                    <div className="palette-medium">
                      <span className="a js-palette-mediumA"></span>
                      <span className="b js-palette-mediumB"></span>
                      <span className="c js-palette-mediumC"></span>
                    </div>
                  </label>
                </div>
              </form>
            </section>
            <section className="fill">
              <div className="fill__title js-collapsable-title">
                <div className="fill__title--container">
                  <i className="far fa-keyboard keyboard"></i>
                  <h2 className="container--text">Rellena</h2>
                </div>
                <i className="fas fa-chevron-up js-fa-chevron-up fill__title--arrow"></i>
              </div>
              <form
                className="fill__form js-fill__form"
                action=""
                method="post"
              >
                <label htmlFor="name" className="fill__form--label">
                  Nombre completo
                </label>
                <input
                  className="fill__form--input js__form js-input-name"
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Ej: Sally Hill"
                  maxlength="20"
                />
                <label htmlFor="work" className="fill__form--label">
                  Puesto
                </label>
                <input
                  className="fill__form--input js__form js-input-job"
                  type="text"
                  id="work"
                  name="job"
                  placeholder="Ej: Front-end unicorn"
                  maxlength="24"
                />
                <label htmlFor="img" className="fill__form--label">
                  Imagen de perfil
                </label>

                <div className="action">
                  <button
                    className="action__upload-btn js__profile-trigger"
                    type="button"
                  >
                    Añadir imagen
                  </button>
                  <input
                    type="file"
                    name=""
                    id="img-selector"
                    className="action__hiddenField js__profile-upload-btn"
                  />

                  <div className="profile__preview js__profile-preview"></div>
                </div>

                <label htmlFor="email" className="fill__form--label">
                  Email
                </label>
                <input
                  className="fill__form--input js__form js-input-mail"
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Ej: sally-hill@gmail.com"
                />
                <label
                  htmlFor="phone"
                  className="fill__form--label js__label-phone"
                >
                  Teléfono
                </label>
                <input
                  className="fill__form--input js__form js-input-phone"
                  type="tel"
                  id="phone"
                  name="phone"
                  placeholder="Ej: 555-55-55-55"
                />
                <label htmlFor="linkedin" className="fill__form--label">
                  Linkedin
                </label>
                <input
                  className="fill__form--input js__form js-input-linkedin"
                  type="text"
                  id="linkedin"
                  name="linkedin"
                  placeholder="Ej: linkedin.com/in/sally.hill"
                />
                <label htmlFor="github" className="fill__form--label">
                  Github
                </label>
                <input
                  className="fill__form--input js__form js-input-github"
                  type="text"
                  id="github"
                  name="github"
                  placeholder="Ej: @sally-hill"
                />
              </form>
            </section>
            <section className="share js-share">
              <div className="share__title js-collapsable-title">
                <div className="share__title--container">
                  <i className="fas fa-share-alt container-share"></i>
                  <h2 className="container-text">Comparte</h2>
                </div>
                <i className="fas fa-chevron-up js-fa-chevron-up share__title--arrow"></i>
              </div>
              <div className="share__section js-share__section">
                <button className="share__button js__btn" disabled>
                  <i className="far fa-address-card share__button--icon"></i>
                  <p className="share__button--text">Crear tarjeta</p>
                </button>
                <div className="share__finish js__share__finish js__finish-hidden">
                  <h3 className="share__finish--title">
                    La tarjeta ha sido creada:
                  </h3>
                  <p className="share__finish--text"></p>
                  <a className="share__finish--anchor" href="/" target="blank">
                    <i className="fab fa-twitter anchor-icon"></i>
                    <p className="anchor-text">Compartir en twitter</p>
                  </a>
                </div>
              </div>
            </section>
          </section>
        </main>
        <footer className="footer">
          <small className="footer__copy">
            Script Girls. Awesome profile-cards &copy; 2020{' '}
          </small>
          <img
            className="footer__logo"
            src={footerLogo}
            title="Logo Adalab"
            alt="Logo Adalab"
          />
        </footer>
      </>
    );
  }
}

export default App;
