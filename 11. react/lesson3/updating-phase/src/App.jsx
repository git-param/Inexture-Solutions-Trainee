import React from "react";
import './App.css';
class Child extends React.Component 
{
    constructor()
    {
        super();
        console.log("child constructor");
    }
    componentDidMount() 
    {
        console.log("Child Mounted");
    }

    componentWillUnmount() 
    {
        console.log("Child Unmounted");
    }

    render() 
    {
        console.log('render method. child');
        return <h3>I am Child</h3>;
    }
}

class App extends React.Component 
{
    // constructor()
    // {
    //     super();
    //     this.toggle=this.toggle.bind(this);
    // }
    state = { show: true };

    toggle()
    {
        this.setState({ show: !this.state.show });
    };

    render() 
    {
        return (
        <div>
            <button onClick={()=>this.toggle()}>Toggle</button>
            {this.state.show && <Child />}
        </div>
        );
    }
}

export default App;
