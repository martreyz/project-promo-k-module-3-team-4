import React from 'react';
import Palette from './Palette';
import '../../stylesheets/layout/Forms/Design.scss';

class Design extends React.Component {
  render() {
    return (
      <form className="design__form" action="" method="post">
        <p className="design__form--label uppercase">Colores</p>
        <div className="design__container__options">
          <Palette
            id="cold"
            labelClassName="design__container__options__cold"
            value="cold"
            handleRadioClick={this.props.handleRadioClick}
            inputClassName="js-inputCold"
            containerClassName="palette-cold"
            containerAClassName="a js-paletteColdA"
            containerBClassName="b js-paletteColdB"
            containerCClassName="c js-paletteColdC"
            checkedStatus={this.props.palette === 1 ? true : false}
          />
          <Palette
            id="warm"
            labelClassName="design__container__options__warm warm"
            value="warm"
            handleRadioClick={this.props.handleRadioClick}
            inputClassName="js-inputWarm"
            containerClassName="palette-warm"
            containerAClassName="a js-paletteWarmA"
            containerBClassName="b js-paletteWarmB"
            containerCClassName="c js-paletteWarmC"
            checkedStatus={this.props.palette === 2 ? true : false}
          />
          <Palette
            id="medium"
            labelClassName="design__container__options__medium"
            value="medium"
            handleRadioClick={this.props.handleRadioClick}
            inputClassName="js-inputMedium"
            containerClassName="palette-medium"
            containerAClassName="a js-palette-mediumA"
            containerBClassName="b js-palette-mediumB"
            containerCClassName="c js-palette-mediumC"
            checkedStatus={this.props.palette === 3 ? true : false}
          />
        </div>
      </form>
    );
  }
}

export default Design;
