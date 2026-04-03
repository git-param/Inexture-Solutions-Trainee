// 🧠 Practice Question — Props Only

// Problem: Student Profile Card
// Create two components:

// 1️⃣ StudentCard.jsx

// It should:
// Receive the following props:
// name
// age
// course
// isEnrolled (boolean)

// Display:
// Name: Param
// Age: 22
// Course: React
// Status: Enrolled

// If isEnrolled is false, show:
// Status: Not Enrolled

// You must:
// Use destructuring
// Use conditional rendering (ternary)
// Return a single root element

// 2️⃣ App.jsx

// In App.jsx:
// Import StudentCard
// Render it three times
// Pass different values each time

// Example expected usage:
// <StudentCard 
//   name="Param" 
//   age={22} 
//   course="React" 
//   isEnrolled={true} 
// />

// 🧩 Bonus Challenge (Optional)

// Add one more prop:
// grade
// If grade is:
// "A" → show "Excellent"
// "B" → show "Good"
// anything else → show "Average"

// Rules
// No state
// No hooks
// Only props
// Functional components only
// Keep components in separate files

import StudentCard from "./components/StudentCard";
import './App.css' 
function App()
{
    return(
        <>
            <StudentCard name='Param' age={22} course='AIML' isEnrolled={true} grade="A"/>
            <StudentCard name='Chirag' age={21} course='Mern' isEnrolled={true} grade="B"/>
            <StudentCard name='Vinay' age={21} course='Java' isEnrolled={true} grade="Z"/>
        </>
    )
}
export default App;