import React from "react";
import "../../stylesheets/layout/Forms/_main-design.scss";

class Palette extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(ev) {
    const value = ev.currentTarget.value;
    this.props.handleRadioClick(value);
  }

  render() {
    return (
      <label htmlFor={this.props.id} className={this.props.labelClassName}>
        <input
          type="radio"
          id={this.props.id}
          name="palette"
          value={this.props.value}
          onChange={this.handleChange}
          checked={this.props.checkedStatus}
          className={this.props.inputClassName}
        />
        <div className={this.props.containerClassName}>
          <span className={this.props.containerAClassName}></span>
          <span className={this.props.containerBClassName}></span>
          <span className={this.props.containerCClassName}></span>
        </div>
      </label>
    );
  }
}

export default Palette;
