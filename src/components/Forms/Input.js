import React from 'react';
import PropTypes from 'prop-types';

class Input extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(ev) {
    const name = ev.currentTarget.name;
    const value = ev.currentTarget.value;
    this.props.handleInputChange(name, value);
  }

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
          value={this.props.name}
          onChange={this.handleChange}
        />
      </>
    );
  }
}

Input.defaultProps = {
  inputType: 'text',
};

Input.propTypes = {
  inputType: PropTypes.string,
  htmlFor: PropTypes.string.isRequired,
  labelTitle: PropTypes.string.isRequired,
  inputID: PropTypes.string.isRequired,
  inputName: PropTypes.string.isRequired,
  inputPlaceholder: PropTypes.string.isRequired,
  inputMaxLenght: PropTypes.number.isRequired,
  classN: PropTypes.string.isRequired,
};

export default Input;
