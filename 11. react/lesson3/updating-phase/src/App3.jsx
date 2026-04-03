import React from "react";

class App extends React.Component {
  constructor(props) {
    super(props);
    console.log("1----->constructor");

    this.state = {
      count: 0
    };
  }

  componentDidMount() {
    console.log("3----->componentDidMount");
  }

  shouldComponentUpdate() {
    console.log("4----->Not gonaa let you increase the count");
    return false;
  }

  componentDidUpdate() {
    console.log("6----->componentDidUpdate");
  }

  handleClick = () => {
    this.setState({ count: this.state.count + 1 });
    console.log(this.state.count);
  };

  render() 
  {
    console.log("2----->render");

    return (
      <div>
        <h2>Lifecycle Demo</h2>
        <p>Count: {this.state.count}</p>
        <button onClick={this.handleClick}>Increase</button>
      </div>
    );
  }
}

export default App;
