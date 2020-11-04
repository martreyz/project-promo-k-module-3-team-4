import React from 'react';
import '../stylesheets/layout/_main-preview.scss';

class Preview extends React.Component {
  render() {
    return (
      <section className="preview">
        <div className="preview-button-div">
          <button className="preview__button js__btn-reset">
            <i className="far fa-trash-alt preview__button--trash"></i>
            <p className="preview__button--text">Reset</p>
          </button>
        </div>
        <div className="preview__card js-preview__card">
          <div className="preview__card--text js-preview__card--text">
            <h3 className="text-name js__preview-name js-text-name">Nombre Apellido</h3>
            <h4 className="text-work js__preview-job js-text-work">Front-end developer</h4>
          </div>
          <div className="profile__image preview__card--img js__profile-image"></div>
          <nav>
            <ul className="preview__card--nav">
              <li>
                <a href="/" className="icons js__preview-phone js-icons" target="blank">
                  <i className="fas fa-mobile-alt"></i>
                </a>
              </li>
              <li>
                <a href="/" className="icons js__preview-mail js-icons" target="blank">
                  <i className="far fa-envelope"></i>
                </a>
              </li>
              <li>
                <a href="/" className="icons js__preview-linkedin js-icons" target="blank">
                  <i className="fab fa-linkedin-in"></i>
                </a>
              </li>
              <li>
                <a href="/" className="icons js__preview-github js-icons" target="blank">
                  <i className="fab fa-github-alt"></i>
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </section>
    );
  }
}

export default Preview;
