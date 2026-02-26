import React from "react";
class Timer extends React.Component 
{
    componentDidMount() 
    {
        this.timer = setInterval(() => 
        {
            console.log("Running...");
        }, 1000);
    }

    componentWillUnmount() 
    {
        // clearInterval(this.timer);
        // console.log("Cleaned up");
    }

    render() 
    {
        return(
            <>
                <h3>Timer Active</h3>
            </>
        )
    }
}
export default Timer;