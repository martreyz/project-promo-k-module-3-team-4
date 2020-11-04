import React from 'react';
import Design from './Design';
import Fill from './Fill';
import Share from './Share';
import '../../stylesheets/layout/Forms/_js-collapsables.scss';
import '../../stylesheets/layout/Forms/_main-aplication.scss';

class Forms extends React.Component {
  render() {
    return (
      <section className="main-aplication__section">
        <Design />
        <Fill />
        <Share />
      </section>
    );
  }
}

export default Forms;
