import React from "react";

class User7 extends React.Component
{
    constructor(props)
    {
        super(props);
        this.state={ count: props.count }
    }
    render()
    {
        const {count}=this.state;
        return(
            <>
                <h1>{count}</h1>
                <button onClick={()=>{
                    this.setState({count: count+1});
                }}>Increment</button>
            </>
        )
    }
}

export default User7;