import React from "react";
import ButtonPanel from "./ButtonPanel";

import "../css/App.css"

class App extends React.Component {

  constructor(props) {
    super(props);
    this.elementChooser = this.elementChooser.bind(this);
    this.state = {
      number: null,
      element: null,
      name: null,
    };
  }

  elementChooser(number,element,name) {
    this.setState({
      number: number,
      element: element,
      name: name,
    });
  };

  render() {
    // <Display value={this.state.element || "1"}/>
    return (
      <div className="app">
      <ButtonPanel
        number={this.state.number || ""}
        element={this.state.element || ""}
        name={this.state.name || ""}
        handElement={this.elementChooser}
      />
      </div>
    );
  }
}

export default App;