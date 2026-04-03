import React from "react";
import './App.css'
class App extends React.Component {
  constructor() {
    super();
    this.state = { count: 0 };
    // this.increment=this.increment.bind(this);
  }

  increment() 
  {
    this.setState({ count: this.state.count + 1 });
  }

  render() 
  {
    return(
      <>
        <h1>{ this.state.count}</h1>
        <button onClick={()=>this.increment()}>+</button>
      </>
    )
  }
}

export default App;