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
  }

  // validateCreateBtn () {
  //   const {name, job, photoMin, mail, linkedin, phone, github} = this.props;
  //   let response = false;
  //   if(name.length !== 0 && job.length !== 0 && photoMin.length !== 0 && mail.length !== 0 && linkedin.length !== 0 && phone.length !== 0 && github.length !==0) {
  //     response = true;
  //     console.log("hola")
  //   }
  //   this.setState(( prevState) => ({
  //     clickable : [prevState.clickable = response]
  //   }))

  // }
  componentDidUpdate(){ 
    const {name, job, photoMin, mail, linkedin, phone, github} = this.props;
    let response = false;
    if(name.length !== 0 && job.length !== 0 && photoMin.length !== 0 && mail.length !== 0 && linkedin.length !== 0 && phone.length !== 0 && github.length !==0) {
      response = true;
      console.log("hola")
    }
    this.setState(( prevState) => ({
      clickable : [prevState.clickable = response]
    }))
  }
  
  
  render() {
    return (
      <div className="share__section js-share__section">
        <button
          className={this.state.clickable ? "js-button-create": "share__button js__btn"}
          disabled={this.state.clickable}
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
