import React from 'react';
import '../../stylesheets/layout/Forms/Share.scss';

class Share extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.props.handleShareClick();
  }

  render() {
    return (
      <div className="share__section js-share__section">
        <button
          className="share__button js__btn"
          // disabled
          onClick={this.handleClick}
        >
          <i className="far fa-address-card share__button--icon"></i>
          <p className="share__button--text">Crear tarjeta</p>
        </button>
        <div className="share__finish js__share__finish js__finish-hidden">
          <h3 className="share__finish--title">La tarjeta ha sido creada:</h3>
          <p className="share__finish--text"></p>
          <a className="share__finish--anchor" href="/" target="blank">
            <i className="fab fa-twitter anchor-icon"></i>
            <p className="anchor-text">Compartir en twitter</p>
          </a>
        </div>
      </div>
    );
  }
}

export default Share;
