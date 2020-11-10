import React from 'react';
import '../../stylesheets/layout/Forms/_main-design.scss';

class Design extends React.Component {
  render() {
    return (
      /*  <section className="design"> */
      {/*  <div className="design__title js-collapsable-title">
          <div className="design__title--container">
            <i className="far fa-object-ungroup design-icon"></i>
            <h2 className="design__title--container--text">Diseña</h2>
          </div>
          <i className="fa fa-chevron-up design__title--arrow js-fa-chevron-up"></i>
        </div>
        */},
      < form className="design__form" action="" method="post" >
        <p className="design__form--label uppercase">Colores</p>

        <div className="design__container__options">
          <label htmlFor="cold" className="design__container__options__cold">
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
          <label htmlFor="warm" className="design__container__options__warm warm">
            <input id="warm" type="radio" name="palette" value="warm" className="js-inputWarm" />
            <div className="palette-warm">
              <span className="a js-paletteWarmA"></span>
              <span className="b js-paletteWarmB"></span>
              <span className="c js-paletteWarmC"></span>
            </div>
          </label>
          <label htmlFor="medium" className="design__container__options__medium">
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
      </form >
      /*     </section> */
    );
  }
}

export default Design;
