import React from "react";
import Preview from "./Preview";
import Forms from "./Forms/Forms";


class Card extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <>
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
          name={this.props.name}
          job={this.props.job}
          photo={this.props.photo}
          phone={this.props.phone}
          linkedin={this.props.linkedin}
          github={this.props.github}
          mail={this.props.mail}
          palette={this.props.palette}
          photoMin={this.props.photoMin}
        />
      </>
    )
  }
}
export default Card;