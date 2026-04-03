import React from "react";

class Clock extends React.Component 
{
    constructor() 
    {
        super();
        this.state = { hour: 0, min: 0, sec: 0 };
    }

    componentDidMount() 
    {
        this.timer = setInterval(() => 
        {
            this.setState(prev => {
                let { hour, min, sec } = prev;
                sec++;
                if (sec === 60) 
                {
                    sec = 0;
                    min++;
                }
                if (min === 60) 
                {
                    min = 0;
                    hour++;
                }
                if (hour === 24) 
                {
                    hour = 0;
                }
                return { hour, min, sec };
            });
        }, 1000);
    }

    componentWillUnmount() 
    {
        clearInterval(this.timer);
    }

    render() {
        return (
        <>
            <h1>
            Time: {this.state.hour} :
            {this.state.min} :
            {this.state.sec}
            </h1>
        </>
        );
  }
}

export default Clock;