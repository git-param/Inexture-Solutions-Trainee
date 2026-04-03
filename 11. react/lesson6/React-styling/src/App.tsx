import './App.css';
import CssModule from './css-module/css-module-demo1';
import InlineCssDemo1 from './inline-css/InlineCssDemo1';
import ErrorBoundary from './ErrorBoundary';
import BuggyComponent from './BuggyComponent';
import Purecomponent from './Counter';
function App() 
{
  return (
    <>
      {/* Module css */}
      {/* <CssModule/> */}

      {/* <br/><br/><br/> */}

      {/* Inline css  */}
       {/* <InlineCssDemo1/> */}

      {/* <br/><br/><br/> */}

      {/* <button className="bg-red-500 px-4 py-2 rounded"> */}
        {/* Tailwind demo button */}
      {/* </button> */}

      {/* <br/><br/><br/> */}
      
      {/* <ErrorBoundary> */}
        {/* <BuggyComponent /> */}
      {/* </ErrorBoundary> */}



      <Purecomponent/>

    </>
  )
}
export default App
