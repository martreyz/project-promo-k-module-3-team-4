import React from "react";
import "../../stylesheets/layout/Forms/_avatar.scss";
import "../../stylesheets/layout/Forms/_main-fill.scss";
import Input from "./Input";

class Fill extends React.Component {
  render() {
    return (
      {/* <section className="fill"> */ },
      {/* <div className="fill__title js-collapsable-title">
          <div className="fill__title--container">
            <i className="far fa-keyboard keyboard"></i>
            <h2 className="container--text">Rellena</h2>
          </div>
          <i className="fas fa-chevron-up js-fa-chevron-up fill__title--arrow"></i>
        </div>
         */},
      <form className="fill__form js-fill__form" action="" method="post">
        <Input
          htmlFor="name"
          labelTitle="Nombre Completo"
          inputID="name"
          inputName="name"
          inputPlaceholder="Ej: Sally Hill"
          inputMaxLenght={20}
          classN="fill__form--input js__form js-input-name"
        />
        <Input
          htmlFor="work"
          labelTitle="Puesto"
          inputID="work"
          inputName="job"
          inputPlaceholder="Ej: Front-end unicorn"
          inputMaxLenght={24}
          classN="fill__form--input js__form js-input-job"
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

        <Input
          htmlFor="email"
          labelTitle="Email"
          inputType="email"
          inputID="email"
          inputName="email"
          inputPlaceholder="Ej: sally-hill@gmail.com"
          classN="fill__form--input js__form js-input-mail"
        />
        <Input
          htmlFor="phone"
          labelTitle="Teléfono"
          inputType="tel"
          inputID="phone"
          inputName="phone"
          inputPlaceholder="Ej: 555-55-55-55"
          classN="fill__form--input js__form js-input-phone"
        />
        <Input
          htmlFor="linkedin"
          labelTitle="Linkedin"
          inputID="linkedin"
          inputName="linkedin"
          inputPlaceholder="Ej: linkedin.com/in/sally.hill"
          classN="fill__form--input js__form js-input-linkedin"
        />
        <Input
          htmlFor="github"
          labelTitle="Github"
          inputID="github"
          inputName="github"
          inputPlaceholder="Ej: @sally-hill"
          classN="fill__form--input js__form js-input-github"
        />
      </form>
      /*  </section> */
    );
  }
}

export default Fill;
