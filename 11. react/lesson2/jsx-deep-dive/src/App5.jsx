import './App.css'
// Que: Render array of numbers [1,2,3,4,5]
// Show only even numbers using map + condition

// function App() {
  
//   let arr=[1,2,3,4,5,6,7,8,9,10]
//   return (
//     <div>
//        {/* {arr.map((ele, idx) =>
//         ele % 2 === 0 ? (
//           <h1 key={idx} style={{ marginRight: "10px" }}>
//             {ele}
//           </h1>
//         ) : null
//       )} */}

//       {/* {arr.filter(ele =><h1>{ele % 2 === 0}</h1>)} */}

//       <h1>
//         {arr.filter(ele => ele % 2 === 0).join(" ")}
//       </h1>
//     </div>
//   );
// }



function App() {
  let arr = [1,2,3,4,5,6,7,8,9,10];
  let evenNumbers = [];

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
      evenNumbers.push(<h1 key={arr[i]}>{arr[i]}</h1>);
    }
  }

  return <div>{evenNumbers}</div>;
}

export default App
