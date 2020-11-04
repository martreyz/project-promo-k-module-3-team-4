import React from 'react';
import '../../stylesheets/layout/Forms/_avatar.scss';
import '../../stylesheets/layout/Forms/_main-fill.scss';

class Fill extends React.Component {
  render() {
    return (
      <section className="fill">
        <div className="fill__title js-collapsable-title">
          <div className="fill__title--container">
            <i className="far fa-keyboard keyboard"></i>
            <h2 className="container--text">Rellena</h2>
          </div>
          <i className="fas fa-chevron-up js-fa-chevron-up fill__title--arrow"></i>
        </div>
        <form className="fill__form js-fill__form" action="" method="post">
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
            <button className="action__upload-btn js__profile-trigger" type="button">
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
          <label htmlFor="phone" className="fill__form--label js__label-phone">
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
    );
  }
}

export default Fill;
