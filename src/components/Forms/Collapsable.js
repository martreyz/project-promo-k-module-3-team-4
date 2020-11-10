import React, { useLayoutEffect } from "react";

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
    console.log(this.state.isClosed);
  }
  render() {
    const openClassName = this.state.isClosed ? "js-design__form" : "";
    return (
      //"share js-share"
      <section className="borderContainer">
        <div
          className="collapsable__title js-collapsable-title"
          onClick={this.handleClick}
        >
          <div className="collapsable__title--container">
            <i className="fas fa-share-alt container-share"></i>
            <h2 className="container-text">{this.props.name}</h2>
          </div>
          <i className="fas fa-chevron-up js-fa-chevron-up collapsable__title--arrow"></i>
        </div>
        <div className={openClassName}>{this.props.children}</div>
      </section>
    );
  }
}

export default Collapsable;
