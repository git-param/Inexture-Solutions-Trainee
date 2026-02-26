import './App.css';
import React from 'react';

class App extends React.Component
{
    constructor()
    {
        super();
        this.state={count: 0, name:'Param'}
    }
    render()
    {
        return(
            <>
                {/* {console.log(this.state.count)} */}
                <h1>{this.state.count}</h1>
                <button onClick={() => {
                    this.setState(prev => ({ count: prev.count + 1 }));
                    }}>
                    Increment
                </button>
                {/* {console.log(this.state.count)} */}
            </>
        )
    }
}

export default App;