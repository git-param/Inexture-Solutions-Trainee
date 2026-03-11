const BuggyComponent: React.FC =()=>
{
    throw new Error("Crash for error boundary demo");
}

export default BuggyComponent;