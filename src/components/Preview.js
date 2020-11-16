import React from 'react';
import Reset from './Reset';
import '../stylesheets/layout/_main-preview.scss';

class Preview extends React.Component {
  constructor(props) {
    super(props);
    this.changePalette = this.changePalette.bind(this);
    this.classPalette = '';
  }

  changePalette() {
    if (this.props.palette === 1) {
      this.classPalette = 'js-paletteCold';
    } else if (this.props.palette === 2) {
      this.classPalette = 'js-paletteWarm';
    } else if (this.props.palette === 3) {
      this.classPalette = 'js-paletteMedium';
    }
  }

  render() {
    this.changePalette();
    const pic = this.props.photo;
    return (
      <section className="preview">
        <div className="preview-button-div">
          <Reset handleReset={this.props.handleReset}></Reset>
        </div>
        <div className={'preview__card js-preview__card ' + this.classPalette}>
          <div className="preview__card--text js-preview__card--text">
            <h3 className="text-name js__preview-name js-text-name">
              {this.props.name || 'Sally Hill'}
            </h3>
            <h4 className="text-work js__preview-job js-text-work">
              {this.props.job || 'Front-end unicorn'}
            </h4>
          </div>
          <div
            style={{ backgroundImage: `url(${pic})` }}
            className="profile__image preview__card--img js__profile-image"
          ></div>
          <nav>
            <ul className="preview__card--nav">
              <li>
                <a
                  href={this.props.phone}
                  className="icons js__preview-phone js-icons"
                  target="blank"
                >
                  <i className="fas fa-mobile-alt"></i>
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${this.props.mail}`}
                  className="icons js__preview-mail js-icons"
                  target="blank"
                >
                  <i className="far fa-envelope"></i>
                </a>
              </li>
              <li>
                <a
                  href={this.props.linkedin}
                  className="icons js__preview-linkedin js-icons"
                  target="blank"
                >
                  <i className="fab fa-linkedin-in"></i>
                </a>
              </li>
              <li>
                <a
                  href={this.props.github}
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
    );
  }
}

export default Preview;
