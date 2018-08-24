import React from "react";
import ButtonPanel from "./ButtonPanel";

import "./App.css"

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      number: null,
      element: null,
    };
  }

  elementChooser = (number, element) => {
    this.setState({
      number: number,
      element: element,
    });
  };

  render() {
    // <Display value={this.state.element || "1"}/>
    return (
      <div className="app">
      <ButtonPanel
        number={this.state.number || ""}
        element={this.state.element || ""}
        handElement={this.elementChooser}
      />
      </div>
    );
  }
}

export default App;