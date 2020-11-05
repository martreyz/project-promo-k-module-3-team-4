import React from "react";

class Input extends React.Component {
  render() {
    return (
      <>
        <label htmlFor={this.props.htmlFor} className="fill__form--label">
          {this.props.labelTitle}
        </label>
        <input
          className={this.props.classN}
          type={this.props.inputType}
          id={this.props.inputId}
          name={this.props.inputName}
          placeholder={this.props.inputPlaceholder}
          maxLength={this.props.inputMaxLenght}
        />
      </>
    );
  }
}

Input.defaultProps = {
  inputType: "text",
};

export default Input;
