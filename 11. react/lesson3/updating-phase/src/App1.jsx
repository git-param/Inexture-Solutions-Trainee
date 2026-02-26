import React from "react";

class App extends React.Component 
{
    constructor(props) 
    {
      super(props);
      console.log("1----->constructor");
    }

    componentDidMount() 
    {
      console.log("3----->componentDidMount");
    }

    render() 
    {
      console.log("2----->render");

      return (
        <div>
          <h2>Lifecycle Demo-Mounting</h2>
        </div>
      );
    }
}

export default App;