import React from 'react';

function Reset(props) {
  const handleReset = () => {
    props.handleReset();
  };
  return (
    <button className="preview__button js__btn-reset" onClick={handleReset}>
      <i className="far fa-trash-alt preview__button--trash"></i>
      <p className="preview__button--text">Reset</p>
    </button>
  );
}

export default Reset;
