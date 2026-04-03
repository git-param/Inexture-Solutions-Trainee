import React from "react";
class Timer extends React.Component 
{
    state={count:0};
    
    componentDidMount() 
    {
        this.timer = setInterval(() => 
        {
            this.setState(prevState => ({ count: prevState.count + 1 }))
            console.log("Count in mount interval: ",this.state.count);
            // console.log("Running...");
        }, 1000);
    }

    componentWillUnmount() 
    {
        console.log("Count in unmount interval: ",this.state.count);
        // clearInterval(this.timer);
        // console.log("Cleaned up");
    }

    render() 
    {
        return(
            <>
                {console.log("Count in render: ",this.state.count)}
                <h3>Timer Active</h3>
            </>
        )
    }
}
export default Timer;