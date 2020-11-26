import React from 'react';
import Preview from './Preview';
import Forms from './Forms/Forms';

class Card extends React.Component {
  render() {
    return (
      <main className="main-aplication">
        <Preview
          handleReset={this.props.handleReset}
          name={this.props.name}
          job={this.props.job}
          photo={this.props.photo}
          phone={this.props.phone}
          linkedin={this.props.linkedin}
          github={this.props.github}
          mail={this.props.mail}
          palette={this.props.palette}
        />
        <Forms
          handleInputChange={this.props.handleInputChange}
          handleRadioClick={this.props.handleRadioClick}
          handleShareClick={this.props.handleShareClick}
          name={this.props.name}
          job={this.props.job}
          photo={this.props.photo}
          phone={this.props.phone}
          linkedin={this.props.linkedin}
          github={this.props.github}
          mail={this.props.mail}
          palette={this.props.palette}
          photoMin={this.props.photoMin}
          apiSuccess={this.props.apiSuccess}
          apiCardUrl={this.props.apiCardUrl}
          apiError={this.props.apiError}
          isClickable={this.props.isClickable}
        />
      </main>
    );
  }
}

export default Card;
