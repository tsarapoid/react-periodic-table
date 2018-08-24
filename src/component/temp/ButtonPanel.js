import Button from "./Button";
import React from "react";
import PropTypes from "prop-types";
import "./ButtonPanel.css";

class ButtonPanel extends React.Component {
  funcHandleClicker = onElementHover => {
    this.props.handElementChooser(onElementHover);
  };

  render() {
    return (
      <div className="component-button-panel">
        <div>
          <Button id = "1" name="AC" handElementHover={this.funcHandleClicker} />
          <Button id = "2" name="+/-" handElementHover={this.funcHandleClicker} />
          <Button id = "3" name="%" handElementHover={this.funcHandleClicker} />
          <Button id = "4" name="÷" handElementHover={this.funcHandleClicker} orange />
        </div>
        <div>
          <Button id = "5" name="7" handElementHover={this.funcHandleClicker} />
          <Button id = "6" name="8" handElementHover={this.funcHandleClicker} />
          <Button id = "7" name="9" handElementHover={this.funcHandleClicker} />
          <Button id = "8" name="x" handElementHover={this.funcHandleClicker} orange />
        </div>
        <div>
          <Button id = "9" name="4" handElementHover={this.funcHandleClicker} />
          <Button id = "10" name="5" handElementHover={this.funcHandleClicker} />
          <Button id = "11" name="6" handElementHover={this.funcHandleClicker} />
          <Button id = "12" name="-" handElementHover={this.funcHandleClicker} orange />
        </div>
        <div>
          <Button id = "13" name="1" handElementHover={this.funcHandleClicker} />
          <Button id = "14" name="2" handElementHover={this.funcHandleClicker} />
          <Button id = "15" name="3" handElementHover={this.funcHandleClicker} />
          <Button id = "16" name="+" handElementHover={this.funcHandleClicker} orange />
        </div>
        <div>
          <Button id = "17" name="0" handElementHover={this.funcHandleClicker} orange wide />
          <Button id = "18" name="." handElementHover={this.funcHandleClicker} />
          <Button id = "19" name="=" handElementHover={this.funcHandleClicker} orange />
        </div>
      </div>
    );
  }
}
/*
ButtonPanel.propTypes = {
  handElementHover: PropTypes.func,
};
*/
export default ButtonPanel;