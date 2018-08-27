import React from "react";
import PropTypes from "prop-types";

import "../css/Period.css";

class Period extends React.Component {
  funcButtonPressed = () => {
    //this.props.hCl(this.props.name);
    this.props.hCl(this.props.id);
  };

  render() {
    const className = [
      "period-button",
      this.props.orange ? "orange" : "",
      this.props.wide ? "wide" : "",
    ];

    return (
      <div className={className.join(" ").trim()}>
        <div className="component">
          {this.props.name}
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
export default Period;
