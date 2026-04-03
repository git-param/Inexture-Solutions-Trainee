import React from "react";
import User from "./components/user";

class App extends React.Component {
  render() {
    return (
      <div>
        <h1>Parent Component</h1>
        <User name="Param" age={22} />
      </div>
    );
  }
}

export default App;
