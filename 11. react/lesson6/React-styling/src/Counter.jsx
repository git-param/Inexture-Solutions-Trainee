// import React, { useRef, useState } from "react";

// export default function Counter()
// {
//     const [count,setCount]=useState(0);
//     let value=useRef(0);

//     function handleClickForCount()
//     {
//         setCount(prev=>prev+1);
//         console.log(value.current);
//     }
//     function handleClickForRef()
//     {
//         console.log(++value.current);
//     }
//     return(
//         <>
//             <h1>Count: {count}</h1>
//             <h1>Ref: {value.current}</h1>
//             <button onClick={handleClickForCount}>Increment count</button>
//             <button onClick={handleClickForRef}>Increment Ref</button>
//             {/* {console.log(value=value+1)} */}
//         </>
//     )
// }



import React from 'react';
 
class Purecomponent extends React.Component
{
  constructor(props){
    super(props)
    this.state={count:0}
    this.counter=this.counter.bind(this);
  }
  counter(){
    console.log(this.state.count);
    this.setState({count: this.state.count+1})
  }
  render(){
    return(
        <>
        {console.log("render")}
        <h1>{this.state.count}</h1>
        <button onClick={this.counter}>click</button>
        </>
    )
  }
}
 
export default Purecomponent