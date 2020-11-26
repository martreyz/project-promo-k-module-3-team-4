import React from 'react';
import '../../stylesheets/layout/Forms/Share.scss';

class Share extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.state = {
      twitter: encodeURIComponent('He creado una tarjeta de visita gracias a las Skriptonitas'),
      clickable: false
    };
  }

  handleClick() {
    this.props.handleShareClick();
    this.setState((prevState) => {return {clickable : !this.state.clickable}});
  }

  // handleClick() {
  //   this.setState((prevState, props) => {
  //     let nextStyling;
  //     if (prevState.styling === 'info') {
  //       nextStyling = 'danger';
  //     } else {
  //       nextStyling = 'info';
  //     }

  //     return {
  //       styling: nextStyling
  //     };
  //   });
  // }

  render() {
    return (
      <div className="share__section js-share__section">
        <button
          className="share__button js__btn"
          //disabled={true}
          onClick={this.handleClick}
        >
          <i className="far fa-address-card share__button--icon"></i>
          <p className="share__button--text">Crear tarjeta</p>
        </button>
        <div className="share__finish js__share__finish js__finish-hidden">
          <h3 className="share__finish--title">
            {this.props.apiCardUrl ? (
              <>
                <p>La tarjeta ha sido creada: </p>
                <a href={this.props.apiCardUrl} title="card Link" rel="noreferrer" target="_blank">
                  {this.props.apiCardUrl}
                </a>
              </>
            ) : (
              this.props.apiError
            )}
          </h3>
          <p className="share__finish--text"></p>
          <a
            className="share__finish--anchor"
            href={`https://twitter.com/intent/tweet?text=${this.state.twitter}&url=${this.props.apiCardUrl}`}
            target="blank"
          >
            <i className="fab fa-twitter anchor-icon"></i>
            <p className="anchor-text">Compartir en twitter</p>
          </a>
        </div>
      </div>
    );
  }
}

export default Share;
