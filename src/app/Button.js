import React from "react";
import PropTypes from "prop-types";

import "../css/Button.css";

class Button extends React.Component {

  constructor(props) {
    super(props);
    this.hoverOn = this.hoverOn.bind(this);
  }

  hoverOn = (event) => {
    this.props.hoverElement(
      this.props.id,
      this.props.symbol,
      this.props.name,
    );
  };

  render() {
    const className = [
      "component-button",
      this.props.white ? "white" : "",
      this.props.orange ? "orange" : "",
      this.props.yellow ? "yellow" : "",
      this.props.pink ? "pink" : "",
      this.props.cyan ? "cyan" : "",
      this.props.green ? "green" : "",
      this.props.blue ? "blue" : "",
      this.props.magenta ? "magenta" : "",
      this.props.gray ? "gray" : "",
      this.props.narrow ? "narrow" : "",
      this.props.wide ? "wide" : "",
    ];

    return (
      <div className={className.join(" ").trim()}>
        <div className="component" onMouseOver={this.hoverOn}>
          {this.props.symbol}
        </div>
      </div>
    );
  }
}
/*
Button.propTypes = {
  name: PropTypes.string,
  orange: PropTypes.bool,
  wide: PropTypes.bool,
  handMouseOver: PropTypes.func,
};
*/
export default Button;
