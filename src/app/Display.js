import React from "react";
import PropTypes from "prop-types";

import "../css/Display.css";

class Display extends React.Component {
  render() {
    return (
      <div className="component-display">
        <div className="display">
          {this.props.number}
          {" "}
          {this.props.element}
          {" "}
          {this.props.division}
        </div>
      </div>
    );
  }
}
/*
Display.propTypes = {
  value: PropTypes.string,
};
*/
export default Display;
