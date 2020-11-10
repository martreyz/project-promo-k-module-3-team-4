import React from "react";
import Design from "./Design";
import Fill from "./Fill";
import Share from "./Share";
import "../../stylesheets/layout/Forms/_js-collapsables.scss";
import "../../stylesheets/layout/Forms/_main-aplication.scss";
import Collapsable from "./Collapsable";

class Forms extends React.Component {
  render() {
    return (
      <section className="main-aplication__section">
        <Collapsable name="Diseña">
          <Design />
        </Collapsable>
        <Collapsable name="Rellena">
          <Fill />
        </Collapsable>
        <Collapsable name="Comparte">
          <Share />
        </Collapsable>
      </section>
    );
  }
}

export default Forms;
