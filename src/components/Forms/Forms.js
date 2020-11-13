import React from 'react';
import Design from './Design';
import Fill from './Fill';
import Share from './Share';
import '../../stylesheets/layout/Forms/_js-collapsables.scss';
import '../../stylesheets/layout/Forms/_main-aplication.scss';
import Collapsable from './Collapsable';

class Forms extends React.Component {
  render() {
    return (
      <section className="main-aplication__section">
        <Collapsable
          name="Diseña"
          icon="fas fa-object-ungroup container-collapsable"
        >
          <Design
            handleRadioClick={this.props.handleRadioClick}
            palette={this.props.palette}
          />
        </Collapsable>
        <Collapsable
          name="Rellena"
          icon="far fa-keyboard container-collapsable"
        >
          <Fill
            handleInputChange={this.props.handleInputChange}
            name={this.props.name}
            job={this.props.job}
            photo={this.props.photo}
            phone={this.props.phone}
            linkedin={this.props.linkedin}
            github={this.props.github}
            mail={this.props.mail}
          />
        </Collapsable>
        <Collapsable
          name="Comparte"
          icon="fas fa-share-alt container-collapsable"
        >
          <Share />
        </Collapsable>
      </section>
    );
  }
}

export default Forms;
