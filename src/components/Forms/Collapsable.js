import React from 'react';
import '../../stylesheets/layout/Forms/Collapsable.scss';

class Collapsable extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.state = {
      isClosed: true,
    };
  }

  handleClick() {
    this.setState({
      isClosed: !this.state.isClosed,
    });
  }

  render() {
    const openClassName = this.state.isClosed ? 'js-collapsable__form' : '';
    const arrowClassName = this.state.isClosed ? 'js-fa-chevron-up' : '';
    return (
      <section className="collapsable">
        <div
          className="collapsable__title js-collapsable-title"
          onClick={this.handleClick}
        >
          <div className="collapsable__title--container">
            <i className={this.props.icon}></i>
            <h2 className="container-text">{this.props.name}</h2>
          </div>
          <i
            className={`fas fa-chevron-up ${arrowClassName} collapsable__title--arrow`}
          ></i>
        </div>
        <div className={openClassName}>{this.props.children}</div>
      </section>
    );
  }
}

export default Collapsable;
